#include "pango/pango-font.h"
#include "pango/pango-layout.h"
#include "pango/pango-types.h"
#include "pango/pangofc-fontmap.h"
#include <fontconfig/fontconfig.h>
#include <cairo.h>
#include <math.h>
#include <pango/pangocairo.h>
#include <stdio.h>
#include <QColor>
#include <QColorSpace>

/* clang (pkg-config pangocairo cairo fontconfig Qt6Gui --cflags --libs | str:fields) generate_preview.c */

#define IMAGE_WIDTH  1200
#define IMAGE_HEIGHT 630
#define FOOTER_HEIGHT (630/5)

#define iFont 1
#define iName 2
#define iDesigner 3
#define iUcsur 4
#define iOut 5

#define UCSUR "󱤀󱤁󱤂󱤃󱤄󱤅󱤆󱤇󱤈󱤉󱤊󱤋󱤌󱤍󱤎󱤏󱤐󱤑󱤒󱤓󱤔󱤕󱤖󱤗󱤘󱤙󱤚󱤛󱤜󱤝󱤞󱤟󱤠󱤡󱤢󱤣󱤤󱤥󱤦󱤧󱤨󱤩󱤪󱤫󱤬󱤭󱤮󱤯󱤰󱤱󱤲󱤳󱤴󱤵󱤶󱤷󱤸󱤹󱤺󱤻󱤼󱤽󱤾󱤿󱥀󱥁󱥂󱥃󱥄󱥅󱥆󱥇󱥈󱥉󱥊󱥋󱥌󱥍󱥎󱥏󱥐󱥑󱥒󱥓󱥔󱥕󱥖󱥗󱥘󱥙󱥚󱥛󱥜󱥝󱥞󱥟󱥠󱥡󱥢󱥣󱥤󱥥󱥦󱥧󱥨󱥩󱥪󱥫󱥬󱥭󱥮󱥯󱥰󱥱󱥲󱥳󱥴󱥵󱥶󱥷"
#define ASUKI "a akesi ala alasa ale anpa ante anu awen e en esun ijo ike ilo insa jaki jan jelo jo kala kalama kama kasi ken kepeken kili kiwen ko kon kule kulupu kute la lape laso lawa len lete li lili linja lipu loje lon luka lukin lupa ma mama mani meli mi mije moku moli monsi mu mun musi mute nanpa nasa nasin nena ni nimi noka o olin ona open pakala pali palisa pan pana pi pilin pimeja pini pipi poka poki pona pu sama seli selo seme sewi sijelo sike sin sina sinpin sitelen sona soweli suli suno supa suwi tan taso tawa telo tenpo toki tomo tu unpa uta utala walo wan waso wawa weka wile"

struct HSV { float h; float s; float v; };
struct RGB { float r; float g; float b; };
struct HSL { float h; float s; float l; };
struct LAB { float L; float a; float b; };
struct LC { float L; float C; };

// Alternative representation of (L_cusp, C_cusp)
// Encoded so S = C_cusp/L_cusp and T = C_cusp/(1-L_cusp) 
// The maximum value for C in the triangle is then found as fmin(S*L, T*(1-L)), for a given L
struct ST { float S; float T; };

// toe function for L_r
float toe(float x)
{
	constexpr float k_1 = 0.206f;
	constexpr float k_2 = 0.03f;
	constexpr float k_3 = (1.f + k_1) / (1.f + k_2);
	return 0.5f * (k_3 * x - k_1 + sqrtf((k_3 * x - k_1) * (k_3 * x - k_1) + 4 * k_2 * k_3 * x));
}

// inverse toe function for L_r
float toe_inv(float x)
{
	constexpr float k_1 = 0.206f;
	constexpr float k_2 = 0.03f;
	constexpr float k_3 = (1.f + k_1) / (1.f + k_2);
	return (x * x + k_1 * x) / (k_3 * (x + k_2));
}

ST to_ST(LC cusp)
{
	float L = cusp.L;
	float C = cusp.C;
	return { C / L, C / (1 - L) };
}

constexpr double pi = M_PI;

RGB oklab_to_linear_srgb(LAB c)
{
    float l_ = c.L + 0.3963377774f * c.a + 0.2158037573f * c.b;
    float m_ = c.L - 0.1055613458f * c.a - 0.0638541728f * c.b;
    float s_ = c.L - 0.0894841775f * c.a - 1.2914855480f * c.b;

    float l = l_*l_*l_;
    float m = m_*m_*m_;
    float s = s_*s_*s_;

    return {
		+4.0767416621f * l - 3.3077115913f * m + 0.2309699292f * s,
		-1.2684380046f * l + 2.6097574011f * m - 0.3413193965f * s,
		-0.0041960863f * l - 0.7034186147f * m + 1.7076147010f * s,
    };
}

float compute_max_saturation(float a, float b)
{
    // Max saturation will be when one of r, g or b goes below zero.

    // Select different coefficients depending on which component goes below zero first
    float k0, k1, k2, k3, k4, wl, wm, ws;

    if (-1.88170328f * a - 0.80936493f * b > 1)
    {
        // Red component
        k0 = +1.19086277f; k1 = +1.76576728f; k2 = +0.59662641f; k3 = +0.75515197f; k4 = +0.56771245f;
        wl = +4.0767416621f; wm = -3.3077115913f; ws = +0.2309699292f;
    }
    else if (1.81444104f * a - 1.19445276f * b > 1)
    {
        // Green component
        k0 = +0.73956515f; k1 = -0.45954404f; k2 = +0.08285427f; k3 = +0.12541070f; k4 = +0.14503204f;
        wl = -1.2684380046f; wm = +2.6097574011f; ws = -0.3413193965f;
    }
    else
    {
        // Blue component
        k0 = +1.35733652f; k1 = -0.00915799f; k2 = -1.15130210f; k3 = -0.50559606f; k4 = +0.00692167f;
        wl = -0.0041960863f; wm = -0.7034186147f; ws = +1.7076147010f;
    }

    // Approximate max saturation using a polynomial:
    float S = k0 + k1 * a + k2 * b + k3 * a * a + k4 * a * b;

    // Do one step Halley's method to get closer
    // this gives an error less than 10e6, except for some blue hues where the dS/dh is close to infinite
    // this should be sufficient for most applications, otherwise do two/three steps 

    float k_l = +0.3963377774f * a + 0.2158037573f * b;
    float k_m = -0.1055613458f * a - 0.0638541728f * b;
    float k_s = -0.0894841775f * a - 1.2914855480f * b;

    {
        float l_ = 1.f + S * k_l;
        float m_ = 1.f + S * k_m;
        float s_ = 1.f + S * k_s;

        float l = l_ * l_ * l_;
        float m = m_ * m_ * m_;
        float s = s_ * s_ * s_;

        float l_dS = 3.f * k_l * l_ * l_;
        float m_dS = 3.f * k_m * m_ * m_;
        float s_dS = 3.f * k_s * s_ * s_;

        float l_dS2 = 6.f * k_l * k_l * l_;
        float m_dS2 = 6.f * k_m * k_m * m_;
        float s_dS2 = 6.f * k_s * k_s * s_;

        float f  = wl * l     + wm * m     + ws * s;
        float f1 = wl * l_dS  + wm * m_dS  + ws * s_dS;
        float f2 = wl * l_dS2 + wm * m_dS2 + ws * s_dS2;

        S = S - f * f1 / (f1*f1 - 0.5f * f * f2);
    }

    return S;
}

LC find_cusp(float a, float b)
{
	// First, find the maximum saturation (saturation S = C/L)
	float S_cusp = compute_max_saturation(a, b);

	// Convert to linear sRGB to find the first point where at least one of r,g or b >= 1:
	RGB rgb_at_max = oklab_to_linear_srgb({ 1, S_cusp * a, S_cusp * b });
	float L_cusp = cbrtf(1.f / fmax(fmax(rgb_at_max.r, rgb_at_max.g), rgb_at_max.b));
	float C_cusp = L_cusp * S_cusp;

	return { L_cusp , C_cusp };
}

RGB okhsv_to_srgb(HSV hsv)
{
	float h = hsv.h;
	float s = hsv.s;
	float v = hsv.v;

	float a_ = cosf(2.f * pi * h);
	float b_ = sinf(2.f * pi * h);

	LC cusp = find_cusp(a_, b_);
	ST ST_max = to_ST(cusp);
	float S_max = ST_max.S;
	float T_max = ST_max.T;
	float S_0 = 0.5f;
	float k = 1 - S_0 / S_max;

	// first we compute L and V as if the gamut is a perfect triangle:

	// L, C when v==1:
	float L_v = 1     - s * S_0 / (S_0 + T_max - T_max * k * s);
	float C_v = s * T_max * S_0 / (S_0 + T_max - T_max * k * s);

	float L = v * L_v;
	float C = v * C_v;

	// then we compensate for both toe and the curved top part of the triangle:
	float L_vt = toe_inv(L_v);
	float C_vt = C_v * L_vt / L_v;

	float L_new = toe_inv(L);
	C = C * L_new / L;
	L = L_new;

	RGB rgb_scale = oklab_to_linear_srgb({ L_vt, a_ * C_vt, b_ * C_vt });
	float scale_L = cbrtf(1.f / fmax(fmax(rgb_scale.r, rgb_scale.g), fmax(rgb_scale.b, 0.f)));

	L = L * scale_L;
	C = C * scale_L;

	RGB rgb = oklab_to_linear_srgb({ L, C * a_, C * b_ });
	return rgb;
}

auto toLinearSRGB = QColorSpace(QColorSpace::SRgb).transformationToColorSpace(QColorSpace::SRgbLinear);
auto fromLinearSRGB = QColorSpace(QColorSpace::SRgbLinear).transformationToColorSpace(QColorSpace::SRgb);

uint32_t MurmurOAAT32 (const char *key)
{
	uint32_t h = 3323198485ul;
	for (; *key; ++key) {
		h ^= *key;
		h *= 0x5bd1e995;
		h ^= h >> 15;
	}
	return h;
}

struct RGB generateColor(const char *name)
{
	GRand *rand = g_rand_new_with_seed(MurmurOAAT32(name));

	float H = g_rand_double(rand);
	float S = 0.7;
	float V = 0.7;

	RGB rgb = okhsv_to_srgb({H, S, V});
	auto it = fromLinearSRGB.map(QColor::fromRgbF(rgb.r, rgb.g, rgb.b));

	g_rand_free(rand);

	return {it.redF(), it.greenF(), it.blueF()};
}

int main(int argc, char* argv[])
{
	if (argc != 6) {
		printf("options: [font] [font name] [designer] [ucsur] [out path]\n");
		exit(-1);
	}

	if (!FcConfigAppFontAddFile(FcConfigGetCurrent(), (FcChar8*)argv[iFont])) {
		printf("failed to add font file %s\n", argv[iFont]);
		exit(-1);
	}

	PangoFontDescription *font_description;
	{ // parse fonts
		FcFontSet *fs = FcFontSetCreate ();
		const FcChar8 *file = (FcChar8*) argv[iFont];
		FcFileScan (fs, NULL, NULL, NULL, file, FcTrue);

		FcPattern *pat = fs->fonts[0];
		FcChar8 *str;
		FcPatternGetString(pat, FC_FAMILY, 0, &str);

		font_description = pango_fc_font_description_from_pattern(pat, 0);

		FcFontSetDestroy(fs);
	}

	struct RGB color = generateColor(argv[iName]);

	PangoFontDescription *inter_description;
	inter_description = pango_font_description_from_string("Inter");

	cairo_surface_t *surface;
	cairo_t *cairo;

	surface = cairo_image_surface_create(CAIRO_FORMAT_ARGB32, IMAGE_WIDTH, IMAGE_HEIGHT);
	cairo = cairo_create(surface);

	cairo_rectangle(cairo, 0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
	cairo_set_source_rgb(cairo, 1, 1, 1);
	cairo_fill(cairo);
	cairo_stroke(cairo);

	PangoRectangle extents;

	{ // show the glyphs
		PangoLayout *glyphs_layout = pango_cairo_create_layout(cairo);

		// set font
		pango_font_description_set_size(font_description, 96 * PANGO_SCALE);
		pango_layout_set_font_description(glyphs_layout, font_description);

		// set alignment and wrap
		pango_layout_set_alignment(glyphs_layout, PANGO_ALIGN_CENTER);
		pango_layout_set_width(glyphs_layout, (IMAGE_WIDTH + 96) * PANGO_SCALE);
		pango_layout_set_wrap(glyphs_layout, PANGO_WRAP_CHAR);

		// set text
		if (strcmp(argv[iUcsur], "")) {
			pango_layout_set_text(glyphs_layout, UCSUR, sizeof(UCSUR));
		} else {
			pango_layout_set_text(glyphs_layout, ASUKI, sizeof(ASUKI));
		}

		// draw
		pango_layout_get_pixel_extents(glyphs_layout, NULL, &extents);
		int x = (int)(IMAGE_WIDTH - extents.width) / 2;
		int y = (int)(IMAGE_HEIGHT - extents.height) / 2;
		cairo_set_source_rgb(cairo, color.r, color.g, color.b);
		cairo_move_to(cairo, x, y);
		pango_cairo_show_layout(cairo, glyphs_layout);

		g_object_unref(glyphs_layout);
	}

	{ // draw a footer rectangle
		cairo_rectangle(cairo, 0, IMAGE_HEIGHT - FOOTER_HEIGHT, IMAGE_WIDTH, FOOTER_HEIGHT);
		cairo_set_source_rgba(cairo, color.r, color.g, color.b, 1);
		cairo_fill(cairo);
		cairo_stroke(cairo);
	}

	int title_width;

	{ // show the name
		PangoLayout *name_layout = pango_cairo_create_layout(cairo);

		// set font
		pango_font_description_set_size(inter_description, 48 * PANGO_SCALE);
		pango_font_description_set_weight(inter_description, PANGO_WEIGHT_ULTRABOLD);
		pango_layout_set_font_description(name_layout, inter_description);

		// set text
		pango_layout_set_text(name_layout, argv[iName], -1);
		pango_layout_get_pixel_extents(name_layout, NULL, &extents);

		title_width = extents.width + 16;

		// draw name
		int x = (int)(IMAGE_WIDTH - extents.width) / 2;
		int y = (int)(FOOTER_HEIGHT - extents.height) / 2 + (IMAGE_HEIGHT - FOOTER_HEIGHT);
		cairo_set_source_rgb(cairo, 1, 1, 1);
		cairo_move_to(cairo, 16, y);
		pango_cairo_show_layout(cairo, name_layout);

		g_object_unref(name_layout);
	}

	{ // show the author
		PangoLayout *author_layout = pango_cairo_create_layout(cairo);

		// set font
		pango_font_description_set_size(inter_description, 36 * PANGO_SCALE);
		pango_font_description_set_weight(inter_description, PANGO_WEIGHT_MEDIUM);
		pango_layout_set_width(author_layout, (IMAGE_WIDTH - title_width) * PANGO_SCALE);
		pango_layout_set_alignment(author_layout, PANGO_ALIGN_RIGHT);
		pango_layout_set_font_description(author_layout, inter_description);

		// set text
		pango_layout_set_text(author_layout, argv[iDesigner], -1);
		pango_layout_get_pixel_extents(author_layout, NULL, &extents);

		// draw author
		int x = (int)(IMAGE_WIDTH - extents.width) / 2;
		int y = (int)(FOOTER_HEIGHT - extents.height) / 2 + (IMAGE_HEIGHT - FOOTER_HEIGHT);
		cairo_set_source_rgb(cairo, 1, 1, 1);
		cairo_move_to(cairo, title_width - 16, y);
		pango_cairo_show_layout(cairo, author_layout);


		g_object_unref(author_layout);
	}

	cairo_surface_write_to_png(surface, argv[iOut]);

	pango_font_description_free (font_description);
	cairo_destroy(cairo);
	cairo_surface_destroy(surface);
}

from xml.dom.minidom import parse
import metadata_pb2 as metadata
from google.protobuf import json_format
from fontTools.ttLib import TTFont
from fontTools.unicode import Unicode
import sys
from itertools import chain
from os import path

glyphData = parse('GlyphData.xml')
glyphs = {}

for it in range(0xE000, 0xF8FF):
    glyphs[it] = ("Private Use", None, "pua")

for it in range(0xF0000, 0xFFFFD):
    glyphs[it] = ("Private Use", None, "pua")

for it in range(0x100000, 0x10FFFD):
    glyphs[it] = ("Private Use", None, "pua")

for it in range(0x10330, 0x1034F):
    glyphs[it] = ("Letter", None, "gothic")

for glyph in glyphData.getElementsByTagName("glyph"):
    # print(glyph.attributes.items())
    try:
        num = int(glyph.getAttribute("unicode") or glyph.getAttribute("unicodeLegacy"), 16)
        desc = glyph.getAttribute("category")
        subcategory = glyph.getAttribute("subCategory")
        script = glyph.getAttribute("script") or "other"
        glyphs[num] = (desc, subcategory, script)
    except:
        pass

for md in sys.argv[1:]:
    family: metadata.Family = None
    with open(md, 'r') as file:
        family = json_format.Parse(file.read(), metadata.Family())

    for file in family.fonts:
        del file.characters[:]
        font = path.join(path.dirname(md), file.filename)
        with TTFont(
            font, 0, allowVID=0, ignoreDecompileErrors=True, fontNumber=-1
        ) as ttf:
            chars = chain.from_iterable(
                [y + (Unicode[y[0]],) for y in x.cmap.items()] for x in ttf["cmap"].tables
            )
            for c in chars:
                try:
                    unicode = chr(c[0])
                    production = c[1]
                    name = c[2]
                    (category, subcategory, script) = glyphs[c[0]]
                    char = file.characters.add()

                    char.unicode = unicode
                    char.production = production
                    char.category = category
                    if subcategory is not None:
                        char.subcategory = subcategory
                    char.description = name
                    char.script = script
                except:
                    print(md)
                    print(c)

    with open(md, 'w') as file:
        _ = file.write(json_format.MessageToJson(family, indent = "\t"))

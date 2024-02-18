/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * Category enum.
 * @exports Category
 * @enum {number}
 * @property {number} LINJA_LUKA=1 LINJA_LUKA value
 * @property {number} LINJA_ILO=2 LINJA_ILO value
 * @property {number} KIWEN=3 KIWEN value
 * @property {number} LEKO=4 LEKO value
 */
$root.Category = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "LINJA_LUKA"] = 1;
    values[valuesById[2] = "LINJA_ILO"] = 2;
    values[valuesById[3] = "KIWEN"] = 3;
    values[valuesById[4] = "LEKO"] = 4;
    return values;
})();

$root.Family = (function() {

    /**
     * Properties of a Family.
     * @exports IFamily
     * @interface IFamily
     * @property {string|null} [name] Family name
     * @property {string|null} [designer] Family designer
     * @property {string|null} [license] Family license
     * @property {string|null} [homepage] Family homepage
     * @property {string|null} [version] Family version
     * @property {Category|null} [category] Family category
     * @property {string|null} [dateAdded] Family dateAdded
     * @property {string|null} [lastUpdated] Family lastUpdated
     * @property {Array.<IFont>|null} [fonts] Family fonts
     * @property {Array.<IGeneratedVariant>|null} [generatedVariants] Family generatedVariants
     * @property {ISource|null} [source] Family source
     * @property {boolean|null} [asciiLigatures] Family asciiLigatures
     * @property {boolean|null} [ucsurCodepoints] Family ucsurCodepoints
     * @property {boolean|null} [cartouches] Family cartouches
     * @property {boolean|null} [combinedGlyphs] Family combinedGlyphs
     * @property {boolean|null} [extendedGlyphs] Family extendedGlyphs
     * @property {boolean|null} [variantGlyphs] Family variantGlyphs
     * @property {boolean|null} [randomizedGlyphs] Family randomizedGlyphs
     */

    /**
     * Constructs a new Family.
     * @exports Family
     * @classdesc Represents a Family.
     * @implements IFamily
     * @constructor
     * @param {IFamily=} [properties] Properties to set
     */
    function Family(properties) {
        this.fonts = [];
        this.generatedVariants = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Family name.
     * @member {string} name
     * @memberof Family
     * @instance
     */
    Family.prototype.name = "";

    /**
     * Family designer.
     * @member {string} designer
     * @memberof Family
     * @instance
     */
    Family.prototype.designer = "";

    /**
     * Family license.
     * @member {string} license
     * @memberof Family
     * @instance
     */
    Family.prototype.license = "";

    /**
     * Family homepage.
     * @member {string} homepage
     * @memberof Family
     * @instance
     */
    Family.prototype.homepage = "";

    /**
     * Family version.
     * @member {string} version
     * @memberof Family
     * @instance
     */
    Family.prototype.version = "";

    /**
     * Family category.
     * @member {Category} category
     * @memberof Family
     * @instance
     */
    Family.prototype.category = 1;

    /**
     * Family dateAdded.
     * @member {string} dateAdded
     * @memberof Family
     * @instance
     */
    Family.prototype.dateAdded = "";

    /**
     * Family lastUpdated.
     * @member {string} lastUpdated
     * @memberof Family
     * @instance
     */
    Family.prototype.lastUpdated = "";

    /**
     * Family fonts.
     * @member {Array.<IFont>} fonts
     * @memberof Family
     * @instance
     */
    Family.prototype.fonts = $util.emptyArray;

    /**
     * Family generatedVariants.
     * @member {Array.<IGeneratedVariant>} generatedVariants
     * @memberof Family
     * @instance
     */
    Family.prototype.generatedVariants = $util.emptyArray;

    /**
     * Family source.
     * @member {ISource|null|undefined} source
     * @memberof Family
     * @instance
     */
    Family.prototype.source = null;

    /**
     * Family asciiLigatures.
     * @member {boolean} asciiLigatures
     * @memberof Family
     * @instance
     */
    Family.prototype.asciiLigatures = false;

    /**
     * Family ucsurCodepoints.
     * @member {boolean} ucsurCodepoints
     * @memberof Family
     * @instance
     */
    Family.prototype.ucsurCodepoints = false;

    /**
     * Family cartouches.
     * @member {boolean} cartouches
     * @memberof Family
     * @instance
     */
    Family.prototype.cartouches = false;

    /**
     * Family combinedGlyphs.
     * @member {boolean} combinedGlyphs
     * @memberof Family
     * @instance
     */
    Family.prototype.combinedGlyphs = false;

    /**
     * Family extendedGlyphs.
     * @member {boolean} extendedGlyphs
     * @memberof Family
     * @instance
     */
    Family.prototype.extendedGlyphs = false;

    /**
     * Family variantGlyphs.
     * @member {boolean} variantGlyphs
     * @memberof Family
     * @instance
     */
    Family.prototype.variantGlyphs = false;

    /**
     * Family randomizedGlyphs.
     * @member {boolean} randomizedGlyphs
     * @memberof Family
     * @instance
     */
    Family.prototype.randomizedGlyphs = false;

    /**
     * Creates a new Family instance using the specified properties.
     * @function create
     * @memberof Family
     * @static
     * @param {IFamily=} [properties] Properties to set
     * @returns {Family} Family instance
     */
    Family.create = function create(properties) {
        return new Family(properties);
    };

    /**
     * Encodes the specified Family message. Does not implicitly {@link Family.verify|verify} messages.
     * @function encode
     * @memberof Family
     * @static
     * @param {IFamily} message Family message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Family.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.designer != null && Object.hasOwnProperty.call(message, "designer"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.designer);
        if (message.license != null && Object.hasOwnProperty.call(message, "license"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.license);
        if (message.category != null && Object.hasOwnProperty.call(message, "category"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.category);
        if (message.dateAdded != null && Object.hasOwnProperty.call(message, "dateAdded"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.dateAdded);
        if (message.fonts != null && message.fonts.length)
            for (var i = 0; i < message.fonts.length; ++i)
                $root.Font.encode(message.fonts[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.asciiLigatures != null && Object.hasOwnProperty.call(message, "asciiLigatures"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.asciiLigatures);
        if (message.ucsurCodepoints != null && Object.hasOwnProperty.call(message, "ucsurCodepoints"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.ucsurCodepoints);
        if (message.cartouches != null && Object.hasOwnProperty.call(message, "cartouches"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.cartouches);
        if (message.combinedGlyphs != null && Object.hasOwnProperty.call(message, "combinedGlyphs"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.combinedGlyphs);
        if (message.extendedGlyphs != null && Object.hasOwnProperty.call(message, "extendedGlyphs"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.extendedGlyphs);
        if (message.variantGlyphs != null && Object.hasOwnProperty.call(message, "variantGlyphs"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.variantGlyphs);
        if (message.randomizedGlyphs != null && Object.hasOwnProperty.call(message, "randomizedGlyphs"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.randomizedGlyphs);
        if (message.homepage != null && Object.hasOwnProperty.call(message, "homepage"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.homepage);
        if (message.source != null && Object.hasOwnProperty.call(message, "source"))
            $root.Source.encode(message.source, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.version);
        if (message.lastUpdated != null && Object.hasOwnProperty.call(message, "lastUpdated"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.lastUpdated);
        if (message.generatedVariants != null && message.generatedVariants.length)
            for (var i = 0; i < message.generatedVariants.length; ++i)
                $root.GeneratedVariant.encode(message.generatedVariants[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Family message, length delimited. Does not implicitly {@link Family.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Family
     * @static
     * @param {IFamily} message Family message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Family.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Family message from the specified reader or buffer.
     * @function decode
     * @memberof Family
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Family} Family
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Family.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Family();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.designer = reader.string();
                    break;
                }
            case 3: {
                    message.license = reader.string();
                    break;
                }
            case 14: {
                    message.homepage = reader.string();
                    break;
                }
            case 16: {
                    message.version = reader.string();
                    break;
                }
            case 4: {
                    message.category = reader.int32();
                    break;
                }
            case 5: {
                    message.dateAdded = reader.string();
                    break;
                }
            case 17: {
                    message.lastUpdated = reader.string();
                    break;
                }
            case 6: {
                    if (!(message.fonts && message.fonts.length))
                        message.fonts = [];
                    message.fonts.push($root.Font.decode(reader, reader.uint32()));
                    break;
                }
            case 18: {
                    if (!(message.generatedVariants && message.generatedVariants.length))
                        message.generatedVariants = [];
                    message.generatedVariants.push($root.GeneratedVariant.decode(reader, reader.uint32()));
                    break;
                }
            case 15: {
                    message.source = $root.Source.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.asciiLigatures = reader.bool();
                    break;
                }
            case 8: {
                    message.ucsurCodepoints = reader.bool();
                    break;
                }
            case 9: {
                    message.cartouches = reader.bool();
                    break;
                }
            case 10: {
                    message.combinedGlyphs = reader.bool();
                    break;
                }
            case 11: {
                    message.extendedGlyphs = reader.bool();
                    break;
                }
            case 12: {
                    message.variantGlyphs = reader.bool();
                    break;
                }
            case 13: {
                    message.randomizedGlyphs = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Family message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Family
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Family} Family
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Family.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Family message.
     * @function verify
     * @memberof Family
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Family.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.designer != null && message.hasOwnProperty("designer"))
            if (!$util.isString(message.designer))
                return "designer: string expected";
        if (message.license != null && message.hasOwnProperty("license"))
            if (!$util.isString(message.license))
                return "license: string expected";
        if (message.homepage != null && message.hasOwnProperty("homepage"))
            if (!$util.isString(message.homepage))
                return "homepage: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            switch (message.category) {
            default:
                return "category: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.dateAdded != null && message.hasOwnProperty("dateAdded"))
            if (!$util.isString(message.dateAdded))
                return "dateAdded: string expected";
        if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
            if (!$util.isString(message.lastUpdated))
                return "lastUpdated: string expected";
        if (message.fonts != null && message.hasOwnProperty("fonts")) {
            if (!Array.isArray(message.fonts))
                return "fonts: array expected";
            for (var i = 0; i < message.fonts.length; ++i) {
                var error = $root.Font.verify(message.fonts[i]);
                if (error)
                    return "fonts." + error;
            }
        }
        if (message.generatedVariants != null && message.hasOwnProperty("generatedVariants")) {
            if (!Array.isArray(message.generatedVariants))
                return "generatedVariants: array expected";
            for (var i = 0; i < message.generatedVariants.length; ++i) {
                var error = $root.GeneratedVariant.verify(message.generatedVariants[i]);
                if (error)
                    return "generatedVariants." + error;
            }
        }
        if (message.source != null && message.hasOwnProperty("source")) {
            var error = $root.Source.verify(message.source);
            if (error)
                return "source." + error;
        }
        if (message.asciiLigatures != null && message.hasOwnProperty("asciiLigatures"))
            if (typeof message.asciiLigatures !== "boolean")
                return "asciiLigatures: boolean expected";
        if (message.ucsurCodepoints != null && message.hasOwnProperty("ucsurCodepoints"))
            if (typeof message.ucsurCodepoints !== "boolean")
                return "ucsurCodepoints: boolean expected";
        if (message.cartouches != null && message.hasOwnProperty("cartouches"))
            if (typeof message.cartouches !== "boolean")
                return "cartouches: boolean expected";
        if (message.combinedGlyphs != null && message.hasOwnProperty("combinedGlyphs"))
            if (typeof message.combinedGlyphs !== "boolean")
                return "combinedGlyphs: boolean expected";
        if (message.extendedGlyphs != null && message.hasOwnProperty("extendedGlyphs"))
            if (typeof message.extendedGlyphs !== "boolean")
                return "extendedGlyphs: boolean expected";
        if (message.variantGlyphs != null && message.hasOwnProperty("variantGlyphs"))
            if (typeof message.variantGlyphs !== "boolean")
                return "variantGlyphs: boolean expected";
        if (message.randomizedGlyphs != null && message.hasOwnProperty("randomizedGlyphs"))
            if (typeof message.randomizedGlyphs !== "boolean")
                return "randomizedGlyphs: boolean expected";
        return null;
    };

    /**
     * Creates a Family message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Family
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Family} Family
     */
    Family.fromObject = function fromObject(object) {
        if (object instanceof $root.Family)
            return object;
        var message = new $root.Family();
        if (object.name != null)
            message.name = String(object.name);
        if (object.designer != null)
            message.designer = String(object.designer);
        if (object.license != null)
            message.license = String(object.license);
        if (object.homepage != null)
            message.homepage = String(object.homepage);
        if (object.version != null)
            message.version = String(object.version);
        switch (object.category) {
        default:
            if (typeof object.category === "number") {
                message.category = object.category;
                break;
            }
            break;
        case "LINJA_LUKA":
        case 1:
            message.category = 1;
            break;
        case "LINJA_ILO":
        case 2:
            message.category = 2;
            break;
        case "KIWEN":
        case 3:
            message.category = 3;
            break;
        case "LEKO":
        case 4:
            message.category = 4;
            break;
        }
        if (object.dateAdded != null)
            message.dateAdded = String(object.dateAdded);
        if (object.lastUpdated != null)
            message.lastUpdated = String(object.lastUpdated);
        if (object.fonts) {
            if (!Array.isArray(object.fonts))
                throw TypeError(".Family.fonts: array expected");
            message.fonts = [];
            for (var i = 0; i < object.fonts.length; ++i) {
                if (typeof object.fonts[i] !== "object")
                    throw TypeError(".Family.fonts: object expected");
                message.fonts[i] = $root.Font.fromObject(object.fonts[i]);
            }
        }
        if (object.generatedVariants) {
            if (!Array.isArray(object.generatedVariants))
                throw TypeError(".Family.generatedVariants: array expected");
            message.generatedVariants = [];
            for (var i = 0; i < object.generatedVariants.length; ++i) {
                if (typeof object.generatedVariants[i] !== "object")
                    throw TypeError(".Family.generatedVariants: object expected");
                message.generatedVariants[i] = $root.GeneratedVariant.fromObject(object.generatedVariants[i]);
            }
        }
        if (object.source != null) {
            if (typeof object.source !== "object")
                throw TypeError(".Family.source: object expected");
            message.source = $root.Source.fromObject(object.source);
        }
        if (object.asciiLigatures != null)
            message.asciiLigatures = Boolean(object.asciiLigatures);
        if (object.ucsurCodepoints != null)
            message.ucsurCodepoints = Boolean(object.ucsurCodepoints);
        if (object.cartouches != null)
            message.cartouches = Boolean(object.cartouches);
        if (object.combinedGlyphs != null)
            message.combinedGlyphs = Boolean(object.combinedGlyphs);
        if (object.extendedGlyphs != null)
            message.extendedGlyphs = Boolean(object.extendedGlyphs);
        if (object.variantGlyphs != null)
            message.variantGlyphs = Boolean(object.variantGlyphs);
        if (object.randomizedGlyphs != null)
            message.randomizedGlyphs = Boolean(object.randomizedGlyphs);
        return message;
    };

    /**
     * Creates a plain object from a Family message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Family
     * @static
     * @param {Family} message Family
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Family.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.fonts = [];
            object.generatedVariants = [];
        }
        if (options.defaults) {
            object.name = "";
            object.designer = "";
            object.license = "";
            object.category = options.enums === String ? "LINJA_LUKA" : 1;
            object.dateAdded = "";
            object.asciiLigatures = false;
            object.ucsurCodepoints = false;
            object.cartouches = false;
            object.combinedGlyphs = false;
            object.extendedGlyphs = false;
            object.variantGlyphs = false;
            object.randomizedGlyphs = false;
            object.homepage = "";
            object.source = null;
            object.version = "";
            object.lastUpdated = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.designer != null && message.hasOwnProperty("designer"))
            object.designer = message.designer;
        if (message.license != null && message.hasOwnProperty("license"))
            object.license = message.license;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = options.enums === String ? $root.Category[message.category] === undefined ? message.category : $root.Category[message.category] : message.category;
        if (message.dateAdded != null && message.hasOwnProperty("dateAdded"))
            object.dateAdded = message.dateAdded;
        if (message.fonts && message.fonts.length) {
            object.fonts = [];
            for (var j = 0; j < message.fonts.length; ++j)
                object.fonts[j] = $root.Font.toObject(message.fonts[j], options);
        }
        if (message.asciiLigatures != null && message.hasOwnProperty("asciiLigatures"))
            object.asciiLigatures = message.asciiLigatures;
        if (message.ucsurCodepoints != null && message.hasOwnProperty("ucsurCodepoints"))
            object.ucsurCodepoints = message.ucsurCodepoints;
        if (message.cartouches != null && message.hasOwnProperty("cartouches"))
            object.cartouches = message.cartouches;
        if (message.combinedGlyphs != null && message.hasOwnProperty("combinedGlyphs"))
            object.combinedGlyphs = message.combinedGlyphs;
        if (message.extendedGlyphs != null && message.hasOwnProperty("extendedGlyphs"))
            object.extendedGlyphs = message.extendedGlyphs;
        if (message.variantGlyphs != null && message.hasOwnProperty("variantGlyphs"))
            object.variantGlyphs = message.variantGlyphs;
        if (message.randomizedGlyphs != null && message.hasOwnProperty("randomizedGlyphs"))
            object.randomizedGlyphs = message.randomizedGlyphs;
        if (message.homepage != null && message.hasOwnProperty("homepage"))
            object.homepage = message.homepage;
        if (message.source != null && message.hasOwnProperty("source"))
            object.source = $root.Source.toObject(message.source, options);
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.lastUpdated != null && message.hasOwnProperty("lastUpdated"))
            object.lastUpdated = message.lastUpdated;
        if (message.generatedVariants && message.generatedVariants.length) {
            object.generatedVariants = [];
            for (var j = 0; j < message.generatedVariants.length; ++j)
                object.generatedVariants[j] = $root.GeneratedVariant.toObject(message.generatedVariants[j], options);
        }
        return object;
    };

    /**
     * Converts this Family to JSON.
     * @function toJSON
     * @memberof Family
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Family.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Family
     * @function getTypeUrl
     * @memberof Family
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Family.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Family";
    };

    return Family;
})();

$root.Source = (function() {

    /**
     * Properties of a Source.
     * @exports ISource
     * @interface ISource
     * @property {IGit|null} [git] Source git
     * @property {IWeb|null} [web] Source web
     * @property {Array.<ISourceFile>|null} [files] Source files
     */

    /**
     * Constructs a new Source.
     * @exports Source
     * @classdesc Represents a Source.
     * @implements ISource
     * @constructor
     * @param {ISource=} [properties] Properties to set
     */
    function Source(properties) {
        this.files = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Source git.
     * @member {IGit|null|undefined} git
     * @memberof Source
     * @instance
     */
    Source.prototype.git = null;

    /**
     * Source web.
     * @member {IWeb|null|undefined} web
     * @memberof Source
     * @instance
     */
    Source.prototype.web = null;

    /**
     * Source files.
     * @member {Array.<ISourceFile>} files
     * @memberof Source
     * @instance
     */
    Source.prototype.files = $util.emptyArray;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Source source.
     * @member {"git"|"web"|undefined} source
     * @memberof Source
     * @instance
     */
    Object.defineProperty(Source.prototype, "source", {
        get: $util.oneOfGetter($oneOfFields = ["git", "web"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Source instance using the specified properties.
     * @function create
     * @memberof Source
     * @static
     * @param {ISource=} [properties] Properties to set
     * @returns {Source} Source instance
     */
    Source.create = function create(properties) {
        return new Source(properties);
    };

    /**
     * Encodes the specified Source message. Does not implicitly {@link Source.verify|verify} messages.
     * @function encode
     * @memberof Source
     * @static
     * @param {ISource} message Source message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Source.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.git != null && Object.hasOwnProperty.call(message, "git"))
            $root.Git.encode(message.git, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.web != null && Object.hasOwnProperty.call(message, "web"))
            $root.Web.encode(message.web, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.files != null && message.files.length)
            for (var i = 0; i < message.files.length; ++i)
                $root.SourceFile.encode(message.files[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Source message, length delimited. Does not implicitly {@link Source.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Source
     * @static
     * @param {ISource} message Source message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Source.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Source message from the specified reader or buffer.
     * @function decode
     * @memberof Source
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Source} Source
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Source.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Source();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.git = $root.Git.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.web = $root.Web.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    if (!(message.files && message.files.length))
                        message.files = [];
                    message.files.push($root.SourceFile.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Source message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Source
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Source} Source
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Source.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Source message.
     * @function verify
     * @memberof Source
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Source.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.git != null && message.hasOwnProperty("git")) {
            properties.source = 1;
            {
                var error = $root.Git.verify(message.git);
                if (error)
                    return "git." + error;
            }
        }
        if (message.web != null && message.hasOwnProperty("web")) {
            if (properties.source === 1)
                return "source: multiple values";
            properties.source = 1;
            {
                var error = $root.Web.verify(message.web);
                if (error)
                    return "web." + error;
            }
        }
        if (message.files != null && message.hasOwnProperty("files")) {
            if (!Array.isArray(message.files))
                return "files: array expected";
            for (var i = 0; i < message.files.length; ++i) {
                var error = $root.SourceFile.verify(message.files[i]);
                if (error)
                    return "files." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Source message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Source
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Source} Source
     */
    Source.fromObject = function fromObject(object) {
        if (object instanceof $root.Source)
            return object;
        var message = new $root.Source();
        if (object.git != null) {
            if (typeof object.git !== "object")
                throw TypeError(".Source.git: object expected");
            message.git = $root.Git.fromObject(object.git);
        }
        if (object.web != null) {
            if (typeof object.web !== "object")
                throw TypeError(".Source.web: object expected");
            message.web = $root.Web.fromObject(object.web);
        }
        if (object.files) {
            if (!Array.isArray(object.files))
                throw TypeError(".Source.files: array expected");
            message.files = [];
            for (var i = 0; i < object.files.length; ++i) {
                if (typeof object.files[i] !== "object")
                    throw TypeError(".Source.files: object expected");
                message.files[i] = $root.SourceFile.fromObject(object.files[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Source message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Source
     * @static
     * @param {Source} message Source
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Source.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.files = [];
        if (message.git != null && message.hasOwnProperty("git")) {
            object.git = $root.Git.toObject(message.git, options);
            if (options.oneofs)
                object.source = "git";
        }
        if (message.web != null && message.hasOwnProperty("web")) {
            object.web = $root.Web.toObject(message.web, options);
            if (options.oneofs)
                object.source = "web";
        }
        if (message.files && message.files.length) {
            object.files = [];
            for (var j = 0; j < message.files.length; ++j)
                object.files[j] = $root.SourceFile.toObject(message.files[j], options);
        }
        return object;
    };

    /**
     * Converts this Source to JSON.
     * @function toJSON
     * @memberof Source
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Source.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Source
     * @function getTypeUrl
     * @memberof Source
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Source.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Source";
    };

    return Source;
})();

$root.SourceFile = (function() {

    /**
     * Properties of a SourceFile.
     * @exports ISourceFile
     * @interface ISourceFile
     * @property {string|null} [sourceFile] SourceFile sourceFile
     * @property {string|null} [destFile] SourceFile destFile
     */

    /**
     * Constructs a new SourceFile.
     * @exports SourceFile
     * @classdesc Represents a SourceFile.
     * @implements ISourceFile
     * @constructor
     * @param {ISourceFile=} [properties] Properties to set
     */
    function SourceFile(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SourceFile sourceFile.
     * @member {string} sourceFile
     * @memberof SourceFile
     * @instance
     */
    SourceFile.prototype.sourceFile = "";

    /**
     * SourceFile destFile.
     * @member {string} destFile
     * @memberof SourceFile
     * @instance
     */
    SourceFile.prototype.destFile = "";

    /**
     * Creates a new SourceFile instance using the specified properties.
     * @function create
     * @memberof SourceFile
     * @static
     * @param {ISourceFile=} [properties] Properties to set
     * @returns {SourceFile} SourceFile instance
     */
    SourceFile.create = function create(properties) {
        return new SourceFile(properties);
    };

    /**
     * Encodes the specified SourceFile message. Does not implicitly {@link SourceFile.verify|verify} messages.
     * @function encode
     * @memberof SourceFile
     * @static
     * @param {ISourceFile} message SourceFile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SourceFile.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sourceFile);
        if (message.destFile != null && Object.hasOwnProperty.call(message, "destFile"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.destFile);
        return writer;
    };

    /**
     * Encodes the specified SourceFile message, length delimited. Does not implicitly {@link SourceFile.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SourceFile
     * @static
     * @param {ISourceFile} message SourceFile message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SourceFile.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SourceFile message from the specified reader or buffer.
     * @function decode
     * @memberof SourceFile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SourceFile} SourceFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SourceFile.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SourceFile();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.sourceFile = reader.string();
                    break;
                }
            case 2: {
                    message.destFile = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SourceFile message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SourceFile
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SourceFile} SourceFile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SourceFile.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SourceFile message.
     * @function verify
     * @memberof SourceFile
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SourceFile.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
            if (!$util.isString(message.sourceFile))
                return "sourceFile: string expected";
        if (message.destFile != null && message.hasOwnProperty("destFile"))
            if (!$util.isString(message.destFile))
                return "destFile: string expected";
        return null;
    };

    /**
     * Creates a SourceFile message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SourceFile
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SourceFile} SourceFile
     */
    SourceFile.fromObject = function fromObject(object) {
        if (object instanceof $root.SourceFile)
            return object;
        var message = new $root.SourceFile();
        if (object.sourceFile != null)
            message.sourceFile = String(object.sourceFile);
        if (object.destFile != null)
            message.destFile = String(object.destFile);
        return message;
    };

    /**
     * Creates a plain object from a SourceFile message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SourceFile
     * @static
     * @param {SourceFile} message SourceFile
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SourceFile.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sourceFile = "";
            object.destFile = "";
        }
        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
            object.sourceFile = message.sourceFile;
        if (message.destFile != null && message.hasOwnProperty("destFile"))
            object.destFile = message.destFile;
        return object;
    };

    /**
     * Converts this SourceFile to JSON.
     * @function toJSON
     * @memberof SourceFile
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SourceFile.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SourceFile
     * @function getTypeUrl
     * @memberof SourceFile
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SourceFile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SourceFile";
    };

    return SourceFile;
})();

$root.Git = (function() {

    /**
     * Properties of a Git.
     * @exports IGit
     * @interface IGit
     * @property {string|null} [repositoryUrl] Git repositoryUrl
     * @property {string|null} [ref] Git ref
     */

    /**
     * Constructs a new Git.
     * @exports Git
     * @classdesc Represents a Git.
     * @implements IGit
     * @constructor
     * @param {IGit=} [properties] Properties to set
     */
    function Git(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Git repositoryUrl.
     * @member {string} repositoryUrl
     * @memberof Git
     * @instance
     */
    Git.prototype.repositoryUrl = "";

    /**
     * Git ref.
     * @member {string} ref
     * @memberof Git
     * @instance
     */
    Git.prototype.ref = "";

    /**
     * Creates a new Git instance using the specified properties.
     * @function create
     * @memberof Git
     * @static
     * @param {IGit=} [properties] Properties to set
     * @returns {Git} Git instance
     */
    Git.create = function create(properties) {
        return new Git(properties);
    };

    /**
     * Encodes the specified Git message. Does not implicitly {@link Git.verify|verify} messages.
     * @function encode
     * @memberof Git
     * @static
     * @param {IGit} message Git message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Git.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.repositoryUrl != null && Object.hasOwnProperty.call(message, "repositoryUrl"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.repositoryUrl);
        if (message.ref != null && Object.hasOwnProperty.call(message, "ref"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ref);
        return writer;
    };

    /**
     * Encodes the specified Git message, length delimited. Does not implicitly {@link Git.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Git
     * @static
     * @param {IGit} message Git message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Git.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Git message from the specified reader or buffer.
     * @function decode
     * @memberof Git
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Git} Git
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Git.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Git();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.repositoryUrl = reader.string();
                    break;
                }
            case 2: {
                    message.ref = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Git message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Git
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Git} Git
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Git.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Git message.
     * @function verify
     * @memberof Git
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Git.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.repositoryUrl != null && message.hasOwnProperty("repositoryUrl"))
            if (!$util.isString(message.repositoryUrl))
                return "repositoryUrl: string expected";
        if (message.ref != null && message.hasOwnProperty("ref"))
            if (!$util.isString(message.ref))
                return "ref: string expected";
        return null;
    };

    /**
     * Creates a Git message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Git
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Git} Git
     */
    Git.fromObject = function fromObject(object) {
        if (object instanceof $root.Git)
            return object;
        var message = new $root.Git();
        if (object.repositoryUrl != null)
            message.repositoryUrl = String(object.repositoryUrl);
        if (object.ref != null)
            message.ref = String(object.ref);
        return message;
    };

    /**
     * Creates a plain object from a Git message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Git
     * @static
     * @param {Git} message Git
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Git.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.repositoryUrl = "";
            object.ref = "";
        }
        if (message.repositoryUrl != null && message.hasOwnProperty("repositoryUrl"))
            object.repositoryUrl = message.repositoryUrl;
        if (message.ref != null && message.hasOwnProperty("ref"))
            object.ref = message.ref;
        return object;
    };

    /**
     * Converts this Git to JSON.
     * @function toJSON
     * @memberof Git
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Git.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Git
     * @function getTypeUrl
     * @memberof Git
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Git.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Git";
    };

    return Git;
})();

$root.Web = (function() {

    /**
     * Properties of a Web.
     * @exports IWeb
     * @interface IWeb
     * @property {string|null} [rootUrl] Web rootUrl
     */

    /**
     * Constructs a new Web.
     * @exports Web
     * @classdesc Represents a Web.
     * @implements IWeb
     * @constructor
     * @param {IWeb=} [properties] Properties to set
     */
    function Web(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Web rootUrl.
     * @member {string} rootUrl
     * @memberof Web
     * @instance
     */
    Web.prototype.rootUrl = "";

    /**
     * Creates a new Web instance using the specified properties.
     * @function create
     * @memberof Web
     * @static
     * @param {IWeb=} [properties] Properties to set
     * @returns {Web} Web instance
     */
    Web.create = function create(properties) {
        return new Web(properties);
    };

    /**
     * Encodes the specified Web message. Does not implicitly {@link Web.verify|verify} messages.
     * @function encode
     * @memberof Web
     * @static
     * @param {IWeb} message Web message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Web.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rootUrl != null && Object.hasOwnProperty.call(message, "rootUrl"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.rootUrl);
        return writer;
    };

    /**
     * Encodes the specified Web message, length delimited. Does not implicitly {@link Web.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Web
     * @static
     * @param {IWeb} message Web message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Web.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Web message from the specified reader or buffer.
     * @function decode
     * @memberof Web
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Web} Web
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Web.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Web();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.rootUrl = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Web message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Web
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Web} Web
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Web.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Web message.
     * @function verify
     * @memberof Web
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Web.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rootUrl != null && message.hasOwnProperty("rootUrl"))
            if (!$util.isString(message.rootUrl))
                return "rootUrl: string expected";
        return null;
    };

    /**
     * Creates a Web message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Web
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Web} Web
     */
    Web.fromObject = function fromObject(object) {
        if (object instanceof $root.Web)
            return object;
        var message = new $root.Web();
        if (object.rootUrl != null)
            message.rootUrl = String(object.rootUrl);
        return message;
    };

    /**
     * Creates a plain object from a Web message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Web
     * @static
     * @param {Web} message Web
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Web.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.rootUrl = "";
        if (message.rootUrl != null && message.hasOwnProperty("rootUrl"))
            object.rootUrl = message.rootUrl;
        return object;
    };

    /**
     * Converts this Web to JSON.
     * @function toJSON
     * @memberof Web
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Web.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Web
     * @function getTypeUrl
     * @memberof Web
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Web.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Web";
    };

    return Web;
})();

/**
 * Style enum.
 * @exports Style
 * @enum {number}
 * @property {number} NORMAL=1 NORMAL value
 */
$root.Style = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "NORMAL"] = 1;
    return values;
})();

$root.Font = (function() {

    /**
     * Properties of a Font.
     * @exports IFont
     * @interface IFont
     * @property {string|null} [name] Font name
     * @property {Style|null} [style] Font style
     * @property {number|null} [weight] Font weight
     * @property {string|null} [filename] Font filename
     */

    /**
     * Constructs a new Font.
     * @exports Font
     * @classdesc Represents a Font.
     * @implements IFont
     * @constructor
     * @param {IFont=} [properties] Properties to set
     */
    function Font(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Font name.
     * @member {string} name
     * @memberof Font
     * @instance
     */
    Font.prototype.name = "";

    /**
     * Font style.
     * @member {Style} style
     * @memberof Font
     * @instance
     */
    Font.prototype.style = 1;

    /**
     * Font weight.
     * @member {number} weight
     * @memberof Font
     * @instance
     */
    Font.prototype.weight = 0;

    /**
     * Font filename.
     * @member {string} filename
     * @memberof Font
     * @instance
     */
    Font.prototype.filename = "";

    /**
     * Creates a new Font instance using the specified properties.
     * @function create
     * @memberof Font
     * @static
     * @param {IFont=} [properties] Properties to set
     * @returns {Font} Font instance
     */
    Font.create = function create(properties) {
        return new Font(properties);
    };

    /**
     * Encodes the specified Font message. Does not implicitly {@link Font.verify|verify} messages.
     * @function encode
     * @memberof Font
     * @static
     * @param {IFont} message Font message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Font.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.style != null && Object.hasOwnProperty.call(message, "style"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.style);
        if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.weight);
        if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.filename);
        return writer;
    };

    /**
     * Encodes the specified Font message, length delimited. Does not implicitly {@link Font.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Font
     * @static
     * @param {IFont} message Font message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Font.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Font message from the specified reader or buffer.
     * @function decode
     * @memberof Font
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Font} Font
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Font.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Font();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.style = reader.int32();
                    break;
                }
            case 3: {
                    message.weight = reader.int32();
                    break;
                }
            case 4: {
                    message.filename = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Font message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Font
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Font} Font
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Font.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Font message.
     * @function verify
     * @memberof Font
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Font.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.style != null && message.hasOwnProperty("style"))
            switch (message.style) {
            default:
                return "style: enum value expected";
            case 1:
                break;
            }
        if (message.weight != null && message.hasOwnProperty("weight"))
            if (!$util.isInteger(message.weight))
                return "weight: integer expected";
        if (message.filename != null && message.hasOwnProperty("filename"))
            if (!$util.isString(message.filename))
                return "filename: string expected";
        return null;
    };

    /**
     * Creates a Font message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Font
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Font} Font
     */
    Font.fromObject = function fromObject(object) {
        if (object instanceof $root.Font)
            return object;
        var message = new $root.Font();
        if (object.name != null)
            message.name = String(object.name);
        switch (object.style) {
        default:
            if (typeof object.style === "number") {
                message.style = object.style;
                break;
            }
            break;
        case "NORMAL":
        case 1:
            message.style = 1;
            break;
        }
        if (object.weight != null)
            message.weight = object.weight | 0;
        if (object.filename != null)
            message.filename = String(object.filename);
        return message;
    };

    /**
     * Creates a plain object from a Font message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Font
     * @static
     * @param {Font} message Font
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Font.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.style = options.enums === String ? "NORMAL" : 1;
            object.weight = 0;
            object.filename = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.style != null && message.hasOwnProperty("style"))
            object.style = options.enums === String ? $root.Style[message.style] === undefined ? message.style : $root.Style[message.style] : message.style;
        if (message.weight != null && message.hasOwnProperty("weight"))
            object.weight = message.weight;
        if (message.filename != null && message.hasOwnProperty("filename"))
            object.filename = message.filename;
        return object;
    };

    /**
     * Converts this Font to JSON.
     * @function toJSON
     * @memberof Font
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Font.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Font
     * @function getTypeUrl
     * @memberof Font
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Font.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Font";
    };

    return Font;
})();

$root.GeneratedVariant = (function() {

    /**
     * Properties of a GeneratedVariant.
     * @exports IGeneratedVariant
     * @interface IGeneratedVariant
     * @property {string|null} [forFilename] GeneratedVariant forFilename
     * @property {string|null} [generatedFileName] GeneratedVariant generatedFileName
     */

    /**
     * Constructs a new GeneratedVariant.
     * @exports GeneratedVariant
     * @classdesc Represents a GeneratedVariant.
     * @implements IGeneratedVariant
     * @constructor
     * @param {IGeneratedVariant=} [properties] Properties to set
     */
    function GeneratedVariant(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GeneratedVariant forFilename.
     * @member {string} forFilename
     * @memberof GeneratedVariant
     * @instance
     */
    GeneratedVariant.prototype.forFilename = "";

    /**
     * GeneratedVariant generatedFileName.
     * @member {string} generatedFileName
     * @memberof GeneratedVariant
     * @instance
     */
    GeneratedVariant.prototype.generatedFileName = "";

    /**
     * Creates a new GeneratedVariant instance using the specified properties.
     * @function create
     * @memberof GeneratedVariant
     * @static
     * @param {IGeneratedVariant=} [properties] Properties to set
     * @returns {GeneratedVariant} GeneratedVariant instance
     */
    GeneratedVariant.create = function create(properties) {
        return new GeneratedVariant(properties);
    };

    /**
     * Encodes the specified GeneratedVariant message. Does not implicitly {@link GeneratedVariant.verify|verify} messages.
     * @function encode
     * @memberof GeneratedVariant
     * @static
     * @param {IGeneratedVariant} message GeneratedVariant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GeneratedVariant.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.forFilename != null && Object.hasOwnProperty.call(message, "forFilename"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.forFilename);
        if (message.generatedFileName != null && Object.hasOwnProperty.call(message, "generatedFileName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.generatedFileName);
        return writer;
    };

    /**
     * Encodes the specified GeneratedVariant message, length delimited. Does not implicitly {@link GeneratedVariant.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GeneratedVariant
     * @static
     * @param {IGeneratedVariant} message GeneratedVariant message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GeneratedVariant.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GeneratedVariant message from the specified reader or buffer.
     * @function decode
     * @memberof GeneratedVariant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GeneratedVariant} GeneratedVariant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GeneratedVariant.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GeneratedVariant();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.forFilename = reader.string();
                    break;
                }
            case 2: {
                    message.generatedFileName = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GeneratedVariant message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GeneratedVariant
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GeneratedVariant} GeneratedVariant
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GeneratedVariant.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GeneratedVariant message.
     * @function verify
     * @memberof GeneratedVariant
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GeneratedVariant.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.forFilename != null && message.hasOwnProperty("forFilename"))
            if (!$util.isString(message.forFilename))
                return "forFilename: string expected";
        if (message.generatedFileName != null && message.hasOwnProperty("generatedFileName"))
            if (!$util.isString(message.generatedFileName))
                return "generatedFileName: string expected";
        return null;
    };

    /**
     * Creates a GeneratedVariant message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GeneratedVariant
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GeneratedVariant} GeneratedVariant
     */
    GeneratedVariant.fromObject = function fromObject(object) {
        if (object instanceof $root.GeneratedVariant)
            return object;
        var message = new $root.GeneratedVariant();
        if (object.forFilename != null)
            message.forFilename = String(object.forFilename);
        if (object.generatedFileName != null)
            message.generatedFileName = String(object.generatedFileName);
        return message;
    };

    /**
     * Creates a plain object from a GeneratedVariant message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GeneratedVariant
     * @static
     * @param {GeneratedVariant} message GeneratedVariant
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GeneratedVariant.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.forFilename = "";
            object.generatedFileName = "";
        }
        if (message.forFilename != null && message.hasOwnProperty("forFilename"))
            object.forFilename = message.forFilename;
        if (message.generatedFileName != null && message.hasOwnProperty("generatedFileName"))
            object.generatedFileName = message.generatedFileName;
        return object;
    };

    /**
     * Converts this GeneratedVariant to JSON.
     * @function toJSON
     * @memberof GeneratedVariant
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GeneratedVariant.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GeneratedVariant
     * @function getTypeUrl
     * @memberof GeneratedVariant
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GeneratedVariant.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GeneratedVariant";
    };

    return GeneratedVariant;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;

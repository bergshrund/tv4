var ErrorCodes = {
 INVALID_TYPE: 0,
 ENUM_MISMATCH: 1,
 ANY_OF_MISSING: 10,
 ONE_OF_MISSING: 11,
 ONE_OF_MULTIPLE: 12,
 NOT_PASSED: 13,
 // Numeric errors
 NUMBER_MULTIPLE_OF: 100,
 NUMBER_MINIMUM: 101,
 NUMBER_MINIMUM_EXCLUSIVE: 102,
 NUMBER_MAXIMUM: 103,
 NUMBER_MAXIMUM_EXCLUSIVE: 104,
 NUMBER_NOT_A_NUMBER: 105,
 // String errors
 STRING_LENGTH_SHORT: 200,
 STRING_LENGTH_LONG: 201,
 STRING_PATTERN: 202,
 // Object errors
 OBJECT_PROPERTIES_MINIMUM: 300,
 OBJECT_PROPERTIES_MAXIMUM: 301,
 OBJECT_REQUIRED: 302,
 OBJECT_ADDITIONAL_PROPERTIES: 303,
 OBJECT_DEPENDENCY_KEY: 304,
 // Array errors
 ARRAY_LENGTH_SHORT: 400,
 ARRAY_LENGTH_LONG: 401,
 ARRAY_UNIQUE: 402,
 ARRAY_ADDITIONAL_ITEMS: 403,
 // Custom/user-defined errors
 FORMAT_CUSTOM: 500,
 KEYWORD_CUSTOM: 501,
 // Schema structure
 CIRCULAR_REFERENCE: 600,
 // Non-standard validation options
 UNKNOWN_PROPERTY: 1000,
 WRONG_JSON:10001,
 WRONG_BOOL:10002,
 WRONG_EMAIL:10003,
 WRONG_INTEGER:10004,
 WRONG_DOMAIN:10005,
 WRONG_UID:10006,
 WRONG_NAME:10007,
 WRONG_PHONE:10008,
 WRONG_CONST:10009,
 WRONG_RRTYPE:10010,
 WRONG_TTL:10011,
 WRONG_ZONEBASE:10012,
 WRONG_RELATIVE:10013,
 WRONG_FQDN:10014,
 WRONG_MX:10015,
 WRONG_A:10016,
 WRONG_AAAA:10017,
 WRONG_TXT:10018,
 WRONG_TSIGKEY:10019,
 WRONG_TSIGSECRET: 10020,
 WRONG_BASE64:10021,
 WRONG_YEAR:10022, 
 WRONG_MONTH:10023,
 WRONG_CVV_TYPE:10024,
 WRONG_YEAR_VALUE:10025,
 WRONG_CREDITCARD:10028,
 WRONG_CREDITCARD_LENGTH:10029,
 WRONG_CVV_LENGTH:10030,
 WRONG_HOLDERNAME_LENGTH:10031,
 WRONG_HOLDERNAME_FORMAT:10032,
 WRONG_CREDITCARD_NUMBER:10033,
 WRONG_CC_LENGTH:10034,
 WRONG_2ALPHA_CC:10035,
 WRONG_3ALPHA_CC:10036,
 WRONG_POSITIVE_NUMBER:10037,
 WRONG_CURRENCY_VALUE:10038,
 WRONG_CONTACTID_UAEPP:10039,
 WRONG_ASCII_STRING:10040,
 WRONG_UTF8_STRING255_LENGTH:10041,
 WRONG_UTF8_STRING16_LENGTH:10042,
 WRONG_AUTHINFO_UAEPP:10043
};
var ErrorCodeLookup = {};
for (var key in ErrorCodes) {
 ErrorCodeLookup[ErrorCodes[key]] = key;
}
var ErrorMessagesDefault = {
 INVALID_TYPE: "Invalid type: {type} (expected {expected})",
 ENUM_MISMATCH: "No enum match for: {value}",
 ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
 ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
 ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
 NOT_PASSED: "Data matches schema from \"not\"",
 // Numeric errors
 NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
 NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
 NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
 NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
 NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
 NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
 // String errors
 STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
 STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
 STRING_PATTERN: "String does not match pattern: {pattern}",
 // Object errors
 OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
 OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
 OBJECT_REQUIRED: "Field is required",
 OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
 OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
 // Array errors
 ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
 ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
 ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
 ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
 // Format errors
 FORMAT_CUSTOM: "Format validation failed ({message})",
 KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
 // Schema structure
 CIRCULAR_REFERENCE: "Circular $refs: {urls}",
 // Non-standard validation options
 UNKNOWN_PROPERTY: "Unknown property (not in schema)",
 // Custom error codes
 WRONG_JSON:"Must be a valid JSON",
 WRONG_BOOL:"Must be a boolean",
 WRONG_EMAIL:"Must be a valid email address",
 WRONG_INTEGER:"Must be an integer",
 WRONG_DOMAIN:"Must be a valid domain name",
 WRONG_UID:"Use Latin letters, numbers and symbols . @ _",
 WRONG_NAME:"Use the usual letters for the name",
 WRONG_PHONE: "Enter plus, then country code prefix, then dot, then digits without spaces. For example: +380.502120211",
 WRONG_CONST: "Invalid const value",
 WRONG_RRTYPE: "Unknown type",
 WRONG_TTL: "Use integer value from 0 to 2147483647",
 WRONG_ZONEBASE: "Use fqdn based on zone name",
 WRONG_RELATIVE:"Use valid relative domain name",
 WRONG_FQDN:"Use full qualified domain name with dot in the end",
 WRONG_MX:"Use preference field (value 0 to 65535) followed by full qualified domain name with dot in the end",
 WRONG_A:"Use quad-dotted notation of four decimal integers, ranging from 0 to 255 each. Example: 192.168.0.1",
 WRONG_AAAA:"Use eight groups of four hexadecimal digits separated by colons (:)",
 WRONG_TXT:"Each word is treated as a separate string unless one or more strings are enclosed in quotes",
 WRONG_TSIGKEY:"Must be valid fqdn",
 WRONG_TSIGSECRET:"Use ascii chars only",
 WRONG_BASE64:"Wrong base64 encoding",
 WRONG_YEAR:"Use two-digit year format",
 WRONG_MONTH:"Use two-digit month format", 
 WRONG_CVV_TYPE:"Should be 3 digits long",
 WRONG_YEAR_VALUE:"This year in the past", 
 WRONG_CREDITCARD:"Use digits and spaces only",
 WRONG_CREDITCARD_LENGTH:"Should be 16 digits long",
 WRONG_CVV_LENGTH:"CVV code is required",
 WRONG_HOLDERNAME_LENGTH:"Holder name is required", 
 WRONG_HOLDERNAME_FORMAT:"Enter the name of the holder from the credit card",
 WRONG_CREDITCARD_NUMBER:"Use real Credit card number (not collection of random digits)",
 WRONG_CC_LENGTH:"Country code is required",
 WRONG_2ALPHA_CC:"Wrong Alpha 2 country code",
 WRONG_3ALPHA_CC:"Wrong Alpha 3 country code",
 WRONG_POSITIVE_NUMBER:"Should be a positive number",
 WRONG_CURRENCY_VALUE:"Should be a correct currency",
 WRONG_CONTACTID_UAEPP:"Should be a correct contact ID (UAEPP)",
 WRONG_ASCII_STRING:"Use only ascii characters",
 WRONG_UTF8_STRING255_LENGTH:"UTF string should be up to 255 characters",
 WRONG_UTF8_STRING16_LENGTH:"UTF string should be up to 16 characters",
 WRONG_AUTHINFO_UAEPP:"Should be a correct authInfo code (UAEPP)"
};

function ValidationError(code, params, dataPath, schemaPath, subErrors) {
 Error.call(this);
 if (code === undefined) {
  throw new Error ("No error code supplied: " + schemaPath);
 }
 this.message = '';
 this.params = params;
 this.code = code;
 this.dataPath = dataPath || "";
 this.schemaPath = schemaPath || "";
 this.subErrors = subErrors || null;

 var err = new Error(this.message);
 this.stack = err.stack || err.stacktrace;
 if (!this.stack) {
  try {
   throw err;
  }
  catch(err) {
   this.stack = err.stack || err.stacktrace;
  }
 }
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.prototype.name = 'ValidationError';

ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
 if (dataPrefix !== null) {
  dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
  this.dataPath = "/" + dataPrefix + this.dataPath;
 }
 if (schemaPrefix !== null) {
  schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
  this.schemaPath = "/" + schemaPrefix + this.schemaPath;
 }
 if (this.subErrors !== null) {
  for (var i = 0; i < this.subErrors.length; i++) {
   this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
  }
 }
 return this;
};

function isTrustedUrl(baseUrl, testUrl) {
 if(testUrl.substring(0, baseUrl.length) === baseUrl){
  var remainder = testUrl.substring(baseUrl.length);
  if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/")
   || remainder.charAt(0) === "#"
   || remainder.charAt(0) === "?") {
   return true;
  }
 }
 return false;
}

var languages = {};
function createApi(language) {
 var globalContext = new ValidatorContext();
 var currentLanguage;
 var customErrorReporter;
 var api = {
  setErrorReporter: function (reporter) {
   if (typeof reporter === 'string') {
    return this.language(reporter);
   }
   customErrorReporter = reporter;
   return true;
  },
  addFormat: function () {
   globalContext.addFormat.apply(globalContext, arguments);
  },
  language: function (code) {
   if (!code) {
    return currentLanguage;
   }
   if (!languages[code]) {
    code = code.split('-')[0]; // fall back to base language
   }
   if (languages[code]) {
    currentLanguage = code;
    return code; // so you can tell if fall-back has happened
   }
   return false;
  },
  addLanguage: function (code, messageMap) {
   var key;
   for (key in ErrorCodes) {
    if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
     messageMap[ErrorCodes[key]] = messageMap[key];
    }
   }
   var rootCode = code.split('-')[0];
   if (!languages[rootCode]) { // use for base language if not yet defined
    languages[code] = messageMap;
    languages[rootCode] = messageMap;
   } else {
    languages[code] = Object.create(languages[rootCode]);
    for (key in messageMap) {
     if (typeof languages[rootCode][key] === 'undefined') {
      languages[rootCode][key] = messageMap[key];
     }
     languages[code][key] = messageMap[key];
    }
   }
   return this;
  },
  freshApi: function (language) {
   var result = createApi();
   if (language) {
    result.language(language);
   }
   return result;
  },
  validate: function (data, schema, checkRecursive, banUnknownProperties) {
   var def = defaultErrorReporter(currentLanguage);
   var errorReporter = customErrorReporter ? function (error, data, schema) {
    return customErrorReporter(error, data, schema) || def(error, data, schema);
   } : def;
   var context = new ValidatorContext(globalContext, false, errorReporter, checkRecursive, banUnknownProperties);
   if (typeof schema === "string") {
    schema = {"$ref": schema};
   }
   context.addSchema("", schema);
   var error = context.validateAll(data, schema, null, null, "");
   if (!error && banUnknownProperties) {
    error = context.banUnknownProperties(data, schema);
   }
   this.error = error;
   this.missing = context.missing;
   this.valid = (error === null);
   return this.valid;
  },
  validateResult: function () {
   var result = {};
   this.validate.apply(result, arguments);
   return result;
  },
  validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
   var def = defaultErrorReporter(currentLanguage);
   var errorReporter = customErrorReporter ? function (error, data, schema) {
    return customErrorReporter(error, data, schema) || def(error, data, schema);
   } : def;
   var context = new ValidatorContext(globalContext, true, errorReporter, checkRecursive, banUnknownProperties);
   if (typeof schema === "string") {
    schema = {"$ref": schema};
   }
   context.addSchema("", schema);
   context.validateAll(data, schema, null, null, "");
   if (banUnknownProperties) {
    context.banUnknownProperties(data, schema);
   }
   var result = {};
   result.errors = context.errors;
   result.missing = context.missing;
   result.valid = (result.errors.length === 0);
   return result;
  },
  addSchema: function () {
   return globalContext.addSchema.apply(globalContext, arguments);
  },
  getSchema: function () {
   return globalContext.getSchema.apply(globalContext, arguments);
  },
  getSchemaMap: function () {
   return globalContext.getSchemaMap.apply(globalContext, arguments);
  },
  getSchemaUris: function () {
   return globalContext.getSchemaUris.apply(globalContext, arguments);
  },
  getMissingUris: function () {
   return globalContext.getMissingUris.apply(globalContext, arguments);
  },
  dropSchemas: function () {
   globalContext.dropSchemas.apply(globalContext, arguments);
  },
  defineKeyword: function () {
   globalContext.defineKeyword.apply(globalContext, arguments);
  },
  defineError: function (codeName, codeNumber, defaultMessage) {
   if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
    throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
   }
   if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
    throw new Error('Code number must be an integer > 10000');
   }
   if (typeof ErrorCodes[codeName] !== 'undefined') {
    throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
   }
   if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
    throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
   }
   ErrorCodes[codeName] = codeNumber;
   ErrorCodeLookup[codeNumber] = codeName;
   ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
   for (var langCode in languages) {
    var language = languages[langCode];
    if (language[codeName]) {
     language[codeNumber] = language[codeNumber] || language[codeName];
    }
   }
  },
  reset: function () {
   globalContext.reset();
   this.error = null;
   this.missing = [];
   this.valid = true;
  },
  missing: [],
  error: null,
  valid: true,
  normSchema: normSchema,
  resolveUrl: resolveUrl,
  getDocumentUri: getDocumentUri,
  errorCodes: ErrorCodes
 };
 api.language(language || 'en');
 return api;
}

var tv4 = createApi();
tv4.addLanguage('en-gb', ErrorMessagesDefault);

//legacy property
tv4.tv4 = tv4;

return tv4; // used by _header.js to globalise.

(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/*! exports provided: importProductsFile, importFileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_functions_importProductsFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/functions/importProductsFile */ \"./src/functions/importProductsFile/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"importProductsFile\", function() { return _src_functions_importProductsFile__WEBPACK_IMPORTED_MODULE_0__[\"importProductsFile\"]; });\n\n/* harmony import */ var _src_functions_importFileParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/functions/importFileParser */ \"./src/functions/importFileParser/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"importFileParser\", function() { return _src_functions_importFileParser__WEBPACK_IMPORTED_MODULE_1__[\"importFileParser\"]; });\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYW5kbGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGFuZGxlci50cz8zNmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGltcG9ydFByb2R1Y3RzRmlsZSB9IGZyb20gJy4vc3JjL2Z1bmN0aW9ucy9pbXBvcnRQcm9kdWN0c0ZpbGUnO1xuaW1wb3J0IHsgaW1wb3J0RmlsZVBhcnNlciB9IGZyb20gJy4vc3JjL2Z1bmN0aW9ucy9pbXBvcnRGaWxlUGFyc2VyJztcblxuZXhwb3J0IHtcbiAgICBpbXBvcnRQcm9kdWN0c0ZpbGUsXG4gICAgaW1wb3J0RmlsZVBhcnNlclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./handler.ts\n");

/***/ }),

/***/ "./src/functions/importFileParser/index.ts":
/*!*************************************************!*\
  !*** ./src/functions/importFileParser/index.ts ***!
  \*************************************************/
/*! exports provided: importFileParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importFileParser\", function() { return importFileParser; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/import */ \"./src/functions/services/import.ts\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _libs_api_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/api-gateway */ \"./src/libs/api-gateway.ts\");\n\n\n\n\nconst importFileParser = async (event) => {\n    const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.S3({ region: _utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"REGION\"] });\n    const sqs = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.SQS();\n    console.log('importFileParser invoked with event: ', event);\n    for (const record of event.Records) {\n        console.log('importFileParser', 'parse record: ', record);\n        const bucketName = record.s3.bucket.name;\n        const objectKey = record.s3.object.key;\n        try {\n            const s3Object = await _services_import__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getObject(s3, bucketName, objectKey);\n            await _services_import__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createReadStream(s3Object, sqs);\n            await _services_import__WEBPACK_IMPORTED_MODULE_1__[\"default\"].copyObject(s3, bucketName, objectKey);\n            await _services_import__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteObject(s3, bucketName, objectKey);\n            console.log(`Lambda importFileParser transfer for the folder ${objectKey.split(\"/\")[1]} was done.`);\n        }\n        catch (error) {\n            console.log(\"Lambda importFileParser moving files error: \", error);\n            return Object(_libs_api_gateway__WEBPACK_IMPORTED_MODULE_3__[\"formatJSONResponse\"])({\n                message: error.message,\n            }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__[\"STATUS_CODE_ENUM\"].ServerError);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2ltcG9ydEZpbGVQYXJzZXIvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2ltcG9ydEZpbGVQYXJzZXIvaW5kZXgudHM/ZGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XG5pbXBvcnQgaW1wb3J0U2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvaW1wb3J0XCI7XG5pbXBvcnQgeyBSRUdJT04sIFNUQVRVU19DT0RFX0VOVU0gfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UgfSBmcm9tIFwiQGxpYnMvYXBpLWdhdGV3YXlcIjtcblxuZXhwb3J0IGNvbnN0IGltcG9ydEZpbGVQYXJzZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBzMyA9IG5ldyBBV1MuUzMoeyByZWdpb246IFJFR0lPTiB9KTtcbiAgICBjb25zdCBzcXMgPSBuZXcgQVdTLlNRUygpO1xuXG4gICAgY29uc29sZS5sb2coJ2ltcG9ydEZpbGVQYXJzZXIgaW52b2tlZCB3aXRoIGV2ZW50OiAnLCBldmVudCk7XG5cbiAgICBmb3IgKGNvbnN0IHJlY29yZCBvZiBldmVudC5SZWNvcmRzICkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW1wb3J0RmlsZVBhcnNlcicsICdwYXJzZSByZWNvcmQ6ICcsIHJlY29yZCk7XG5cbiAgICAgICAgY29uc3QgYnVja2V0TmFtZSA9IHJlY29yZC5zMy5idWNrZXQubmFtZTtcbiAgICAgICAgY29uc3Qgb2JqZWN0S2V5ID0gcmVjb3JkLnMzLm9iamVjdC5rZXk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHMzT2JqZWN0ID0gYXdhaXQgaW1wb3J0U2VydmljZS5nZXRPYmplY3QoczMsIGJ1Y2tldE5hbWUsIG9iamVjdEtleSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGltcG9ydFNlcnZpY2UuY3JlYXRlUmVhZFN0cmVhbShzM09iamVjdCwgc3FzKTtcbiAgICAgICAgICAgIGF3YWl0IGltcG9ydFNlcnZpY2UuY29weU9iamVjdChzMywgYnVja2V0TmFtZSwgb2JqZWN0S2V5KTtcbiAgICAgICAgICAgIGF3YWl0IGltcG9ydFNlcnZpY2UuZGVsZXRlT2JqZWN0KHMzLCBidWNrZXROYW1lLCBvYmplY3RLZXkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgYExhbWJkYSBpbXBvcnRGaWxlUGFyc2VyIHRyYW5zZmVyIGZvciB0aGUgZm9sZGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RLZXkuc3BsaXQoXCIvXCIpWzFdXG4gICAgICAgICAgICAgICAgICAgIH0gd2FzIGRvbmUuYFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxhbWJkYSBpbXBvcnRGaWxlUGFyc2VyIG1vdmluZyBmaWxlcyBlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICB9LCBTVEFUVVNfQ09ERV9FTlVNLlNlcnZlckVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/importFileParser/index.ts\n");

/***/ }),

/***/ "./src/functions/importProductsFile/index.ts":
/*!***************************************************!*\
  !*** ./src/functions/importProductsFile/index.ts ***!
  \***************************************************/
/*! exports provided: importProductsFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importProductsFile\", function() { return importProductsFile; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.ts\");\n/* harmony import */ var _libs_api_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/api-gateway */ \"./src/libs/api-gateway.ts\");\n\n\n\nconst importProductsFile = async (event) => {\n    try {\n        const name = event.queryStringParameters.name;\n        if (!name) {\n            return Object(_libs_api_gateway__WEBPACK_IMPORTED_MODULE_2__[\"formatJSONResponse\"])({\n                message: \"Cannot read property 'name' of undefined\"\n            }, _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE_ENUM\"].NotFound);\n        }\n        const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.S3({ region: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"REGION\"] });\n        const params = {\n            Bucket: _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"BUCKET_NAME\"],\n            Key: `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"S3_IMPORT_FOLDERS_ENUM\"].Uploaded}/${name}`,\n            Expires: 60,\n            ContentType: 'text/csv',\n        };\n        const url = s3.getSignedUrl('putObject', params);\n        if (!url) {\n            throw new Error(\"Can not get URL\");\n        }\n        return Object(_libs_api_gateway__WEBPACK_IMPORTED_MODULE_2__[\"formatJSONResponse\"])({ url }, _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE_ENUM\"].OK);\n    }\n    catch (err) {\n        console.log(err);\n        return Object(_libs_api_gateway__WEBPACK_IMPORTED_MODULE_2__[\"formatJSONResponse\"])({\n            message: err\n        }, _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"STATUS_CODE_ENUM\"].ServerError);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2ltcG9ydFByb2R1Y3RzRmlsZS9pbmRleC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaW1wb3J0UHJvZHVjdHNGaWxlL2luZGV4LnRzPzk1YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IHsgQlVDS0VUX05BTUUsIFJFR0lPTiwgUzNfSU1QT1JUX0ZPTERFUlNfRU5VTSwgU1RBVFVTX0NPREVfRU5VTSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCJAbGlicy9hcGktZ2F0ZXdheVwiO1xuXG5leHBvcnQgY29uc3QgaW1wb3J0UHJvZHVjdHNGaWxlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycy5uYW1lO1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDYW5ub3QgcmVhZCBwcm9wZXJ0eSAnbmFtZScgb2YgdW5kZWZpbmVkXCJcbiAgICAgICAgICAgIH0sIFNUQVRVU19DT0RFX0VOVU0uTm90Rm91bmQpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzMyA9IG5ldyBBV1MuUzMoeyByZWdpb246IFJFR0lPTiB9KTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgQnVja2V0OiBCVUNLRVRfTkFNRSxcbiAgICAgICAgICAgIEtleTogYCR7UzNfSU1QT1JUX0ZPTERFUlNfRU5VTS5VcGxvYWRlZH0vJHtuYW1lfWAsXG4gICAgICAgICAgICBFeHBpcmVzOiA2MCxcbiAgICAgICAgICAgIENvbnRlbnRUeXBlOiAndGV4dC9jc3YnLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsID0gczMuZ2V0U2lnbmVkVXJsKCdwdXRPYmplY3QnLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGdldCBVUkxcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHsgdXJsIH0sIFNUQVRVU19DT0RFX0VOVU0uT0spXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJcbiAgICAgICAgfSwgU1RBVFVTX0NPREVfRU5VTS5TZXJ2ZXJFcnJvcilcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/importProductsFile/index.ts\n");

/***/ }),

/***/ "./src/functions/services/import.ts":
/*!******************************************!*\
  !*** ./src/functions/services/import.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csv-parser */ \"csv-parser\");\n/* harmony import */ var csv_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csv_parser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./src/utils/constants.ts\");\n\n\nclass ImportService {\n    async getObject(s3, bucketName, objectKey) {\n        try {\n            const s3Object = await s3.getObject({\n                Bucket: bucketName,\n                Key: objectKey,\n            });\n            console.log(\"Lambda importFileParser selected object: \", s3Object);\n            return s3Object;\n        }\n        catch (err) {\n            console.log('getObject ERROR', err);\n            throw new Error(err);\n        }\n    }\n    ;\n    async createReadStream(s3Object, sqs) {\n        return new Promise((res, rej) => {\n            s3Object\n                .createReadStream()\n                .pipe(csv_parser__WEBPACK_IMPORTED_MODULE_0___default()())\n                .on('data', async (data) => {\n                try {\n                    await this.sendMessageToSQS(sqs, JSON.stringify(data));\n                    console.log(\"Message has been sent to SQS\", data);\n                }\n                catch (err) {\n                    console.error('Error occurred during sending data to SQS: ', err);\n                    console.log('Tried to send data: ', data);\n                }\n            })\n                .on(\"error\", (error) => {\n                console.log(\"createReadStream ERROR\", rej, error);\n            })\n                .on(\"end\", () => {\n                console.log(\"END\", res);\n            });\n        });\n    }\n    ;\n    async copyObject(s3, bucketName, objectKey) {\n        try {\n            await s3\n                .copyObject({\n                Bucket: bucketName,\n                CopySource: `${bucketName}/${objectKey}`,\n                Key: objectKey.replace(_utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"S3_IMPORT_FOLDERS_ENUM\"].Uploaded, _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"S3_IMPORT_FOLDERS_ENUM\"].Parsed),\n            })\n                .promise();\n        }\n        catch (err) {\n            console.log('copyObject ERROR', err);\n            throw new Error(err);\n        }\n    }\n    ;\n    async deleteObject(s3, bucketName, objectKey) {\n        try {\n            await s3\n                .deleteObject({\n                Bucket: bucketName,\n                Key: objectKey,\n            })\n                .promise();\n        }\n        catch (err) {\n            console.log('deleteObject ERROR', err);\n            throw new Error(err);\n        }\n    }\n    ;\n    async sendMessageToSQS(sqs, messageBody) {\n        await sqs.sendMessage({\n            QueueUrl: process.env.SQS_URL,\n            MessageBody: JSON.stringify(messageBody),\n        }, (error, data) => {\n            if (error) {\n                console.log('SQS error', error);\n                throw Error(error);\n            }\n            console.log(`Send message: ${data}`);\n        });\n    }\n    ;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ImportService());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3NlcnZpY2VzL2ltcG9ydC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvc2VydmljZXMvaW1wb3J0LnRzPzRmYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzdiBmcm9tIFwiY3N2LXBhcnNlclwiO1xuaW1wb3J0IHsgUzNfSU1QT1JUX0ZPTERFUlNfRU5VTSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdGFudHNcIjtcblxuY2xhc3MgSW1wb3J0U2VydmljZSB7XG4gICAgYXN5bmMgZ2V0T2JqZWN0KHMzLCBidWNrZXROYW1lLCBvYmplY3RLZXkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHMzT2JqZWN0ID0gYXdhaXQgczMuZ2V0T2JqZWN0KHtcbiAgICAgICAgICAgICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsXG4gICAgICAgICAgICAgICAgS2V5OiBvYmplY3RLZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGFtYmRhIGltcG9ydEZpbGVQYXJzZXIgc2VsZWN0ZWQgb2JqZWN0OiBcIiwgczNPYmplY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHMzT2JqZWN0O1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRPYmplY3QgRVJST1InLCBlcnIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luYyBjcmVhdGVSZWFkU3RyZWFtICggczNPYmplY3QsIHNxcyApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgczNPYmplY3RcbiAgICAgICAgICAgICAgICAuY3JlYXRlUmVhZFN0cmVhbSgpXG4gICAgICAgICAgICAgICAgLnBpcGUoY3N2KCkpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgYXN5bmMgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlVG9TUVMoc3FzLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBoYXMgYmVlbiBzZW50IHRvIFNRU1wiLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGR1cmluZyBzZW5kaW5nIGRhdGEgdG8gU1FTOiAnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RyaWVkIHRvIHNlbmQgZGF0YTogJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbihcImVycm9yXCIsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVJlYWRTdHJlYW0gRVJST1JcIiwgcmVqLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVORFwiLCByZXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBhc3luYyBjb3B5T2JqZWN0IChzMywgYnVja2V0TmFtZSwgb2JqZWN0S2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBzM1xuICAgICAgICAgICAgICAgIC5jb3B5T2JqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgQnVja2V0OiBidWNrZXROYW1lLFxuICAgICAgICAgICAgICAgICAgICBDb3B5U291cmNlOiBgJHtidWNrZXROYW1lfS8ke29iamVjdEtleX1gLFxuICAgICAgICAgICAgICAgICAgICBLZXk6IG9iamVjdEtleS5yZXBsYWNlKFMzX0lNUE9SVF9GT0xERVJTX0VOVU0uVXBsb2FkZWQsIFMzX0lNUE9SVF9GT0xERVJTX0VOVU0uUGFyc2VkXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAucHJvbWlzZSgpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb3B5T2JqZWN0IEVSUk9SJywgZXJyKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgZGVsZXRlT2JqZWN0IChzMywgYnVja2V0TmFtZSwgb2JqZWN0S2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBzM1xuICAgICAgICAgICAgICAgIC5kZWxldGVPYmplY3Qoe1xuICAgICAgICAgICAgICAgICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIEtleTogb2JqZWN0S2V5LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnByb21pc2UoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlT2JqZWN0IEVSUk9SJywgZXJyKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2VUb1NRUyAoc3FzLCBtZXNzYWdlQm9keSkge1xuICAgICAgICBhd2FpdCBzcXMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUXVldWVVcmw6IHByb2Nlc3MuZW52LlNRU19VUkwsXG4gICAgICAgICAgICAgICAgTWVzc2FnZUJvZHk6IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VCb2R5KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NRUyBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU2VuZCBtZXNzYWdlOiAke2RhdGF9YCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbXBvcnRTZXJ2aWNlKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/services/import.ts\n");

/***/ }),

/***/ "./src/libs/api-gateway.ts":
/*!*********************************!*\
  !*** ./src/libs/api-gateway.ts ***!
  \*********************************/
/*! exports provided: formatJSONResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatJSONResponse\", function() { return formatJSONResponse; });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants */ \"./src/utils/constants.ts\");\n\nconst formatJSONResponse = (response, statusCode) => {\n    return {\n        body: JSON.stringify(response),\n        statusCode,\n        headers: _utils_constants__WEBPACK_IMPORTED_MODULE_0__[\"HEADERS\"],\n        isBase64Encoded: false,\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWJzL2FwaS1nYXRld2F5LnRzPzUzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0LCBIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIlxuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSBcImpzb24tc2NoZW1hLXRvLXRzXCI7XG5pbXBvcnQgeyBIRUFERVJTIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwgc3RhdHVzQ29kZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcbiAgICBzdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IEhFQURFUlMsXG4gICAgaXNCYXNlNjRFbmNvZGVkOiBmYWxzZSxcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: HEADERS, BUCKET_NAME, REGION, S3_IMPORT_FOLDERS_ENUM, STATUS_CODE_ENUM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERS\", function() { return HEADERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUCKET_NAME\", function() { return BUCKET_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGION\", function() { return REGION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"S3_IMPORT_FOLDERS_ENUM\", function() { return S3_IMPORT_FOLDERS_ENUM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STATUS_CODE_ENUM\", function() { return STATUS_CODE_ENUM; });\nconst HEADERS = {\n    \"Access-Control-Allow-Headers\": \"Content-Type\",\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Methods\": \"OPTIONS,POST,GET\",\n    'Content-Type': 'application/json',\n};\nconst BUCKET_NAME = \"electronic-shop-service-files\";\nconst REGION = \"us-east-1\";\nvar S3_IMPORT_FOLDERS_ENUM;\n(function (S3_IMPORT_FOLDERS_ENUM) {\n    S3_IMPORT_FOLDERS_ENUM[\"Uploaded\"] = \"uploaded\";\n    S3_IMPORT_FOLDERS_ENUM[\"Parsed\"] = \"parsed\";\n})(S3_IMPORT_FOLDERS_ENUM || (S3_IMPORT_FOLDERS_ENUM = {}));\nvar STATUS_CODE_ENUM;\n(function (STATUS_CODE_ENUM) {\n    STATUS_CODE_ENUM[STATUS_CODE_ENUM[\"OK\"] = 200] = \"OK\";\n    STATUS_CODE_ENUM[STATUS_CODE_ENUM[\"Created\"] = 201] = \"Created\";\n    STATUS_CODE_ENUM[STATUS_CODE_ENUM[\"BadRequest\"] = 400] = \"BadRequest\";\n    STATUS_CODE_ENUM[STATUS_CODE_ENUM[\"NotFound\"] = 404] = \"NotFound\";\n    STATUS_CODE_ENUM[STATUS_CODE_ENUM[\"Conflict\"] = 409] = \"Conflict\";\n    STATUS_CODE_ENUM[STATUS_CODE_ENUM[\"ServerError\"] = 500] = \"ServerError\";\n})(STATUS_CODE_ENUM || (STATUS_CODE_ENUM = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cz85NjEzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBIRUFERVJTID0ge1xuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIkNvbnRlbnQtVHlwZVwiLFxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIk9QVElPTlMsUE9TVCxHRVRcIixcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxufTtcblxuZXhwb3J0IGNvbnN0IEJVQ0tFVF9OQU1FID0gXCJlbGVjdHJvbmljLXNob3Atc2VydmljZS1maWxlc1wiO1xuXG5leHBvcnQgY29uc3QgUkVHSU9OID0gXCJ1cy1lYXN0LTFcIjtcblxuZXhwb3J0IGVudW0gUzNfSU1QT1JUX0ZPTERFUlNfRU5VTSB7XG4gICAgVXBsb2FkZWQgPSBcInVwbG9hZGVkXCIsXG4gICAgUGFyc2VkID0gXCJwYXJzZWRcIlxufVxuXG5leHBvcnQgZW51bSBTVEFUVVNfQ09ERV9FTlVNIHtcbiAgICBPSyA9IDIwMCxcbiAgICBDcmVhdGVkID0gMjAxLFxuICAgIEJhZFJlcXVlc3QgPSA0MDAsXG4gICAgTm90Rm91bmQgPSA0MDQsXG4gICAgQ29uZmxpY3QgPSA0MDksXG4gICAgU2VydmVyRXJyb3IgPSA1MDAsXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/constants.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNkay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIj81MTQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ }),

/***/ "csv-parser":
/*!*****************************!*\
  !*** external "csv-parser" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"csv-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3N2LXBhcnNlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNzdi1wYXJzZXJcIj9jNWFjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNzdi1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///csv-parser\n");

/***/ })

/******/ })));
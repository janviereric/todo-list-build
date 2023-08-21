/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
  letter-spacing: 0.1rem;
  cursor: default;
}

a {
  text-decoration: none;
}

body {
  font-size: 10px;
}

/* header start */
header {
  background-color: #8395a7;
  height: 3rem;
}

.container-title-logo {
  display: flex;
  justify-content: center;
}

.text-title-logo {
  font-size: 1rem;
  cursor: pointer;
  padding: 0.6rem;
  margin-top: 0.2rem;
  color: #f5f6fa;
}

.text-title-logo:hover {
  transition: all 0.2s;
  color: #4d4d4d;
  background-color: #c8d6e5;
  border-radius: 0.2rem;
}
/* header end */

/* main start*/
main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 30rem;
}

.container-todo-list {
  margin-top: 5rem;
  border: 0.1rem solid #979393;
  padding: 1rem;
  width: 40%;
}

legend {
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}

.title-todo-list {
  font-size: 1.2rem;
  font-weight: bold;
  color: #f5f6fa;
  background-color: #8395a7;
  border-radius: 0.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.container-input-button {
  display: flex;
}

input {
  margin-right: 0.5rem;
  padding: 0.4rem 1rem;
  outline: 0;
  border: 0.1rem solid #979393;
  border-radius: 0.2rem;
  flex: 1;
}

li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

li fieldset {
  margin-bottom: 2rem;
  border: 0.1rem solid #979393;
  padding: 0.5rem;
  width: 100%;
}

.title-todo {
  font-size: 0.8rem;
}

.number {
  color: #05b562;
  font-weight: bold;
}

.container-done-text-todo-check {
  margin-bottom: 1rem;
  font-size: 0.8rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(240, 240, 240);
  font-weight: bold;
  border-radius: 0.2rem;
  transition: all 0.2s;
}

.container-done-text-todo-check:hover {
  background-color: linen;
  border-radius: 0.2rem;
}

.todo {
  height: 2rem;
  width: 2rem;
  border-radius: 2.5rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  color: #05b562;
  border: 0.1rem solid #05b562;
}

.effect {
  text-decoration: line-through;
}

.done {
  height: 2rem;
  width: 2rem;
  border-radius: 2.5rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #f5f6fa;
  background-color: #05b562;
}

.container-text-todo {
  margin-left: 3rem;
  margin-right: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-square {
  font-size: 1.5rem;
  cursor: pointer;
  color: #4d4d4d;
}

.fa-square-check {
  font-size: 1.5rem;
  cursor: pointer;
  color: #05b562;
}

.container-button {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.button {
  border: none;
  color: #f5f6fa;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  height: 2rem;
  width: 7rem;
  margin-left: 1rem;
  margin-right: 1rem;
  transition: all 0.2s;
}

.button:hover {
  opacity: 89%;
  cursor: pointer;
}

#add-button {
  background-color: #05b562;
}

#edit-button,
#save-button {
  background-color: #4a69bd;
}

#delete-button,
#cancel-button {
  background-color: #e84118;
}

#edit-title-todo {
  font-size: 0.8rem;
}

.container-edit-text-todo-input {
  display: flex;
}

.container-edit-text-todo-input input {
  margin-bottom: 0;
  margin-left: 2.5rem;
  margin-right: 0;
}

.container-text-info-input {
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}

.container-text-info {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.invalid {
  color: #d63031;
  font-weight: bold;
}

.invisible {
  display: none;
}

.valid {
  color: green;
  font-weight: bold;
}

.emojis {
  font-size: 1rem;
  color: #4d4d4d;
}
/* main end*/

/* footer start */
footer {
  height: 8rem;
  background-color: #4d4d4d;
  color: #f5f6fa;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 1rem;
  width: 1rem;
  margin-bottom: -0.1rem;
}

.j {
  font-family: "Roboto Condensed", sans-seri;
}

.e {
  font-family: "Roboto Condensed", sans-seri;
}
/* footer end */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Mulish\", sans-serif;\n  letter-spacing: 0.1rem;\n  cursor: default;\n}\n\na {\n  text-decoration: none;\n}\n\nbody {\n  font-size: 10px;\n}\n\n/* header start */\nheader {\n  background-color: #8395a7;\n  height: 3rem;\n}\n\n.container-title-logo {\n  display: flex;\n  justify-content: center;\n}\n\n.text-title-logo {\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 0.6rem;\n  margin-top: 0.2rem;\n  color: #f5f6fa;\n}\n\n.text-title-logo:hover {\n  transition: all 0.2s;\n  color: #4d4d4d;\n  background-color: #c8d6e5;\n  border-radius: 0.2rem;\n}\n/* header end */\n\n/* main start*/\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10rem;\n  margin-bottom: 30rem;\n}\n\n.container-todo-list {\n  margin-top: 5rem;\n  border: 0.1rem solid #979393;\n  padding: 1rem;\n  width: 40%;\n}\n\nlegend {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1rem;\n}\n\n.title-todo-list {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #f5f6fa;\n  background-color: #8395a7;\n  border-radius: 0.2rem;\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n}\n\n.container-input-button {\n  display: flex;\n}\n\ninput {\n  margin-right: 0.5rem;\n  padding: 0.4rem 1rem;\n  outline: 0;\n  border: 0.1rem solid #979393;\n  border-radius: 0.2rem;\n  flex: 1;\n}\n\nli {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\nli fieldset {\n  margin-bottom: 2rem;\n  border: 0.1rem solid #979393;\n  padding: 0.5rem;\n  width: 100%;\n}\n\n.title-todo {\n  font-size: 0.8rem;\n}\n\n.number {\n  color: #05b562;\n  font-weight: bold;\n}\n\n.container-done-text-todo-check {\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(240, 240, 240);\n  font-weight: bold;\n  border-radius: 0.2rem;\n  transition: all 0.2s;\n}\n\n.container-done-text-todo-check:hover {\n  background-color: linen;\n  border-radius: 0.2rem;\n}\n\n.todo {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 2.5rem;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1rem;\n  color: #05b562;\n  border: 0.1rem solid #05b562;\n}\n\n.effect {\n  text-decoration: line-through;\n}\n\n.done {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 2.5rem;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  color: #f5f6fa;\n  background-color: #05b562;\n}\n\n.container-text-todo {\n  margin-left: 3rem;\n  margin-right: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fa-square {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #4d4d4d;\n}\n\n.fa-square-check {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #05b562;\n}\n\n.container-button {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.button {\n  border: none;\n  color: #f5f6fa;\n  font-weight: bold;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  border-radius: 0.2rem;\n  height: 2rem;\n  width: 7rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  transition: all 0.2s;\n}\n\n.button:hover {\n  opacity: 89%;\n  cursor: pointer;\n}\n\n#add-button {\n  background-color: #05b562;\n}\n\n#edit-button,\n#save-button {\n  background-color: #4a69bd;\n}\n\n#delete-button,\n#cancel-button {\n  background-color: #e84118;\n}\n\n#edit-title-todo {\n  font-size: 0.8rem;\n}\n\n.container-edit-text-todo-input {\n  display: flex;\n}\n\n.container-edit-text-todo-input input {\n  margin-bottom: 0;\n  margin-left: 2.5rem;\n  margin-right: 0;\n}\n\n.container-text-info-input {\n  margin-left: 0.2rem;\n  margin-top: 0.2rem;\n}\n\n.container-text-info {\n  margin-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.invalid {\n  color: #d63031;\n  font-weight: bold;\n}\n\n.invisible {\n  display: none;\n}\n\n.valid {\n  color: green;\n  font-weight: bold;\n}\n\n.emojis {\n  font-size: 1rem;\n  color: #4d4d4d;\n}\n/* main end*/\n\n/* footer start */\nfooter {\n  height: 8rem;\n  background-color: #4d4d4d;\n  color: #f5f6fa;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nimg {\n  height: 1rem;\n  width: 1rem;\n  margin-bottom: -0.1rem;\n}\n\n.j {\n  font-family: \"Roboto Condensed\", sans-seri;\n}\n\n.e {\n  font-family: \"Roboto Condensed\", sans-seri;\n}\n/* footer end */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var ul = document.querySelector("ul");
var form = document.querySelector("form");
var input = document.querySelector("#input-todo");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var value = input.value;
  input.value = "";
  addTodo(value);
});
var addTodo = function addTodo(text) {
  text = text.trim();
  var textInfoRule = document.querySelector("#text-info-input");
  if (text.length > 4 && text.length < 101) {
    textInfoRule.classList.remove("invalid");
    textInfoRule.classList.add("invisible");
    todos.push({
      text: "".concat(text[0].toUpperCase()).concat(text.slice(1)),
      done: false,
      effect: false,
      check: false,
      editMode: false,
      add: true,
      success: false,
      failure: false,
      rule: false,
      update: false,
      warning: false,
      cancel: false
    });
    displayTodo();
  } else {
    textInfoRule.classList.remove("invisible");
    textInfoRule.classList.add("invalid");
    textInfoRule.innerHTML = "Le champs doit contenir entre 5 et 100 caractères.";
    setTimeout(function () {
      textInfoRule.classList.remove("invalid");
      textInfoRule.classList.add("invisible");
    }, 5000);
  }
};
var todos = [{
  text: "Je suis la Todo numéros 1",
  done: false,
  effect: false,
  check: false,
  editMode: false,
  add: false,
  success: false,
  failure: false,
  rule: false,
  update: false,
  warning: false,
  cancel: false
}, {
  text: "Je suis la Todo numéros 2",
  done: false,
  effect: false,
  check: false,
  editMode: false,
  add: false,
  success: false,
  failure: false,
  rule: false,
  update: false,
  warning: false,
  cancel: false
}];
var displayTodo = function displayTodo() {
  var todosElement = todos.map(function (todo, index) {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append.apply(ul, _toConsumableArray(todosElement));
};
var createTodoElement = function createTodoElement(todo, index) {
  var li = document.createElement("li");
  li.innerHTML = " \n    <fieldset>\n      <legend class=\"title-todo\">\n        Ma t\xE2che n\xB0<span class=\"number\">".concat(index + 1, "</span> :\n      </legend>\n      <div class=\"container-done-text-todo-check\">\n        <span class=\"").concat(todo.done ? "done" : "todo", "\"> ").concat(todo.done ? "ok" : index + 1, "</span> \n        <div class=\"container-text-todo\">\n          <p class=\"text-todo ").concat(todo.effect ? "effect" : "", "\">").concat(todo.text, "</p>\n        </div>\n        <span>").concat(todo.check ? "<i id='check-button' class='fa-regular fa-square-check'></i>" : "<i id='check-button' class='fa-regular fa-square'></i>", "</span>\n      </div>\n      <div class=\"container-text-info\">\n        <small id=\"text-info-add\" class=\"invisible\">").concat(todo.add ? "Nouvelle Todo ajouté." : "", "</small>\n        <small id=\"text-info-success\" class=\"invisible\">").concat(todo.success ? "Bravo, la Todo a été accompli <i class='emojis fa-regular fa-face-laugh-beam'></i>" : "", "</small>\n        <small id=\"text-info-failure\" class=\"invisible\">").concat(todo.failure ? "Mince, la Todo n'a pas été accompli <i class='emojis fa-regular fa-face-sad-tear'></i>" : "", "</small>\n        <small id=\"text-info-update\" class=\"invisible\"> ").concat(todo.update ? "La Todo a été mise à jour avec succès." : "", "</small>\n        <small id=\"text-info-cancel\" class=\"invisible\">").concat(todo.cancel ? "Modification en cours annulé." : "", "</small>\n      </div>\n      <div class=\"container-button\">\n        <button id=\"edit-button\" class=\"button\">Editer</button>\n        <button id=\"delete-button\" class=\"button\">Supprimer</button>\n      </div>\n    </fieldset>\n  ");
  var editButton = li.querySelector("#edit-button");
  editButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleEditMode(index);
  });
  var deleteButton = li.querySelector("#delete-button");
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteTodo(index);
  });
  var checkButton = li.querySelector("#check-button");
  checkButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleTodo(index);
  });
  var textInfoAdd = li.querySelector("#text-info-add");
  var textInfoSuccess = li.querySelector("#text-info-success");
  var textInfoFailure = li.querySelector("#text-info-failure");
  var textInfoUpdate = li.querySelector("#text-info-update");
  var textInfoCancel = li.querySelector("#text-info-cancel");
  if (todo.add) {
    textInfoAdd.classList.add("valid");
    textInfoAdd.classList.remove("invisible");
    todo.add = false;
    setTimeout(function () {
      textInfoAdd.classList.remove("valid");
      textInfoAdd.classList.add("invisible");
    }, 2000);
  }
  if (todo.check) {
    if (!todo.editMode) {
      todo.failure = false;
      todo.success = false;
      todo.cancel = false;
      textInfoSuccess.classList.add("valid");
      textInfoSuccess.classList.remove("invisible");
      setTimeout(function () {
        textInfoSuccess.classList.remove("valid");
        textInfoSuccess.classList.add("invisible");
      }, 2000);
    }
  } else {
    todo.success = false;
    todo.failure = false;
    todo.cancel = false;
    textInfoFailure.classList.add("invalid");
    textInfoFailure.classList.remove("invisible");
    setTimeout(function () {
      textInfoFailure.classList.remove("invalid");
      textInfoFailure.classList.add("invisible");
    }, 2000);
  }
  if (!todo.editMode) {
    if (todo.update) {
      todo.cancel = false;
      todo.update = false;
      todo.warning = false;
      textInfoUpdate.classList.add("valid");
      textInfoUpdate.classList.remove("invisible");
      setTimeout(function () {
        textInfoUpdate.classList.remove("valid");
        textInfoUpdate.classList.add("invisible");
      }, 2000);
    } else {
      textInfoCancel.classList.add("invalid");
      textInfoCancel.classList.remove("invisible");
      setTimeout(function () {
        textInfoCancel.classList.remove("invalid");
        textInfoCancel.classList.add("invisible");
      }, 2000);
    }
  }
  return li;
};
var createTodoEditElement = function createTodoEditElement(todo, index) {
  var li = document.createElement("li");
  li.innerHTML = "\n  <fieldset>\n    <legend class=\"edit-title-todo\">\n      Ma t\xE2che n\xB0<span class=\"number\">".concat(index + 1, "</span> :\n    </legend>\n    <div class=\"container-edit-text-todo-input\">\n      <span class=\"todo\">").concat(index + 1, "</span> \n      <input type=\"text\" />\n    </div>\n    <div\n    <div class=\"container-text-info-input\">\n      <small class=\"text-info-input\"></small>\n    </div>\n    <div class=\"container-text-info\">\n      <small id=\"text-info-warning\" class=\"invisible\">").concat(todo.warning ? "Veuillez modifier la Todo ou 'Annuler'." : "", "</small>\n    </div>\n    <div class=\"container-button\">\n      <button id=\"save-button\" class=\"button\">Sauvegarder</button>\n      <button id=\"cancel-button\" class=\"button\">Annuler</button>\n    </div>\n  </fieldset>\n  ");
  var input = li.querySelector("input");
  input.value = todo.text;
  var saveButton = li.querySelector("#save-button");
  saveButton.addEventListener("click", function (event) {
    if (input.value.length > 4 && input.value.length < 101) {
      if (input.value != todo.text) {
        editTodo(index, input);
      } else {
        var textInfoWarning = li.querySelector("#text-info-warning");
        textInfoWarning.classList.add("invalid");
        textInfoWarning.classList.remove("invisible");
        setTimeout(function () {
          textInfoWarning.classList.remove("invalid");
          textInfoWarning.classList.add("invisible");
        }, 2000);
      }
    } else {
      var textInfoRuleEditMode = li.querySelector("#text-info-input");
      textInfoRuleEditMode.classList.remove("invisible");
      textInfoRuleEditMode.classList.add("invalid");
      textInfoRuleEditMode.innerHTML = "Le champs doit contenir entre 5 et 100 caractères.";
      setTimeout(function () {
        textInfoRuleEditMode.classList.remove("invalid");
        textInfoRuleEditMode.classList.add("invisible");
      }, 3000);
    }
  });
  var cancelButton = li.querySelector("#cancel-button");
  cancelButton.addEventListener("click", function (event) {
    toggleEditMode(index);
  });
  return li;
};
var toggleTodo = function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  todos[index].effect = !todos[index].effect;
  todos[index].check = !todos[index].check;
  todos[index].success = !todos[index].success;
  todos[index].failure = !todos[index].failure;
  displayTodo();
};
var deleteTodo = function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodo();
};
var toggleEditMode = function toggleEditMode(index) {
  todos[index].editMode = !todos[index].editMode;
  todos[index].cancel = !todos[index].cancel;
  todos[index].warning = !todos[index].warning;
  todos[index].update = !todos[index].update;
  todos[index].cancel = true;
  todos[index].success = false;
  todos[index].failure = false;
  displayTodo();
};
var editTodo = function editTodo(index, input) {
  var value = input.value;
  todos[index].text = value;
  todos[index].done = false;
  todos[index].effect = false;
  todos[index].check = false;
  todos[index].editMode = false;
  displayTodo();
};
displayTodo();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map
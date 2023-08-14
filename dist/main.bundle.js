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
___CSS_LOADER_EXPORT___.push([module.id, `/* reset start */
* {
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

li {
  list-style-type: none;
}
/* reset end */

/* body start */
body {
  font-size: 10px;
}
/* body end */

/* header start */
header {
  background-color: #34ace0;
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
  background-color: #6a6a6a;
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
/* main end*/

/* todo start */
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
  color: #34ace0;
  background-color: #4d4d4d;
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

.text-info-danger {
  color: #d63031;
  font-weight: bold;
}

.text-info-none {
  display: none;
}

.text-info-succes {
  color: green;
  font-weight: bold;
}

.container-text-info {
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #34ace0;
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
  color: #34ace0;
  border: 0.1rem solid #4d4d4d;
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
  color: #34ace0;
  background-color: #4d4d4d;
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

.container-edit-delete-button {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
/* todo end */

/* edit start */
.edit-title-todo {
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

.container-edit-text-info {
  margin-left: 2.7rem;
  margin-top: 0.1rem;
}

.container-save-cancel-button {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
/* edit end */

/* button start */
.add-button {
  border: none;
  background-color: #05b562;
  color: #f5f6fa;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  height: 2rem;
  transition: all 0.2s;
}

.add-button:hover {
  background-color: #05c46b;
  cursor: pointer;
}

.edit-button,
.save-button {
  border: none;
  background-color: #4a69bd;
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

.edit-button:hover,
.save-button:hover {
  background-color: #718bd2;
  cursor: pointer;
}

.delete-button,
.cancel-button {
  border: none;
  background-color: #e84118;
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

.delete-button:hover,
.cancel-button:hover {
  background-color: #ff5e36;
  cursor: pointer;
}
/* button end */

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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* reset start */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Mulish\", sans-serif;\n  letter-spacing: 0.1rem;\n  cursor: default;\n}\n\na {\n  text-decoration: none;\n}\n\nli {\n  list-style-type: none;\n}\n/* reset end */\n\n/* body start */\nbody {\n  font-size: 10px;\n}\n/* body end */\n\n/* header start */\nheader {\n  background-color: #34ace0;\n  height: 3rem;\n}\n\n.container-title-logo {\n  display: flex;\n  justify-content: center;\n}\n\n.text-title-logo {\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 0.6rem;\n  margin-top: 0.2rem;\n  color: #f5f6fa;\n}\n\n.text-title-logo:hover {\n  transition: all 0.2s;\n  background-color: #6a6a6a;\n  border-radius: 0.2rem;\n}\n/* header end */\n\n/* main start*/\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10rem;\n  margin-bottom: 30rem;\n}\n/* main end*/\n\n/* todo start */\n.container-todo-list {\n  margin-top: 5rem;\n  border: 0.1rem solid #979393;\n  padding: 1rem;\n  width: 40%;\n}\n\nlegend {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1rem;\n}\n\n.title-todo-list {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: #34ace0;\n  background-color: #4d4d4d;\n  border-radius: 0.2rem;\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n}\n\n.container-input-button {\n  display: flex;\n}\n\ninput {\n  margin-right: 0.5rem;\n  padding: 0.4rem 1rem;\n  outline: 0;\n  border: 0.1rem solid #979393;\n  border-radius: 0.2rem;\n  flex: 1;\n}\n\n.text-info-danger {\n  color: #d63031;\n  font-weight: bold;\n}\n\n.text-info-none {\n  display: none;\n}\n\n.text-info-succes {\n  color: green;\n  font-weight: bold;\n}\n\n.container-text-info {\n  margin-left: 0.2rem;\n  margin-top: 0.2rem;\n}\n\nli {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nli fieldset {\n  margin-bottom: 2rem;\n  border: 0.1rem solid #979393;\n  padding: 0.5rem;\n  width: 100%;\n}\n\n.title-todo {\n  font-size: 0.8rem;\n}\n\n.number {\n  color: #34ace0;\n  font-weight: bold;\n}\n\n.container-done-text-todo-check {\n  margin-bottom: 1rem;\n  font-size: 0.8rem;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(240, 240, 240);\n  font-weight: bold;\n  border-radius: 0.2rem;\n  transition: all 0.2s;\n}\n\n.container-done-text-todo-check:hover {\n  background-color: linen;\n  border-radius: 0.2rem;\n}\n\n.todo {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 2.5rem;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1rem;\n  color: #34ace0;\n  border: 0.1rem solid #4d4d4d;\n}\n\n.effect {\n  text-decoration: line-through;\n}\n\n.done {\n  height: 2rem;\n  width: 2rem;\n  border-radius: 2.5rem;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  color: #34ace0;\n  background-color: #4d4d4d;\n}\n\n.container-text-todo {\n  margin-left: 3rem;\n  margin-right: 1rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.fa-square {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #4d4d4d;\n}\n\n.fa-square-check {\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #05b562;\n}\n\n.container-edit-delete-button {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n/* todo end */\n\n/* edit start */\n.edit-title-todo {\n  font-size: 0.8rem;\n}\n\n.container-edit-text-todo-input {\n  display: flex;\n}\n\n.container-edit-text-todo-input input {\n  margin-bottom: 0;\n  margin-left: 2.5rem;\n  margin-right: 0;\n}\n\n.container-edit-text-info {\n  margin-left: 2.7rem;\n  margin-top: 0.1rem;\n}\n\n.container-save-cancel-button {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n/* edit end */\n\n/* button start */\n.add-button {\n  border: none;\n  background-color: #05b562;\n  color: #f5f6fa;\n  font-weight: bold;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  border-radius: 0.2rem;\n  height: 2rem;\n  transition: all 0.2s;\n}\n\n.add-button:hover {\n  background-color: #05c46b;\n  cursor: pointer;\n}\n\n.edit-button,\n.save-button {\n  border: none;\n  background-color: #4a69bd;\n  color: #f5f6fa;\n  font-weight: bold;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  border-radius: 0.2rem;\n  height: 2rem;\n  width: 7rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  transition: all 0.2s;\n}\n\n.edit-button:hover,\n.save-button:hover {\n  background-color: #718bd2;\n  cursor: pointer;\n}\n\n.delete-button,\n.cancel-button {\n  border: none;\n  background-color: #e84118;\n  color: #f5f6fa;\n  font-weight: bold;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  border-radius: 0.2rem;\n  height: 2rem;\n  width: 7rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  transition: all 0.2s;\n}\n\n.delete-button:hover,\n.cancel-button:hover {\n  background-color: #ff5e36;\n  cursor: pointer;\n}\n/* button end */\n\n/* footer start */\nfooter {\n  height: 8rem;\n  background-color: #4d4d4d;\n  color: #f5f6fa;\n  font-size: 0.7rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nimg {\n  height: 1rem;\n  width: 1rem;\n  margin-bottom: -0.1rem;\n}\n\n.j {\n  font-family: \"Roboto Condensed\", sans-seri;\n}\n\n.e {\n  font-family: \"Roboto Condensed\", sans-seri;\n}\n/* footer end */\n"],"sourceRoot":""}]);
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
var input = document.querySelector(".input-todo");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var value = input.value;
  input.value = "";
  addTodo(value);
});
var addTodo = function addTodo(text) {
  text = text.trim();
  var small = document.querySelector("small");
  if (text.length > 4 && text.length < 101) {
    small.classList.add("text-info-none");
    small.classList.remove("text-info-danger");
    todos.push({
      text: "".concat(text[0].toUpperCase()).concat(text.slice(1)),
      done: false,
      check: false
    });
    displayTodo();
  } else {
    small.classList.add("text-info-danger");
    small.classList.remove("text-info-none");
    small.innerHTML = "Le champs doit contenir entre 5 et 100 caractères";
    setTimeout(function () {
      small.classList.remove("text-info-danger");
      small.classList.add("text-info-none");
    }, 10000);
  }
};
var todos = [{
  text: "Je suis la Todo numéros 1",
  done: false,
  effect: false,
  check: false,
  editMode: false
}, {
  text: "Je suis la Todo numéros 2",
  done: false,
  effect: false,
  check: false,
  editMode: false
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
  li.innerHTML = " \n  <fieldset class=\"container-todo\">\n  <legend class=\"title-todo\">\n    Ma t\xE2che n\xB0<span class=\"number\">".concat(index + 1, "</span> :\n  </legend>\n  <div class=\"container-done-text-todo-check\">\n    <span class=\"").concat(todo.done ? "done" : "todo", "\"> ").concat(todo.done ? "ok" : index + 1, "</span> \n    <div class=\"container-text-todo\">\n      <p class=\"text-todo ").concat(todo.effect ? "effect" : "", "\">").concat(todo.text, "</p>\n    </div>\n    <span>").concat(todo.check ? "<i class='fa-regular fa-square-check'></i>" : "<i class='fa-regular fa-square'></i>", "</span>\n  </div>\n  <div class=\"container-edit-delete-button\">\n    <button class=\"edit-button\">Editer</button>\n    <button class=\"delete-button\">Supprimer</button>\n  </div>\n</fieldset>\n  ");
  var editButton = li.querySelector(".edit-button");
  editButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleEditMode(index);
  });
  var deleteButton = li.querySelector(".delete-button");
  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteTodo(index);
  });
  var faRegular = li.querySelector(".fa-regular");
  faRegular.addEventListener("click", function (event) {
    toggleTodo(index);
  });
  return li;
};
var createTodoEditElement = function createTodoEditElement(todo, index) {
  var li = document.createElement("li");
  li.innerHTML = "\n  <fieldset class=\"container-edit-todo\">\n  <legend class=\"edit-title-todo\">\n    Ma t\xE2che n\xB0<span class=\"number\">".concat(index + 1, "</span> :\n  </legend>\n  <div class=\"container-edit-text-todo-input-text-info\">\n    <div class=\"container-edit-text-todo-input\">\n      <span class=\"todo\">").concat(index + 1, "</span> \n      <input type=\"text\" />\n    </div>\n    <div class=\"container-edit-text-info\">\n      <small></small>\n    </div>\n  </div>\n  <div class=\"container-save-cancel-button\">\n    <button class=\"save-button\">Sauvegarder</button>\n    <button class=\"cancel-button\">Annuler</button>\n  </div>\n</fieldset>\n  ");
  var input = li.querySelector("input");
  input.value = todo.text;
  var small = li.querySelector("small");
  var saveButton = li.querySelector(".save-button");
  saveButton.addEventListener("click", function (event) {
    if (input.value.length > 4 && input.value.length < 101) {
      small.classList.add("text-info-none");
      small.classList.remove("text-info-danger");
      if (input.value != todo.text) {
        small.classList.add("text-info-succes");
        small.classList.remove("text-info-none");
        small.innerHTML = "Sauvegarde en cours : La mise à jour de la todo a réussit, merci de patienter quelque seconde svp et ne pas appuyer sur le bouton 'Annuler' pour que la mise à jour soit prise en compte.";
        setTimeout(function () {
          editTodo(index, input);
        }, 10000);
      } else {
        small.classList.add("text-info-danger");
        small.classList.remove("text-info-none");
        small.innerHTML = "Annulation en cours : La mise à jour de la todo a échoué car la Todo n'a pas été modifié, merci de modifier la Todo ou d'appuyer sur le bouton 'Annuler'.";
        setTimeout(function () {
          todos[index].editMode = false;
          displayTodo();
        }, 2000);
      }
    } else {
      small.classList.add("text-info-danger");
      small.classList.remove("text-info-none");
      small.innerHTML = "Le champs doit contenir entre 5 et 100 caractères";
      setTimeout(function () {
        small.classList.remove("text-info-danger");
        small.classList.add("text-info-none");
      }, 10000);
    }
  });
  var cancelButton = li.querySelector(".cancel-button");
  cancelButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleEditMode(index);
  });
  return li;
};
var toggleTodo = function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  todos[index].effect = !todos[index].effect;
  todos[index].check = !todos[index].check;
  displayTodo();
};
var deleteTodo = function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodo();
};
var toggleEditMode = function toggleEditMode(index) {
  todos[index].editMode = !todos[index].editMode;
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
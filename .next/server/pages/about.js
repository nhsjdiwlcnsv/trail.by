module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AboutInfo.js":
/*!*************************************!*\
  !*** ./src/components/AboutInfo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/AboutInfo.module.css */ "./src/css/AboutInfo.module.css");
/* harmony import */ var _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\trail.by\\src\\components\\AboutInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AboutInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      number: this.props.number,
      email: this.props.email,
      position: this.props.position
    };
  }

  render() {
    return __jsx("div", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.infoСontainer + this.state.position,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, this.state.name), __jsx("div", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, "Phone number"), __jsx("p", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.number,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, this.state.number)), __jsx("div", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.section,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, "Email"), __jsx("p", {
      className: _css_AboutInfo_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.email,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, this.state.email)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AboutInfo);

/***/ }),

/***/ "./src/css/About.module.css":
/*!**********************************!*\
  !*** ./src/css/About.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"containerAbout": "About_containerAbout__2LKUO",
	"generalInfo": "About_generalInfo__25MXa",
	"animatedText": "About_animatedText__35fY8",
	"forest": "About_forest__2S8Jz",
	"top": "About_top__1FqFL",
	"middle": "About_middle__l6eo9",
	"down": "About_down__3yBqz"
};


/***/ }),

/***/ "./src/css/AboutInfo.module.css":
/*!**************************************!*\
  !*** ./src/css/AboutInfo.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"infoСontainer": "AboutInfo_info_ontainer__32929",
	"name": "AboutInfo_name__3aU44",
	"section": "AboutInfo_section__1dLWm",
	"header": "AboutInfo_header__mh4jE",
	"number": "AboutInfo_number__2Bpm0",
	"email": "AboutInfo_email__1WaXL"
};


/***/ }),

/***/ "./src/css/Footer.module.css":
/*!***********************************!*\
  !*** ./src/css/Footer.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__3dxGU",
	"firstLine": "Footer_firstLine__1opl0",
	"secondLine": "Footer_secondLine__1vEWz"
};


/***/ }),

/***/ "./src/navigation/Footer.js":
/*!**********************************!*\
  !*** ./src/navigation/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Footer.module.css */ "./src/css/Footer.module.css");
/* harmony import */ var _css_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\trail.by\\src\\navigation\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => {
  return __jsx("div", {
    className: _css_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("svg", {
    width: "1600",
    height: "336",
    viewBox: "0 0 1600 320",
    fill: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M648.333 336H0V55.9322L70.4167 147.733L323.333 55.9322L550.833 86.8264L1018.75 18.9933L1257.92 86.8264L1600 0V336H1185H901.667H648.333Z",
    fill: "#00BC71",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  })), __jsx("p", {
    className: _css_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.firstLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Designed by Mikhail Shkarubski"), __jsx("p", {
    className: _css_Footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.secondLine,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "For HSE Global Scholarship Competition"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_About_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/About.module.css */ "./src/css/About.module.css");
/* harmony import */ var _css_About_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_About_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AboutInfo */ "./src/components/AboutInfo.js");
/* harmony import */ var _scripts_aboutAnimations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/aboutAnimations */ "./src/scripts/aboutAnimations.js");
/* harmony import */ var _navigation_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/Footer */ "./src/navigation/Footer.js");
var _jsxFileName = "D:\\trail.by\\src\\pages\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const About = () => {
  Object(_scripts_aboutAnimations__WEBPACK_IMPORTED_MODULE_3__["projectIntroAnimation"])();
  return __jsx("div", {
    className: _css_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.containerAbout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.generalInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("p", {
    id: "animated-text",
    className: _css_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.animatedText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Trail helps you discover the world of ecotourism in Belarus due to collecting a variety of ecotrails from all over the country."), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/backgrounds/AboutTextBG",
    alt: "firs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _css_About_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.forest,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: "animated-info1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(_components_AboutInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Vasiliy Pupkin",
    number: "+375 29 973 79 43",
    email: "vasyapupkin@gmail.com",
    position: "top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "animated-info2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_components_AboutInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Aleksey Smirnov",
    number: "+375 29 337 91 07",
    email: "asmirn@gmail.com",
    position: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), __jsx("div", {
    id: "animated-info3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(_components_AboutInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Ivan Karpovski",
    number: "+375 29 655 74 25",
    email: "karpovski@gmail.com",
    position: "down",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  })))), __jsx(_navigation_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/scripts/aboutAnimations.js":
/*!****************************************!*\
  !*** ./src/scripts/aboutAnimations.js ***!
  \****************************************/
/*! exports provided: projectIntroAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectIntroAnimation", function() { return projectIntroAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);



const projectIntroAnimation = () => {
  const aboutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    let textWrapper = document.querySelector('#animated-text');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='char'>$&</span>");
    aboutRef.current = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.timeline({
      loop: false
    }).add({
      targets: document.querySelectorAll('.firs-img'),
      scale: [0.5, 1],
      easing: "easeOutExpo",
      duration: 750
    }).add({
      targets: document.querySelectorAll('.char'),
      translateX: [50, 0],
      translateZ: 0,
      opacity: [0, 1],
      duration: 500,
      delay: (el, i) => 250 + 100 * i
    });
  }, []);
};



/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWJvdXRJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvQWJvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL0Fib3V0SW5mby5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3MvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdmlnYXRpb24vRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hYm91dEFuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5pbWVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQWJvdXRJbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwibnVtYmVyIiwiZW1haWwiLCJwb3NpdGlvbiIsInJlbmRlciIsInN0eWxlcyIsImluZm/QoW9udGFpbmVyIiwic2VjdGlvbiIsImhlYWRlciIsIkZvb3RlciIsImZvb3RlciIsImZpcnN0TGluZSIsInNlY29uZExpbmUiLCJBYm91dCIsInByb2plY3RJbnRyb0FuaW1hdGlvbiIsImNvbnRhaW5lckFib3V0IiwiZ2VuZXJhbEluZm8iLCJhbmltYXRlZFRleHQiLCJmb3Jlc3QiLCJhYm91dFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRleHRXcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwiY3VycmVudCIsImFuaW1lIiwidGltZWxpbmUiLCJsb29wIiwiYWRkIiwidGFyZ2V0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzY2FsZSIsImVhc2luZyIsImR1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QU1BO0FBTjdCLEtBUFQsQ0FESjtBQWdCSCxHQXBCRCxFQW9CRyxFQXBCSDtBQXFCSCxDQXhCRDs7Ozs7Ozs7Ozs7OztBQ0pBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvYWJvdXQuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Nzcy9BYm91dEluZm8ubW9kdWxlLmNzcyc7XHJcblxyXG5jbGFzcyBBYm91dEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogdGhpcy5wcm9wcy5udW1iZXIsXHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLnByb3BzLmVtYWlsLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb9Chb250YWluZXIgKyB0aGlzLnN0YXRlLnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pnt0aGlzLnN0YXRlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlBob25lIG51bWJlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5udW1iZXJ9Pnt0aGlzLnN0YXRlLm51bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbH0+e3RoaXMuc3RhdGUuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRJbmZvIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyQWJvdXRcIjogXCJBYm91dF9jb250YWluZXJBYm91dF9fMkxLVU9cIixcblx0XCJnZW5lcmFsSW5mb1wiOiBcIkFib3V0X2dlbmVyYWxJbmZvX18yNU1YYVwiLFxuXHRcImFuaW1hdGVkVGV4dFwiOiBcIkFib3V0X2FuaW1hdGVkVGV4dF9fMzVmWThcIixcblx0XCJmb3Jlc3RcIjogXCJBYm91dF9mb3Jlc3RfXzJTOEp6XCIsXG5cdFwidG9wXCI6IFwiQWJvdXRfdG9wX18xRnFGTFwiLFxuXHRcIm1pZGRsZVwiOiBcIkFib3V0X21pZGRsZV9fbDZlbzlcIixcblx0XCJkb3duXCI6IFwiQWJvdXRfZG93bl9fM3lCcXpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluZm/QoW9udGFpbmVyXCI6IFwiQWJvdXRJbmZvX2luZm9fb250YWluZXJfXzMyOTI5XCIsXG5cdFwibmFtZVwiOiBcIkFib3V0SW5mb19uYW1lX18zYVU0NFwiLFxuXHRcInNlY3Rpb25cIjogXCJBYm91dEluZm9fc2VjdGlvbl9fMWRMV21cIixcblx0XCJoZWFkZXJcIjogXCJBYm91dEluZm9faGVhZGVyX19taDRqRVwiLFxuXHRcIm51bWJlclwiOiBcIkFib3V0SW5mb19udW1iZXJfXzJCcG0wXCIsXG5cdFwiZW1haWxcIjogXCJBYm91dEluZm9fZW1haWxfXzFXYVhMXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18zZHhHVVwiLFxuXHRcImZpcnN0TGluZVwiOiBcIkZvb3Rlcl9maXJzdExpbmVfXzFvcGwwXCIsXG5cdFwic2Vjb25kTGluZVwiOiBcIkZvb3Rlcl9zZWNvbmRMaW5lX18xdkVXelwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Nzcy9Gb290ZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNjAwXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMzNlwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2MDAgMzIwXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBkPVwiTTY0OC4zMzMgMzM2SDBWNTUuOTMyMkw3MC40MTY3IDE0Ny43MzNMMzIzLjMzMyA1NS45MzIyTDU1MC44MzMgODYuODI2NEwxMDE4Ljc1IDE4Ljk5MzNMMTI1Ny45MiA4Ni44MjY0TDE2MDAgMFYzMzZIMTE4NUg5MDEuNjY3SDY0OC4zMzNaXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzAwQkM3MVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RMaW5lfT5EZXNpZ25lZCBieSBNaWtoYWlsIFNoa2FydWJza2k8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZExpbmV9PkZvciBIU0UgR2xvYmFsIFNjaG9sYXJzaGlwIENvbXBldGl0aW9uPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jc3MvQWJvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IEFib3V0SW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9BYm91dEluZm9cIlxyXG5pbXBvcnQgeyBwcm9qZWN0SW50cm9BbmltYXRpb24gfSBmcm9tIFwiLi4vc2NyaXB0cy9hYm91dEFuaW1hdGlvbnNcIlxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9uYXZpZ2F0aW9uL0Zvb3RlclwiO1xyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG5cclxuICAgIHByb2plY3RJbnRyb0FuaW1hdGlvbigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckFib3V0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5lcmFsSW5mb30+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cImFuaW1hdGVkLXRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5hbmltYXRlZFRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFRyYWlsIGhlbHBzIHlvdSBkaXNjb3ZlciB0aGUgd29ybGQgb2YgZWNvdG91cmlzbSBpbiBCZWxhcnVzIGR1ZSB0byBjb2xsZWN0aW5nIGEgdmFyaWV0eSBvZiBlY290cmFpbHMgZnJvbSBhbGwgb3ZlciB0aGUgY291bnRyeS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2JhY2tncm91bmRzL0Fib3V0VGV4dEJHXCIgYWx0PVwiZmlyc1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jlc3R9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYW5pbWF0ZWQtaW5mbzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFib3V0SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlZhc2lsaXkgUHVwa2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj1cIiszNzUgMjkgOTczIDc5IDQzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwidmFzeWFwdXBraW5AZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYW5pbWF0ZWQtaW5mbzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFib3V0SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkFsZWtzZXkgU21pcm5vdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9XCIrMzc1IDI5IDMzNyA5MSAwN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbD1cImFzbWlybkBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJtaWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYW5pbWF0ZWQtaW5mbzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFib3V0SW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkl2YW4gS2FycG92c2tpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcj1cIiszNzUgMjkgNjU1IDc0IDI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPVwia2FycG92c2tpQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5cclxuXHJcbmNvbnN0IHByb2plY3RJbnRyb0FuaW1hdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBhYm91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKVxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5pbWF0ZWQtdGV4dCcpO1xyXG4gICAgICAgIHRleHRXcmFwcGVyLmlubmVySFRNTCA9IHRleHRXcmFwcGVyLnRleHRDb250ZW50LnJlcGxhY2UoL1xcUy9nLCBcIjxzcGFuIGNsYXNzPSdjaGFyJz4kJjwvc3Bhbj5cIik7XHJcblxyXG4gICAgICAgIGFib3V0UmVmLmN1cnJlbnQgPVxyXG4gICAgICAgICAgICBhbmltZS50aW1lbGluZSh7IGxvb3A6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlycy1pbWcnKSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogWzAuNSwxXSxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEV4cG9cIixcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNzUwLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFyJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWDogWzUwLDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVo6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IChlbCwgaSkgPT4gMjUwICsgMTAwICogaVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG59XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0SW50cm9BbmltYXRpb24gfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuaW1lanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/navigation/Navigation.js":
/*!**************************************!*\
  !*** ./src/navigation/Navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/Navigation.module.css */ "./src/css/Navigation.module.css");
/* harmony import */ var _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app */ "./src/pages/_app.js");
var _jsxFileName = "D:\\trail.by\\src\\navigation\\Navigation.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Navigation = () => {
  _s();

  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]);
  return __jsx("div", {
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: "nav-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
    alt: "logo",
    src: theme.name === "light" ? '/images/logo/Logo.svg' : '/images/logo/LogoBlack.svg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }))), __jsx("div", {
    id: "nav-item",
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, "Contact"))), __jsx("div", {
    id: "nav-item",
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "About us"))), __jsx("div", {
    id: "nav-item",
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/trails",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _css_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, "All trails"))));
};

_s(Navigation, "+C1P7ukOg/azcV4AZ819oyezFOE=");

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL25hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwidGhlbWUiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0Iiwic3R5bGVzIiwibmF2IiwibG9nbyIsIm5hbWUiLCJuYXZJdGVtIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBQUE7O0FBRXJCLFFBQU1DLEtBQUssR0FBR0Msd0RBQVUsQ0FBQ0MsdURBQUQsQ0FBeEI7QUFFQSxTQUNZO0FBQUssYUFBUyxFQUFFQyxpRUFBTSxDQUFDQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBRUQsaUVBQU0sQ0FBQ0UsSUFEdEI7QUFFSSxPQUFHLEVBQUMsTUFGUjtBQUdJLE9BQUcsRUFBRUwsS0FBSyxDQUFDTSxJQUFOLEtBQWUsT0FBZixHQUF5Qix1QkFBekIsR0FBbUQsNEJBSDVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREosRUFVSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBRUgsaUVBQU0sQ0FBQ0ksT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxhQUFTLEVBQUVKLGlFQUFNLENBQUNLLElBQXhCO0FBQThCLFFBQUksRUFBQyxVQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUVMLGlFQUFNLENBQUNLLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQURKLENBVkosRUFlSTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQW1CLGFBQVMsRUFBRUwsaUVBQU0sQ0FBQ0ksT0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUVKLGlFQUFNLENBQUNLLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FESixDQWZKLEVBb0JJO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBbUIsYUFBUyxFQUFFTCxpRUFBTSxDQUFDSSxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixDQURKLENBcEJKLENBRFo7QUE2QkgsQ0FqQ0Q7O0dBQU1ULFU7O0tBQUFBLFU7QUFtQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZWRiYmRiNjRkMmU3NzE1YThmODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL05hdmlnYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL19hcHBcIjtcclxuXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2LWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhlbWUubmFtZSA9PT0gXCJsaWdodFwiID8gJy9pbWFnZXMvbG9nby9Mb2dvLnN2ZycgOiAnL2ltYWdlcy9sb2dvL0xvZ29CbGFjay5zdmcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXYtaXRlbVwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdkl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2LWl0ZW1cIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+QWJvdXQgdXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2LWl0ZW1cIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkFsbCB0cmFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9
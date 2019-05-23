(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavLink; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_3__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"]; });






var NavLink = function NavLink(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    getProps: function getProps(_ref) {
      var isCurrent = _ref.isCurrent;
      return isCurrent ? {
        style: {
          color: '#333',
          fontWeight: 700
        }
      } : {};
    }
  }));
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(36);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(68);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(70);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(71);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(37);

var _helpers = __webpack_require__(72);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(13);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(27);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/grid/style.css
var style = __webpack_require__(44);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/grid/Col.js





var sizes = ['col', 'sm-col', 'md-col', 'lg-col'];

var Col_Col = function Col(_ref) {
  var col = _ref.col,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      gutter = _ref.gutter,
      pullRight = _ref.pullRight,
      mb = _ref.mb,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = objectWithoutProperties_default()(_ref, ["col", "sm", "md", "lg", "gutter", "pullRight", "mb", "className"]);

  var hasSizes = false;
  var sizeClass = [col, sm, md, lg].map(function (size, i) {
    var name = sizes[i];
    if (size) hasSizes = true;
    return size ? "".concat(name, " ").concat(name, "-").concat(size, " ") : '';
  }).join('');
  var gutterClass = gutter ? "px".concat(gutter, " ") : '';
  var pullRightClass = pullRight ? 'col-right ' : '';
  var colClass = hasSizes ? '' : 'col ';
  var mbClass = mb ? "mb".concat(mb, " ") : '';
  var modClassName = "".concat(mbClass).concat(colClass).concat(sizeClass).concat(gutterClass).concat(pullRightClass).concat(className);
  return Object(core_["jsx"])("div", extends_default()({
    className: modClassName
  }, props));
};

/* harmony default export */ var grid_Col = (Col_Col);
// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/grid/Row.js






var Row_Row = function Row(_ref) {
  var gutter = _ref.gutter,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = objectWithoutProperties_default()(_ref, ["gutter", "className"]);

  var gutterClassName = gutter ? "mxn".concat(gutter) : '';
  return Object(core_["jsx"])("div", extends_default()({
    className: "clearfix ".concat(gutterClassName, " ").concat(className)
  }, props));
};

/* harmony default export */ var grid_Row = (Row_Row);
// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/grid/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components_grid_Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return components_grid_Row; });


var components_grid_Col = grid_Col;
var components_grid_Row = grid_Row;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/Router.js
var Router = __webpack_require__(3);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(2);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/SideNav.js






function SideNav() {
  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      categories = _useSiteData.categories;

  var categoriesEl = categories.map(function (_ref) {
    var id = _ref.id,
        name = _ref.name;
    return Object(core_["jsx"])("div", {
      key: id,
      css: styles.links
    }, Object(core_["jsx"])(Router["b" /* NavLink */], {
      to: "/categories/".concat(id)
    }, name));
  });
  return Object(core_["jsx"])("div", null, Object(core_["jsx"])(Router["a" /* Link */], {
    to: "/categories"
  }, Object(core_["jsx"])("div", {
    css: styles.title
  }, "CATEGORIES")), categoriesEl);
}

var styles = {
  title:
  /*#__PURE__*/
   true ? {
    name: "9uwbis",
    styles: "margin-top:0.5rem;margin-bottom:0.5rem;color:#a0aec0;font-size:0.75rem;"
  } : undefined,
  links:
  /*#__PURE__*/
   true ? {
    name: "12r38oy",
    styles: "margin-bottom:0.5rem; a{font-size:0.75rem;color:#4a5568;}"
  } : undefined
};
/* harmony default export */ var components_SideNav = (SideNav);
// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/Promo.js


/* eslint-disable react/jsx-no-target-blank */


function Promo() {
  return Object(core_["jsx"])("div", {
    css: Promo_styles.container
  }, Object(core_["jsx"])("a", {
    target: "_blank",
    href: "https://1productaweek.com"
  }, "1ProductAWeek"));
}
var Promo_styles = {
  container:
  /*#__PURE__*/
   true ? {
    name: "10h4jr9",
    styles: "position:fixed;bottom:0;right:0;border:1px solid #eee;border-width:1px 0px 0px 1px;border-top-left-radius:0.3em;background:rgba(256,256,256,0.9);font-size:0.8em;cursor:pointer;padding:0.6em;a{color:#666;}"
  } : undefined
};
// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/Layout.js






var Layout_ref =  true ? {
  name: "1uegfjb",
  styles: "display:flex;padding-top:1rem;padding-bottom:1rem;"
} : undefined;

function Layout(_ref2) {
  var children = _ref2.children;
  return Object(core_["jsx"])("div", {
    css:
    /*#__PURE__*/
    Layout_ref
  }, Object(core_["jsx"])("div", {
    css: Layout_styles.left
  }, Object(core_["jsx"])(components_SideNav, null)), Object(core_["jsx"])("div", {
    css: Layout_styles.right
  }, children), Object(core_["jsx"])(Promo, null));
}

var Layout_styles = {
  left:
  /*#__PURE__*/
   true ? {
    name: "uelob",
    styles: "width:170px;padding-left:1rem;padding-right:1rem;"
  } : undefined,
  right:
  /*#__PURE__*/
   true ? {
    name: "fenw9t",
    styles: "padding-left:1rem;padding-right:1rem;flex:1 1 0%;"
  } : undefined
};
/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", {
  target: "ecw4etl0"
})( true ? {
  name: "1hozazk",
  styles: "outline:none;cursor:pointer;display:inline-block;background-color:#4299e1;:hover{background-color:#2b6cb0;}font-size:0.75rem;color:#fff;font-weight:700;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;border-radius:0.25rem;border-width:1px;border-color:transparent;border-style:solid;user-select:none;"
} : undefined));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return firebase__WEBPACK_IMPORTED_MODULE_2___default.a.auth().onAuthStateChanged(function (user) {
      setState(user);
    });
  }, []);
  return state;
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_4__);






function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      title = _ref.title;

  var _useSiteData = Object(react_static__WEBPACK_IMPORTED_MODULE_4__["useSiteData"])(),
      siteTitle = _useSiteData.siteTitle,
      metaDescription = _useSiteData.metaDescription,
      social = _useSiteData.social;

  var desc = description || metaDescription;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | ".concat(siteTitle),
    meta: [{
      name: "description",
      content: desc
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:description",
      content: desc
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary"
    }, {
      name: "twitter:creator",
      content: social && social.twitter
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: desc
    }].concat(meta)
  });
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: ""
};
/* harmony default export */ __webpack_exports__["a"] = (SEO);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(2);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/modals/ModalProvider.js
var ModalProvider = __webpack_require__(30);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/modals/useModal.js



var useModal_useModal = function useModal(Modal) {
  var modalProvider = Object(external_react_["useContext"])(ModalProvider["a" /* ModalContext */]);
  return function (props) {
    return modalProvider.push(Modal, props);
  };
};

/* harmony default export */ var modals_useModal = (useModal_useModal);
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(8);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/config/firebase.js
var firebase = __webpack_require__(29);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(22);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/Router.js
var Router = __webpack_require__(3);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/auth/Signup.js
var Signup = __webpack_require__(31);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/auth/SignupModal.js

 // import firebase from 'config/firebase'


 // import tw from 'ta.lwind.macro'


var customStyles = {
  overlay: {
    zIndex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    zIndex: 21,
    position: 'relative !important'
  }
};
external_react_modal_default.a.setAppElement('#root');

var _ref =  true ? {
  name: "i4742r",
  styles: "margin-top:-2em;"
} : undefined;

function SignupModal(_ref2) {
  var onDone = _ref2.onDone,
      onCancel = _ref2.onCancel,
      isOpen = _ref2.isOpen;
  return Object(core_["jsx"])(external_react_modal_default.a, {
    isOpen: isOpen,
    onRequestClose: onCancel,
    style: customStyles,
    contentLabel: "Screen"
  }, Object(core_["jsx"])("div", {
    css:
    /*#__PURE__*/
    _ref
  }, Object(core_["jsx"])(Signup["a" /* default */], {
    onDone: onDone
  })));
} // const styles = {
// }


/* harmony default export */ var auth_SignupModal = (SignupModal);
// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/form/Button.js
var Button = __webpack_require__(16);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/img/cancel.png
var cancel = __webpack_require__(62);
var cancel_default = /*#__PURE__*/__webpack_require__.n(cancel);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/hooks/useFirebaseAuth.js
var useFirebaseAuth = __webpack_require__(19);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/hooks/useFirebaseSync.js
var useFirebaseSync = __webpack_require__(32);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/ScreenModal.js















var ScreenModal_customStyles = {
  content: {
    padding: 0,
    top: 20,
    bottom: 60
  }
};
external_react_modal_default.a.setAppElement('#root');
var AButton = Button["a" /* default */].withComponent('a', {
  target: "e7gf52t0",
  target: "e7gf52t0"
});
var db = firebase["a" /* default */].firestore();

var ScreenModal_ref =  true ? {
  name: "8atqhb",
  styles: "width:100%;"
} : undefined;

function ScreenModal(_ref2) {
  var isOpen = _ref2.isOpen,
      onCancel = _ref2.onCancel,
      product = _ref2.product,
      src = _ref2.src,
      name = _ref2.name;

  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      DOWNLOAD_URL = _useSiteData.DOWNLOAD_URL;

  var user = Object(useFirebaseAuth["a" /* default */])();
  var showModal = modals_useModal(auth_SignupModal);
  var ref = user ? db.collection('users').doc(user.uid).collection('screens').doc(name) : null;
  var doc = Object(useFirebaseSync["a" /* default */])(ref);
  var isSaved = ref && doc && doc.data();

  var onToggle =
  /*#__PURE__*/
  function () {
    var _ref3 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var user;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = firebase["a" /* default */].auth().currentUser;

              if (user) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", showModal());

            case 3:
              if (!isSaved) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", ref["delete"]());

            case 5:
              _context.next = 7;
              return ref.set({
                active: true,
                name: name
              })["catch"](console.error);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onToggle() {
      return _ref3.apply(this, arguments);
    };
  }();

  var saveBtnStyle = isSaved ? {
    background: '#fff',
    borderColor: '#4299e1',
    color: '#4299e1'
  } : {};
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(external_react_modal_default.a, {
    isOpen: isOpen,
    onRequestClose: onCancel,
    style: ScreenModal_customStyles,
    contentLabel: "Screen"
  }, Object(core_["jsx"])("img", {
    css:
    /*#__PURE__*/
    ScreenModal_ref,
    src: src,
    alt: name
  })), Object(core_["jsx"])("div", null, Object(core_["jsx"])("img", {
    css: styles.close,
    onClick: onCancel,
    src: cancel_default.a,
    alt: "close",
    width: 20
  })), Object(core_["jsx"])("div", {
    css: styles.footer
  }, Object(core_["jsx"])(Button["a" /* default */], {
    onClick: onToggle,
    style: saveBtnStyle,
    css: styles.save
  }, isSaved ? 'Saved' : 'Save'), Object(core_["jsx"])(AButton, {
    href: "".concat(DOWNLOAD_URL, "?image=").concat(src),
    download: name,
    css: styles.download
  }, "Download"), Object(core_["jsx"])(Router["a" /* Link */], {
    onClick: onCancel,
    css: styles.viewAll,
    to: "/products/".concat(product.id)
  }, "View all ", product.name || product.id), product.domain && Object(core_["jsx"])("a", {
    css: styles.domain,
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://".concat(product.domain)
  }, product.domain)));
}

var styles = {
  save:
  /*#__PURE__*/
   true ? {
    name: "1b4e0tf",
    styles: "padding-top:0.6rem;padding-bottom:0.6rem;"
  } : undefined,
  download:
  /*#__PURE__*/
   true ? {
    name: "7ca4rj",
    styles: "margin-left:0.5rem;color:#a0aec0;background-color:#fff;:hover{background-color:#f7fafc;}border-color:#edf2f7;"
  } : undefined,
  viewAll:
  /*#__PURE__*/
   true ? {
    name: "7wrppf",
    styles: "margin-left:0.5rem;margin-right:0.5rem;font-size:0.875rem;"
  } : undefined,
  domain:
  /*#__PURE__*/
   true ? {
    name: "zcg50",
    styles: "float:right;display:block;padding:0.8em 0;margin-left:0.5rem;margin-right:0.5rem;font-size:0.875rem;"
  } : undefined,
  close:
  /*#__PURE__*/
   true ? {
    name: "gu88qp",
    styles: "position:fixed;top:25px;right:15px;z-index:10;width:15px;cursor:pointer;"
  } : undefined,
  footer:
  /*#__PURE__*/
   true ? {
    name: "sf55gl",
    styles: "position:fixed;height:40px;bottom 10px;right:40px;left:40px;z-index:10;"
  } : undefined
};
/* harmony default export */ var components_ScreenModal = (ScreenModal);
// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/grid/index.js + 2 modules
var grid = __webpack_require__(12);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/List.js








var List_ref =  true ? {
  name: "1274r9c",
  styles: "max-width:600px;"
} : undefined;

var List_ref2 =  true ? {
  name: "1274r9c",
  styles: "max-width:600px;"
} : undefined;

function List(_ref3) {
  var items = _ref3.items;

  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      CACHE_URL = _useSiteData.CACHE_URL;

  var showModal = modals_useModal(components_ScreenModal);
  var itemsEl = (items || []).map(function (_ref4, i) {
    var src = _ref4.src,
        name = _ref4.name,
        product = _ref4.product;
    return Object(core_["jsx"])("div", {
      key: src || i,
      onClick: function onClick() {
        return showModal({
          src: src,
          name: name,
          product: product
        });
      },
      css: List_styles.screen,
      style: {
        maxHeight: 500 + 200 * Math.random()
      }
    }, Object(core_["jsx"])("img", {
      src: "".concat(CACHE_URL, "/1200x/").concat(src),
      alt: name
    }));
  });
  return Object(core_["jsx"])(grid["b" /* Row */], {
    gutter: 2
  }, Object(core_["jsx"])(grid["a" /* Col */], {
    col: 12,
    sm: 6,
    gutter: 2,
    css:
    /*#__PURE__*/
    List_ref
  }, itemsEl.filter(function (_, i) {
    return i % 2 === 0;
  })), Object(core_["jsx"])(grid["a" /* Col */], {
    col: 12,
    sm: 6,
    gutter: 2,
    css:
    /*#__PURE__*/
    List_ref2
  }, itemsEl.filter(function (_, i) {
    return i % 2 !== 0;
  })));
}

var List_styles = {
  screen:
  /*#__PURE__*/
   true ? {
    name: "1dddli9",
    styles: "cursor:pointer;margin-bottom:1rem;width:100%;background-color:#e2e8f0;border-radius:0.25rem;overflow:hidden;border-width:1px;border-color:#e2e8f0;border-style:solid;"
  } : undefined
};
/* harmony default export */ var components_List = __webpack_exports__["a"] = (List);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("label", {
  target: "e1crh5mn0"
})( true ? {
  name: "ifsm2z",
  styles: "display:inline-block;font-weight:600;margin-top:1rem;margin-bottom:0.5rem;"
} : undefined));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("input", {
  target: "ej1nksr0"
})( true ? {
  name: "wcfykg",
  styles: "border:1px solid #888;background-color:#fff;:focus{outline:0;box-shadow:0 0 0 3px rgba(66, 153, 225, 0.5);}border-width:1px;border-color:#cbd5e0;border-radius:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1rem;padding-right:1rem;display:block;width:100%;font-size:1.125rem;appearance:none;line-height:1.5;box-shadow:none;"
} : undefined));

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(37);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(69)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
 // Required forreact-modal side-effects


firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp({
  apiKey: 'AIzaSyB8SvWW0nk_B2ALDoMdLCduxqoyvCJJJo8',
  authDomain: 'webframe.firebaseapp.com',
  databaseURL: 'https://webframe.firebaseio.com',
  projectId: 'webframe',
  storageBucket: 'webframe.appspot.com',
  messagingSenderId: '358743927512',
  appId: '1:358743927512:web:debba3c07270a4a3'
});
/* harmony default export */ __webpack_exports__["a"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContext; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);














var counter = 0;
var ModalContext = react__WEBPACK_IMPORTED_MODULE_12___default.a.createContext(null);

var ModalProvider =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ModalProvider, _React$Component);

  function ModalProvider() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ModalProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ModalProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "state", {
      stack: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "push",
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(Component, props) {
        var id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = counter++;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.setState(function (_ref2) {
                    var stack = _ref2.stack;
                    return {
                      stack: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(stack), [{
                        id: id,
                        Component: Component,
                        props: props,
                        resolve: resolve,
                        reject: function reject() {
                          return resolve(null);
                        }
                      }])
                    };
                  });
                }).then(function (data) {
                  // HACK: we cannot run this immedietly, otherwise the reference may be lost,
                  // especially when using hooks
                  setTimeout(function () {
                    _this.removeModal(id);
                  }, 0);
                  return data;
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "pop", function (resolveData) {
      var stack = _this.state.stack;
      stack[stack.length - 1].resolve(resolveData);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this), "removeModal", function (removeId) {
      _this.setState(function (_ref3) {
        var stack = _ref3.stack;
        return {
          stack: stack.filter(function (_ref4) {
            var id = _ref4.id;
            return id !== removeId;
          })
        };
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ModalProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        modalProvider: this
      };
    } // Render the open modals

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var stack = this.state.stack;
      var children = this.props.children;
      var modals = stack.map(function (_ref5) {
        var id = _ref5.id,
            Component = _ref5.Component,
            resolve = _ref5.resolve,
            reject = _ref5.reject,
            props = _ref5.props;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
          modalProvider: _this2,
          key: id,
          show: true,
          isOpen: true,
          onCancel: reject,
          onDone: resolve
        }));
      });
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(ModalContext.Provider, {
        value: this
      }, children, modals);
    }
  }]);

  return ModalProvider;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10___default()(ModalProvider, "childContextTypes", {
  client: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired // Add a modal to the stack

});

ModalProvider.childContextTypes = {
  modalProvider: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["b"] = (ModalProvider);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_form_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);
/* harmony import */ var components_form_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var components_form_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);












var _ref =  true ? {
  name: "ws79dq",
  styles: "margin-top:1em;margin-bottom:1em;font-size:1em;"
} : undefined;

var _ref2 =  true ? {
  name: "tokvmb",
  styles: "color:red;"
} : undefined;

function Signup(_ref3) {
  var onDone = _ref3.onDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    email: '',
    password: ''
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var email, password;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = formData.email, password = formData.password;

              if (!(!email || !password)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", alert('Email and Password are pretty much required!'));

            case 3:
              firebase__WEBPACK_IMPORTED_MODULE_6___default.a.auth().createUserWithEmailAndPassword(email, password).then(
              /*#__PURE__*/
              _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return firebase__WEBPACK_IMPORTED_MODULE_6___default.a.auth().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_6___default.a.auth.Auth.Persistence.LOCAL);

                      case 2:
                        if (onDone) onDone(formData);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })))["catch"](function (error) {
                if (error.code) {
                  setFormData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, formData, {
                    error: error.message
                  }));
                  return;
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit() {
      return _ref4.apply(this, arguments);
    };
  }(); // if (signupComplete) return (<h2 css={styles.title}>Thank you! <span aria-label='love' role='img'>😍</span></h2>)


  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: styles.box
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("h2", {
    css: styles.title
  }, "Signup to Webframe! ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", {
    "aria-label": "love",
    role: "img"
  }, "\uD83D\uDE0D")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    css: styles.sub
  }, "Save your screens and lots of other goodies!"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(components_form_Label__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    "for": "emailInput"
  }, "E-mail"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(components_form_Input__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    onChange: function onChange(e) {
      return setFormData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, formData, {
        email: e.target.value
      }));
    },
    value: formData.email,
    id: "emailInput",
    placeholder: "awesome@person.com",
    type: "email"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(components_form_Label__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    "for": "passwordInput"
  }, "Password"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(components_form_Input__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    onChange: function onChange(e) {
      return setFormData(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, formData, {
        password: e.target.value
      }));
    },
    value: formData.password,
    id: "passwordInput",
    placeholder: "super secret password",
    type: "password"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(components_form_Button__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    onClick: onSubmit,
    css:
    /*#__PURE__*/
    _ref
  }, "Signup"), formData.error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("p", {
    css:
    /*#__PURE__*/
    _ref2
  }, "Error: ", formData.error));
}
var styles = {
  box:
  /*#__PURE__*/
   true ? {
    name: "1ypfjhr",
    styles: "margin:auto;max-width:500px;padding:1em;font-size:0.875rem;"
  } : undefined,
  title:
  /*#__PURE__*/
   true ? {
    name: "1ypzuc2",
    styles: "font-size:2.25rem;text-align:center;margin-top:3rem;margin-bottom:1.5rem;"
  } : undefined,
  sub:
  /*#__PURE__*/
   true ? {
    name: "lj0eas",
    styles: "color:#a0aec0;font-size:1.125rem;text-align:center;margin-top:1.5rem;margin-bottom:2.5rem;"
  } : undefined
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // import firebase from 'firebase'

/* harmony default export */ __webpack_exports__["a"] = (function (ref) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!ref) return;
    return ref.onSnapshot(function (doc) {
      setState(doc);
    });
  }, [ref]);
  return ref ? state : null;
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageListItem; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





var _ref =  true ? {
  name: "1jlcroc",
  styles: "padding:0.3em;"
} : undefined;

function ImageListItem(_ref2) {
  var to = _ref2.to,
      title = _ref2.title,
      src = _ref2.src;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: to
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css: styles.box
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
    alt: title,
    src: src
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
    css:
    /*#__PURE__*/
    _ref
  }, title)));
}
var styles = {
  box:
  /*#__PURE__*/
   true ? {
    name: "1uaawid",
    styles: "height:200px;background:#eee;overflow:hidden;border-radius:0.25rem;overflow:hidden;border-width:1px;border-style:solid;border-color:#e2e8f0;"
  } : undefined
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(2);

// EXTERNAL MODULE: external "typeface-open-sans"
var external_typeface_open_sans_ = __webpack_require__(80);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/Router.js
var Router = __webpack_require__(3);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(11);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/List.js + 3 modules
var List = __webpack_require__(21);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/hooks/useFirebaseSync.js
var useFirebaseSync = __webpack_require__(32);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/content/products.js
/* harmony default export */ var products = ({
  activecampaign: {
    name: 'ActiveCampaign',
    domain: 'activecampaign.com'
  },
  airtable: {
    name: 'Airtable',
    domain: 'airtable.com'
  },
  asana: {
    name: 'Asana',
    domain: 'asana.com'
  },
  intercom: {
    name: 'Intercom',
    domain: 'intercom.com'
  },
  mailchimp: {
    name: 'Mailchimp',
    domain: 'mailchimp.com'
  },
  slack: {
    name: 'Slack',
    domain: 'slack.com'
  },
  stripe: {
    name: 'Stripe',
    domain: 'stripe.com'
  },
  zapier: {
    name: 'Zapier',
    domain: 'zapier.com'
  },
  podia: {
    name: 'Podia',
    domain: 'podia.com'
  },
  sentry: {
    name: 'Sentry',
    domain: 'sentry.com'
  },
  mixpanel: {
    name: 'Mixpanel',
    domain: 'mixpanel.com'
  }
});
// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/containers/Dashboard.js











var db = external_firebase_default.a.firestore();

var _ref =  true ? {
  name: "2q9ydn",
  styles: "max-width:1200px;margin:0 auto;padding:1em;"
} : undefined;

var Dashboard_ref2 =  true ? {
  name: "w9av89",
  styles: "color:#777;text-align:center;"
} : undefined;

function Dashboard() {
  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      SRC_URL = _useSiteData.SRC_URL;

  var user = external_firebase_default.a.auth().currentUser;
  var ref = db.collection('users').doc(user.uid).collection('screens');
  var collection = Object(useFirebaseSync["a" /* default */])(ref);
  var items = [];

  if (collection) {
    collection.forEach(function (doc) {
      var name = doc.data().name;

      var _name$split$0$split = name.split('.')[0].split('-'),
          _name$split$0$split2 = slicedToArray_default()(_name$split$0$split, 1),
          productId = _name$split$0$split2[0];

      var lookup = products[productId] || {};
      items.push({
        name: name,
        product: objectSpread_default()({
          id: productId
        }, lookup),
        src: "".concat(SRC_URL, "/").concat(name)
      });
    });
  }

  return Object(core_["jsx"])("div", {
    css:
    /*#__PURE__*/
    _ref
  }, Object(core_["jsx"])("h2", {
    css: styles.title
  }, "Saved Screens ", Object(core_["jsx"])("span", {
    role: "img",
    "aria-label": "saved"
  }, "\uD83C\uDF89")), Object(core_["jsx"])(List["a" /* default */], {
    items: items
  }), (!items || !items.length) && Object(core_["jsx"])("p", {
    css:
    /*#__PURE__*/
    Dashboard_ref2
  }, "No saved screenshots yet! Go to ", Object(core_["jsx"])(Router["a" /* Link */], {
    to: "/"
  }, "Home"), " and click on any screenshot to save."));
}

var styles = {
  title:
  /*#__PURE__*/
   true ? {
    name: "6tcsb",
    styles: "font-size:2.25rem;text-align:center;margin-top:3rem;margin-bottom:2rem;"
  } : undefined
};
/* harmony default export */ var containers_Dashboard = (Dashboard);
// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(8);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/img/logo.png
var logo = __webpack_require__(63);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/hooks/useFirebaseAuth.js
var useFirebaseAuth = __webpack_require__(19);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/Nav.js










var Nav_ref =  true ? {
  name: "q5fqw0",
  styles: "padding:1rem;"
} : undefined;

function Nav() {
  var userAuth = Object(useFirebaseAuth["a" /* default */])();

  var onLogout =
  /*#__PURE__*/
  function () {
    var _ref2 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", external_firebase_default.a.auth().signOut());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onLogout() {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object(core_["jsx"])("nav", {
    css:
    /*#__PURE__*/
    Nav_ref
  }, Object(core_["jsx"])(Router["a" /* Link */], {
    to: "/"
  }, Object(core_["jsx"])("img", {
    width: 101,
    src: logo_default.a,
    alt: "Webframe Logo"
  })), Object(core_["jsx"])("p", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(core_["css"])(Nav_styles.tagline, " top:-2px;" + ( true ? "" : undefined))
  }, "Discover beautiful web app design patterns"), !userAuth && Object(core_["jsx"])("div", {
    css: Nav_styles.menu
  }, Object(core_["jsx"])(Router["b" /* NavLink */], {
    to: "/signup"
  }, "Signup"), Object(core_["jsx"])(Router["b" /* NavLink */], {
    to: "/login"
  }, "Login")), userAuth && Object(core_["jsx"])("div", {
    css: Nav_styles.menu
  }, Object(core_["jsx"])(Router["a" /* Link */], {
    to: "/",
    onClick: onLogout
  }, "Logout"), Object(core_["jsx"])(Router["b" /* NavLink */], {
    to: "/dashboard"
  }, "Dashboard")));
}
var Nav_styles = {
  tagline: {
    "display": "inline-block",
    "color": "#a0aec0",
    "fontWeight": "600",
    "marginLeft": "1rem",
    "position": "relative"
  },
  menu:
  /*#__PURE__*/
   true ? {
    name: "1kj6qss",
    styles: "float:right;font-size:0.875rem; a{margin-left:1em;}"
  } : undefined
};
// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/modals/ModalProvider.js
var ModalProvider = __webpack_require__(30);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/reset.css
var src_reset = __webpack_require__(81);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/app.css
var app = __webpack_require__(82);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/App.js










 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dashboard']);

function App() {
  var user = Object(useFirebaseAuth["a" /* default */])();
  return Object(core_["jsx"])(external_react_static_["Root"], null, Object(core_["jsx"])(ModalProvider["b" /* default */], null, Object(core_["jsx"])(Nav, null), Object(core_["jsx"])("div", {
    className: "content"
  }, Object(core_["jsx"])(external_react_default.a.Suspense, {
    fallback: Object(core_["jsx"])("em", null, "Loading...")
  }, Object(core_["jsx"])(Router["d" /* Router */], null, user && Object(core_["jsx"])(containers_Dashboard, {
    path: "dashboard"
  }), !user && Object(core_["jsx"])(Router["c" /* Redirect */], {
    from: "dashboard",
    to: "/login"
  }), user && Object(core_["jsx"])(Router["c" /* Redirect */], {
    from: "login",
    to: "/dashboard"
  }), user && Object(core_["jsx"])(Router["c" /* Redirect */], {
    from: "signup",
    to: "/dashboard"
  }), Object(core_["jsx"])(external_react_static_["Routes"], {
    path: "*"
  }))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(36);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(26);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("/Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/node_modules/react-static/lib/browser");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__);





















Object(_Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/404 */).then(__webpack_require__.bind(null, 45))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(45);
  },
  chunkName: function chunkName() {
    return "src/pages/404";
  }
}), universalOptions);
t_0.template = '../src/pages/404.js';
var t_1 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "src/pages/about";
  }
}), universalOptions);
t_1.template = '../src/pages/about.js';
var t_2 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/categories.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/categories */).then(__webpack_require__.bind(null, 47))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/categories.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "src/pages/categories";
  }
}), universalOptions);
t_2.template = '../src/pages/categories.js';
var t_3 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_3.template = '../src/pages/index.js';
var t_4 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/login.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/login */).then(__webpack_require__.bind(null, 53))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/login.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(53);
  },
  chunkName: function chunkName() {
    return "src/pages/login";
  }
}), universalOptions);
t_4.template = '../src/pages/login.js';
var t_5 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/products.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/products */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/products.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "src/pages/products";
  }
}), universalOptions);
t_5.template = '../src/pages/products.js';
var t_6 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/signup.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/signup */).then(__webpack_require__.bind(null, 50))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/signup.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return "src/pages/signup";
  }
}), universalOptions);
t_6.template = '../src/pages/signup.js';
var t_7 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/test.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/test */).then(__webpack_require__.bind(null, 51))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/test.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(51);
  },
  chunkName: function chunkName() {
    return "src/pages/test";
  }
}), universalOptions);
t_7.template = '../src/pages/test.js';
var t_8 = _Users_calummoore_Drive_Projects_Flow_git_weekly_webframe_webframe_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Screens",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Screens */).then(__webpack_require__.bind(null, 52))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Screens');
  },
  resolve: function resolve() {
    return /*require.resolve*/(52);
  },
  chunkName: function chunkName() {
    return "src/containers/Screens";
  }
}), universalOptions);
t_8.template = '../src/containers/Screens'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.js': t_0,
  '../src/pages/about.js': t_1,
  '../src/pages/categories.js': t_2,
  '../src/pages/index.js': t_3,
  '../src/pages/login.js': t_4,
  '../src/pages/products.js': t_5,
  '../src/pages/signup.js': t_6,
  '../src/pages/test.js': t_7,
  '../src/containers/Screens': t_8 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// Module
exports.push([module.i, "/* Basscss Grid */\n\n.col {\n  float: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.col-right {\n  float: right;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.col-1 {\n  width: calc(1/12 * 100%);\n}\n\n.col-2 {\n  width: calc(2/12 * 100%);\n}\n\n.col-3 {\n  width: calc(3/12 * 100%);\n}\n\n.col-4 {\n  width: calc(4/12 * 100%);\n}\n\n.col-5 {\n  width: calc(5/12 * 100%);\n}\n\n.col-6 {\n  width: calc(6/12 * 100%);\n}\n\n.col-7 {\n  width: calc(7/12 * 100%);\n}\n\n.col-8 {\n  width: calc(8/12 * 100%);\n}\n\n.col-9 {\n  width: calc(9/12 * 100%);\n}\n\n.col-10 {\n  width: calc(10/12 * 100%);\n}\n\n.col-11 {\n  width: calc(11/12 * 100%);\n}\n\n.col-12 {\n  width: 100%;\n}\n\n@media (min-width: 40em) {\n\n  .sm-col {\n    float: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .sm-col-right {\n    float: right;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .sm-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .sm-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .sm-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .sm-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .sm-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .sm-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .sm-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .sm-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .sm-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .sm-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .sm-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .sm-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 52em) {\n\n  .md-col {\n    float: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .md-col-right {\n    float: right;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .md-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .md-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .md-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .md-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .md-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .md-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .md-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .md-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .md-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .md-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .md-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .md-col-12 {\n    width: 100%;\n  }\n\n}\n\n@media (min-width: 64em) {\n\n  .lg-col {\n    float: left;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .lg-col-right {\n    float: right;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  .lg-col-1 {\n    width: calc(1/12 * 100%);\n  }\n\n  .lg-col-2 {\n    width: calc(2/12 * 100%);\n  }\n\n  .lg-col-3 {\n    width: calc(3/12 * 100%);\n  }\n\n  .lg-col-4 {\n    width: calc(4/12 * 100%);\n  }\n\n  .lg-col-5 {\n    width: calc(5/12 * 100%);\n  }\n\n  .lg-col-6 {\n    width: calc(6/12 * 100%);\n  }\n\n  .lg-col-7 {\n    width: calc(7/12 * 100%);\n  }\n\n  .lg-col-8 {\n    width: calc(8/12 * 100%);\n  }\n\n  .lg-col-9 {\n    width: calc(9/12 * 100%);\n  }\n\n  .lg-col-10 {\n    width: calc(10/12 * 100%);\n  }\n\n  .lg-col-11 {\n    width: calc(11/12 * 100%);\n  }\n\n  .lg-col-12 {\n    width: 100%;\n  }\n\n}\n\n\n\n/* Basscss Padding */\n\n.p0  { padding: 0 }\n\n.pt0 { padding-top: 0 }\n\n.pr0 { padding-right: 0 }\n\n.pb0 { padding-bottom: 0 }\n\n.pl0 { padding-left: 0 }\n\n.px0 { padding-left: 0; padding-right:  0 }\n\n.py0 { padding-top: 0;  padding-bottom: 0 }\n\n.p1  { padding: .5rem }\n\n.pt1 { padding-top: .5rem }\n\n.pr1 { padding-right: .5rem }\n\n.pb1 { padding-bottom: .5rem }\n\n.pl1 { padding-left: .5rem }\n\n.py1 { padding-top: .5rem; padding-bottom: .5rem }\n\n.px1 { padding-left: .5rem; padding-right: .5rem }\n\n.p2  { padding: 1rem }\n\n.pt2 { padding-top: 1rem }\n\n.pr2 { padding-right: 1rem }\n\n.pb2 { padding-bottom: 1rem }\n\n.pl2 { padding-left: 1rem }\n\n.py2 { padding-top: 1rem; padding-bottom: 1rem }\n\n.px2 { padding-left: 1rem; padding-right: 1rem }\n\n.p3  { padding: 2rem }\n\n.pt3 { padding-top: 2rem }\n\n.pr3 { padding-right: 2rem }\n\n.pb3 { padding-bottom: 2rem }\n\n.pl3 { padding-left: 2rem }\n\n.py3 { padding-top: 2rem; padding-bottom: 2rem }\n\n.px3 { padding-left: 2rem; padding-right: 2rem }\n\n.p4  { padding: 4rem }\n\n.pt4 { padding-top: 4rem }\n\n.pr4 { padding-right: 4rem }\n\n.pb4 { padding-bottom: 4rem }\n\n.pl4 { padding-left: 4rem }\n\n.py4 { padding-top: 4rem; padding-bottom: 4rem }\n\n.px4 { padding-left: 4rem; padding-right: 4rem }\n\n\n/* Basscss Margin */\n\n.m0  { margin:        0 }\n\n.mt0 { margin-top:    0 }\n\n.mr0 { margin-right:  0 }\n\n.mb0 { margin-bottom: 0 }\n\n.ml0 { margin-left:   0 }\n\n.mx0 { margin-left:   0; margin-right:  0 }\n\n.my0 { margin-top:    0; margin-bottom: 0 }\n\n.m1  { margin:        .5rem }\n\n.mt1 { margin-top:        .5rem }\n\n.mr1 { margin-right:        .5rem }\n\n.mb1 { margin-bottom:        .5rem }\n\n.ml1 { margin-left:        .5rem }\n\n.mx1 { margin-left:        .5rem; margin-right:        .5rem }\n\n.my1 { margin-top:        .5rem; margin-bottom:        .5rem }\n\n.m2  { margin:        1rem }\n\n.mt2 { margin-top:        1rem }\n\n.mr2 { margin-right:        1rem }\n\n.mb2 { margin-bottom:        1rem }\n\n.ml2 { margin-left:        1rem }\n\n.mx2 { margin-left:        1rem; margin-right:        1rem }\n\n.my2 { margin-top:        1rem; margin-bottom:        1rem }\n\n.m3  { margin:        2rem }\n\n.mt3 { margin-top:        2rem }\n\n.mr3 { margin-right:        2rem }\n\n.mb3 { margin-bottom:        2rem }\n\n.ml3 { margin-left:        2rem }\n\n.mx3 { margin-left:        2rem; margin-right:        2rem }\n\n.my3 { margin-top:        2rem; margin-bottom:        2rem }\n\n.m4  { margin:        4rem }\n\n.mt4 { margin-top:        4rem }\n\n.mr4 { margin-right:        4rem }\n\n.mb4 { margin-bottom:        4rem }\n\n.ml4 { margin-left:        4rem }\n\n.mx4 { margin-left:        4rem; margin-right:        4rem }\n\n.my4 { margin-top:        4rem; margin-bottom:        4rem }\n\n.mxn1 { margin-left:        calc(.5rem * -1); margin-right:        calc(.5rem * -1); }\n\n.mxn2 { margin-left:        calc(1rem * -1); margin-right:        calc(1rem * -1); }\n\n.mxn3 { margin-left:        calc(2rem * -1); margin-right:        calc(2rem * -1); }\n\n.mxn4 { margin-left:        calc(4rem * -1); margin-right:        calc(4rem * -1); }\n\n.m-auto  { margin: auto; }\n\n.mt-auto { margin-top: auto }\n\n.mr-auto { margin-right: auto }\n\n.mb-auto { margin-bottom: auto }\n\n.ml-auto { margin-left: auto }\n\n.mx-auto { margin-left: auto; margin-right: auto; }\n\n.my-auto { margin-top: auto; margin-bottom: auto; }\n", ""]);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", null, "React Static is a progressive static site generator for React."));
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var components_ImageListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);



 // import tw from 'tailwind.macro'






var _ref =  true ? {
  name: "16f1609",
  styles: "margin-top:1em;"
} : undefined;

function Categories() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      categories = _useRouteData.categories;

  var _useSiteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useSiteData"])(),
      CACHE_URL = _useSiteData.CACHE_URL;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Seo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Categories"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", null, "Categories"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_grid__WEBPACK_IMPORTED_MODULE_5__[/* Row */ "b"], {
    gutter: 2
  }, (categories || []).map(function (cat) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_grid__WEBPACK_IMPORTED_MODULE_5__[/* Col */ "a"], {
      gutter: 2,
      col: 12,
      sm: 4,
      mb: 2,
      key: cat.id
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_ImageListItem__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      title: cat.name,
      src: cat.screen ? "".concat(CACHE_URL, "/1200x/").concat(cat.screen.src) : '',
      to: "/categories/".concat(cat.id)
    }));
  }))));
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);








var _ref =  true ? {
  name: "l2z0vi",
  styles: "margin-top:0.5em;"
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      screens = _useRouteData.screens;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Seo__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "Beautiful web app screenshots"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_List__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    items: screens
  })));
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var components_ImageListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);



 // import tw from 'tailwind.macro'






var _ref =  true ? {
  name: "16f1609",
  styles: "margin-top:1em;"
} : undefined;

function Categories() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      products = _useRouteData.products;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Seo__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    title: "Products"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", null, "Products"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_grid__WEBPACK_IMPORTED_MODULE_5__[/* Row */ "b"], {
    gutter: 2
  }, (products || []).map(function (prod) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_grid__WEBPACK_IMPORTED_MODULE_5__[/* Col */ "a"], {
      gutter: 2,
      col: 12,
      sm: 4,
      mb: 2,
      key: prod.id
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_ImageListItem__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      title: prod.name,
      src: prod.screen && prod.screen.src,
      to: "/products/".concat(prod.id)
    }));
  }))));
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_auth_Signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);

/* harmony default export */ __webpack_exports__["default"] = (components_auth_Signup__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




var _ref =  true ? {
  name: "1x5h3yg",
  styles: "background-color:#3182ce;"
} : undefined;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    style: {
      textAlign: 'center'
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
    css:
    /*#__PURE__*/
    _ref
  }, "TEST"));
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);




 // import tw from 'tailwind.macro'




var _ref =  true ? {
  name: "jkbde1",
  styles: "display:inline-block;margin-right:10px;"
} : undefined;

var _ref2 =  true ? {
  name: "qh1a15",
  styles: "display:inline-block;margin-right:10px;color:#aaa;"
} : undefined;

var _ref3 =  true ? {
  name: "1baulvz",
  styles: "display:inline-block;"
} : undefined;

var _ref4 =  true ? {
  name: "16f1609",
  styles: "margin-top:1em;"
} : undefined;

function Screens() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      parentTitle = _useRouteData.parentTitle,
      parentPath = _useRouteData.parentPath,
      title = _useRouteData.title,
      screens = _useRouteData.screens;

  var hasScreens = screens && screens.length;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, parentTitle && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
    css:
    /*#__PURE__*/
    _ref,
    to: parentPath
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", null, parentTitle)), parentTitle && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
    css:
    /*#__PURE__*/
    _ref2
  }, " / "), title && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
    css:
    /*#__PURE__*/
    _ref3
  }, title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    css:
    /*#__PURE__*/
    _ref4
  }, hasScreens ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_List__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    items: screens
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", null, "No screens found!")));
}

/* harmony default export */ __webpack_exports__["default"] = (Screens);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(11);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(8);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(7);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/form/Label.js
var Label = __webpack_require__(23);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/form/Input.js
var Input = __webpack_require__(24);

// EXTERNAL MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/form/Button.js
var Button = __webpack_require__(16);

// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/components/auth/Login.js












var _ref =  true ? {
  name: "ws79dq",
  styles: "margin-top:1em;margin-bottom:1em;font-size:1em;"
} : undefined;

var _ref2 =  true ? {
  name: "tokvmb",
  styles: "color:red;"
} : undefined;

function Login(_ref3) {
  var onDone = _ref3.onDone;

  var _useState = Object(external_react_["useState"])({
    email: '',
    password: ''
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref4 = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2() {
      var email, password;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = formData.email, password = formData.password;

              if (!(!email || !password)) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", alert('Email and Password are pretty much required!'));

            case 3:
              external_firebase_default.a.auth().signInWithEmailAndPassword(email, password).then(
              /*#__PURE__*/
              asyncToGenerator_default()(
              /*#__PURE__*/
              regenerator_default.a.mark(function _callee() {
                return regenerator_default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return external_firebase_default.a.auth().setPersistence(external_firebase_default.a.auth.Auth.Persistence.LOCAL);

                      case 2:
                        if (onDone) onDone(formData);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })))["catch"](function (error) {
                if (error.code) {
                  setFormData(objectSpread_default()({}, formData, {
                    error: error.message
                  }));
                  return;
                }
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();

  return Object(core_["jsx"])("div", {
    css: styles.box
  }, Object(core_["jsx"])("h2", {
    css: styles.title
  }, "Login to Webframe! ", Object(core_["jsx"])("span", {
    "aria-label": "love",
    role: "img"
  }, "\uD83D\uDC4B")), Object(core_["jsx"])("p", {
    css: styles.sub
  }, "Welcome back it's great to have you!"), Object(core_["jsx"])(Label["a" /* default */], {
    "for": "emailInput"
  }, "E-mail"), Object(core_["jsx"])(Input["a" /* default */], {
    onChange: function onChange(e) {
      return setFormData(objectSpread_default()({}, formData, {
        email: e.target.value
      }));
    },
    value: formData.email,
    id: "emailInput",
    placeholder: "awesome@person.com",
    type: "email"
  }), Object(core_["jsx"])(Label["a" /* default */], {
    "for": "passwordInput"
  }, "Password"), Object(core_["jsx"])(Input["a" /* default */], {
    onChange: function onChange(e) {
      return setFormData(objectSpread_default()({}, formData, {
        password: e.target.value
      }));
    },
    value: formData.password,
    id: "passwordInput",
    placeholder: "super secret password",
    type: "password"
  }), Object(core_["jsx"])(Button["a" /* default */], {
    onClick: onSubmit,
    css:
    /*#__PURE__*/
    _ref
  }, "Login"), formData.error && Object(core_["jsx"])("p", {
    css:
    /*#__PURE__*/
    _ref2
  }, "Error: ", formData.error));
}
var styles = {
  box:
  /*#__PURE__*/
   true ? {
    name: "1ypfjhr",
    styles: "margin:auto;max-width:500px;padding:1em;font-size:0.875rem;"
  } : undefined,
  title:
  /*#__PURE__*/
   true ? {
    name: "1ypzuc2",
    styles: "font-size:2.25rem;text-align:center;margin-top:3rem;margin-bottom:1.5rem;"
  } : undefined,
  sub:
  /*#__PURE__*/
   true ? {
    name: "lj0eas",
    styles: "color:#a0aec0;font-size:1.125rem;text-align:center;margin-top:1.5rem;margin-bottom:2.5rem;"
  } : undefined
};
// CONCATENATED MODULE: /Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/src/pages/login.js

/* harmony default export */ var login = __webpack_exports__["default"] = (Login);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactStatic = __webpack_require__(2);

var _router = __webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(67);
module.exports = __webpack_require__(73);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(40)["default"];

var _require = __webpack_require__(41),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(40)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(41),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(42),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(42),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(37);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 26,
	"./": 26,
	"./index": 26,
	"./index.js": 26
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 69;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(36);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(43);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(9);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(74);

var _interopRequireDefault = __webpack_require__(75);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(13));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(27));

var React = _interopRequireWildcard(__webpack_require__(1));

var _useStaticInfo = __webpack_require__(76);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(77)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("/Users/calummoore/Drive/Projects/Flow/git/weekly/webframe/webframe/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);




 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    renderMethod(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["AppContainer"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(78)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("typeface-open-sans");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// Module
exports.push([module.i, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", ""]);



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 400;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 600;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.ReactModal__Body--open {\n  overflow-y: hidden;\n}", ""]);



/***/ })
/******/ ]);
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useTimeout = function useTimeout(callback, delay) {
  var savedCallback = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    savedCallback.current = callback;
  }, [callback]);
  (0, _react.useEffect)(function () {
    var tick = function tick() {
      savedCallback.current();
    };

    if (delay !== null) {
      var id = setTimeout(tick, delay);
      return function () {
        return clearTimeout(id);
      };
    }
  }, [delay]);
};

var _default = useTimeout;
exports["default"] = _default;

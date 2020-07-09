"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TopBar = _interopRequireDefault(require("./TopBar"));

var _default = {
  component: _TopBar.default,
  title: "TopBar"
};
exports.default = _default;

const Default = () => /*#__PURE__*/_react.default.createElement(_TopBar.default, null, "App");

exports.Default = Default;
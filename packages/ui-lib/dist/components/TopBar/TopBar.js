"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

const StyledAppBar = (0, _styledComponents.default)(_AppBar.default)`
  padding: 8px;
`;

const TopBar = ({
  children
}) => /*#__PURE__*/_react.default.createElement(StyledAppBar, null, /*#__PURE__*/_react.default.createElement(_Typography.default, null, children));

var _default = TopBar;
exports.default = _default;
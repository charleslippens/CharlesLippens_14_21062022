"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Styling/modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(element) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-background"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, element.text), /*#__PURE__*/_react.default.createElement("button", {
    className: "close-modal",
    onClick: element.close
  }, "X")));
}

var _default = Modal;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Description = exports.Title = exports.Tabcontent = exports.TabButton = exports.Tab = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    font-size: 17px;\n    &:hover {\n        background-color: #ddd;\n    }\n    &.active {\n        background-color: #ccc !important;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #f1f1f1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Style the tab */
var Tab = _styledComponents["default"].div(_templateObject());
/* Style the buttons inside the tab */


exports.Tab = Tab;

var TabButton = _styledComponents["default"].button(_templateObject2());
/* Style the tab content */


exports.TabButton = TabButton;

var Tabcontent = _styledComponents["default"].div(_templateObject3()); // tab title


exports.Tabcontent = Tabcontent;

var Title = _styledComponents["default"].h4(_templateObject4()); // tab description


exports.Title = Title;

var Description = _styledComponents["default"].p(_templateObject5()); // wrapper


exports.Description = Description;

var Wrapper = _styledComponents["default"].div(_templateObject6());

exports.Wrapper = Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvU3R5bGVzLmpzIl0sIm5hbWVzIjpbIlRhYiIsInN0eWxlZCIsImRpdiIsIlRhYkJ1dHRvbiIsImJ1dHRvbiIsIlRhYmNvbnRlbnQiLCJUaXRsZSIsImg0IiwiRGVzY3JpcHRpb24iLCJwIiwiV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNPLElBQU1BLEdBQUcsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQVQ7QUFNUDs7Ozs7QUFDTyxJQUFNQyxTQUFTLEdBQUdGLDZCQUFPRyxNQUFWLG9CQUFmO0FBaUJQOzs7OztBQUNPLElBQU1DLFVBQVUsR0FBR0osNkJBQU9DLEdBQVYsb0JBQWhCLEMsQ0FPUDs7Ozs7QUFDTyxJQUFNSSxLQUFLLEdBQUdMLDZCQUFPTSxFQUFWLG9CQUFYLEMsQ0FFUDs7Ozs7QUFDTyxJQUFNQyxXQUFXLEdBQUdQLDZCQUFPUSxDQUFWLG9CQUFqQixDLENBRVA7Ozs7O0FBQ08sSUFBTUMsT0FBTyxHQUFHVCw2QkFBT0MsR0FBVixvQkFBYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLyogU3R5bGUgdGhlIHRhYiAqL1xyXG5leHBvcnQgY29uc3QgVGFiID0gc3R5bGVkLmRpdmBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuYDtcclxuXHJcbi8qIFN0eWxlIHRoZSBidXR0b25zIGluc2lkZSB0aGUgdGFiICovXHJcbmV4cG9ydCBjb25zdCBUYWJCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgIH1cclxuYDtcclxuXHJcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xyXG5leHBvcnQgY29uc3QgVGFiY29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuYDtcclxuXHJcbi8vIHRhYiB0aXRsZVxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDRgYDtcclxuXHJcbi8vIHRhYiBkZXNjcmlwdGlvblxyXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBgO1xyXG5cclxuLy8gd3JhcHBlclxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgYDsiXX0=
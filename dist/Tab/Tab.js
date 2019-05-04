"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("./Styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tab = function tab(props) {
  // generate tabl links
  var tabLinks = props.tabLinks.map(function (t) {
    var classActive = props.selectedTab === t.name ? 'active' : '';
    return _react["default"].createElement(_Styles.TabButton, {
      key: t.name,
      className: classActive,
      onClick: function onClick() {
        return props.clickTab(t.name);
      }
    }, t.label);
  }); // tab details by tab clicked

  var tabDetails = props.tabLinks.map(function (td) {
    var style = td.name === props.selectedTab ? 'block' : 'none';
    var details = '';
    if (!props) return details;
    details = props[td.name]();
    return _react["default"].createElement(_Styles.Tabcontent, {
      key: td.name,
      style: {
        display: style
      }
    }, details);
  });
  return _react["default"].createElement(_Styles.Wrapper, null, _react["default"].createElement(_Styles.Title, null, props.tabTitle), _react["default"].createElement(_Styles.Description, null, props.tabDescription), _react["default"].createElement(_Styles.Tab, null, tabLinks), tabDetails);
};

var _default = tab;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UYWIvVGFiLmpzIl0sIm5hbWVzIjpbInRhYiIsInByb3BzIiwidGFiTGlua3MiLCJtYXAiLCJ0IiwiY2xhc3NBY3RpdmUiLCJzZWxlY3RlZFRhYiIsIm5hbWUiLCJjbGlja1RhYiIsImxhYmVsIiwidGFiRGV0YWlscyIsInRkIiwic3R5bGUiLCJkZXRhaWxzIiwiZGlzcGxheSIsInRhYlRpdGxlIiwidGFiRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUNuQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3JDLFFBQU1DLFdBQVcsR0FBR0osS0FBSyxDQUFDSyxXQUFOLEtBQXNCRixDQUFDLENBQUNHLElBQXhCLEdBQStCLFFBQS9CLEdBQTBDLEVBQTlEO0FBQ0EsV0FDSSxnQ0FBQyxpQkFBRDtBQUFXLE1BQUEsR0FBRyxFQUFFSCxDQUFDLENBQUNHLElBQWxCO0FBQXdCLE1BQUEsU0FBUyxFQUFFRixXQUFuQztBQUFnRCxNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU1KLEtBQUssQ0FBQ08sUUFBTixDQUFlSixDQUFDLENBQUNHLElBQWpCLENBQU47QUFBQTtBQUF6RCxPQUF3RkgsQ0FBQyxDQUFDSyxLQUExRixDQURKO0FBR0gsR0FMZ0IsQ0FBakIsQ0FGbUIsQ0FTbkI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHVCxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFBUSxFQUFFLEVBQUk7QUFDeEMsUUFBTUMsS0FBSyxHQUFHRCxFQUFFLENBQUNKLElBQUgsS0FBWU4sS0FBSyxDQUFDSyxXQUFsQixHQUFnQyxPQUFoQyxHQUEwQyxNQUF4RDtBQUNBLFFBQUlPLE9BQU8sR0FBRyxFQUFkO0FBRUEsUUFBSSxDQUFDWixLQUFMLEVBQVksT0FBT1ksT0FBUDtBQUVaQSxJQUFBQSxPQUFPLEdBQUdaLEtBQUssQ0FBQ1UsRUFBRSxDQUFDSixJQUFKLENBQUwsRUFBVjtBQUVBLFdBQ0ksZ0NBQUMsa0JBQUQ7QUFBWSxNQUFBLEdBQUcsRUFBRUksRUFBRSxDQUFDSixJQUFwQjtBQUEwQixNQUFBLEtBQUssRUFBRTtBQUFFTyxRQUFBQSxPQUFPLEVBQUVGO0FBQVg7QUFBakMsT0FDS0MsT0FETCxDQURKO0FBS0gsR0Fia0IsQ0FBbkI7QUFlQSxTQUNJLGdDQUFDLGVBQUQsUUFDSSxnQ0FBQyxhQUFELFFBQVFaLEtBQUssQ0FBQ2MsUUFBZCxDQURKLEVBRUksZ0NBQUMsbUJBQUQsUUFBY2QsS0FBSyxDQUFDZSxjQUFwQixDQUZKLEVBSUksZ0NBQUMsV0FBRCxRQUNLZCxRQURMLENBSkosRUFRS1EsVUFSTCxDQURKO0FBWUgsQ0FyQ0Q7O2VBdUNlVixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFRhYiwgVGFiQnV0dG9uLCBUYWJjb250ZW50LCBUaXRsZSwgRGVzY3JpcHRpb24sIFdyYXBwZXIgfSBmcm9tICcuL1N0eWxlcyc7XHJcblxyXG5jb25zdCB0YWIgPSAocHJvcHMpID0+IHtcclxuICAgIC8vIGdlbmVyYXRlIHRhYmwgbGlua3NcclxuICAgIGNvbnN0IHRhYkxpbmtzID0gcHJvcHMudGFiTGlua3MubWFwKHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzQWN0aXZlID0gcHJvcHMuc2VsZWN0ZWRUYWIgPT09IHQubmFtZSA/ICdhY3RpdmUnIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYkJ1dHRvbiBrZXk9e3QubmFtZX0gY2xhc3NOYW1lPXtjbGFzc0FjdGl2ZX0gb25DbGljaz17KCkgPT4gcHJvcHMuY2xpY2tUYWIodC5uYW1lKX0+e3QubGFiZWx9PC9UYWJCdXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdGFiIGRldGFpbHMgYnkgdGFiIGNsaWNrZWRcclxuICAgIGNvbnN0IHRhYkRldGFpbHMgPSBwcm9wcy50YWJMaW5rcy5tYXAodGQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGQubmFtZSA9PT0gcHJvcHMuc2VsZWN0ZWRUYWIgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgIGxldCBkZXRhaWxzID0gJyc7XHJcblxyXG4gICAgICAgIGlmICghcHJvcHMpIHJldHVybiBkZXRhaWxzO1xyXG5cclxuICAgICAgICBkZXRhaWxzID0gcHJvcHNbdGQubmFtZV0oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRhYmNvbnRlbnQga2V5PXt0ZC5uYW1lfSBzdHlsZT17eyBkaXNwbGF5OiBzdHlsZSB9fT5cclxuICAgICAgICAgICAgICAgIHtkZXRhaWxzfVxyXG4gICAgICAgICAgICA8L1RhYmNvbnRlbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICA8VGl0bGU+e3Byb3BzLnRhYlRpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbj57cHJvcHMudGFiRGVzY3JpcHRpb259PC9EZXNjcmlwdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxUYWI+XHJcbiAgICAgICAgICAgICAgICB7dGFiTGlua3N9XHJcbiAgICAgICAgICAgIDwvVGFiPlxyXG5cclxuICAgICAgICAgICAge3RhYkRldGFpbHN9XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFiOyJdfQ==
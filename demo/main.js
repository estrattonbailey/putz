(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('../../../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loader = (0, _index2.default)();

window.loader = loader;

},{"../../../index.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createBar = function createBar(root, classname) {
  var o = document.createElement('div');
  var i = document.createElement('div');

  o.className = classname;
  o.appendChild(i);
  root.insertBefore(o, root.children[0]);

  return {
    outer: o,
    inner: i
  };
};

exports.default = function () {
  var root = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];
  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var timer = null;
  var speed = opts.speed || 200;
  var classname = opts.classname || 'loader';
  var state = {
    active: false,
    progress: 0
  };

  var bar = createBar(root, classname);

  var render = function render() {
    var val = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    state.progress = val;
    bar.inner.style.cssText = '\n      transform: translateY(' + (state.active ? '0' : '-100%') + ') translateX(' + (-100 + state.progress) + '%); \n      -webkit-transform: translateY(' + (state.active ? '0' : '-100%') + ') translateX(' + (-100 + state.progress) + ')';
  };

  var go = function go(val) {
    if (!state.active) {
      return;
    }
    render(Math.min(val, 95));
  };

  var inc = function inc() {
    var val = arguments.length <= 0 || arguments[0] === undefined ? Math.random() * 10 : arguments[0];
    return go(state.progress + val);
  };

  var end = function end() {
    state.active = false;
    render(100);
    setTimeout(function () {
      return render();
    }, speed);
    if (timer) {
      clearTimeout(timer);
    }
  };

  var start = function start() {
    state.active = true;
    inc();
  };

  var putz = function putz() {
    var interval = arguments.length <= 0 || arguments[0] === undefined ? 500 : arguments[0];

    if (!state.active) {
      return;
    }
    timer = setInterval(function () {
      return inc();
    }, interval);
  };

  return Object.create({
    putz: putz,
    start: start,
    inc: inc,
    go: go,
    end: end,
    getState: function getState() {
      return state;
    }
  }, {
    bar: {
      value: bar
    }
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsSUFBTSxTQUFTLHNCQUFmOztBQUVBLE9BQU8sTUFBUCxHQUFnQixNQUFoQjs7Ozs7Ozs7QUNKQSxJQUFNLFlBQVksU0FBWixTQUFZLENBQUMsSUFBRCxFQUFPLFNBQVAsRUFBcUI7QUFDckMsTUFBSSxJQUFJLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFSO0FBQ0EsTUFBSSxJQUFJLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFSOztBQUVBLElBQUUsU0FBRixHQUFjLFNBQWQ7QUFDQSxJQUFFLFdBQUYsQ0FBYyxDQUFkO0FBQ0EsT0FBSyxZQUFMLENBQWtCLENBQWxCLEVBQXFCLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBckI7O0FBRUEsU0FBTztBQUNMLFdBQU8sQ0FERjtBQUVMLFdBQU87QUFGRixHQUFQO0FBSUQsQ0FaRDs7a0JBY2UsWUFBcUM7QUFBQSxNQUFwQyxJQUFvQyx5REFBN0IsU0FBUyxJQUFvQjtBQUFBLE1BQWQsSUFBYyx5REFBUCxFQUFPOztBQUNsRCxNQUFJLFFBQVEsSUFBWjtBQUNBLE1BQU0sUUFBUSxLQUFLLEtBQUwsSUFBYyxHQUE1QjtBQUNBLE1BQU0sWUFBWSxLQUFLLFNBQUwsSUFBa0IsUUFBcEM7QUFDQSxNQUFNLFFBQVE7QUFDWixZQUFRLEtBREk7QUFFWixjQUFVO0FBRkUsR0FBZDs7QUFLQSxNQUFNLE1BQU0sVUFBVSxJQUFWLEVBQWdCLFNBQWhCLENBQVo7O0FBRUEsTUFBTSxTQUFTLFNBQVQsTUFBUyxHQUFhO0FBQUEsUUFBWixHQUFZLHlEQUFOLENBQU07O0FBQzFCLFVBQU0sUUFBTixHQUFpQixHQUFqQjtBQUNBLFFBQUksS0FBSixDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsdUNBQzBCLE1BQU0sTUFBTixHQUFlLEdBQWYsR0FBcUIsT0FEL0MsdUJBQ3NFLENBQUMsR0FBRCxHQUFPLE1BQU0sUUFEbkYsb0RBRWtDLE1BQU0sTUFBTixHQUFlLEdBQWYsR0FBcUIsT0FGdkQsdUJBRThFLENBQUMsR0FBRCxHQUFPLE1BQU0sUUFGM0Y7QUFHRCxHQUxEOztBQU9BLE1BQU0sS0FBSyxTQUFMLEVBQUssTUFBTztBQUNoQixRQUFJLENBQUMsTUFBTSxNQUFYLEVBQWtCO0FBQUU7QUFBUTtBQUM1QixXQUFPLEtBQUssR0FBTCxDQUFTLEdBQVQsRUFBYyxFQUFkLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQU0sTUFBTSxTQUFOLEdBQU07QUFBQSxRQUFDLEdBQUQseURBQVEsS0FBSyxNQUFMLEtBQWdCLEVBQXhCO0FBQUEsV0FBZ0MsR0FBRyxNQUFNLFFBQU4sR0FBaUIsR0FBcEIsQ0FBaEM7QUFBQSxHQUFaOztBQUVBLE1BQU0sTUFBTSxTQUFOLEdBQU0sR0FBTTtBQUNoQixVQUFNLE1BQU4sR0FBZSxLQUFmO0FBQ0EsV0FBTyxHQUFQO0FBQ0EsZUFBVztBQUFBLGFBQU0sUUFBTjtBQUFBLEtBQVgsRUFBMkIsS0FBM0I7QUFDQSxRQUFJLEtBQUosRUFBVTtBQUFFLG1CQUFhLEtBQWI7QUFBcUI7QUFDbEMsR0FMRDs7QUFPQSxNQUFNLFFBQVEsU0FBUixLQUFRLEdBQU07QUFDbEIsVUFBTSxNQUFOLEdBQWUsSUFBZjtBQUNBO0FBQ0QsR0FIRDs7QUFLQSxNQUFNLE9BQU8sU0FBUCxJQUFPLEdBQW9CO0FBQUEsUUFBbkIsUUFBbUIseURBQVIsR0FBUTs7QUFDL0IsUUFBSSxDQUFDLE1BQU0sTUFBWCxFQUFrQjtBQUFFO0FBQVE7QUFDNUIsWUFBUSxZQUFZO0FBQUEsYUFBTSxLQUFOO0FBQUEsS0FBWixFQUF5QixRQUF6QixDQUFSO0FBQ0QsR0FIRDs7QUFLQSxTQUFPLE9BQU8sTUFBUCxDQUFjO0FBQ25CLGNBRG1CO0FBRW5CLGdCQUZtQjtBQUduQixZQUhtQjtBQUluQixVQUptQjtBQUtuQixZQUxtQjtBQU1uQixjQUFVO0FBQUEsYUFBTSxLQUFOO0FBQUE7QUFOUyxHQUFkLEVBT0w7QUFDQSxTQUFLO0FBQ0gsYUFBTztBQURKO0FBREwsR0FQSyxDQUFQO0FBWUQsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnLi4vLi4vLi4vaW5kZXguanMnXG5cbmNvbnN0IGxvYWRlciA9IHByb2dyZXNzKClcblxud2luZG93LmxvYWRlciA9IGxvYWRlclxuIiwiY29uc3QgY3JlYXRlQmFyID0gKHJvb3QsIGNsYXNzbmFtZSkgPT4ge1xuICBsZXQgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxldCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBvLmNsYXNzTmFtZSA9IGNsYXNzbmFtZSBcbiAgby5hcHBlbmRDaGlsZChpKVxuICByb290Lmluc2VydEJlZm9yZShvLCByb290LmNoaWxkcmVuWzBdKVxuXG4gIHJldHVybiB7XG4gICAgb3V0ZXI6IG8sXG4gICAgaW5uZXI6IGlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocm9vdCA9IGRvY3VtZW50LmJvZHksIG9wdHMgPSB7fSkgPT4ge1xuICBsZXQgdGltZXIgPSBudWxsXG4gIGNvbnN0IHNwZWVkID0gb3B0cy5zcGVlZCB8fCAyMDBcbiAgY29uc3QgY2xhc3NuYW1lID0gb3B0cy5jbGFzc25hbWUgfHwgJ2xvYWRlcidcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwcm9ncmVzczogMFxuICB9XG5cbiAgY29uc3QgYmFyID0gY3JlYXRlQmFyKHJvb3QsIGNsYXNzbmFtZSlcblxuICBjb25zdCByZW5kZXIgPSAodmFsID0gMCkgPT4ge1xuICAgIHN0YXRlLnByb2dyZXNzID0gdmFsXG4gICAgYmFyLmlubmVyLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHtzdGF0ZS5hY3RpdmUgPyAnMCcgOiAnLTEwMCUnfSkgdHJhbnNsYXRlWCgkey0xMDAgKyBzdGF0ZS5wcm9ncmVzc30lKTsgXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3N0YXRlLmFjdGl2ZSA/ICcwJyA6ICctMTAwJSd9KSB0cmFuc2xhdGVYKCR7LTEwMCArIHN0YXRlLnByb2dyZXNzfSlgXG4gIH1cblxuICBjb25zdCBnbyA9IHZhbCA9PiB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpeyByZXR1cm4gfVxuICAgIHJlbmRlcihNYXRoLm1pbih2YWwsIDk1KSlcbiAgfVxuXG4gIGNvbnN0IGluYyA9ICh2YWwgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSkgPT4gZ28oc3RhdGUucHJvZ3Jlc3MgKyB2YWwpXG5cbiAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgIHN0YXRlLmFjdGl2ZSA9IGZhbHNlXG4gICAgcmVuZGVyKDEwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlbmRlcigpLCBzcGVlZClcbiAgICBpZiAodGltZXIpeyBjbGVhclRpbWVvdXQodGltZXIpIH1cbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIHN0YXRlLmFjdGl2ZSA9IHRydWVcbiAgICBpbmMoKVxuICB9XG5cbiAgY29uc3QgcHV0eiA9IChpbnRlcnZhbCA9IDUwMCkgPT4ge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKXsgcmV0dXJuIH1cbiAgICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IGluYygpLCBpbnRlcnZhbClcbiAgfVxuICBcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoe1xuICAgIHB1dHosXG4gICAgc3RhcnQsXG4gICAgaW5jLFxuICAgIGdvLFxuICAgIGVuZCxcbiAgICBnZXRTdGF0ZTogKCkgPT4gc3RhdGVcbiAgfSx7XG4gICAgYmFyOiB7XG4gICAgICB2YWx1ZTogYmFyXG4gICAgfVxuICB9KVxufVxuIl19

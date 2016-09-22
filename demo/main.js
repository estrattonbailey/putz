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
var styles = function styles(bar, _outer, _inner) {
  var i = document.createElement('style');
  var o = document.createElement('style');
  document.body.insertBefore(i, bar);
  document.body.insertBefore(o, bar);

  return {
    outer: function outer(styles) {
      return styles ? o.innerHTML = '.' + _outer + ' {' + styles + '}' : o.innerHTML = '';
    },
    inner: function inner(styles) {
      return styles ? i.innerHTML = '.' + _inner + ' {' + styles + '}' : i.innerHTML = '';
    }
  };
};

var createBar = function createBar(root, outer, inner) {
  var o = document.createElement('div');
  var i = document.createElement('div');

  o.className = 'loader';
  i.className = 'loader__inner';

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
  var max = opts.max || 95;
  var outerClass = opts.outer || 'loader';
  var innerClass = opts.inner || 'loader__inner';
  var state = {
    active: false,
    progress: 0
  };

  var bar = createBar(root, outerClass, innerClass);

  var render = function render() {
    var val = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    state.progress = val;
    bar.inner.style.cssText = '\n      transform: translateY(' + (state.active ? '0' : '-100%') + ') translateX(' + (-100 + state.progress) + '%); \n      -webkit-transform: translateY(' + (state.active ? '0' : '-100%') + ') translateX(' + (-100 + state.progress) + ')';
  };

  var go = function go(val) {
    if (!state.active) {
      return;
    }
    render(Math.min(val, max));
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

  var setStyle = styles(bar.outer, outerClass, innerClass);

  return Object.create({
    putz: putz,
    start: start,
    inc: inc,
    go: go,
    end: end,
    setStyle: setStyle,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsSUFBTSxTQUFTLHNCQUFmOztBQUVBLE9BQU8sTUFBUCxHQUFnQixNQUFoQjs7Ozs7Ozs7QUNKQSxJQUFNLFNBQVMsU0FBVCxNQUFTLENBQUMsR0FBRCxFQUFNLE1BQU4sRUFBYSxNQUFiLEVBQXVCO0FBQ3BDLE1BQUksSUFBSSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBLE1BQUksSUFBSSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBLFdBQVMsSUFBVCxDQUFjLFlBQWQsQ0FBMkIsQ0FBM0IsRUFBOEIsR0FBOUI7QUFDQSxXQUFTLElBQVQsQ0FBYyxZQUFkLENBQTJCLENBQTNCLEVBQThCLEdBQTlCOztBQUVBLFNBQU87QUFDTCxXQUFPO0FBQUEsYUFBVSxTQUFTLEVBQUUsU0FBRixTQUFrQixNQUFsQixVQUE0QixNQUE1QixNQUFULEdBQWlELEVBQUUsU0FBRixHQUFjLEVBQXpFO0FBQUEsS0FERjtBQUVMLFdBQU87QUFBQSxhQUFVLFNBQVMsRUFBRSxTQUFGLFNBQWtCLE1BQWxCLFVBQTRCLE1BQTVCLE1BQVQsR0FBaUQsRUFBRSxTQUFGLEdBQWMsRUFBekU7QUFBQTtBQUZGLEdBQVA7QUFJRCxDQVZEOztBQVlBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsRUFBd0I7QUFDeEMsTUFBSSxJQUFJLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFSO0FBQ0EsTUFBSSxJQUFJLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFSOztBQUVBLElBQUUsU0FBRjtBQUNBLElBQUUsU0FBRjs7QUFFQSxJQUFFLFdBQUYsQ0FBYyxDQUFkOztBQUVBLE9BQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQXJCOztBQUVBLFNBQU87QUFDTCxXQUFPLENBREY7QUFFTCxXQUFPO0FBRkYsR0FBUDtBQUlELENBZkQ7O2tCQWlCZSxZQUFxQztBQUFBLE1BQXBDLElBQW9DLHlEQUE3QixTQUFTLElBQW9CO0FBQUEsTUFBZCxJQUFjLHlEQUFQLEVBQU87O0FBQ2xELE1BQUksUUFBUSxJQUFaO0FBQ0EsTUFBTSxRQUFRLEtBQUssS0FBTCxJQUFjLEdBQTVCO0FBQ0EsTUFBTSxNQUFNLEtBQUssR0FBTCxJQUFZLEVBQXhCO0FBQ0EsTUFBTSxhQUFhLEtBQUssS0FBTCxJQUFjLFFBQWpDO0FBQ0EsTUFBTSxhQUFhLEtBQUssS0FBTCxJQUFjLGVBQWpDO0FBQ0EsTUFBTSxRQUFRO0FBQ1osWUFBUSxLQURJO0FBRVosY0FBVTtBQUZFLEdBQWQ7O0FBS0EsTUFBTSxNQUFNLFVBQVUsSUFBVixFQUFnQixVQUFoQixFQUE0QixVQUE1QixDQUFaOztBQUVBLE1BQU0sU0FBUyxTQUFULE1BQVMsR0FBYTtBQUFBLFFBQVosR0FBWSx5REFBTixDQUFNOztBQUMxQixVQUFNLFFBQU4sR0FBaUIsR0FBakI7QUFDQSxRQUFJLEtBQUosQ0FBVSxLQUFWLENBQWdCLE9BQWhCLHVDQUMwQixNQUFNLE1BQU4sR0FBZSxHQUFmLEdBQXFCLE9BRC9DLHVCQUNzRSxDQUFDLEdBQUQsR0FBTyxNQUFNLFFBRG5GLG9EQUVrQyxNQUFNLE1BQU4sR0FBZSxHQUFmLEdBQXFCLE9BRnZELHVCQUU4RSxDQUFDLEdBQUQsR0FBTyxNQUFNLFFBRjNGO0FBR0QsR0FMRDs7QUFPQSxNQUFNLEtBQUssU0FBTCxFQUFLLE1BQU87QUFDaEIsUUFBSSxDQUFDLE1BQU0sTUFBWCxFQUFrQjtBQUFFO0FBQVE7QUFDNUIsV0FBTyxLQUFLLEdBQUwsQ0FBUyxHQUFULEVBQWMsR0FBZCxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNLE1BQU0sU0FBTixHQUFNO0FBQUEsUUFBQyxHQUFELHlEQUFRLEtBQUssTUFBTCxLQUFnQixFQUF4QjtBQUFBLFdBQWdDLEdBQUcsTUFBTSxRQUFOLEdBQWlCLEdBQXBCLENBQWhDO0FBQUEsR0FBWjs7QUFFQSxNQUFNLE1BQU0sU0FBTixHQUFNLEdBQU07QUFDaEIsVUFBTSxNQUFOLEdBQWUsS0FBZjtBQUNBLFdBQU8sR0FBUDtBQUNBLGVBQVc7QUFBQSxhQUFNLFFBQU47QUFBQSxLQUFYLEVBQTJCLEtBQTNCO0FBQ0EsUUFBSSxLQUFKLEVBQVU7QUFBRSxtQkFBYSxLQUFiO0FBQXFCO0FBQ2xDLEdBTEQ7O0FBT0EsTUFBTSxRQUFRLFNBQVIsS0FBUSxHQUFNO0FBQ2xCLFVBQU0sTUFBTixHQUFlLElBQWY7QUFDQTtBQUNELEdBSEQ7O0FBS0EsTUFBTSxPQUFPLFNBQVAsSUFBTyxHQUFvQjtBQUFBLFFBQW5CLFFBQW1CLHlEQUFSLEdBQVE7O0FBQy9CLFFBQUksQ0FBQyxNQUFNLE1BQVgsRUFBa0I7QUFBRTtBQUFRO0FBQzVCLFlBQVEsWUFBWTtBQUFBLGFBQU0sS0FBTjtBQUFBLEtBQVosRUFBeUIsUUFBekIsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsTUFBTSxXQUFXLE9BQU8sSUFBSSxLQUFYLEVBQWtCLFVBQWxCLEVBQThCLFVBQTlCLENBQWpCOztBQUVBLFNBQU8sT0FBTyxNQUFQLENBQWM7QUFDbkIsY0FEbUI7QUFFbkIsZ0JBRm1CO0FBR25CLFlBSG1CO0FBSW5CLFVBSm1CO0FBS25CLFlBTG1CO0FBTW5CLHNCQU5tQjtBQU9uQixjQUFVO0FBQUEsYUFBTSxLQUFOO0FBQUE7QUFQUyxHQUFkLEVBUUw7QUFDQSxTQUFLO0FBQ0gsYUFBTztBQURKO0FBREwsR0FSSyxDQUFQO0FBYUQsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnLi4vLi4vLi4vaW5kZXguanMnXG5cbmNvbnN0IGxvYWRlciA9IHByb2dyZXNzKClcblxud2luZG93LmxvYWRlciA9IGxvYWRlclxuIiwiY29uc3Qgc3R5bGVzID0gKGJhciwgb3V0ZXIsIGlubmVyKSA9PiB7XG4gIGxldCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKSBcbiAgbGV0IG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpIFxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShpLCBiYXIpXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG8sIGJhcilcblxuICByZXR1cm4ge1xuICAgIG91dGVyOiBzdHlsZXMgPT4gc3R5bGVzID8gby5pbm5lckhUTUwgPSBgLiR7b3V0ZXJ9IHske3N0eWxlc319YCA6IG8uaW5uZXJIVE1MID0gJycsXG4gICAgaW5uZXI6IHN0eWxlcyA9PiBzdHlsZXMgPyBpLmlubmVySFRNTCA9IGAuJHtpbm5lcn0geyR7c3R5bGVzfX1gIDogaS5pbm5lckhUTUwgPSAnJyBcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVCYXIgPSAocm9vdCwgb3V0ZXIsIGlubmVyKSA9PiB7XG4gIGxldCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGV0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIG8uY2xhc3NOYW1lID0gYGxvYWRlcmBcbiAgaS5jbGFzc05hbWUgPSBgbG9hZGVyX19pbm5lcmBcblxuICBvLmFwcGVuZENoaWxkKGkpXG5cbiAgcm9vdC5pbnNlcnRCZWZvcmUobywgcm9vdC5jaGlsZHJlblswXSlcblxuICByZXR1cm4ge1xuICAgIG91dGVyOiBvLFxuICAgIGlubmVyOiBpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHJvb3QgPSBkb2N1bWVudC5ib2R5LCBvcHRzID0ge30pID0+IHtcbiAgbGV0IHRpbWVyID0gbnVsbFxuICBjb25zdCBzcGVlZCA9IG9wdHMuc3BlZWQgfHwgMjAwXG4gIGNvbnN0IG1heCA9IG9wdHMubWF4IHx8IDk1IFxuICBjb25zdCBvdXRlckNsYXNzID0gb3B0cy5vdXRlciB8fCAnbG9hZGVyJ1xuICBjb25zdCBpbm5lckNsYXNzID0gb3B0cy5pbm5lciB8fCAnbG9hZGVyX19pbm5lcidcbiAgY29uc3Qgc3RhdGUgPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwcm9ncmVzczogMFxuICB9XG5cbiAgY29uc3QgYmFyID0gY3JlYXRlQmFyKHJvb3QsIG91dGVyQ2xhc3MsIGlubmVyQ2xhc3MpXG5cbiAgY29uc3QgcmVuZGVyID0gKHZhbCA9IDApID0+IHtcbiAgICBzdGF0ZS5wcm9ncmVzcyA9IHZhbFxuICAgIGJhci5pbm5lci5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCR7c3RhdGUuYWN0aXZlID8gJzAnIDogJy0xMDAlJ30pIHRyYW5zbGF0ZVgoJHstMTAwICsgc3RhdGUucHJvZ3Jlc3N9JSk7IFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJHtzdGF0ZS5hY3RpdmUgPyAnMCcgOiAnLTEwMCUnfSkgdHJhbnNsYXRlWCgkey0xMDAgKyBzdGF0ZS5wcm9ncmVzc30pYFxuICB9XG5cbiAgY29uc3QgZ28gPSB2YWwgPT4ge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKXsgcmV0dXJuIH1cbiAgICByZW5kZXIoTWF0aC5taW4odmFsLCBtYXgpKVxuICB9XG5cbiAgY29uc3QgaW5jID0gKHZhbCA9IChNYXRoLnJhbmRvbSgpICogMTApKSA9PiBnbyhzdGF0ZS5wcm9ncmVzcyArIHZhbClcblxuICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgc3RhdGUuYWN0aXZlID0gZmFsc2VcbiAgICByZW5kZXIoMTAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVuZGVyKCksIHNwZWVkKVxuICAgIGlmICh0aW1lcil7IGNsZWFyVGltZW91dCh0aW1lcikgfVxuICB9XG5cbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgc3RhdGUuYWN0aXZlID0gdHJ1ZVxuICAgIGluYygpXG4gIH1cblxuICBjb25zdCBwdXR6ID0gKGludGVydmFsID0gNTAwKSA9PiB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpeyByZXR1cm4gfVxuICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gaW5jKCksIGludGVydmFsKVxuICB9XG5cbiAgY29uc3Qgc2V0U3R5bGUgPSBzdHlsZXMoYmFyLm91dGVyLCBvdXRlckNsYXNzLCBpbm5lckNsYXNzKVxuICBcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoe1xuICAgIHB1dHosXG4gICAgc3RhcnQsXG4gICAgaW5jLFxuICAgIGdvLFxuICAgIGVuZCxcbiAgICBzZXRTdHlsZSxcbiAgICBnZXRTdGF0ZTogKCkgPT4gc3RhdGVcbiAgfSx7XG4gICAgYmFyOiB7XG4gICAgICB2YWx1ZTogYmFyXG4gICAgfVxuICB9KVxufVxuIl19

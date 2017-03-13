'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bar = null;

exports.default = function () {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var timer = null;

  var state = {
    active: false,
    progress: 0
  };

  var createBar = function createBar() {
    var classname = opts.classname || 'putz';
    var outer = document.createElement('div');
    var inner = document.createElement('div');

    outer.className = classname;
    inner.className = classname + '__inner';
    outer.appendChild(inner);
    root.insertBefore(outer, root.children[0]);

    return {
      outer: outer,
      inner: inner
    };
  };

  bar = bar || createBar();

  var render = function render() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    state.progress = val;
    bar.inner.style.cssText = 'transform: translateY(' + (state.active ? '0' : '-100%') + ') translateX(' + (-100 + state.progress) + '%);';
  };

  var go = function go(val) {
    if (!state.active) {
      return;
    }
    render(Math.min(val, 95));
  };

  var inc = function inc() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Math.random() * opts.trickle || 5;
    return go(state.progress + val);
  };

  var end = function end() {
    state.active = false;
    render(100);
    setTimeout(function () {
      return render();
    }, opts.speed || 200);
    if (timer) {
      clearTimeout(timer);
    }
  };

  var start = function start() {
    state.active = true;
    inc();
  };

  var putz = function putz() {
    var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

    if (!state.active) {
      return;
    }
    timer = setInterval(function () {
      return inc();
    }, interval);
  };

  var destroy = function destroy() {
    return root.removeChild(bar.outer);
  };

  return Object.create({
    putz: putz,
    start: start,
    inc: inc,
    go: go,
    end: end,
    destroy: destroy,
    getState: function getState() {
      return state;
    }
  }, {
    bar: {
      value: bar
    }
  });
};
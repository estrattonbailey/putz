(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.operator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(_ref) {
  var _ref$height = _ref.height;
  var height = _ref$height === undefined ? 2 : _ref$height;
  var _ref$color = _ref.color;
  var color = _ref$color === undefined ? 'currentColor' : _ref$color;
  var _ref$speed = _ref.speed;
  var speed = _ref$speed === undefined ? 200 : _ref$speed;
  var _ref$ease = _ref.ease;
  var ease = _ref$ease === undefined ? 'ease-in-out' : _ref$ease;

  var s = document.createElement('style');
  s.innerHTML = '\n    .loader {\n      position: fixed;\n      width: 100%;\n      left: 0; top: 0;\n      height: 0;\n      z-index: 1000;\n    }\n    .loader__inner {\n      position: absolute;\n      width: 100%;\n      left: 0; top: 0;\n      height: ' + height + 'px;\n      color: inherit;\n      background-color: ' + color + ';\n      transition: transform ' + speed + 'ms ' + ease + '; \n      -webkit-transition: -webkit-transform ' + speed + 'ms ' + ease + '; \n      transform: translateX(-100%);\n      -webkit-transform: translateX(-100%);\n    }\n  ';
  document.head.insertBefore(s, document.head.children[0]);
};

var createBar = function createBar(root) {
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

  var active = false;
  var progress = 0;
  var timer = null;

  var bar = createBar(root);

  styles(opts);

  var render = function render() {
    var val = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    progress = val;
    bar.inner.style.cssText = '\n      transform: translateY(' + (active ? '0' : '-100%') + ') translateX(' + (-100 + progress) + '%); \n      -webkit-transform: translateY(' + (active ? '0' : '-100%') + ') translateX(' + (-100 + progress) + ')';
  };

  var go = function go(val) {
    if (!active) {
      return;
    }
    render(Math.min(val, opts.max || 95));
  };

  var inc = function inc() {
    var val = arguments.length <= 0 || arguments[0] === undefined ? Math.random() * 10 : arguments[0];
    return go(progress + val);
  };

  var end = function end() {
    active = false;
    render(100);
    setTimeout(function () {
      return render();
    }, opts.speed || 200);
    if (timer) {
      clearTimeout(timer);
    }
  };

  var start = function start() {
    active = true;
    inc();
  };

  var putz = function putz() {
    var interval = arguments.length <= 0 || arguments[0] === undefined ? 500 : arguments[0];

    if (!active) {
      return;
    }
    timer = setInterval(function () {
      return inc();
    }, interval);
  };

  return {
    putz: putz,
    start: start,
    inc: inc,
    go: go,
    end: end
  };
};

},{}]},{},[1])(1)
});
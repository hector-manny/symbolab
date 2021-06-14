"use strict";

array = [1, 2, 2, 3, 4, 6];
sum = 4;

var newfuntion = function newfuntion(arrar, sum) {
  var arrar1 = [];
  var arrar2 = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var part1 = _step.value;
      var part2 = sum - part1;

      if (arrar2.indexOf(part2) !== -1) {
        arrar1.push([part1, part2]);
      }

      arrar2.push(part1);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return arrar1;
};
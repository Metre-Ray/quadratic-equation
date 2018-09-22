module.exports = function solveEquation(equation) {
  var i = equation.indexOf('x^2'),
      j = equation.lastIndexOf('x');
  var a = parseInt(equation.slice(0, i - 3));
  var b = parseInt(equation[i + 4] + equation.slice(i + 6, j - 3));
  var c = parseInt(equation[j + 2] + equation.slice(j + 4));
  var d = b**2 - 4 * a * c;
  var x1 = Math.round((-b + d**(1/2)) / (2 * a));
  var x2 = Math.round((-b - d**(1/2)) / (2 * a));
  if (x1 > x2) return [x2, x1];
  return [x1, x2];
}

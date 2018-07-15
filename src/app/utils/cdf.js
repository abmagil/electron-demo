//@flow

import reduce from 'lodash/reduce';

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isArray(arg) {
  return Object.prototype.toString.call( arg ) === '[object Array]';
}

export default function cdf(arr: Array<number>): Array<number> {
  if (!isArray(arr)) { return []; }

  const builder = function(acc: Array<number>, n: number): Array<number> {
    if (!isNumeric(n)) { throw new Error('cdf requires an array of numbers'); }

    let lastNum = acc.length > 0 ? acc[acc.length - 1] : 0;
    acc.push(Number(lastNum) + Number(n));
    return acc;
  };
  return reduce(arr, builder, []);
}

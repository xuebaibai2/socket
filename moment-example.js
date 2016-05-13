/**
 * Created by Cayden on 16/5/13.
 */
var moment = require('moment');
var now = moment();

console.log(now.format());
//milli seconds
console.log(now.format('x'));
//second
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mma'));



// now.subtract(3,'month');
// console.log(now.format());
// console.log(now.format('MMM-Do-YYYY, h:mma'));

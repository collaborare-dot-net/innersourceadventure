var fs = require('fs');
var path = require('path');

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');


exports.verify = function (args, cb) {
    cb(false);
    console.log("Actual solution verification coming soon!\n");
};

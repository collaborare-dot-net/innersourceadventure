var fs = require('fs');
var path = require('path');

/*
	todo: this should be using glob, etc, to check for readme.m* to match readme.md/readme.markdown

	todo: same for the other files we're looking for.
*/

const README_MD = './README.md';
const HELPWANTED_MD = './HELPWANTED.md';
const GETTINGSTARTED_MD = './GETTINGSTARTED.md';
const CONTRIBUTING_MD = './CONTRIBUTING.md';

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = function (args, cb) {
    cb(fs.existsSync(README_MD) && fs.existsSync(HELPWANTED_MD) &&
	   fs.existsSync(GETTINGSTARTED_MD) && fs.existsSync(CONTRIBUTING_MD));
};

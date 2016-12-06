var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec

exports.problem = fs.createReadStream(__dirname + '/problem.txt');
exports.solution = fs.createReadStream(__dirname + '/solution.txt');

exports.verify = function (args, cb) {
	/*
		Note:
		The bulk of this solution was borrowed from https://github.com/jlord/git-it/blob/master/problems/repository/verify.js
		Credit goes @jlord
	*/

	exec('git status', function(err, stdout, stdrr) {
	  var status = stdout.trim()
	  if (status.match("On branch")){
		console.log("This is a Git repository!\n");

		//todo: careful w/callback hell here.
		exec('git reflog show origin/master', function(err, stdout, stderr) {
		  var ref = stdout.trim()

		  if (ref.match("update by push")){
			console.log("...and detected a push!  Nicely done!");
			cb(true);
		  }
		  else {
			console.log("...but no evidence of a push.");
			cb(false);
		}})

	  }
	  else{
		cb(false);
		console.log("This folder isn't being tracked by Git.\n");
	  }
	});

};
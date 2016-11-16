exports.problem = 'What are five of the tenets for using InnerSource?\n\nWrite a simple Node app that console.logs the names.\n\n'
    + 'Use `$ADVENTURE_COMMAND verify...` to check your solution.\n\n'
;

exports.verify = function (args, cb) {
    if (/RAWR/.test(args)) {
        console.log('Wow that is a convincing dinosaur.\n');
        cb(true);
    }
    else if (/rawr/i.test(args)) {
        console.log('Close, but too quiet. Try louder.\n');
        cb(false);
    }
    else {
        console.log("TBD.\n");
        cb(false);
    }
};

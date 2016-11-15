exports.problem = 'Read InnerSource literature and/or listen to lightning talk.\n'
    + 'Use `$ADVENTURE_COMMAND verify...` to check your solution.'
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

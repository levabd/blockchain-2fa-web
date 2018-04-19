const fs = require("fs");
const keys = Object.keys;
const Console = console.Console;

/**
 * Redirect console to a file.  Call without path or with false-y
 * value to restore original behavior.
 * @param {string} [path]
 */
function file(path) {
    const con = path ? new Console(fs.createWriteStream(path)) : null;

    keys(Console.prototype).forEach(key => {
        if (path) {
            this[key] = function() {
                con[key].apply(con, arguments);
            };
        } else {
            delete this[key];
        }
    });
};

// patch global console object and export
module.exports = console.file = file;

// require("./console-file");
// console.file("/path/to.log");
// console.log("write to file!");
// console.error("also write to file!");
// console.file();    // go back to writing to stdout
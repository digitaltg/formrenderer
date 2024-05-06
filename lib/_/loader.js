const fs = require("fs");
const path = require("path");

const jsdom = require("jsdom");

// const cssFilePath = path.join(__dirname, "..", "..", "assets", "formio.full.min.css");
const jsFilePath = path.join(__dirname, "..", "..", "assets", "formio.full.min.js");


class FormioResourceLoader extends jsdom.ResourceLoader {
    fetch(url, options) {
        if (url === "https://custom.com/formio.js") {
            // console.log(url);
            return Promise.resolve(fs.readFileSync(jsFilePath));
        }

        return super.fetch(url, options);
    }
}


module.exports.FormioResourceLoader = FormioResourceLoader;

const jsdom = require("jsdom");
const { Script } = require("vm");
const { FormioResourceLoader } = require("./_/loader");
const { buildFormScript, htmlTemplate } = require("./_/str");
const { JSDOM } = jsdom;

/**
 * 
 * @param {Object} form the json definition of the form
 */
const renderForm = async (form, logCallback) => {
    const log = logCallback ? (msg) => { return logCallback("[FORM RENDERER] " + msg) } : () => { };

    try {
        const scriptStr = buildFormScript(form);
        // console.log(scriptStr);

        return await new Promise((resolve, reject) => {
            const virtualConsole = new jsdom.VirtualConsole();
            virtualConsole.sendTo(console, { omitJSDOMErrors: true });

            const dom = new JSDOM(htmlTemplate, {
                runScripts: 'dangerously',
                virtualConsole,
                resources: new FormioResourceLoader()
            });

            let isFormRendered = false;

            dom.window.addEventListener('DOMContentLoaded', event => {
                dom.window.addEventListener('load', async (event) => {
                    log("Content loaded");

                    if (isFormRendered == false) {
                        const script = new Script(scriptStr);

                        dom.window.onFormRendered = (html) =>  {
                            log("Got Html");
                            // console.log(html);
                            resolve(html);
                        }

                        const vmContext = dom.getInternalVMContext();
                        script.runInContext(vmContext);
                        log("Render Script ran");

                        isFormRendered = true;
                    }

                    //resolve(formHtml);
                });
            });
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}

// renderForm();

module.exports.renderForm = renderForm;

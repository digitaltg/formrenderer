const htmlStr = `
<!doctype html>
<html lang="en">
  <head>
  </head>
  <body>
    <div id="formio"></div>
    <script src="https://custom.com/formio.js"></script>
  </body>
</html>
`;


const defaultFormJson = {
    components: [
        {
            type: 'textfield',
            key: 'firstName',
            label: 'First Name',
            placeholder: 'Enter your first name.',
            input: true
        },
        {
            type: 'textfield',
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Enter your last name',
            input: true
        },
        {
            type: 'button',
            action: 'submit',
            label: 'Submit',
            theme: 'primary'
        }
    ]
}

const scriptStr = `
Formio.createForm(document.getElementById('formio'), @json
);
`;

const buildFormScript = (formJson) => {
    const json = formJson ?? defaultFormJson;
    return scriptStr.replace("@json", JSON.stringify(json, null, 4));
}


module.exports.htmlTemplate = htmlStr;
module.exports.buildFormScript = buildFormScript;
module.exports.defaultFormJson = defaultFormJson;

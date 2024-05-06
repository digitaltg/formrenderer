# Form Renderer

## How to install ?

We add the package to package.json like this

```json
"dependencies": {
    "@digitaltg/formrenderer": "https://github.com/digitaltg/formrenderer.git"
  }
```

and run the below command in order to install our new package
```bash
npm install
```

## Exemples
To see the deult the form, we can execute the following ode

```javascript
const FormRenderer = require("@digitaltg/formrenderer");

FormRenderer.renderForm().then(
    (html) => {
        // console.log(html);
    }
).catch(error => {
    console.error(error);
});
```

We can also pass a custom formio form 

```javascript
const FormRenderer = require("@digitaltg/formrenderer");

FormRenderer.renderForm().then(
    (html) => {
        // console.log(html);
    }
).catch(error => {
    console.error(error);
});

FormRenderer.renderForm({
    "display": "form",
    "settings": {
        "pdf": {
            "id": "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
            "src": "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0"
        }
    },
    "components": [
        {
            "label": "Text Field",
            "applyMaskOn": "change",
            "tableView": true,
            "key": "textField",
            "type": "textfield",
            "input": true
        },
        {
            "label": "Select Boxes",
            "optionsLabelPosition": "right",
            "tableView": false,
            "values": [
                {
                    "label": "One",
                    "value": "one",
                    "shortcut": ""
                },
                {
                    "label": "Two",
                    "value": "two",
                    "shortcut": ""
                }
            ],
            "key": "selectBoxes",
            "type": "selectboxes",
            "input": true,
            "inputType": "checkbox"
        },
        {
            "label": "Submit",
            "showValidations": false,
            "tableView": false,
            "key": "submit1",
            "type": "button",
            "input": true
        },
        {
            "label": "Text Field",
            "applyMaskOn": "change",
            "tableView": true,
            "key": "textField1",
            "type": "textfield",
            "input": true
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "input": true,
            "tableView": false
        }
    ]
}).then(
    (html) => {
        console.log(html);
    }
).catch(error => {
    console.error(error);
});
```

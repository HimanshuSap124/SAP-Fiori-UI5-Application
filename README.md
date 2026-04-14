SAP Fiori UI5 Application 

-------------------------------------------------

# About this SAP Fiori Ui5 Application

**This is a Sample SAP Fiori UI5 Application where each Git Branch represents the UI5 App covering some topic.**

# How to use this application ..?

Clone this application and move inside the application by using below command - 
```
cd <application_name>
```

```
npm install
```

# ⭐ Files used to Configure JSON Model dynamically

### 1. View1.controller.ts file in controller folder

The JSON model is initialized in the controller, where the data is maintained and then bound to the view.

One-way property binding is used to display this data on the UI as a popup when the button is clicked.

### 2. View1.view.xml file in controller folder

Two buttons are defined: the first button sets the model to the view, and the second button retrieves data from the model and displays it in a popup.




## Default File Structure generated from Template

Below File structures were created - 
```
fioriui5 (application name)
|
|- node_modules (Folder)
|
|- webapp (Folder)
|   |- controller (Folder)
|   |   |- App.controller.js
|   |   |- View1.controller.js
|   |
|   |- css (Folder)
|   |   |- style.css
|   |
|   |- i18n (Folder)
|   |   |- i18n.properties
|   |
|   |- model (Folder)
|   |   |- models.js
|   |
|   |- test (Folder)
|   |
|   |- view (Folder)
|   |   |- App.view.xml
|   |   |- View1.view.xml
|   |
|   |- Component.js
|   |- index.html
|   |- manifest.json
|   
|- .appGenInfo.json
|- .gitignore
|- mta.yaml
|- package-lock.json
|- package.json
|- ui5-deploy.yaml
|- ui5-local.yaml
|- xs-app.json
|- xs-security.json
```

### [Understand the File and their Usage](./ReadMeFiles/FileStructure.md)

### [Starting Point of UI5 Application and Flow of execution](./ReadMeFiles/StartingPointAndFlow.md)

## How to Enable Multi-Language Support in SAPUI5 ?

If your application is accessed in different countries and you want to display it in the respective local languages, follow these steps:

#### 1. Create an `i18n folder` inside `webapp/` - 
```
i18n/
  i18n.properties        (default, e.g., English)
  i18n_ja.properties     (Japanese)
  i18n_en.properties     (English explicitly)
  i18n_fr.properties     (French)
  i18n_hi.properties     (Hindi)
```

#### 2. Modify manifest.json file model

Add `supportedLocals` and `fallbackLocale` language case on the `i18n model` in `manifest.json` file.

```
"models": {
      "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
          "bundleName": "roche.managedapp.i18n.i18n",
          "supportedLocales": ["", "es", "de", "en"],
          "fallbackLocale": "en"
        }
      }
}
```

#### 3. Check the UI in different language

Append the url with below query property (like below is for Hindi) -
```
?sap-language=HI
```
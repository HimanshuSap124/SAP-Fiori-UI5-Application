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

# Steps to configure JSON Model Manually

### Step 1 - Create a JSON File on model Folder

Referring our previous configurations, I am creating `MyModel.json` file in `model` folder.

I have added below sample data on the MyModel.json file -
```
{
  "sampleData": "This data is coming from MySampleModel JSON Data"
}

```


### Step 2 - Configure the model on the manifest.json file to make is accessible for the application

In the `manifest.json` file under `model` key, define your MyModel.json file.

Previously, I was calling MyModel with `MySampleModel` name, hence we are maintaining the same on model section on manifest.json file.

Make sure the `type` should be `JSONModel` and the `uri` should refer from model folder.


### Step 3 - Create Button on View1

Since I wants to show the data defined on JSON Model on button click, so I have defined a Button on `View1.view.xml`.

### Step 3 - Define Button logic on View1.controller.ts

I have defined the Button press method where I am trying to get the data from Model and then show it using Message Toast.

_____________________________________

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
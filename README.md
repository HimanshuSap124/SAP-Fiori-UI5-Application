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



# Steps to configure for Routing and Navigation


## Step 1 - Create Another View and its controller
In our case, we have created `View2.view.xml` file in the `view`  folder and its controller `View2.controller.js` in `controller` folder.

## Step 2 - Define the View in manifest.json file

Define the route name, pattern and a target in the `routes` array on the `manifest.json` file.

The `name` defined above in the routes array will be used to navigate from one view to another.

Now, define the new `target` (which we mentioned on routes array) in `targets` object where `id` is the id of Page of new View file, `name` should be the same of the new view file.

## Step 3 - Use the Routing as per the need

In our case, since we wants to Route to view2 on Button click, we defined the Button on View and its logic in its controller and using UIComponent we route from one view to another.



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
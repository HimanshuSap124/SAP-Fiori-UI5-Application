[SAP Fiori UI5 Application](../README.md) / Default File Structure

-------------------------------------------------


# Default File Structure generated from Template

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





# Understand the Files and their usage - 
## 1. node_modules Folder

- It is a core part of Application (which uses npm Node Package Module) as this file store all the project dependencies.
- You can delete this folder and when you execute the command `npm install` then npm automatically create this folder and install the dependencies.
- Which dependencies needs to be installed is defined on `package.json` file so npm uses the details from `package.json` and install the dependencies on `node_module folder`.




## 2. webapp Folder

- It is the main `source folder` of the application that contains application's runtime resources like index.html, Component.js, manifest.json, view, controller, etc.
- It contains all files which will deployed and served to the browser.

### 2.1. controller Folder

- This folder contains all the `controller files` of the views.
- The controller file of each view holds the `logics` of that view.

    ### 2.1.1 App.controller.js
    - It is a JS file which controls the main view (App view).
    - It controls how the app behaves when it starts and during navigation etc.

    ### 2.1.2 View1.controller.js
    - It is a JS file which controls the specific view (View1, or View2, etc).
    - It contains the View specific logics.



| Feature                     | `App.controller.js`                                                | Other controllers (e.g., `View1.controller.js`, `Detail.controller.js`)    |
| --------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| **Scope**                   | Application/global level                                           | View-specific                                                              |
| **View Attached**           | Usually attached to a root view like `App.view.xml`                | Attached to individual UI views                                            |
| **Common Responsibilities** | Initialization of the app, routing, global events, container logic | Handling UI logic for a specific screen                                    |
| **Navigation**              | Often manages global navigation or passes navigation to routers    | Typically handles local events (button clicks, input validations, binding) |
| **Visibility**              | Loaded once for the entire session                                 | Loaded when the specific view is loaded                                    |
| **Contents**                | Rarely contains business logic                                     | Contains most of the UI interaction logic                                  |


### 2.2. css Folder and style.css file

- CSS Folder and `style.css` file is used to define custom styles that overrides or extend the standard SAP UI5/Fiori visual designs.
- This file configuration has been already defined on the `manifest.json` file under `resources` on `sap.ui5` section.


### 2.3. i18n Folder and i18n file

- `i18n` stands for `Internationalization` Resource files used to store all translatable texts for your app.

- `i18n.properties` file is default language resource file (usually English). It contains the data in Key-value pair and can be binded (used) with the view.

- Its binding with UI(View) is called `One-Time Binding` as it gets loaded when the application gets loaded.

- Its configuration is defined on the `model` section on `manifest.json` file.

### 2.4. model folder and models.js file

- The model folder is the place to keep all model-related utilities and helpers.
- It helps to keep the setup modular, reusable and centralized.
- The `models.js` file is typically a utility module that exposes function to create and configure models used `throughout the app`.
- The `models.js` file uses the `device` dependency of `sap.ui` library and provide information about the current devices and environment (phone, tablet, desktop, orientation) at the runtime and hence provide `Responsive UI` out of the box and its is `Read-Only` safe with OneWay binding.
- This model is then set to the view through `Component.js` file.


### 2.5. test folder

- It contains files which are used for QUnit-based Testing.

### 2.6. view folder and App.view.xml file

- View Folder contains the UI Definition of the application where each view represents a visual part of the app.
- `App.view.xml` is the `root view` of UI5 application and act as a container for other views/pages.
- All other views are loaded inside this root container.
- `<App>` of `sap.m.App` is a navigation container that holds multiple `sap.m.Page` controls and manages transitions from one page to other.



### 2.7. Component.js

- `Component.js` is the `starting point (logical starting point)` of application and act as `main controller` of the `whole application`.
- It loads the `manifest.json` file and initialize Router which injects target (main view) into `<App>`.
- It also `sets the device model (defined on models.js file)` for the whole application.


### 2.8. index.html

- It is the `Entry point (starting point)` of the Application (any UI app have .html file as starting point) which loads the SAP UI5 Framework Application.
- It loads the `SAPUI5 Libraries` defined on `script`.
- It also loads the `Component.js` file also set the SAP UI Theme.
- Without index.html file browser wouldn't know from where to load the UI5 app.


### 2.9. manifest.json

- It is the central configuration file of the application.
- It is the descriptor file which tells the SAP UI5 app about the `app name`, `resources` needed, `routing/navigation` used and the `model` which we are using.
- It contains the `app details`, `sap.ui5 details` which includes `router details`, `models`, and `dependencies`.
- It contains the manifest.json version at the top and also contain the SAP UI5 verion used under sap.ui5 section.


## 3. .app.GenInfo.json

- This file is auto generated by SAP Development Tool when we generate the app from Template.
- It stores the general information about how the app was created, help sap tools to identify the template to re-generate the application.


## 4. mta.yaml

- It is the blueprint of the app which tells the BTP build/deployment tools what the app consists of, which services it needs, etc.
- It contains details of resources and services like xsuaa, destination, HTML5 App Repo, etc.


## 5. package-lock.json

- This file gets automatically generate by npm and it locks the `exact version` of all the dependencies (and sub-dependencies).
- It does this so that everyone using this project gets the same version of dependencies to avoid "work on particular machine" issue.
- Deleting this fill wouldn't affect the working of application but create some issues as npm will regenerate this file but the exact version of the dependencies will not be installed and can lead to inconsistent behavior between environments.

## 5. package.json

- It is the main configuration file for a NodeJS project.
- It contains details like project metadata (which includes name, description, version), Dependencies and Script commands.
- It contains a `rough version detials` of the dependencies.
- The project `will not work` if you delete this file because it have the details of which dependencies you app needs and which script needs to run.


| Feature              | package.json                              | package-lock.json                              |
|----------------------|-------------------------------------------|-----------------------------------------------|
| **Purpose**          | Declares dependencies & scripts          | Locks exact versions for consistency          |
| **Created by**       | Developer manually or Auto Generated                       | Auto-generated by npm                         |
| **Editable?**        | Yes                                      | No (should not edit manually)                |
| **Used for**         | Project setup & sharing                  | Reproducible builds                           |



## 6. ui5-deploy.yaml 

- It is a deployment configuration file which tells Fiori Tools where and how to deploy your build UI5 App.



## 7. ui5-local.yaml

- It is used to define local development settings for UI5 app which includes local server port, local server middleware, etc.



## 8. ui5.yaml


| File Name           | Purpose                                                                                     | When Used                                  |
|----------------------|---------------------------------------------------------------------------------------------|-------------------------------------------|
| **ui5.yaml**         | Main configuration for **UI5 Tooling**. Defines project type, UI5 version, libraries, and build/serve settings. | Always – for local development and build. |
| **ui5-local.yaml**   | Overrides or adds **local development settings** like proxy middleware, mock servers, or custom middlewares. | Only during **local development** (not used in production). |
| **ui5-deploy.yaml**  | Deployment configuration for **where and how to deploy** the app (ABAP system or BTP HTML5 App Repo). Includes target system, credentials, package, transport. | During **deployment** (CI/CD or manual deploy). |




## 9. xs-app.json

- It is a configuration file for the SAP Approuter and defines the routing rules.
- It is used to define authentication and authorization requirements for routes and used by Approuters to handle HTML5 app hosting, Destination based routing, and XSUAA Authentication.
- It contains the welcome file (ie., index.html file), authentication method for route, etc.



## 10. xs-security.json

- It is used to define Role templates for assigning permission to users.

For Example - 

```

{
  "xsappname": "my-ui5-app",
  "tenant-mode": "dedicated",
  "scopes": [
    { "name": "$XSAPPNAME.Display", "description": "Display content" },
    { "name": "$XSAPPNAME.Admin", "description": "Admin access" }
  ],
  "role-templates": [
    {
      "name": "Viewer",
      "description": "Can view content",
      "scope-references": [ "$XSAPPNAME.Display" ]
    },
    {
      "name": "Administrator",
      "description": "Full access",
      "scope-references": [ "$XSAPPNAME.Display", "$XSAPPNAME.Admin" ]
    }
  ]
}

```


## Files Generated when we Build the UI5 Application

### 1. dist Folder

- It is a production ready build output of your UI5 Application created by UI5 tooling when we run the build.

- It contains all the files optimized for deployment (minified, bundled, and structured for fast loading).


### 2. mta_archives Folder

- It is the location where the built deployable package (.mtar) is generated and stored when we run an MTA Build.


### 3. resources Folder

- It acts as a container for static assets (like image, logo, icons, background, css, fonts, etc) that your app needs at runtime but are not part of the core UI5 Framework.



| **Folder**        | **Location**                | **Created When**          | **Contains**                                      | **Purpose**                                      |
|--------------------|----------------------------|---------------------------|---------------------------------------------------|--------------------------------------------------|
| **resources/**    | `webapp/resources/`       | Developer creates        | Static assets (images, CSS, fonts, PDFs, JSON)   | Used by the app for UI elements and styling.    |
| **dist/**         | At module level           | After UI5 build (`ui5 build`) | Minified UI5 app + resources + manifest          | Optimized build output for deployment.          |
| **mta_archives/** | Project root             | After MTA build (`mbt build`) | `.mtar` file (Multi-Target Application archive)  | Final deployable artifact for SAP BTP.          |

-------


#### [Starting Point of UI5 Application and Flow of execution](./StartingPointAndFlow.md)
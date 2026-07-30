sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"

], (Controller, UIComponent, MessageToast) => {
    "use strict";

    return Controller.extend("fiori.ui5app.controller.View2", {

        onInit() {
            //  Extract the details from the Router path.
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("DetailView").attachPatternMatched(this._onObjectMatched, this);
        },

        // method to extract the value from route and Bind the selected data with UI.
        _onObjectMatched(oEvent) {
            const id = oEvent.getParameter("arguments").id;

            // Bind the view to the selected entity
            this.getView().bindElement({
                path: "/Warehouses('" + id + "')",
                model: "WarehouseModel"
            });

            MessageToast.show('Details for Warehouse - ' + id);
        },

        //  Method to Navigate back to View1
        onNavBack: async function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo('RouteView1');
        },

        /*
            Below method will do the following -
            1. Make the Save and Cancel button visible.
            2. Disappear the Edit Button.
            3. Make Input field editable.
        */
        onPressEdit: function (oEvent) {
            this.getView().getModel('View2Model').setProperty('/inputEditable', true);
            this.getView().getModel('View2Model').setProperty('/inputEditable', true);
            this.getView().getModel('View2Model').setProperty('/inputEditable', true);

            this.getView().getModel('View2Model').setProperty('/editVisible', false);
            this.getView().getModel('View2Model').setProperty('/saveVisible', true);
            this.getView().getModel('View2Model').setProperty('/cancelVisible', true);

            MessageToast.show('Edit Enabled');
        },

        /*
            Below method will do the following -
            1. Make the Save and Cancel button disappear.
            2. Visible the Edit Button.
            3. Make Input field non-editable.
        */
        onPressCancel: function (oEvent) {
            this.getView().getModel('View2Model').setProperty('/inputEditable', false);
            this.getView().getModel('View2Model').setProperty('/inputEditable', false);
            this.getView().getModel('View2Model').setProperty('/inputEditable', false);

            this.getView().getModel('View2Model').setProperty('/editVisible', true);
            this.getView().getModel('View2Model').setProperty('/saveVisible', false);
            this.getView().getModel('View2Model').setProperty('/cancelVisible', false);

            MessageToast.show('No changes Saved');
        },

        /*
            This method will do the following -
            1. Get the data of input fields.
            2. Update the data on the backend.
            3. Make Input field editable.
            4. Make the Save and Cancel button disappear.
            5. Visible the Edit Button.
            6. Make Input field non-editable.
        */
        onPressSave: async function (oEvent) {
            const name = this.getView().byId('warehouseNameInput').getValue();
            const owner = this.getView().byId('warehouseOwnerInput').getValue();
            const location = this.getView().byId('warehouseLocationInput').getValue();

            //  Update the data on the backend using odata v4 service model
            const oContext = this.getView().getBindingContext('WarehouseModel');
            oContext.setProperty("name", name);
            oContext.setProperty("owner", owner);
            oContext.setProperty("location", location);

            await this.getView().getModel('WarehouseModel').submitBatch('$auto');

            this.getView().getModel('View2Model').setProperty('/inputEditable', false);
            this.getView().getModel('View2Model').setProperty('/inputEditable', false);
            this.getView().getModel('View2Model').setProperty('/inputEditable', false);

            this.getView().getModel('View2Model').setProperty('/editVisible', true);
            this.getView().getModel('View2Model').setProperty('/saveVisible', false);
            this.getView().getModel('View2Model').setProperty('/cancelVisible', false);

            MessageToast.show('Successfully updated the details');
        }

    });
});
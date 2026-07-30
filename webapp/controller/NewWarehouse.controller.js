sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"
], (Controller, UIComponent, MessageToast) => {
    "use Strict";

    return Controller.extend("fiori.ui5app.controller.NewWarehouse", {
        onInit() { },
        //  Cancel Button logic will Navigate back to View1
        onCancel: function () {
            const router = UIComponent.getRouterFor(this);
            router.navTo("RouteView1");
        },

        /*
            Below method will do the following -
            1. Get the data of Input Fields.
            2. Validate the data.
            3. Get the oData Model details and its binding.
            4. Push the data to db using the odata Model.
            5. Set the Input fields to empty.
            6. Navigate back to View1.
        */
        onRegister: async function () {
            const wName = this.getView().byId("name").getValue();
            const wOwner = this.getView().byId("owner").getValue();
            const wLocation = this.getView().byId("location").getValue();

            if (wName.length == 0 || wOwner.length == 0 || wLocation.length == 0) {
                MessageToast.show("Please fill all the details.");
                return;
            }

            const oModel = this.getView().getModel("WarehouseModel");

            const oListBinding = oModel.bindList("/Warehouses");

            oListBinding.create({
                name: this.byId("name").getValue(),
                owner: this.byId("owner").getValue(),
                location: this.byId("location").getValue()
            });

            try {
                await oModel.submitBatch("$auto");

                sap.m.MessageToast.show("Warehouse created successfully");

                this.getView().byId("name").setValue("");
                this.getView().byId("owner").setValue("");
                this.getView().byId("location").setValue("");
                
                //  Navigate back to View1
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            } catch (err) {
                sap.m.MessageBox.error("Failed to create warehouse");
                console.error(err);
            }
        }

    });
});
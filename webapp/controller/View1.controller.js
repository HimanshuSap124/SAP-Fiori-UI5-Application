sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.ui5app.controller.View1", {
        onInit() {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("RouteView1").attachPatternMatched(this._onPatternMatched, this);
        },

        //  Method to update/refresh the binding data with Table as well if User updated the Table row details.
        _onPatternMatched: function () {
            const oBinding = this.byId("idWarehouseTable").getBinding("items");
            oBinding.refresh();
        },


        onPressCreate : function(){
            const router = UIComponent.getRouterFor(this);
            router.navTo("NewWarehouseView");
        },


        //  Method to get selected Table row details and route to another view.
        selectedRow: function (oEvent) {
            const selectedID = oEvent.getParameter("listItem").getBindingContext("WarehouseModel").getObject().ID;
            debugger
            console.log("row pressed");

            // Route to View2 with ID on path
            const router = UIComponent.getRouterFor(this);
            router.navTo("DetailView", {
                id: selectedID
            });
        }

        
    });
});
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace fiori.ui5app.controller
 */
export default class View1 extends Controller {

    public onInit(): void {

    }

    // Normal Routing
    public moveToView2(oEvent: any): void {
        console.log('Navigate to View2 from View1');
        const router = UIComponent.getRouterFor(this);
        router.navTo("SecondView");
    }


    // Parameterized Routing
    public onRowSelect(oEvent: any): void {
        //  Extract the Selected employee data
        const selectedRow = oEvent.getParameter("listItem").getBindingContext("MyModel").getObject();

        //  Maintain it on a temporary model

        const isModel = this.getOwnerComponent()?.getModel("ActiveEmployee") as JSONModel;

        if (isModel) {
            isModel.setData(selectedRow);
        }
        else {
            const activeModel = new JSONModel();
            activeModel.setData(selectedRow);
            this.getOwnerComponent()?.setModel(activeModel, "ActiveModel");
        }

        const router = UIComponent.getRouterFor(this);
        router.navTo("EmployeeView", {
            empId: selectedRow.id
        });

        console.log(selectedRow);
    }



    // Parameterized Routing
    public onRowSelect2(oEvent: any): void {
        //  Extract the Selected employee data
        const selectedRow = oEvent.getParameter("listItem").getBindingContext("MyModel").getObject();

        //  Maintain it on a temporary model

        const isModel = this.getOwnerComponent()?.getModel("ActiveEmployee") as JSONModel;

        if (isModel) {
            isModel.setData(selectedRow);
        }
        else {
            const activeModel = new JSONModel();
            activeModel.setData(selectedRow);
            this.getOwnerComponent()?.setModel(activeModel, "ActiveModel");
        }

        const router = UIComponent.getRouterFor(this);
        router.navTo("EmployeeDetails", {
            query: {
                id: selectedRow.id,
                name: selectedRow.name
            }
        });

        console.log(selectedRow);
    }

}
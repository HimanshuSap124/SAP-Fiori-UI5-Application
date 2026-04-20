import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import History from "sap/ui/core/routing/History";

/**
 * @namespace fiori.ui5app.controller
 */

export default class Employee extends Controller {
    public onInit(): void {
        const oRouter = UIComponent.getRouterFor(this);

        oRouter.getRoute("EmployeeView")
            ?.attachPatternMatched(this._onMatched, this);
    }

    public _onMatched(oEvent: any): void {
        var empId = oEvent.getParameter("arguments").empId;
        console.log(empId);
    }

    public moveToView2(): void {
        console.log('Button clicked');
        const router = UIComponent.getRouterFor(this);
        router.navTo('RouteView1');
    }

    //  Navigation Back button logic 
    public onNavBack(): void {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
            window.history.go(-1);
        } else {
            (this.getOwnerComponent() as UIComponent).getRouter()?.navTo("home", {}, true);
        }
    }
}
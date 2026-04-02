import Controller from "sap/ui/core/mvc/Controller" ;
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @namespace fiori.ui5app.controller
 */

export default class View2 extends Controller {
    public onInit(): void {
        
    }

    public moveToView2() : void {
        console.log('Button clicked');
        const router = UIComponent.getRouterFor(this);
        router.navTo('RouteView1');
    }
}
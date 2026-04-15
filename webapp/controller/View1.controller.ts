import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace fiori.ui5app.controller
 */
export default class View1 extends Controller {

    public onInit(): void {
    }


    public onShowModelData() : void {
        interface ContentObject {
            sampleData : string
        }

        const myModel = this.getView()?.getModel("MySampleModel") as JSONModel ;
        const modelData = myModel.getData() as ContentObject;

        MessageToast.show(modelData.sampleData);
    }
}
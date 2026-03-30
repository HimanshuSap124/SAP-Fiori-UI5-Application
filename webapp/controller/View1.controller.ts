import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace fiori.ui5app.controller
 */
export default class View1 extends Controller {

    public onInit(): void {
        const MyModel = new JSONModel();
        this.getView()?.setModel(MyModel, "MySampleModel");
        /*
            setModel method takes 2 parameter, 
            1- the model which we created
            2- the name with which you wants to call the model
            for example above, we have created model using modelVariable MyModel
            and everywhere in this view, we wants to call the model with name "MySampleModel"
        */
    }

    public onSetData(): void {
        /*
            we wants to store the data on the Json Model like below - 

            [
                {
                    "sampleData" : "This data is coming from MySampleModel JSON Data"
                }
            ]
        */

        // Lets define the interface for object
        interface ContentObject {
            sampleData : string
        }

        //  using the same interface, create an json object
        let content: ContentObject = {
            'sampleData': 'This data is coming from MySampleModel JSON Data'
        };

        //  store the above data on an array of type array of objects
        let arrayData : ContentObject[] = [];
        arrayData.push(content);

        //  get the Model from the view.
        const myModel = this.getView()?.getModel('MySampleModel') as JSONModel;

        //  if model exist, set the data created above.
        if (myModel) {
            myModel.setData(arrayData);
        }

        MessageToast.show("SampleData has been set successfully on MySampleModel");
    }


    public onShowModelData() : void {
        interface ContentObject {
            sampleData : string
        }

        const myModel = this.getView()?.getModel("MySampleModel") as JSONModel ;
        const modelData = myModel.getData() as ContentObject[];

        MessageToast.show(modelData[0].sampleData);
    }
}
import Controller from "sap/ui/core/mvc/Controller";
import MessageBox from "sap/m/MessageBox";
import Input from "sap/m/Input";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace fiori.ui5app.controller
 */
export default class View1 extends Controller {

    public onInit(): void {
        
    }

    public onFormSubmit(oEvent : any): void {
        //  We can get the input data by targetting the id of input fields like - 
        const oInput1 = this.getView()?.byId("form1Input1") as Input;
        const inp1NameValue = oInput1.getValue() ;
        const oInput2 = this.getView()?.byId("form1Input2") as Input;
        const inp2LocationValue = oInput2.getValue() ;
        const oInput3 = this.getView()?.byId("form1Input3") as Input;
        const inp2GenderValue = oInput3.getValue() ;


        //  Best Approach - Since Form Input Data is mapped and stored on Model, better to extract it from there.
        const myModel = this.getView()?.getModel("MySampleModel") as JSONModel ;
        const modelData = myModel.getData();
        const sName = modelData.NewEmployee.Name ;
        const sGender = modelData.NewEmployee.Gender ;
        const sLocation = modelData.NewEmployee.Location ;

        // Show output
        MessageBox.information(
            "Employee Details:\n" +
            "Name: " + sName + "\n" +
            "Gender: " + sGender + "\n" +
            "Location: " + sLocation
        );
    }


    public onRowSelect(oEvent : any) : void {
        const selectedName = oEvent.getParameter("listItem").getBindingContext("MySampleModel").getObject().name ;
        const selectedRole = oEvent.getParameter("listItem").getBindingContext("MySampleModel").getObject().role ;
        const selectedCity = oEvent.getParameter("listItem").getBindingContext("MySampleModel").getObject().city ;
        
        // Show output
       MessageBox.information(
            "Employee Details:\n" +
            "Name: " + selectedName + "\n" +
            "Role: " + selectedRole + "\n" +
            "Location: " + selectedCity
        );
    }
}
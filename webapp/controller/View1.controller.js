sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.binding.bindingbyusingmodel2.controller.View1", {
            onInit: function () {
                var oModel1 = this.getOwnerComponent().getModel("dataModel1");
                //  console.log(oModel1.getData());
                var oModel2 = this.getOwnerComponent().getModel("dataModel2");
                // console.log(oModel2.getData());


                var aJoinedData = [];
                // Get the data from both models
                var aData1 = oModel1.getProperty("/jsonData1");
                var aData2 = oModel2.getProperty("/jsonData2");
                for (let i = 0; i < aData1.length; i++) {
                    let count=0;
                    for(let j=0;j<aData2.length;j++){
                    if (aData1[i].exId === aData2[j].exId) {
                        aJoinedData.push({
                            exId: aData1[i].exId,
                            exName: aData1[i].exName,
                            exAmount: aData2[j].exAmount,
                            exDate: aData2[j].exDate
                        });
                        count++;
                    }
                    }
                    if(count==0){
                            aJoinedData.push(aData1[i]);
                        }
                       
                    }
                    for (let i = 0; i < aData2.length; i++) {
                        let amt=0;
                        for(let j=0;j<aData1.length;j++){
                        if (aData2[i].exId === aData1[j].exId) {
                            amt++;
                        }
                        }
                        if(amt==0){
                            aJoinedData.push(aData2[i]);
                        }
                    }

                // console.log(aJoinedData);

                var oJoinedModel = new sap.ui.model.json.JSONModel(aJoinedData);
                this.getView().setModel(oJoinedModel, "modelData");

            }
        });
    });

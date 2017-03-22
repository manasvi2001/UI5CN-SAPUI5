sap.ui.controller("ui5reshoot.helloworld", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui5reshoot.helloworld
*/
	onInit: function() {
		var url = "http://services.odata.org/TripPinRESTierService/People";
		var data = [];
		var oModel = new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(oModel);
//		oModel.setData(oData["value"]);	
//		oModel.refresh();
		$.ajax({
			url: url,
			async: true,
			dataType: 'json',
			type: 'GET',
			success: function(oData) {
				console.log(oData);
				if (!oData) {
					sap.m.MessageToast.show("Not able to get Data");
				} else {
					//data = JSON.parse(JSON.stringify(oData["value"]));
					console.log(oData["value"]);
					oModel.setData(oData["value"]);	
					oModel.refresh();
				}
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				sap.m.MessageToast.show("Connection not able to establish");
			}
		});
	},
	
	detailView: function(oEvt) {
		var data = oEvt.getSource().getBindingContext().getModel().getData();
		var index = parseInt(oEvt.getSource().getBindingContext().getPath().substr(1));
		console.log(data[index]);
		var oModel = new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(oModel, 'singleData');
		var personData = data[index];
		oModel.setData(personData);
		oModel.refresh();
		app.to("iddetailview");
	},
	
	searchFilter: function(oEvt) {
		var aFilters = [];
        var sQuery = oEvt.getSource().getValue();
        
        if (sQuery && sQuery.length > 0) {
            var filter = new sap.ui.model.Filter("FirstName", sap.ui.model.FilterOperator.Contains, sQuery);
            aFilters.push(filter);
        }

        // update list binding
        var list = sap.ui.getCore().byId("idListPpl");
        var binding = list.getBinding("items");
        
        binding.filter(aFilters, "Application");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui5reshoot.helloworld
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui5reshoot.helloworld
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui5reshoot.helloworld
*/
//	onExit: function() {
//
//	}

});
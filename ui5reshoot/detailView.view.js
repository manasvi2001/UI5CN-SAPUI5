sap.ui.jsview("ui5reshoot.detailView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5reshoot.detailView
	*/ 
	getControllerName : function() {
		return "ui5reshoot.detailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5reshoot.detailView
	*/ 
	createContent : function(oController) {
		
		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
			maxContainerCols: 3,
            title: new sap.ui.core.Title({
                text: "Address",
                level: sap.ui.core.TitleLevel.H2
            }),
            content: [
            	new sap.m.Text({
            		text: "{singleData>/AddressInfo/0/Address}"
            	})
            ]
		})
		
 		var oPage = new sap.m.Page({
			title: "{singleData>/FirstName}",
			showNavButton: true,
            navButtonPress: function() {
                app.back();
            },
			content: [
				oSimpleForm
			]
		});
 		
 		return oPage;
	}

});
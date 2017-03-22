sap.ui.jsview("ui5reshoot.helloworld", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui5reshoot.helloworld
	*/ 
	getControllerName : function() {
		return "ui5reshoot.helloworld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui5reshoot.helloworld
	*/ 
	createContent : function(oController) {
		var pplList = new sap.m.List("idListPpl", {
            inset: true,
            type: sap.m.ListType.DetailAndActive,
            headerText: "People"
        });

        var itemTemplate = new sap.m.StandardListItem("idListPplTemp", {
            title: "{FirstName}",
            description: "{FavoriteFeature}",
            info: "{Emails/0}",
            type: sap.m.ListType.Navigation,
            tap: [oController.detailView, oController]
        });


        pplList.bindItems("/", itemTemplate);

        var searchFilter = new sap.m.Bar({
            contentMiddle: [
                new sap.m.SearchField({
                    liveChange: [oController.searchFilter, oController],
                    width: "100%",
                    placeholder: "Search People"
                })

            ]
        });

        var page = new sap.m.Page({
            title: "Random People",
            subHeader: searchFilter,
            content: [
                pplList
            ]
        });

        return page;
	}

});
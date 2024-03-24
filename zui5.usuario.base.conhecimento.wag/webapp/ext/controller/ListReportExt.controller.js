sap.ui.define([],
    function (){
        "use strict";
        return {
            onInitSmartFilterBarExtension: function(oEvent){
                var sUser = 'MVWBECKER'
                //sap.ushell.Container.getService("UserInfo").getId(),
                oDefaultFilter = {
                    "Userid": sUser
                };
                this.byId("listReportFilter").setFilterData(oDefaultFilter);
                //this.byId("listReportFilter").determineFilterItemByName("Userid").setVisibleInFilterBar(false);
            }
        };
    });
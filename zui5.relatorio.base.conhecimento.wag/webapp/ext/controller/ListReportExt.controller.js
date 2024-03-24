sap.ui.define([
    "sap/ui/core/Fragment",
],
function (Fragment){
    "use strict";
    return {
        sPath: "",

        onEdit: function(oEvent) {
           this._getSelectedRow();
           if(this._getModel("modelView").getProperty("/Userid") != undefined ) this._getValueHelpRequest();
        //    else mensagem nenhum item selecionado
        },

        _getModel: function(sModel){
            return this.getView().getModel(sModel);
        },

        _getSelectedRow: function(){
            this.sPath = this.getView().byId("listReport").getTable().getSelectedContextPaths()[0];
            var sEmail = this._getModel().getProperty(this.sPath + "/Email");

            this._getModel("modelView").setProperty("/Userid", this._getModel().getProperty(this.sPath + "/Userid") );
            this._getModel("modelView").setProperty("/Email", sEmail );
            this._getModel("modelView").setProperty("/Fullname", this._getModel().getProperty(this.sPath + "/Fullname") );
        },

        _getValueHelpRequest: function(){
            var oView = this.getView();
    
            if (!this._pValueHelpDialog) {
                this._pValueHelpDialog = Fragment.load({
                    id: oView.getId(),
                    name: "com.moovi.zui5.relatorio.base.conhecimento.wag.fragment.DialogEdit",
                    controller: this
                }).then(function (oValueHelpDialog){
                    oView.addDependent(oValueHelpDialog);
                    return oValueHelpDialog;
                });
            }
            this._pValueHelpDialog.then(function(oValueHelpDialog){
                oValueHelpDialog.open();
            }.bind(this));
        },
        
        onSave: function(){
            var sEmail = this._getModel("modelView").getProperty("/Email");
            this._getModel().setProperty(this.sPath + "/Email", sEmail);
            this._getModel().setProperty(this.sPath + "/Fullname", this._getModel("modelView").getProperty("/Fullname"));

            this._getModel().submitChanges();
            this._getModel().refresh();

            this.onClose();
        },
        
        onClose: function(){
            this.oDialog = this.getView().byId("ListDialog");
            this.oDialog.close();
        },
    };
});
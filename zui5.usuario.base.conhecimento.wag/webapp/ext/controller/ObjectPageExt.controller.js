sap.ui.define([
    "sap/suite/ui/generic/template/extensionAPI/extensionAPI",
    "sap/m/MessageBox",
],
function (ExtensionAPI,MessageBox){
    "use strict";
    return {
        onInit: function (oEvent) {
            ExtensionAPI.getExtensionAPIPromise(this.getView()).then(function (oExtensionAPI) {
                oExtensionAPI.attachPageDataLoaded(function (event) {
                    var sPath = event.context.sPath,
                        oData = event.context.getModel().getProperty(sPath),
                        that = this,
                        oButton = this.byId("com.moovi.zui5.usuario.base.conhecimento.wag::sap.suite.ui.generic.template.ObjectPage.view.Details::BaseConhecimentoUser--action::cds_zwagsd_c_user.cds_zwagsd_c_user_Entities::setInactive");
                        oButton.setVisible(false);
        
                    if (oData.Isnew == false) {
                        MessageBox.success(oData.Fullname + ',\n' + this._i18n().getText('infoMsg'), {
                            actions: MessageBox.Action.OK,
                            title: this._i18n().getText('bemVindo'),
                            emphasizedAction: MessageBox.Action.OK,
                            onClose: function (sAction) {
                                that.byId("com.moovi.zui5.usuario.base.conhecimento.wag::sap.suite.ui.generic.template.ObjectPage.view.Details::BaseConhecimentoUser--action::cds_zwagsd_c_user.cds_zwagsd_c_user_Entities::setInactive").firePress();
                            }
                        });
                    }
                     //else {
                        // oButton.setVisible(false);
                     //}
                }.bind(this));
            }.bind(this))
        },
        
        _i18n: function () {
            return this.getView().getModel('i18n').getResourceBundle();
        }
    };
});
({
    doInit : function(component, event, helper) {
        if (component.get("v.recordId").length == 15) {
            component.set("v.userId", $A.get("$SObjectType.CurrentUser.Id").substring(0, 15));
        } else {
            component.set("v.userId", $A.get("$SObjectType.CurrentUser.Id"));
        }
    },

	gotoURL : function(component, event, helper) {
        var urlEvent = $A.get('e.force:navigateToURL');
        var url = component.get('v.URL');
        console.log(url);
        urlEvent.setParams({
            "url": url
        });
        urlEvent.fire();
    }
})

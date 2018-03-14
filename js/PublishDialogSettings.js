$evt.addEventHandler($display, "start", onPublishPopupOpenToSetPublishDefaultToUnCheckAllTargets);
function onPublishPopupOpenToSetPublishDefaultToUnCheckAllTargets () {
	$evt.removeEventHandler($display, "start", onPublishPopupOpenToSetPublishDefaultToUnCheckAllTargets);
	
	if ($display.getView().getId() == "PublishPopup") {
		debugger;
		var ps = Tridion.UI.UserSettings.getPublishSettings();
		if (typeof ps !== 'undefined') 
		{
			for (var property in ps) {
				if (property.startsWith("item_") && ps.hasOwnProperty(property)) {				
                    ps[property] = "unchecked";										
                }
            }
			
            Tridion.UI.UserSettings.setPublishSettings(ps);
		}
	} 	
}

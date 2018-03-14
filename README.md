# SetPublishDefaultToUnCheckAllTargets
Installation steps:

Downliad the following file onto the Content Manager server:

Create a new folder called SetPublishDefaultToUnCheckAllTargets within C:\Apps\SDL Custom\GUI Extensions\

Copy the following files into the new folder structure SetPublishDefaultToUnCheckAllTargets:

/config/

/config/SetPublishDefaultToUnCheckAllTargets.config

/js/

/js/PublishDialogSettings.js

Create new Virtual Directory under WebUI > Editors within IIS with the following values:

Name: SetPublishDefaultToUnCheckAllTargets

Location: D:\Apps\SDL Custom\GUI Extensions\SetPublishDefaultToUnCheckAllTargets

Add the following XML fragment at the bottom of the <editors> tag within the %Tridion_Home%\web\WebUI\WebRoot\Configuration\System.config file:
<pre>
&lt;editor name="SetPublishDefaultToUnCheckAllTargets" xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt; 
   &lt;installpath xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;C:\Apps\SDL Custom\Gui Extensions\SetPublishDefaultToUnCheckAllTargets\&lt;/installpath&gt; 
   &lt;configuration xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;config\SetPublishDefaultToUnCheckAllTargets.config&lt;/configuration&gt;
   &lt;vdir xmlns="http://www.sdltridion.com/2009/GUI/Configuration"&gt;SetPublishDefaultToUnCheckAllTargets&lt;/vdir&gt;
&lt;/editor&gt;
</pre>

Increment the value of the modification attribute of the server element towards the top of the %Tridion_Home%\web\WebUI\WebRoot\Configuration\System.config file. 
For example, modification attribute value to be incremented:

<server version="8.5.0.22656" modification="14">

Restart IIS or SDL Web AppPool Recycle

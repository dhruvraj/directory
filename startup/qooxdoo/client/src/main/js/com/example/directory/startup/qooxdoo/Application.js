/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class
 */
qx.Class.define("com.example.directory.startup.qooxdoo.Application",
{
  extend : org.jspresso.framework.application.frontend.Application,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    start : function() {
      var remoteController;
      if (qx.core.Environment.get("qx.debug")) {
        remoteController = new qx.io.remote.Rpc(
            "http://localhost:8080/directory-webapp/.qxrpc",
            "com.example.directory.startup.qooxdoo.QooxdooApplicationStartup"
        );
        remoteController.setCrossDomain(true);
      } else {
        remoteController = new qx.io.remote.Rpc(
            qx.io.remote.Rpc.makeServerURL(),
            "com.example.directory.startup.qooxdoo.QooxdooApplicationStartup"
        );
      }
      remoteController.setTimeout(600000);
      
      var qxController = new org.jspresso.framework.application.frontend.controller.qx.DefaultQxController(this, remoteController, "en");
      qxController.start();
    }
  }
});

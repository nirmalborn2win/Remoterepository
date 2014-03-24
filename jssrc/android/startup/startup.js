//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "testcase",
    appName: "testcase",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.201.156",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://10.10.201.156:80/middleware/MWServlet",
    secureurl: "https://10.10.201.156:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    form1Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            form1.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;
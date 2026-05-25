gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.localVariables = [];
gdjs.SplashScreenCode.idToCallbackMap = new Map();
gdjs.SplashScreenCode.GDSplashImageObjects1= [];
gdjs.SplashScreenCode.GDSplashImageObjects2= [];
gdjs.SplashScreenCode.GDFadeOverlayObjects1= [];
gdjs.SplashScreenCode.GDFadeOverlayObjects2= [];
gdjs.SplashScreenCode.GDNewPanelSpriteObjects1= [];
gdjs.SplashScreenCode.GDNewPanelSpriteObjects2= [];
gdjs.SplashScreenCode.GDBlackFadeOverlayObjects1= [];
gdjs.SplashScreenCode.GDBlackFadeOverlayObjects2= [];
gdjs.SplashScreenCode.GDBlackRectangleDrawerObjects1= [];
gdjs.SplashScreenCode.GDBlackRectangleDrawerObjects2= [];
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1= [];
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects2= [];
gdjs.SplashScreenCode.GDFadeTransitionObjects1= [];
gdjs.SplashScreenCode.GDFadeTransitionObjects2= [];
gdjs.SplashScreenCode.GDLeft_9595Arrow_9595ButtonObjects1= [];
gdjs.SplashScreenCode.GDLeft_9595Arrow_9595ButtonObjects2= [];
gdjs.SplashScreenCode.GDRight_9595Arrow_9595ButtonObjects1= [];
gdjs.SplashScreenCode.GDRight_9595Arrow_9595ButtonObjects2= [];
gdjs.SplashScreenCode.GDJump_9595Arrow_9595ButtonObjects1= [];
gdjs.SplashScreenCode.GDJump_9595Arrow_9595ButtonObjects2= [];


gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFadeSprite"), gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeInSplash", 0, "linear", 0.75, false);
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SplashTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SplashTimer") > 2.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFadeSprite"), gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOutSplash", 255, "linear", 0.75, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SplashTimer") > 3.25;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


};

gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDSplashImageObjects1.length = 0;
gdjs.SplashScreenCode.GDSplashImageObjects2.length = 0;
gdjs.SplashScreenCode.GDFadeOverlayObjects1.length = 0;
gdjs.SplashScreenCode.GDFadeOverlayObjects2.length = 0;
gdjs.SplashScreenCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.SplashScreenCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.SplashScreenCode.GDBlackFadeOverlayObjects1.length = 0;
gdjs.SplashScreenCode.GDBlackFadeOverlayObjects2.length = 0;
gdjs.SplashScreenCode.GDBlackRectangleDrawerObjects1.length = 0;
gdjs.SplashScreenCode.GDBlackRectangleDrawerObjects2.length = 0;
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length = 0;
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects2.length = 0;
gdjs.SplashScreenCode.GDFadeTransitionObjects1.length = 0;
gdjs.SplashScreenCode.GDFadeTransitionObjects2.length = 0;
gdjs.SplashScreenCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.SplashScreenCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.SplashScreenCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.SplashScreenCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.SplashScreenCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.SplashScreenCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;

gdjs.SplashScreenCode.eventsList0(runtimeScene);
gdjs.SplashScreenCode.GDSplashImageObjects1.length = 0;
gdjs.SplashScreenCode.GDSplashImageObjects2.length = 0;
gdjs.SplashScreenCode.GDFadeOverlayObjects1.length = 0;
gdjs.SplashScreenCode.GDFadeOverlayObjects2.length = 0;
gdjs.SplashScreenCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.SplashScreenCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.SplashScreenCode.GDBlackFadeOverlayObjects1.length = 0;
gdjs.SplashScreenCode.GDBlackFadeOverlayObjects2.length = 0;
gdjs.SplashScreenCode.GDBlackRectangleDrawerObjects1.length = 0;
gdjs.SplashScreenCode.GDBlackRectangleDrawerObjects2.length = 0;
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length = 0;
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects2.length = 0;
gdjs.SplashScreenCode.GDFadeTransitionObjects1.length = 0;
gdjs.SplashScreenCode.GDFadeTransitionObjects2.length = 0;
gdjs.SplashScreenCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.SplashScreenCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.SplashScreenCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.SplashScreenCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.SplashScreenCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.SplashScreenCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;


return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;

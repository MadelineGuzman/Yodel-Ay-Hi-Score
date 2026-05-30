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
gdjs.SplashScreenCode.GDMicIconObjects1= [];
gdjs.SplashScreenCode.GDMicIconObjects2= [];
gdjs.SplashScreenCode.GDMicToggleObjects1= [];
gdjs.SplashScreenCode.GDMicToggleObjects2= [];


gdjs.SplashScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFadeSprite"), gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SplashTimer");
}
{for(var i = 0, len = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SplashTimer") > 1.0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15115676);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackFadeSprite"), gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1);
{for(var i = 0, len = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 1.5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackFadeSprite"), gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i].getBehavior("Tween").hasFinished("FadeIn") ) {
        isConditionTrue_0 = true;
        gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[k] = gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDBlackFadeSpriteObjects1.length = k;
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
gdjs.SplashScreenCode.GDMicIconObjects1.length = 0;
gdjs.SplashScreenCode.GDMicIconObjects2.length = 0;
gdjs.SplashScreenCode.GDMicToggleObjects1.length = 0;
gdjs.SplashScreenCode.GDMicToggleObjects2.length = 0;

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
gdjs.SplashScreenCode.GDMicIconObjects1.length = 0;
gdjs.SplashScreenCode.GDMicIconObjects2.length = 0;
gdjs.SplashScreenCode.GDMicToggleObjects1.length = 0;
gdjs.SplashScreenCode.GDMicToggleObjects2.length = 0;


return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;

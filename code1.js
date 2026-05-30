gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.localVariables = [];
gdjs.TitleScreenCode.idToCallbackMap = new Map();
gdjs.TitleScreenCode.GDTitleImageObjects1= [];
gdjs.TitleScreenCode.GDTitleImageObjects2= [];
gdjs.TitleScreenCode.GDStartTextObjects1= [];
gdjs.TitleScreenCode.GDStartTextObjects2= [];
gdjs.TitleScreenCode.GDCreditsButtonObjects1= [];
gdjs.TitleScreenCode.GDCreditsButtonObjects2= [];
gdjs.TitleScreenCode.GDFadeTransitionObjects1= [];
gdjs.TitleScreenCode.GDFadeTransitionObjects2= [];
gdjs.TitleScreenCode.GDLeft_9595Arrow_9595ButtonObjects1= [];
gdjs.TitleScreenCode.GDLeft_9595Arrow_9595ButtonObjects2= [];
gdjs.TitleScreenCode.GDRight_9595Arrow_9595ButtonObjects1= [];
gdjs.TitleScreenCode.GDRight_9595Arrow_9595ButtonObjects2= [];
gdjs.TitleScreenCode.GDJump_9595Arrow_9595ButtonObjects1= [];
gdjs.TitleScreenCode.GDJump_9595Arrow_9595ButtonObjects2= [];
gdjs.TitleScreenCode.GDMicIconObjects1= [];
gdjs.TitleScreenCode.GDMicIconObjects2= [];
gdjs.TitleScreenCode.GDMicToggleObjects1= [];
gdjs.TitleScreenCode.GDMicToggleObjects2= [];


gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDCreditsButtonObjects1Objects = Hashtable.newFrom({"CreditsButton": gdjs.TitleScreenCode.GDCreditsButtonObjects1});
gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.TitleScreenCode.GDStartTextObjects1);
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BlinkOut", 0, "linear", 1, false);
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Main_Amb_2_v2.wav", 10, true, 45, 1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TitleTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.TitleScreenCode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDStartTextObjects1[i].getBehavior("Tween").hasFinished("BlinkOut") ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDStartTextObjects1[k] = gdjs.TitleScreenCode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDStartTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDStartTextObjects1 */
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BlinkIn", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.TitleScreenCode.GDStartTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDStartTextObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDStartTextObjects1[i].getBehavior("Tween").hasFinished("BlinkIn") ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDStartTextObjects1[k] = gdjs.TitleScreenCode.GDStartTextObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDStartTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDStartTextObjects1 */
{for(var i = 0, len = gdjs.TitleScreenCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDStartTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BlinkOut", 0, "linear", 1, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13276940);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 10);
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HowToPlay", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CreditsButton"), gdjs.TitleScreenCode.GDCreditsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TitleScreenCode.mapOfGDgdjs_9546TitleScreenCode_9546GDCreditsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13279420);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDTitleImageObjects1.length = 0;
gdjs.TitleScreenCode.GDTitleImageObjects2.length = 0;
gdjs.TitleScreenCode.GDStartTextObjects1.length = 0;
gdjs.TitleScreenCode.GDStartTextObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDFadeTransitionObjects1.length = 0;
gdjs.TitleScreenCode.GDFadeTransitionObjects2.length = 0;
gdjs.TitleScreenCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDMicIconObjects1.length = 0;
gdjs.TitleScreenCode.GDMicIconObjects2.length = 0;
gdjs.TitleScreenCode.GDMicToggleObjects1.length = 0;
gdjs.TitleScreenCode.GDMicToggleObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0(runtimeScene);
gdjs.TitleScreenCode.GDTitleImageObjects1.length = 0;
gdjs.TitleScreenCode.GDTitleImageObjects2.length = 0;
gdjs.TitleScreenCode.GDStartTextObjects1.length = 0;
gdjs.TitleScreenCode.GDStartTextObjects2.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDCreditsButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDFadeTransitionObjects1.length = 0;
gdjs.TitleScreenCode.GDFadeTransitionObjects2.length = 0;
gdjs.TitleScreenCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.TitleScreenCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.TitleScreenCode.GDMicIconObjects1.length = 0;
gdjs.TitleScreenCode.GDMicIconObjects2.length = 0;
gdjs.TitleScreenCode.GDMicToggleObjects1.length = 0;
gdjs.TitleScreenCode.GDMicToggleObjects2.length = 0;


return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;

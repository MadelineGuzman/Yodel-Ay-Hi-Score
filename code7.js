gdjs.HowToPlayCode = {};
gdjs.HowToPlayCode.localVariables = [];
gdjs.HowToPlayCode.idToCallbackMap = new Map();
gdjs.HowToPlayCode.GDHowToPlayTitleObjects1= [];
gdjs.HowToPlayCode.GDHowToPlayTitleObjects2= [];
gdjs.HowToPlayCode.GDInstruction1Objects1= [];
gdjs.HowToPlayCode.GDInstruction1Objects2= [];
gdjs.HowToPlayCode.GDInstruction2Objects1= [];
gdjs.HowToPlayCode.GDInstruction2Objects2= [];
gdjs.HowToPlayCode.GDInstruction3Objects1= [];
gdjs.HowToPlayCode.GDInstruction3Objects2= [];
gdjs.HowToPlayCode.GDInstruction4Objects1= [];
gdjs.HowToPlayCode.GDInstruction4Objects2= [];
gdjs.HowToPlayCode.GDStartPromptTextObjects1= [];
gdjs.HowToPlayCode.GDStartPromptTextObjects2= [];
gdjs.HowToPlayCode.GDTextBoxBackgroundObjects1= [];
gdjs.HowToPlayCode.GDTextBoxBackgroundObjects2= [];
gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1= [];
gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects2= [];
gdjs.HowToPlayCode.GDInstruction5Objects1= [];
gdjs.HowToPlayCode.GDInstruction5Objects2= [];
gdjs.HowToPlayCode.GDFadeTransitionObjects1= [];
gdjs.HowToPlayCode.GDFadeTransitionObjects2= [];
gdjs.HowToPlayCode.GDLeft_9595Arrow_9595ButtonObjects1= [];
gdjs.HowToPlayCode.GDLeft_9595Arrow_9595ButtonObjects2= [];
gdjs.HowToPlayCode.GDRight_9595Arrow_9595ButtonObjects1= [];
gdjs.HowToPlayCode.GDRight_9595Arrow_9595ButtonObjects2= [];
gdjs.HowToPlayCode.GDJump_9595Arrow_9595ButtonObjects1= [];
gdjs.HowToPlayCode.GDJump_9595Arrow_9595ButtonObjects2= [];


gdjs.HowToPlayCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackBackgroundDrawer"), gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartPromptText"), gdjs.HowToPlayCode.GDStartPromptTextObjects1);
{for(var i = 0, len = gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1[i].setLayer("UI");
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1[i].setFillColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1[i].setFillOpacity(200);
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1[i].drawRectangle(50, 90, 750, 690);
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("pulse_out", 0, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartPromptText"), gdjs.HowToPlayCode.GDStartPromptTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length;i<l;++i) {
    if ( gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").hasFinished("pulse_out") ) {
        isConditionTrue_0 = true;
        gdjs.HowToPlayCode.GDStartPromptTextObjects1[k] = gdjs.HowToPlayCode.GDStartPromptTextObjects1[i];
        ++k;
    }
}
gdjs.HowToPlayCode.GDStartPromptTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HowToPlayCode.GDStartPromptTextObjects1 */
{for(var i = 0, len = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("pulse_in", 255, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").removeTween("pulse_out");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartPromptText"), gdjs.HowToPlayCode.GDStartPromptTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length;i<l;++i) {
    if ( gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").hasFinished("pulse_in") ) {
        isConditionTrue_0 = true;
        gdjs.HowToPlayCode.GDStartPromptTextObjects1[k] = gdjs.HowToPlayCode.GDStartPromptTextObjects1[i];
        ++k;
    }
}
gdjs.HowToPlayCode.GDStartPromptTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HowToPlayCode.GDStartPromptTextObjects1 */
{for(var i = 0, len = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("pulse_out", 0, "linear", 1, false);
}
}
{for(var i = 0, len = gdjs.HowToPlayCode.GDStartPromptTextObjects1.length ;i < len;++i) {
    gdjs.HowToPlayCode.GDStartPromptTextObjects1[i].getBehavior("Tween").removeTween("pulse_in");
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
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Middle");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL 1", false);
}
}

}


};

gdjs.HowToPlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HowToPlayCode.GDHowToPlayTitleObjects1.length = 0;
gdjs.HowToPlayCode.GDHowToPlayTitleObjects2.length = 0;
gdjs.HowToPlayCode.GDInstruction1Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction1Objects2.length = 0;
gdjs.HowToPlayCode.GDInstruction2Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction2Objects2.length = 0;
gdjs.HowToPlayCode.GDInstruction3Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction3Objects2.length = 0;
gdjs.HowToPlayCode.GDInstruction4Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction4Objects2.length = 0;
gdjs.HowToPlayCode.GDStartPromptTextObjects1.length = 0;
gdjs.HowToPlayCode.GDStartPromptTextObjects2.length = 0;
gdjs.HowToPlayCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.HowToPlayCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length = 0;
gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects2.length = 0;
gdjs.HowToPlayCode.GDInstruction5Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction5Objects2.length = 0;
gdjs.HowToPlayCode.GDFadeTransitionObjects1.length = 0;
gdjs.HowToPlayCode.GDFadeTransitionObjects2.length = 0;
gdjs.HowToPlayCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.HowToPlayCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.HowToPlayCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;

gdjs.HowToPlayCode.eventsList0(runtimeScene);
gdjs.HowToPlayCode.GDHowToPlayTitleObjects1.length = 0;
gdjs.HowToPlayCode.GDHowToPlayTitleObjects2.length = 0;
gdjs.HowToPlayCode.GDInstruction1Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction1Objects2.length = 0;
gdjs.HowToPlayCode.GDInstruction2Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction2Objects2.length = 0;
gdjs.HowToPlayCode.GDInstruction3Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction3Objects2.length = 0;
gdjs.HowToPlayCode.GDInstruction4Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction4Objects2.length = 0;
gdjs.HowToPlayCode.GDStartPromptTextObjects1.length = 0;
gdjs.HowToPlayCode.GDStartPromptTextObjects2.length = 0;
gdjs.HowToPlayCode.GDTextBoxBackgroundObjects1.length = 0;
gdjs.HowToPlayCode.GDTextBoxBackgroundObjects2.length = 0;
gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects1.length = 0;
gdjs.HowToPlayCode.GDBlackBackgroundDrawerObjects2.length = 0;
gdjs.HowToPlayCode.GDInstruction5Objects1.length = 0;
gdjs.HowToPlayCode.GDInstruction5Objects2.length = 0;
gdjs.HowToPlayCode.GDFadeTransitionObjects1.length = 0;
gdjs.HowToPlayCode.GDFadeTransitionObjects2.length = 0;
gdjs.HowToPlayCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.HowToPlayCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.HowToPlayCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;


return;

}

gdjs['HowToPlayCode'] = gdjs.HowToPlayCode;

gdjs.WinSceneCode = {};
gdjs.WinSceneCode.localVariables = [];
gdjs.WinSceneCode.idToCallbackMap = new Map();
gdjs.WinSceneCode.GDCongratulationsTextObjects1= [];
gdjs.WinSceneCode.GDCongratulationsTextObjects2= [];
gdjs.WinSceneCode.GDThanksTextObjects1= [];
gdjs.WinSceneCode.GDThanksTextObjects2= [];
gdjs.WinSceneCode.GDUFO_95951Objects1= [];
gdjs.WinSceneCode.GDUFO_95951Objects2= [];
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1= [];
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects2= [];
gdjs.WinSceneCode.GDTotalCollectiblesTextObjects1= [];
gdjs.WinSceneCode.GDTotalCollectiblesTextObjects2= [];
gdjs.WinSceneCode.GDFadeTransitionObjects1= [];
gdjs.WinSceneCode.GDFadeTransitionObjects2= [];
gdjs.WinSceneCode.GDLeft_9595Arrow_9595ButtonObjects1= [];
gdjs.WinSceneCode.GDLeft_9595Arrow_9595ButtonObjects2= [];
gdjs.WinSceneCode.GDRight_9595Arrow_9595ButtonObjects1= [];
gdjs.WinSceneCode.GDRight_9595Arrow_9595ButtonObjects2= [];
gdjs.WinSceneCode.GDJump_9595Arrow_9595ButtonObjects1= [];
gdjs.WinSceneCode.GDJump_9595Arrow_9595ButtonObjects2= [];
gdjs.WinSceneCode.GDMicIconObjects1= [];
gdjs.WinSceneCode.GDMicIconObjects2= [];
gdjs.WinSceneCode.GDMicToggleObjects1= [];
gdjs.WinSceneCode.GDMicToggleObjects2= [];


gdjs.WinSceneCode.userFunc0xed6eb8 = function GDJSInlineCode(runtimeScene) {
"use strict";
// CodexTotalCollectibles display
const total = runtimeScene.getGame().getVariables().get('TotalScoreCollectibles').getAsNumber();
for (const object of runtimeScene.getObjects('TotalCollectiblesText')) {
  object.setString('Total Collectibles: ' + total + '/15');
}
};
gdjs.WinSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.WinSceneCode.userFunc0xed6eb8(runtimeScene);

}


};gdjs.WinSceneCode.mapOfGDgdjs_9546WinSceneCode_9546GDPlay_95959595Again_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Again_Button": gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1});
gdjs.WinSceneCode.asyncCallback16938780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WinSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL 1", false);
}
gdjs.WinSceneCode.localVariables.length = 0;
}
gdjs.WinSceneCode.idToCallbackMap.set(16938780, gdjs.WinSceneCode.asyncCallback16938780);
gdjs.WinSceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WinSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WinSceneCode.asyncCallback16938780(runtimeScene, asyncObjectsList)), 16938780, asyncObjectsList);
}
}

}


};gdjs.WinSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Again_Button"), gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WinSceneCode.mapOfGDgdjs_9546WinSceneCode_9546GDPlay_95959595Again_95959595ButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.WinSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.WinSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinSceneCode.GDCongratulationsTextObjects1.length = 0;
gdjs.WinSceneCode.GDCongratulationsTextObjects2.length = 0;
gdjs.WinSceneCode.GDThanksTextObjects1.length = 0;
gdjs.WinSceneCode.GDThanksTextObjects2.length = 0;
gdjs.WinSceneCode.GDUFO_95951Objects1.length = 0;
gdjs.WinSceneCode.GDUFO_95951Objects2.length = 0;
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDTotalCollectiblesTextObjects1.length = 0;
gdjs.WinSceneCode.GDTotalCollectiblesTextObjects2.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects1.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects2.length = 0;
gdjs.WinSceneCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDMicIconObjects1.length = 0;
gdjs.WinSceneCode.GDMicIconObjects2.length = 0;
gdjs.WinSceneCode.GDMicToggleObjects1.length = 0;
gdjs.WinSceneCode.GDMicToggleObjects2.length = 0;

gdjs.WinSceneCode.eventsList2(runtimeScene);
gdjs.WinSceneCode.GDCongratulationsTextObjects1.length = 0;
gdjs.WinSceneCode.GDCongratulationsTextObjects2.length = 0;
gdjs.WinSceneCode.GDThanksTextObjects1.length = 0;
gdjs.WinSceneCode.GDThanksTextObjects2.length = 0;
gdjs.WinSceneCode.GDUFO_95951Objects1.length = 0;
gdjs.WinSceneCode.GDUFO_95951Objects2.length = 0;
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDTotalCollectiblesTextObjects1.length = 0;
gdjs.WinSceneCode.GDTotalCollectiblesTextObjects2.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects1.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects2.length = 0;
gdjs.WinSceneCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDMicIconObjects1.length = 0;
gdjs.WinSceneCode.GDMicIconObjects2.length = 0;
gdjs.WinSceneCode.GDMicToggleObjects1.length = 0;
gdjs.WinSceneCode.GDMicToggleObjects2.length = 0;


return;

}

gdjs['WinSceneCode'] = gdjs.WinSceneCode;

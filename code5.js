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
gdjs.WinSceneCode.GDFadeTransitionObjects1= [];
gdjs.WinSceneCode.GDFadeTransitionObjects2= [];


gdjs.WinSceneCode.mapOfGDgdjs_9546WinSceneCode_9546GDPlay_95959595Again_95959595ButtonObjects1Objects = Hashtable.newFrom({"Play_Again_Button": gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1});
gdjs.WinSceneCode.asyncCallback9645364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WinSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL 1", false);
}
gdjs.WinSceneCode.localVariables.length = 0;
}
gdjs.WinSceneCode.idToCallbackMap.set(9645364, gdjs.WinSceneCode.asyncCallback9645364);
gdjs.WinSceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WinSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.WinSceneCode.asyncCallback9645364(runtimeScene, asyncObjectsList)), 9645364, asyncObjectsList);
}
}

}


};gdjs.WinSceneCode.eventsList1 = function(runtimeScene) {

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
gdjs.WinSceneCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.WinSceneCode.GDFadeTransitionObjects1.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects2.length = 0;

gdjs.WinSceneCode.eventsList1(runtimeScene);
gdjs.WinSceneCode.GDCongratulationsTextObjects1.length = 0;
gdjs.WinSceneCode.GDCongratulationsTextObjects2.length = 0;
gdjs.WinSceneCode.GDThanksTextObjects1.length = 0;
gdjs.WinSceneCode.GDThanksTextObjects2.length = 0;
gdjs.WinSceneCode.GDUFO_95951Objects1.length = 0;
gdjs.WinSceneCode.GDUFO_95951Objects2.length = 0;
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects1.length = 0;
gdjs.WinSceneCode.GDPlay_9595Again_9595ButtonObjects2.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects1.length = 0;
gdjs.WinSceneCode.GDFadeTransitionObjects2.length = 0;


return;

}

gdjs['WinSceneCode'] = gdjs.WinSceneCode;

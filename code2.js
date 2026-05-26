gdjs.LEVEL_321Code = {};
gdjs.LEVEL_321Code.localVariables = [];
gdjs.LEVEL_321Code.idToCallbackMap = new Map();
gdjs.LEVEL_321Code.forEachIndex2 = 0;

gdjs.LEVEL_321Code.forEachObjects2 = [];

gdjs.LEVEL_321Code.forEachTemporary2 = null;

gdjs.LEVEL_321Code.forEachTotalCount2 = 0;

gdjs.LEVEL_321Code.GDGroundObjects1= [];
gdjs.LEVEL_321Code.GDGroundObjects2= [];
gdjs.LEVEL_321Code.GDMicInputDisplayObjects1= [];
gdjs.LEVEL_321Code.GDMicInputDisplayObjects2= [];
gdjs.LEVEL_321Code.GDMountainPlatformObjects1= [];
gdjs.LEVEL_321Code.GDMountainPlatformObjects2= [];
gdjs.LEVEL_321Code.GDMountainBackgroundObjects1= [];
gdjs.LEVEL_321Code.GDMountainBackgroundObjects2= [];
gdjs.LEVEL_321Code.GDFallingRockObjects1= [];
gdjs.LEVEL_321Code.GDFallingRockObjects2= [];
gdjs.LEVEL_321Code.GDInvisibleWallObjects1= [];
gdjs.LEVEL_321Code.GDInvisibleWallObjects2= [];
gdjs.LEVEL_321Code.GDPlayerObjects1= [];
gdjs.LEVEL_321Code.GDPlayerObjects2= [];
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1= [];
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects2= [];
gdjs.LEVEL_321Code.GDDay_9595SkyObjects1= [];
gdjs.LEVEL_321Code.GDDay_9595SkyObjects2= [];
gdjs.LEVEL_321Code.GDBase_9595Camp_9595GroundObjects1= [];
gdjs.LEVEL_321Code.GDBase_9595Camp_9595GroundObjects2= [];
gdjs.LEVEL_321Code.GDGoat_9595RObjects1= [];
gdjs.LEVEL_321Code.GDGoat_9595RObjects2= [];
gdjs.LEVEL_321Code.GDGoat_9595LObjects1= [];
gdjs.LEVEL_321Code.GDGoat_9595LObjects2= [];
gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects1= [];
gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects2= [];
gdjs.LEVEL_321Code.GDRock_9595TallObjects1= [];
gdjs.LEVEL_321Code.GDRock_9595TallObjects2= [];
gdjs.LEVEL_321Code.GDRock_9595SmallObjects1= [];
gdjs.LEVEL_321Code.GDRock_9595SmallObjects2= [];
gdjs.LEVEL_321Code.GDTree_95951Objects1= [];
gdjs.LEVEL_321Code.GDTree_95951Objects2= [];
gdjs.LEVEL_321Code.GDTree_95952Objects1= [];
gdjs.LEVEL_321Code.GDTree_95952Objects2= [];
gdjs.LEVEL_321Code.GDFlower_95951Objects1= [];
gdjs.LEVEL_321Code.GDFlower_95951Objects2= [];
gdjs.LEVEL_321Code.GDFlower_95952Objects1= [];
gdjs.LEVEL_321Code.GDFlower_95952Objects2= [];
gdjs.LEVEL_321Code.GDTree_95953Objects1= [];
gdjs.LEVEL_321Code.GDTree_95953Objects2= [];
gdjs.LEVEL_321Code.GDGrassObjects1= [];
gdjs.LEVEL_321Code.GDGrassObjects2= [];
gdjs.LEVEL_321Code.GDFlower_95953Objects1= [];
gdjs.LEVEL_321Code.GDFlower_95953Objects2= [];
gdjs.LEVEL_321Code.GDMossObjects1= [];
gdjs.LEVEL_321Code.GDMossObjects2= [];
gdjs.LEVEL_321Code.GDBush_95951Objects1= [];
gdjs.LEVEL_321Code.GDBush_95951Objects2= [];
gdjs.LEVEL_321Code.GDBush_95952Objects1= [];
gdjs.LEVEL_321Code.GDBush_95952Objects2= [];
gdjs.LEVEL_321Code.GDUp_9595ArrowObjects1= [];
gdjs.LEVEL_321Code.GDUp_9595ArrowObjects2= [];
gdjs.LEVEL_321Code.GDYodelObjects1= [];
gdjs.LEVEL_321Code.GDYodelObjects2= [];
gdjs.LEVEL_321Code.GDTree_95954Objects1= [];
gdjs.LEVEL_321Code.GDTree_95954Objects2= [];
gdjs.LEVEL_321Code.GDSnow_9595PileObjects1= [];
gdjs.LEVEL_321Code.GDSnow_9595PileObjects2= [];
gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1= [];
gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects2= [];
gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1= [];
gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects2= [];
gdjs.LEVEL_321Code.GDNext_9595Level_9595ButtonObjects1= [];
gdjs.LEVEL_321Code.GDNext_9595Level_9595ButtonObjects2= [];
gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1= [];
gdjs.LEVEL_321Code.GDKeep_9595GoingObjects2= [];
gdjs.LEVEL_321Code.GDFlower_9595CountObjects1= [];
gdjs.LEVEL_321Code.GDFlower_9595CountObjects2= [];
gdjs.LEVEL_321Code.GDFadeTransitionObjects1= [];
gdjs.LEVEL_321Code.GDFadeTransitionObjects2= [];
gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1= [];
gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects2= [];
gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1= [];
gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects2= [];
gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1= [];
gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects2= [];


gdjs.LEVEL_321Code.userFunc0xab0948 = function GDJSInlineCode(runtimeScene) {
"use strict";
// CodexTotalCollectibles reset
runtimeScene.getGame().getVariables().get('TotalScoreCollectibles').setNumber(0);
};
gdjs.LEVEL_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.LEVEL_321Code.userFunc0xab0948(runtimeScene);

}


};gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL_321Code.GDPlayerObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDBase_95959595Camp_95959595FireObjects1Objects = Hashtable.newFrom({"Base_Camp_Fire": gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL_321Code.GDPlayerObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595951Objects1ObjectsGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595952Objects1Objects = Hashtable.newFrom({"Flower_Collect_1": gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1, "Flower_Collect_2": gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1});
gdjs.LEVEL_321Code.userFunc0x958cc0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// CodexTotalCollectibles increment
runtimeScene.getGame().getVariables().get('TotalScoreCollectibles').add(1);
};
gdjs.LEVEL_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.LEVEL_321Code.userFunc0x958cc0(runtimeScene);

}


};gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL_321Code.GDPlayerObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595951Objects1ObjectsGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595952Objects1Objects = Hashtable.newFrom({"Flower_Collect_1": gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1, "Flower_Collect_2": gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDNEXT_95959595LEVEL_95959595BUTTONObjects1Objects = Hashtable.newFrom({"NEXT_LEVEL_BUTTON": gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1});
gdjs.LEVEL_321Code.asyncCallback17543028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LEVEL_321Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL 2", false);
}
gdjs.LEVEL_321Code.localVariables.length = 0;
}
gdjs.LEVEL_321Code.idToCallbackMap.set(17543028, gdjs.LEVEL_321Code.asyncCallback17543028);
gdjs.LEVEL_321Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LEVEL_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.LEVEL_321Code.asyncCallback17543028(runtimeScene, asyncObjectsList)), 17543028, asyncObjectsList);
}
}

}


};gdjs.LEVEL_321Code.eventsList3 = function(runtimeScene) {

};gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL_321Code.GDPlayerObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDGoat_95959595RObjects1Objects = Hashtable.newFrom({"Goat_R": gdjs.LEVEL_321Code.GDGoat_9595RObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDJump_95959595Arrow_95959595ButtonObjects1Objects = Hashtable.newFrom({"Jump_Arrow_Button": gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDJump_95959595Arrow_95959595ButtonObjects1Objects = Hashtable.newFrom({"Jump_Arrow_Button": gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1});
gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDJump_95959595Arrow_95959595ButtonObjects1Objects = Hashtable.newFrom({"Jump_Arrow_Button": gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1});
gdjs.LEVEL_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "AMB_LVL_1_v2.wav", true, 100, 1);
}

{ //Subevents
gdjs.LEVEL_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17523796);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flower_Count"), gdjs.LEVEL_321Code.GDFlower_9595CountObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump_Arrow_Button"), gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keep_Going"), gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left_Arrow_Button"), gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("NEXT_LEVEL_BUTTON"), gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow_Button"), gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1);
{gdjs.evtsExt__MicrophoneInput__RequestPermission.func(runtimeScene, null);
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDFlower_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDFlower_9595CountObjects1[i].hide();
}
}
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 800, 780);
}
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "");
}
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, false);
}
{gdjs.evtTools.window.centerWindow(runtimeScene);
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(500);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.evtsExt__MicrophoneInput__Volume.func(runtimeScene, null));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Base_Camp_Fire"), gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects, gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDBase_95959595Camp_95959595FireObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.LEVEL_321Code.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("InvisibleWall"), gdjs.LEVEL_321Code.GDInvisibleWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keep_Going"), gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1);
gdjs.copyArray(runtimeScene.getObjects("MicInputDisplay"), gdjs.LEVEL_321Code.GDMicInputDisplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("NEXT_LEVEL_BUTTON"), gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1);
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDMicInputDisplayObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDMicInputDisplayObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDGroundObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDGroundObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDInvisibleWallObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDInvisibleWallObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1[i].setZOrder(999);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].setZOrder(999);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() > 0.15);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDPlayerObjects1[k] = gdjs.LEVEL_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(900 + (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() - 0.15) / 0.85 * 2500);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDPlayerObjects1[k] = gdjs.LEVEL_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17533468);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(1200);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.LEVEL_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL_321Code.GDPlayerObjects1[0].getPointY("")) - 250, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() < 0.15);
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDPlayerObjects1[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDPlayerObjects1[k] = gdjs.LEVEL_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].setX(800);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDPlayerObjects1[i].getX() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDPlayerObjects1[k] = gdjs.LEVEL_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].setX(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() > 0.15);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].setAnimationFrame(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() < 0.10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].setAnimationFrame(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flower_Collect_1"), gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Flower_Collect_2"), gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects, gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595951Objects1ObjectsGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LEVEL_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flower_Collect_1"), gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Flower_Collect_2"), gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects, gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595951Objects1ObjectsGDgdjs_9546LEVEL_9595321Code_9546GDFlower_95959595Collect_959595952Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1 */
/* Reuse gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Flower_Count"), gdjs.LEVEL_321Code.GDFlower_9595CountObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "ESM_Game_Notification_83_Coin_Blip_Select_Tap_Button_v2.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDFlower_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDFlower_9595CountObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDFlower_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDFlower_9595CountObjects1[i].getBehavior("Text").setText("Flowers: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NEXT_LEVEL_BUTTON"), gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDNEXT_95959595LEVEL_95959595BUTTONObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[k] = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeTransition"), gdjs.LEVEL_321Code.GDFadeTransitionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keep_Going"), gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1);
/* Reuse gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDFadeTransitionObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDFadeTransitionObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "linear", 0.5, false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Yodel_v2.wav", false, 100, 1);
}

{ //Subevents
gdjs.LEVEL_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MountainPlatform"), gdjs.LEVEL_321Code.GDMountainPlatformObjects1);

for (gdjs.LEVEL_321Code.forEachIndex2 = 0;gdjs.LEVEL_321Code.forEachIndex2 < gdjs.LEVEL_321Code.GDMountainPlatformObjects1.length;++gdjs.LEVEL_321Code.forEachIndex2) {
gdjs.LEVEL_321Code.GDMountainPlatformObjects2.length = 0;


gdjs.LEVEL_321Code.forEachTemporary2 = gdjs.LEVEL_321Code.GDMountainPlatformObjects1[gdjs.LEVEL_321Code.forEachIndex2];
gdjs.LEVEL_321Code.GDMountainPlatformObjects2.push(gdjs.LEVEL_321Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goat_R"), gdjs.LEVEL_321Code.GDGoat_9595RObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDPlayerObjects1Objects, gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDGoat_95959595RObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17544444);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Goat_Yell2_v2.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.LEVEL_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL_321Code.GDPlayerObjects1[0].getPointY("")) < -(2700));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Yodel_v2.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].setPosition(200,650);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Arrow_Button"), gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDJump_95959595Arrow_95959595ButtonObjects1Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Arrow_Button"), gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDJump_95959595Arrow_95959595ButtonObjects1Objects, runtimeScene, true, true);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Arrow_Button"), gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL_321Code.mapOfGDgdjs_9546LEVEL_9595321Code_9546GDJump_95959595Arrow_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL_321Code.GDPlayerObjects1[k] = gdjs.LEVEL_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17549948);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(1200);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17551028);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jump_Arrow_Button"), gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left_Arrow_Button"), gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right_Arrow_Button"), gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1);
{for(var i = 0, len = gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
{for(var i = 0, len = gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


};

gdjs.LEVEL_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL_321Code.GDGroundObjects1.length = 0;
gdjs.LEVEL_321Code.GDGroundObjects2.length = 0;
gdjs.LEVEL_321Code.GDMicInputDisplayObjects1.length = 0;
gdjs.LEVEL_321Code.GDMicInputDisplayObjects2.length = 0;
gdjs.LEVEL_321Code.GDMountainPlatformObjects1.length = 0;
gdjs.LEVEL_321Code.GDMountainPlatformObjects2.length = 0;
gdjs.LEVEL_321Code.GDMountainBackgroundObjects1.length = 0;
gdjs.LEVEL_321Code.GDMountainBackgroundObjects2.length = 0;
gdjs.LEVEL_321Code.GDFallingRockObjects1.length = 0;
gdjs.LEVEL_321Code.GDFallingRockObjects2.length = 0;
gdjs.LEVEL_321Code.GDInvisibleWallObjects1.length = 0;
gdjs.LEVEL_321Code.GDInvisibleWallObjects2.length = 0;
gdjs.LEVEL_321Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL_321Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length = 0;
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects2.length = 0;
gdjs.LEVEL_321Code.GDDay_9595SkyObjects1.length = 0;
gdjs.LEVEL_321Code.GDDay_9595SkyObjects2.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595GroundObjects1.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595GroundObjects2.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595RObjects1.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595RObjects2.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595LObjects1.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595LObjects2.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects1.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects2.length = 0;
gdjs.LEVEL_321Code.GDRock_9595TallObjects1.length = 0;
gdjs.LEVEL_321Code.GDRock_9595TallObjects2.length = 0;
gdjs.LEVEL_321Code.GDRock_9595SmallObjects1.length = 0;
gdjs.LEVEL_321Code.GDRock_9595SmallObjects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95953Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95953Objects2.length = 0;
gdjs.LEVEL_321Code.GDGrassObjects1.length = 0;
gdjs.LEVEL_321Code.GDGrassObjects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_95953Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_95953Objects2.length = 0;
gdjs.LEVEL_321Code.GDMossObjects1.length = 0;
gdjs.LEVEL_321Code.GDMossObjects2.length = 0;
gdjs.LEVEL_321Code.GDBush_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDBush_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDBush_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDBush_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDUp_9595ArrowObjects1.length = 0;
gdjs.LEVEL_321Code.GDUp_9595ArrowObjects2.length = 0;
gdjs.LEVEL_321Code.GDYodelObjects1.length = 0;
gdjs.LEVEL_321Code.GDYodelObjects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95954Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95954Objects2.length = 0;
gdjs.LEVEL_321Code.GDSnow_9595PileObjects1.length = 0;
gdjs.LEVEL_321Code.GDSnow_9595PileObjects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDNext_9595Level_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDNext_9595Level_9595ButtonObjects2.length = 0;
gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length = 0;
gdjs.LEVEL_321Code.GDKeep_9595GoingObjects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595CountObjects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595CountObjects2.length = 0;
gdjs.LEVEL_321Code.GDFadeTransitionObjects1.length = 0;
gdjs.LEVEL_321Code.GDFadeTransitionObjects2.length = 0;
gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects2.length = 0;

gdjs.LEVEL_321Code.eventsList4(runtimeScene);
gdjs.LEVEL_321Code.GDGroundObjects1.length = 0;
gdjs.LEVEL_321Code.GDGroundObjects2.length = 0;
gdjs.LEVEL_321Code.GDMicInputDisplayObjects1.length = 0;
gdjs.LEVEL_321Code.GDMicInputDisplayObjects2.length = 0;
gdjs.LEVEL_321Code.GDMountainPlatformObjects1.length = 0;
gdjs.LEVEL_321Code.GDMountainPlatformObjects2.length = 0;
gdjs.LEVEL_321Code.GDMountainBackgroundObjects1.length = 0;
gdjs.LEVEL_321Code.GDMountainBackgroundObjects2.length = 0;
gdjs.LEVEL_321Code.GDFallingRockObjects1.length = 0;
gdjs.LEVEL_321Code.GDFallingRockObjects2.length = 0;
gdjs.LEVEL_321Code.GDInvisibleWallObjects1.length = 0;
gdjs.LEVEL_321Code.GDInvisibleWallObjects2.length = 0;
gdjs.LEVEL_321Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL_321Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects1.length = 0;
gdjs.LEVEL_321Code.GDNEXT_9595LEVEL_9595BUTTONObjects2.length = 0;
gdjs.LEVEL_321Code.GDDay_9595SkyObjects1.length = 0;
gdjs.LEVEL_321Code.GDDay_9595SkyObjects2.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595GroundObjects1.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595GroundObjects2.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595RObjects1.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595RObjects2.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595LObjects1.length = 0;
gdjs.LEVEL_321Code.GDGoat_9595LObjects2.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects1.length = 0;
gdjs.LEVEL_321Code.GDBase_9595Camp_9595FireObjects2.length = 0;
gdjs.LEVEL_321Code.GDRock_9595TallObjects1.length = 0;
gdjs.LEVEL_321Code.GDRock_9595TallObjects2.length = 0;
gdjs.LEVEL_321Code.GDRock_9595SmallObjects1.length = 0;
gdjs.LEVEL_321Code.GDRock_9595SmallObjects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95953Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95953Objects2.length = 0;
gdjs.LEVEL_321Code.GDGrassObjects1.length = 0;
gdjs.LEVEL_321Code.GDGrassObjects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_95953Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_95953Objects2.length = 0;
gdjs.LEVEL_321Code.GDMossObjects1.length = 0;
gdjs.LEVEL_321Code.GDMossObjects2.length = 0;
gdjs.LEVEL_321Code.GDBush_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDBush_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDBush_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDBush_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDUp_9595ArrowObjects1.length = 0;
gdjs.LEVEL_321Code.GDUp_9595ArrowObjects2.length = 0;
gdjs.LEVEL_321Code.GDYodelObjects1.length = 0;
gdjs.LEVEL_321Code.GDYodelObjects2.length = 0;
gdjs.LEVEL_321Code.GDTree_95954Objects1.length = 0;
gdjs.LEVEL_321Code.GDTree_95954Objects2.length = 0;
gdjs.LEVEL_321Code.GDSnow_9595PileObjects1.length = 0;
gdjs.LEVEL_321Code.GDSnow_9595PileObjects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95951Objects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595Collect_95952Objects2.length = 0;
gdjs.LEVEL_321Code.GDNext_9595Level_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDNext_9595Level_9595ButtonObjects2.length = 0;
gdjs.LEVEL_321Code.GDKeep_9595GoingObjects1.length = 0;
gdjs.LEVEL_321Code.GDKeep_9595GoingObjects2.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595CountObjects1.length = 0;
gdjs.LEVEL_321Code.GDFlower_9595CountObjects2.length = 0;
gdjs.LEVEL_321Code.GDFadeTransitionObjects1.length = 0;
gdjs.LEVEL_321Code.GDFadeTransitionObjects2.length = 0;
gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.LEVEL_321Code.GDJump_9595Arrow_9595ButtonObjects2.length = 0;


return;

}

gdjs['LEVEL_321Code'] = gdjs.LEVEL_321Code;

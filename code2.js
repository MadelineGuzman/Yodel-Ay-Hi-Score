gdjs.LEVEL3Code = {};
gdjs.LEVEL3Code.localVariables = [];
gdjs.LEVEL3Code.idToCallbackMap = new Map();
gdjs.LEVEL3Code.forEachIndex2 = 0;

gdjs.LEVEL3Code.forEachObjects2 = [];

gdjs.LEVEL3Code.forEachTemporary2 = null;

gdjs.LEVEL3Code.forEachTotalCount2 = 0;

gdjs.LEVEL3Code.GDMicInputDisplayObjects1= [];
gdjs.LEVEL3Code.GDMicInputDisplayObjects2= [];
gdjs.LEVEL3Code.GDMountain_9595PlatformObjects1= [];
gdjs.LEVEL3Code.GDMountain_9595PlatformObjects2= [];
gdjs.LEVEL3Code.GDMountainBackgroundObjects1= [];
gdjs.LEVEL3Code.GDMountainBackgroundObjects2= [];
gdjs.LEVEL3Code.GDFallingRockObjects1= [];
gdjs.LEVEL3Code.GDFallingRockObjects2= [];
gdjs.LEVEL3Code.GDInvisibleWallObjects1= [];
gdjs.LEVEL3Code.GDInvisibleWallObjects2= [];
gdjs.LEVEL3Code.GDPlayerObjects1= [];
gdjs.LEVEL3Code.GDPlayerObjects2= [];
gdjs.LEVEL3Code.GDBase_9595Camp_9595GroundObjects1= [];
gdjs.LEVEL3Code.GDBase_9595Camp_9595GroundObjects2= [];
gdjs.LEVEL3Code.GDGoat_9595RObjects1= [];
gdjs.LEVEL3Code.GDGoat_9595RObjects2= [];
gdjs.LEVEL3Code.GDGoat_9595LObjects1= [];
gdjs.LEVEL3Code.GDGoat_9595LObjects2= [];
gdjs.LEVEL3Code.GDBase_9595Camp_9595FireObjects1= [];
gdjs.LEVEL3Code.GDBase_9595Camp_9595FireObjects2= [];
gdjs.LEVEL3Code.GDSnow_9595Tree_95951Objects1= [];
gdjs.LEVEL3Code.GDSnow_9595Tree_95951Objects2= [];
gdjs.LEVEL3Code.GDSnow_9595PileObjects1= [];
gdjs.LEVEL3Code.GDSnow_9595PileObjects2= [];
gdjs.LEVEL3Code.GDSecret_9595TunnelObjects1= [];
gdjs.LEVEL3Code.GDSecret_9595TunnelObjects2= [];
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1= [];
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2= [];
gdjs.LEVEL3Code.GDRock_9595Snow_9595TallObjects1= [];
gdjs.LEVEL3Code.GDRock_9595Snow_9595TallObjects2= [];
gdjs.LEVEL3Code.GDRock_9595Snow_9595SmallObjects1= [];
gdjs.LEVEL3Code.GDRock_9595Snow_9595SmallObjects2= [];
gdjs.LEVEL3Code.GDRock_9595Snow_9595MedObjects1= [];
gdjs.LEVEL3Code.GDRock_9595Snow_9595MedObjects2= [];
gdjs.LEVEL3Code.GDSnow_9595Tree_95952Objects1= [];
gdjs.LEVEL3Code.GDSnow_9595Tree_95952Objects2= [];
gdjs.LEVEL3Code.GDShroomObjects1= [];
gdjs.LEVEL3Code.GDShroomObjects2= [];
gdjs.LEVEL3Code.GDShroom_9595CountObjects1= [];
gdjs.LEVEL3Code.GDShroom_9595CountObjects2= [];
gdjs.LEVEL3Code.GDContinueObjects1= [];
gdjs.LEVEL3Code.GDContinueObjects2= [];
gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1= [];
gdjs.LEVEL3Code.GDAlmost_9595ThereObjects2= [];
gdjs.LEVEL3Code.GDContinue_9595TextObjects1= [];
gdjs.LEVEL3Code.GDContinue_9595TextObjects2= [];
gdjs.LEVEL3Code.GDGalaxyObjects1= [];
gdjs.LEVEL3Code.GDGalaxyObjects2= [];
gdjs.LEVEL3Code.GDCheckpointObjects1= [];
gdjs.LEVEL3Code.GDCheckpointObjects2= [];
gdjs.LEVEL3Code.GDWinner_9595FlagObjects1= [];
gdjs.LEVEL3Code.GDWinner_9595FlagObjects2= [];
gdjs.LEVEL3Code.GDDead_9595Tree_9595LObjects1= [];
gdjs.LEVEL3Code.GDDead_9595Tree_9595LObjects2= [];
gdjs.LEVEL3Code.GDDead_9595Tree_9595RObjects1= [];
gdjs.LEVEL3Code.GDDead_9595Tree_9595RObjects2= [];
gdjs.LEVEL3Code.GDFadeTransitionObjects1= [];
gdjs.LEVEL3Code.GDFadeTransitionObjects2= [];


gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL3Code.GDPlayerObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDFallingRockObjects1Objects = Hashtable.newFrom({"FallingRock": gdjs.LEVEL3Code.GDFallingRockObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL3Code.GDPlayerObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.LEVEL3Code.GDCheckpointObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL3Code.GDPlayerObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDSecret_95959595TunnelObjects1Objects = Hashtable.newFrom({"Secret_Tunnel": gdjs.LEVEL3Code.GDSecret_9595TunnelObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDFallingRockObjects1Objects = Hashtable.newFrom({"FallingRock": gdjs.LEVEL3Code.GDFallingRockObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LEVEL3Code.GDPlayerObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDShroomObjects1Objects = Hashtable.newFrom({"Shroom": gdjs.LEVEL3Code.GDShroomObjects1});
gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.LEVEL3Code.GDContinueObjects1});
gdjs.LEVEL3Code.asyncCallback14875124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LEVEL3Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LEVEL 3", false);
}
gdjs.LEVEL3Code.localVariables.length = 0;
}
gdjs.LEVEL3Code.idToCallbackMap.set(14875124, gdjs.LEVEL3Code.asyncCallback14875124);
gdjs.LEVEL3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LEVEL3Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.LEVEL3Code.asyncCallback14875124(runtimeScene, asyncObjectsList)), 14875124, asyncObjectsList);
}
}

}


};gdjs.LEVEL3Code.eventsList1 = function(runtimeScene) {

};gdjs.LEVEL3Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Moving_Platform"), gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1);

for (gdjs.LEVEL3Code.forEachIndex2 = 0;gdjs.LEVEL3Code.forEachIndex2 < gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length;++gdjs.LEVEL3Code.forEachIndex2) {
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2.length = 0;


gdjs.LEVEL3Code.forEachTemporary2 = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[gdjs.LEVEL3Code.forEachIndex2];
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2.push(gdjs.LEVEL3Code.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2[i].getBehavior("Tween").addObjectPositionXTween2("MoveRight", (gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2[i].getPointX("")) + 200, "linear", 2, false);
}
}
}
}

}


};gdjs.LEVEL3Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16510580);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Almost_There"), gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1);
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.LEVEL3Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Continue_Text"), gdjs.LEVEL3Code.GDContinue_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shroom_Count"), gdjs.LEVEL3Code.GDShroom_9595CountObjects1);
{gdjs.evtsExt__MicrophoneInput__RequestPermission.func(runtimeScene, null);
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinue_9595TextObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawnTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(7);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(200);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(650);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallingRock"), gdjs.LEVEL3Code.GDFallingRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects, gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDFallingRockObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RespawnX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("RespawnY")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.LEVEL3Code.GDCheckpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects, gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDCheckpointObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.LEVEL3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL3Code.GDPlayerObjects1[0].getPointX("")));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.LEVEL3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL3Code.GDPlayerObjects1[0].getPointY("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Secret_Tunnel"), gdjs.LEVEL3Code.GDSecret_9595TunnelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects, gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDSecret_95959595TunnelObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Almost_There"), gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1);
gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.LEVEL3Code.GDContinueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Continue_Text"), gdjs.LEVEL3Code.GDContinue_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("InvisibleWall"), gdjs.LEVEL3Code.GDInvisibleWallObjects1);
gdjs.copyArray(runtimeScene.getObjects("MicInputDisplay"), gdjs.LEVEL3Code.GDMicInputDisplayObjects1);
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Shroom_Count"), gdjs.LEVEL3Code.GDShroom_9595CountObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDMicInputDisplayObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDMicInputDisplayObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDInvisibleWallObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDInvisibleWallObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinueObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinue_9595TextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinueObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinue_9595TextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1[i].setZOrder(999);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinueObjects1[i].setZOrder(999);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinue_9595TextObjects1[i].setZOrder(999);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].setZOrder(999);
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "RockSpawnTimer");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() > 0.15);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL3Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL3Code.GDPlayerObjects1[k] = gdjs.LEVEL3Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL3Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(400 + (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() - 0.15) / 0.85 * 1500);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(100);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallingRock"), gdjs.LEVEL3Code.GDFallingRockObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL3Code.GDFallingRockObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL3Code.GDFallingRockObjects1[i].getY() > -(2900) ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL3Code.GDFallingRockObjects1[k] = gdjs.LEVEL3Code.GDFallingRockObjects1[i];
        ++k;
    }
}
gdjs.LEVEL3Code.GDFallingRockObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDFallingRockObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDFallingRockObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDFallingRockObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RockSpawnTimer") > 5;
if (isConditionTrue_0) {
gdjs.LEVEL3Code.GDFallingRockObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDFallingRockObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 50, "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RockSpawnTimer");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallingRock"), gdjs.LEVEL3Code.GDFallingRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDFallingRockObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDFallingRockObjects1[i].addForce(0, 100 + ((650 - (( gdjs.LEVEL3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL3Code.GDPlayerObjects1[0].getPointY(""))) * 0.12), 1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setX(200);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setY(650);
}
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.LEVEL3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL3Code.GDPlayerObjects1[0].getPointY("")) - 250, "", 0);
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.LEVEL3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL3Code.GDPlayerObjects1[0].getPointY("")) - 250, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() < 0.15);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(1500);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL3Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL3Code.GDPlayerObjects1[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL3Code.GDPlayerObjects1[k] = gdjs.LEVEL3Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL3Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setX(800);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL3Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL3Code.GDPlayerObjects1[i].getX() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL3Code.GDPlayerObjects1[k] = gdjs.LEVEL3Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LEVEL3Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setX(0);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setAnimationFrame(1);
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
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setAnimationFrame(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shroom"), gdjs.LEVEL3Code.GDShroomObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDPlayerObjects1Objects, gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDShroomObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDShroomObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Shroom_Count"), gdjs.LEVEL3Code.GDShroom_9595CountObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroomObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroomObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].getBehavior("Text").setText("Mushrooms: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
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

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.LEVEL3Code.GDContinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LEVEL3Code.mapOfGDgdjs_9546LEVEL3Code_9546GDContinueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Almost_There"), gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1);
/* Reuse gdjs.LEVEL3Code.GDContinueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Continue_Text"), gdjs.LEVEL3Code.GDContinue_9595TextObjects1);
gdjs.copyArray(runtimeScene.getObjects("FadeTransition"), gdjs.LEVEL3Code.GDFadeTransitionObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shroom_Count"), gdjs.LEVEL3Code.GDShroom_9595CountObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinueObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinueObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDContinue_9595TextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDShroom_9595CountObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDFadeTransitionObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDFadeTransitionObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "linear", 0.5, false);
}
}

{ //Subevents
gdjs.LEVEL3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LEVEL3Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.LEVEL3Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.LEVEL3Code.GDPlayerObjects1[0].getPointY("")) > 780);
}
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDPlayerObjects1[i].setPosition(200,650);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LEVEL3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moving_Platform"), gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getBehavior("Tween").hasFinished("MoveRight") ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[k] = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i];
        ++k;
    }
}
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getBehavior("Tween").removeTween("MoveRight");
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveLeft", (gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getPointX("")) - 200, "linear", 2, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moving_Platform"), gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length;i<l;++i) {
    if ( gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getBehavior("Tween").hasFinished("MoveLeft") ) {
        isConditionTrue_0 = true;
        gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[k] = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i];
        ++k;
    }
}
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1 */
{for(var i = 0, len = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getBehavior("Tween").removeTween("MoveLeft");
}
}
{for(var i = 0, len = gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length ;i < len;++i) {
    gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getBehavior("Tween").addObjectPositionXTween2("MoveRight", (gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1[i].getPointX("")) + 200, "linear", 2, false);
}
}
}

}


};

gdjs.LEVEL3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL3Code.GDMicInputDisplayObjects1.length = 0;
gdjs.LEVEL3Code.GDMicInputDisplayObjects2.length = 0;
gdjs.LEVEL3Code.GDMountain_9595PlatformObjects1.length = 0;
gdjs.LEVEL3Code.GDMountain_9595PlatformObjects2.length = 0;
gdjs.LEVEL3Code.GDMountainBackgroundObjects1.length = 0;
gdjs.LEVEL3Code.GDMountainBackgroundObjects2.length = 0;
gdjs.LEVEL3Code.GDFallingRockObjects1.length = 0;
gdjs.LEVEL3Code.GDFallingRockObjects2.length = 0;
gdjs.LEVEL3Code.GDInvisibleWallObjects1.length = 0;
gdjs.LEVEL3Code.GDInvisibleWallObjects2.length = 0;
gdjs.LEVEL3Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL3Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595GroundObjects1.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595GroundObjects2.length = 0;
gdjs.LEVEL3Code.GDGoat_9595RObjects1.length = 0;
gdjs.LEVEL3Code.GDGoat_9595RObjects2.length = 0;
gdjs.LEVEL3Code.GDGoat_9595LObjects1.length = 0;
gdjs.LEVEL3Code.GDGoat_9595LObjects2.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595FireObjects1.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595FireObjects2.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95951Objects1.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95951Objects2.length = 0;
gdjs.LEVEL3Code.GDSnow_9595PileObjects1.length = 0;
gdjs.LEVEL3Code.GDSnow_9595PileObjects2.length = 0;
gdjs.LEVEL3Code.GDSecret_9595TunnelObjects1.length = 0;
gdjs.LEVEL3Code.GDSecret_9595TunnelObjects2.length = 0;
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length = 0;
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595TallObjects1.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595TallObjects2.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595SmallObjects1.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595SmallObjects2.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595MedObjects1.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595MedObjects2.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95952Objects1.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95952Objects2.length = 0;
gdjs.LEVEL3Code.GDShroomObjects1.length = 0;
gdjs.LEVEL3Code.GDShroomObjects2.length = 0;
gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length = 0;
gdjs.LEVEL3Code.GDShroom_9595CountObjects2.length = 0;
gdjs.LEVEL3Code.GDContinueObjects1.length = 0;
gdjs.LEVEL3Code.GDContinueObjects2.length = 0;
gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length = 0;
gdjs.LEVEL3Code.GDAlmost_9595ThereObjects2.length = 0;
gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length = 0;
gdjs.LEVEL3Code.GDContinue_9595TextObjects2.length = 0;
gdjs.LEVEL3Code.GDGalaxyObjects1.length = 0;
gdjs.LEVEL3Code.GDGalaxyObjects2.length = 0;
gdjs.LEVEL3Code.GDCheckpointObjects1.length = 0;
gdjs.LEVEL3Code.GDCheckpointObjects2.length = 0;
gdjs.LEVEL3Code.GDWinner_9595FlagObjects1.length = 0;
gdjs.LEVEL3Code.GDWinner_9595FlagObjects2.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595LObjects1.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595LObjects2.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595RObjects1.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595RObjects2.length = 0;
gdjs.LEVEL3Code.GDFadeTransitionObjects1.length = 0;
gdjs.LEVEL3Code.GDFadeTransitionObjects2.length = 0;

gdjs.LEVEL3Code.eventsList3(runtimeScene);
gdjs.LEVEL3Code.GDMicInputDisplayObjects1.length = 0;
gdjs.LEVEL3Code.GDMicInputDisplayObjects2.length = 0;
gdjs.LEVEL3Code.GDMountain_9595PlatformObjects1.length = 0;
gdjs.LEVEL3Code.GDMountain_9595PlatformObjects2.length = 0;
gdjs.LEVEL3Code.GDMountainBackgroundObjects1.length = 0;
gdjs.LEVEL3Code.GDMountainBackgroundObjects2.length = 0;
gdjs.LEVEL3Code.GDFallingRockObjects1.length = 0;
gdjs.LEVEL3Code.GDFallingRockObjects2.length = 0;
gdjs.LEVEL3Code.GDInvisibleWallObjects1.length = 0;
gdjs.LEVEL3Code.GDInvisibleWallObjects2.length = 0;
gdjs.LEVEL3Code.GDPlayerObjects1.length = 0;
gdjs.LEVEL3Code.GDPlayerObjects2.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595GroundObjects1.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595GroundObjects2.length = 0;
gdjs.LEVEL3Code.GDGoat_9595RObjects1.length = 0;
gdjs.LEVEL3Code.GDGoat_9595RObjects2.length = 0;
gdjs.LEVEL3Code.GDGoat_9595LObjects1.length = 0;
gdjs.LEVEL3Code.GDGoat_9595LObjects2.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595FireObjects1.length = 0;
gdjs.LEVEL3Code.GDBase_9595Camp_9595FireObjects2.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95951Objects1.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95951Objects2.length = 0;
gdjs.LEVEL3Code.GDSnow_9595PileObjects1.length = 0;
gdjs.LEVEL3Code.GDSnow_9595PileObjects2.length = 0;
gdjs.LEVEL3Code.GDSecret_9595TunnelObjects1.length = 0;
gdjs.LEVEL3Code.GDSecret_9595TunnelObjects2.length = 0;
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects1.length = 0;
gdjs.LEVEL3Code.GDMoving_9595PlatformObjects2.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595TallObjects1.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595TallObjects2.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595SmallObjects1.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595SmallObjects2.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595MedObjects1.length = 0;
gdjs.LEVEL3Code.GDRock_9595Snow_9595MedObjects2.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95952Objects1.length = 0;
gdjs.LEVEL3Code.GDSnow_9595Tree_95952Objects2.length = 0;
gdjs.LEVEL3Code.GDShroomObjects1.length = 0;
gdjs.LEVEL3Code.GDShroomObjects2.length = 0;
gdjs.LEVEL3Code.GDShroom_9595CountObjects1.length = 0;
gdjs.LEVEL3Code.GDShroom_9595CountObjects2.length = 0;
gdjs.LEVEL3Code.GDContinueObjects1.length = 0;
gdjs.LEVEL3Code.GDContinueObjects2.length = 0;
gdjs.LEVEL3Code.GDAlmost_9595ThereObjects1.length = 0;
gdjs.LEVEL3Code.GDAlmost_9595ThereObjects2.length = 0;
gdjs.LEVEL3Code.GDContinue_9595TextObjects1.length = 0;
gdjs.LEVEL3Code.GDContinue_9595TextObjects2.length = 0;
gdjs.LEVEL3Code.GDGalaxyObjects1.length = 0;
gdjs.LEVEL3Code.GDGalaxyObjects2.length = 0;
gdjs.LEVEL3Code.GDCheckpointObjects1.length = 0;
gdjs.LEVEL3Code.GDCheckpointObjects2.length = 0;
gdjs.LEVEL3Code.GDWinner_9595FlagObjects1.length = 0;
gdjs.LEVEL3Code.GDWinner_9595FlagObjects2.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595LObjects1.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595LObjects2.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595RObjects1.length = 0;
gdjs.LEVEL3Code.GDDead_9595Tree_9595RObjects2.length = 0;
gdjs.LEVEL3Code.GDFadeTransitionObjects1.length = 0;
gdjs.LEVEL3Code.GDFadeTransitionObjects2.length = 0;


return;

}

gdjs['LEVEL3Code'] = gdjs.LEVEL3Code;


if (typeof gdjs.evtsExt__MicrophoneInput__Volume !== "undefined") {
  gdjs.evtsExt__MicrophoneInput__Volume.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MicrophoneInput__Volume = {};
gdjs.evtsExt__MicrophoneInput__Volume.idToCallbackMap = new Map();


gdjs.evtsExt__MicrophoneInput__Volume.userFunc0xd41e60 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const microphoneInput = gdjs.__microphoneInputExtension
  ? gdjs.__microphoneInputExtension.getInput()
  : null;

eventsFunctionContext.returnValue = microphoneInput ? microphoneInput.getVolume() : 0;
};
gdjs.evtsExt__MicrophoneInput__Volume.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MicrophoneInput__Volume.userFunc0xd41e60(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__MicrophoneInput__Volume.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MicrophoneInput"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MicrophoneInput"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MicrophoneInput__Volume.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__MicrophoneInput__Volume.registeredGdjsCallbacks = [];
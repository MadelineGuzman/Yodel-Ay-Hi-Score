
if (typeof gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded = {};
gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.userFunc0xfd09f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
class MicrophoneInput {
  constructor(options = {}) {
    this.volume = 0;
    this.fftSize = options.fftSize || 256;
    this.smoothingTimeConstant =
      options.smoothingTimeConstant === undefined
        ? 0.8
        : options.smoothingTimeConstant;

    this.audioContext = null;
    this.mediaStream = null;
    this.source = null;
    this.analyser = null;
    this.frequencyData = null;
    this.animationFrameId = null;
    this.isListening = false;
  }

  async requestPermission() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("getUserMedia is not supported in this browser.");
    }

    if (this.isListening) {
      if (this.audioContext && this.audioContext.state === "suspended") {
        await this.audioContext.resume();
      }
      return this.mediaStream;
    }

    this.mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const AudioContextConstructor =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextConstructor) {
      throw new Error("AudioContext is not supported in this browser.");
    }

    this.audioContext = new AudioContextConstructor();
    this.source = this.audioContext.createMediaStreamSource(this.mediaStream);
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = this.fftSize;
    this.analyser.smoothingTimeConstant = this.smoothingTimeConstant;
    this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);

    this.source.connect(this.analyser);
    this.isListening = true;
    this.updateVolume();

    return this.mediaStream;
  }

  updateVolume() {
    if (!this.analyser || !this.frequencyData) {
      this.volume = 0;
      return;
    }

    this.analyser.getByteFrequencyData(this.frequencyData);

    let sum = 0;
    for (let i = 0; i < this.frequencyData.length; i += 1) {
      sum += this.frequencyData[i];
    }

    const average = sum / this.frequencyData.length;
    this.volume = average / 255;

    this.animationFrameId = requestAnimationFrame(() => this.updateVolume());
  }

  getVolume() {
    return this.volume;
  }

  stop() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((track) => track.stop());
    }

    if (this.audioContext) {
      this.audioContext.close();
    }

    this.volume = 0;
    this.audioContext = null;
    this.mediaStream = null;
    this.source = null;
    this.analyser = null;
    this.frequencyData = null;
    this.isListening = false;
  }
}

gdjs.__microphoneInputExtension = gdjs.__microphoneInputExtension || {};
gdjs.__microphoneInputExtension.MicrophoneInput = MicrophoneInput;
gdjs.__microphoneInputExtension.instance =
  gdjs.__microphoneInputExtension.instance || new MicrophoneInput();
gdjs.__microphoneInputExtension.lastError = "";
gdjs.__microphoneInputExtension.getInput = function () {
  if (!gdjs.__microphoneInputExtension.instance) {
    gdjs.__microphoneInputExtension.instance = new MicrophoneInput();
  }
  return gdjs.__microphoneInputExtension.instance;
};
};
gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.userFunc0xfd09f8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__MicrophoneInput__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);


if (typeof gdjs.evtsExt__BetterNumber__NumberConvertor !== "undefined") {
  gdjs.evtsExt__BetterNumber__NumberConvertor.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BetterNumber__NumberConvertor = {};
gdjs.evtsExt__BetterNumber__NumberConvertor.idToCallbackMap = new Map();


gdjs.evtsExt__BetterNumber__NumberConvertor.userFunc0xb07bf8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const input = eventsFunctionContext.getArgument("number");

if (input === undefined || input === null || input === "") {
    eventsFunctionContext.returnValue = "0";
    return;
}

const str = String(input).trim();

let mantissa;
let exponent;

const match = str.match(
    /^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(?:[eE]([+-]?\d+))?$/
);

if (!match) {
    eventsFunctionContext.returnValue = "0";
    return;
}

mantissa = Number(match[1]);
exponent = match[2] ? Number(match[2]) : 0;

if (!Number.isFinite(mantissa) || !Number.isFinite(exponent)) {
    eventsFunctionContext.returnValue = "Infinity";
    return;
}

if (mantissa === 0) {
    eventsFunctionContext.returnValue = "0";
    return;
}

// Normalize mantissa
while (Math.abs(mantissa) >= 10) {
    mantissa /= 10;
    exponent++;
}

while (Math.abs(mantissa) < 1) {
    mantissa *= 10;
    exponent--;
}

const units = [
    [300000000000003, "CePi"],
    [30000000000003, "DePi"],
    [3000000000003, "Pi"],
    [300000000003, "CeNa"],
    [30000000003, "DeNa"],
    [3000000003, "Na"],
    [300000003, "CeMc"],
    [30000003, "DeMc"],
    [3000003, "Mc"],

    [2700003, "NiMi"],
    [2400003, "OtMi"],
    [2100003, "SiMi"],
    [1800003, "SeMi"],
    [1500003, "QiMi"],
    [1200003, "QaMi"],
    [900003, "TrMi"],
    [600003, "DuMi"],
    [300003, "CeMi"],

    [30003, "DeMi"],
    [60003, "VtMi"],
    [90003, "TgMi"],
    [120003, "qgMi"],
    [150003, "QgMi"],
    [180003, "sgMi"],
    [210003, "SgMi"],
    [240003, "OgMi"],
    [270003, "NgMi"],

    [3003, "Mi"],
    [6003, "DMi"],
    [9003, "TMi"],
    [12003, "QdMi"],
    [15003, "QnMi"],
    [18003, "SxMi"],
    [21003, "SpMi"],
    [24003, "OcMi"],
    [27003, "NoMi"],
    [30003, "DeMi"],

    [2703, "Ni"],
    [2403, "Ot"],
    [2103, "Si"],
    [1803, "Se"],
    [1503, "Qi"],
    [1203, "Qa"],
    [903, "Tr"],
    [603, "Du"],
    [303, "Ce"],
    [273, "Ng"],
    [243, "Og"],
    [213, "Sg"],

    [210, "Nosg"],
    [207, "Ocsg"],
    [204, "Spsg"],
    [201, "Sxsg"],
    [198, "Qnsg"],
    [195, "Qdsg"],
    [192, "Tsg"],
    [189, "Dsg"],
    [186, "Usg"],
    [183, "sg"],

    [180, "NoQg"],
    [177, "OcQg"],
    [174, "SpQg"],
    [171, "SxQg"],
    [168, "QnQg"],
    [165, "QdQg"],
    [162, "TQg"],
    [159, "DQg"],
    [156, "UQg"],
    [153, "Qg"],

    [150, "Noqg"],
    [147, "Ocqg"],
    [144, "Spqg"],
    [141, "Sxqg"],
    [138, "Qnqg"],
    [135, "Qdqg"],
    [132, "Tqg"],
    [129, "Dqg"],
    [126, "Uqg"],
    [123, "qg"],

    [120, "NoTg"],
    [117, "OcTg"],
    [114, "SpTg"],
    [111, "SxTg"],
    [108, "QnTg"],
    [105, "QdTg"],
    [102, "TTg"],
    [99, "DTg"],
    [96, "UTg"],
    [93, "Tg"],

    [90, "NoVt"],
    [87, "OcVt"],
    [84, "SpVt"],
    [81, "SxVt"],
    [78, "QnVt"],
    [75, "QdVt"],
    [72, "TVt"],
    [69, "DVt"],
    [66, "UVt"],
    [63, "Vt"],

    [60, "NoDe"],
    [57, "OcDe"],
    [54, "SpDe"],
    [51, "SxDe"],
    [48, "QnDe"],
    [45, "QdDe"],
    [42, "TDe"],
    [39, "DDe"],
    [36, "UDe"],
    [33, "De"],
    [30, "No"],
    [27, "Oc"],
    [24, "Sp"],
    [21, "Sx"],
    [18, "Qn"],
    [15, "Qd"],
    [12, "T"],
    [9, "B"],
    [6, "M"],
    [3, "k"]
];

// Find the appropriate suffix
let selected = null;

for (const unit of units) {
    if (exponent >= unit[0]) {
        selected = unit;
        break;
    }
}

// Smaller than 1000
if (!selected) {
    if (exponent < 3) {
        const result = mantissa * Math.pow(10, exponent);

        eventsFunctionContext.returnValue =
            String(result);

        return;
    }

    eventsFunctionContext.returnValue =
        mantissa + "e" + exponent;

    return;
}

const unitExponent = selected[0];
const suffix = selected[1];

// Calculate the displayed value
const difference = exponent - unitExponent;

let display;

if (difference <= 15) {
    display = mantissa * Math.pow(10, difference);
} else {
    display = mantissa;
}

display = Math.round((display + Number.EPSILON) * 100) / 100;

let output = String(display);

// Remove unnecessary zeros
if (output.includes(".")) {
    output = output.replace(/0+$/, "");
    output = output.replace(/\.$/, "");
}

eventsFunctionContext.returnValue = output + suffix;
};
gdjs.evtsExt__BetterNumber__NumberConvertor.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BetterNumber__NumberConvertor.userFunc0xb07bf8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__BetterNumber__NumberConvertor.func = function(runtimeScene, number, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("BetterNumber"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("BetterNumber"),
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
if (argName === "number") return number;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BetterNumber__NumberConvertor.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__BetterNumber__NumberConvertor.registeredGdjsCallbacks = [];
gdjs.titleCode = {};
gdjs.titleCode.localVariables = [];
gdjs.titleCode.idToCallbackMap = new Map();
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects1= [];
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects2= [];
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects3= [];
gdjs.titleCode.GDconteudoObjects1= [];
gdjs.titleCode.GDconteudoObjects2= [];
gdjs.titleCode.GDconteudoObjects3= [];
gdjs.titleCode.GDBackgroundObjects1= [];
gdjs.titleCode.GDBackgroundObjects2= [];
gdjs.titleCode.GDBackgroundObjects3= [];


gdjs.titleCode.mapOfGDgdjs_9546titleCode_9546GDconteudoObjects3Objects = Hashtable.newFrom({"conteudo": gdjs.titleCode.GDconteudoObjects3});
gdjs.titleCode.eventsList0 = function(runtimeScene) {

};gdjs.titleCode.mapOfGDgdjs_9546titleCode_9546GDSemi_95959595Bar_95959595Seila_95959595O_95959595Nome_95959595delaObjects1Objects = Hashtable.newFrom({"Semi_Bar_Seila_O_Nome_dela": gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects1});
gdjs.titleCode.eventsList1 = function(runtimeScene) {

{


const repeatCount3 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(2));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.titleCode.GDconteudoObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.titleCode.mapOfGDgdjs_9546titleCode_9546GDconteudoObjects3Objects, 30, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.titleCode.GDconteudoObjects3.length ;i < len;++i) {
    gdjs.titleCode.GDconteudoObjects3[i].getBehavior("Text").setText("\"" + runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("name").getAsString() + "\": \"" + runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()).getChild("content").getAsString() + "\"");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(34);
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.titleCode.mapOfGDgdjs_9546titleCode_9546GDSemi_95959595Bar_95959595Seila_95959595O_95959595Nome_95959595delaObjects1Objects, 0, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "");
}
}

}


};gdjs.titleCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.titleCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.titleCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.titleCode.GDBackgroundObjects1[i].setColor("126;211;33");
}
}

{ //Subevents
gdjs.titleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("conteudo"), gdjs.titleCode.GDconteudoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.titleCode.GDconteudoObjects1.length;i<l;++i) {
    if ( gdjs.titleCode.GDconteudoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.titleCode.GDconteudoObjects1[k] = gdjs.titleCode.GDconteudoObjects1[i];
        ++k;
    }
}
gdjs.titleCode.GDconteudoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "game");
}
}

}


};

gdjs.titleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects1.length = 0;
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects2.length = 0;
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects3.length = 0;
gdjs.titleCode.GDconteudoObjects1.length = 0;
gdjs.titleCode.GDconteudoObjects2.length = 0;
gdjs.titleCode.GDconteudoObjects3.length = 0;
gdjs.titleCode.GDBackgroundObjects1.length = 0;
gdjs.titleCode.GDBackgroundObjects2.length = 0;
gdjs.titleCode.GDBackgroundObjects3.length = 0;

gdjs.titleCode.eventsList2(runtimeScene);
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects1.length = 0;
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects2.length = 0;
gdjs.titleCode.GDSemi_9595Bar_9595Seila_9595O_9595Nome_9595delaObjects3.length = 0;
gdjs.titleCode.GDconteudoObjects1.length = 0;
gdjs.titleCode.GDconteudoObjects2.length = 0;
gdjs.titleCode.GDconteudoObjects3.length = 0;
gdjs.titleCode.GDBackgroundObjects1.length = 0;
gdjs.titleCode.GDBackgroundObjects2.length = 0;
gdjs.titleCode.GDBackgroundObjects3.length = 0;


return;

}

gdjs['titleCode'] = gdjs.titleCode;

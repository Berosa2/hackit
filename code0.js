gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.idToCallbackMap = new Map();
gdjs.gameCode.GDcmd_9595iconObjects1= [];
gdjs.gameCode.GDcmd_9595iconObjects2= [];
gdjs.gameCode.GDcmd_9595iconObjects3= [];
gdjs.gameCode.GDcmd_9595iconObjects4= [];
gdjs.gameCode.GDcmd_9595iconObjects5= [];
gdjs.gameCode.GDOutputObjects1= [];
gdjs.gameCode.GDOutputObjects2= [];
gdjs.gameCode.GDOutputObjects3= [];
gdjs.gameCode.GDOutputObjects4= [];
gdjs.gameCode.GDOutputObjects5= [];
gdjs.gameCode.GDInputObjects1= [];
gdjs.gameCode.GDInputObjects2= [];
gdjs.gameCode.GDInputObjects3= [];
gdjs.gameCode.GDInputObjects4= [];
gdjs.gameCode.GDInputObjects5= [];
gdjs.gameCode.GDSized_9595cmdObjects1= [];
gdjs.gameCode.GDSized_9595cmdObjects2= [];
gdjs.gameCode.GDSized_9595cmdObjects3= [];
gdjs.gameCode.GDSized_9595cmdObjects4= [];
gdjs.gameCode.GDSized_9595cmdObjects5= [];
gdjs.gameCode.GDclose_9595terminalObjects1= [];
gdjs.gameCode.GDclose_9595terminalObjects2= [];
gdjs.gameCode.GDclose_9595terminalObjects3= [];
gdjs.gameCode.GDclose_9595terminalObjects4= [];
gdjs.gameCode.GDclose_9595terminalObjects5= [];
gdjs.gameCode.GDNotifica_95231_95245esObjects1= [];
gdjs.gameCode.GDNotifica_95231_95245esObjects2= [];
gdjs.gameCode.GDNotifica_95231_95245esObjects3= [];
gdjs.gameCode.GDNotifica_95231_95245esObjects4= [];
gdjs.gameCode.GDNotifica_95231_95245esObjects5= [];
gdjs.gameCode.GDBackgroundObjects1= [];
gdjs.gameCode.GDBackgroundObjects2= [];
gdjs.gameCode.GDBackgroundObjects3= [];
gdjs.gameCode.GDBackgroundObjects4= [];
gdjs.gameCode.GDBackgroundObjects5= [];


gdjs.gameCode.asyncCallback11671076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Input"), gdjs.gameCode.GDInputObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(0).setString((( gdjs.gameCode.GDInputObjects2.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects2[0].getBehavior("Text").getText()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString((( gdjs.gameCode.GDInputObjects2.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects2[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.gameCode.GDInputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDInputObjects2[i].getBehavior("Text").setText("");
}
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11671076, gdjs.gameCode.asyncCallback11671076);
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDInputObjects1) asyncObjectsList.addObject("Input", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.gameCode.asyncCallback11671076(runtimeScene, asyncObjectsList)), 11671076, asyncObjectsList);
}
}

}


};gdjs.gameCode.asyncCallback11192204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("mine start");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11192204, gdjs.gameCode.asyncCallback11192204);
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback11192204(runtimeScene, asyncObjectsList)), 11192204, asyncObjectsList);
}
}

}


};gdjs.gameCode.asyncCallback11193660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("mine start");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11193660, gdjs.gameCode.asyncCallback11193660);
gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback11193660(runtimeScene, asyncObjectsList)), 11193660, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine").getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 9, 99)).getChild("value").getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11191116);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.gameCode.GDOutputObjects3, gdjs.gameCode.GDOutputObjects4);

{for(var i = 0, len = gdjs.gameCode.GDOutputObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects4[i].getBehavior("Text").setText("Comprado " + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 11, 99));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine").getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 11, 99)).getChild("value").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine").getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 11, 99)).getChild("perks").getChild("points").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine").getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 11, 99)).getChild("perks").getChild("sec").getAsNumber());
}

{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine").getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 9, 99)).getChild("value").getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11193252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDOutputObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").setText("Saldo Insuficiente\n" + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine").getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 9, 99)).getChild("value").getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}

{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "mine_coin", runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber(), null);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}

}


};gdjs.gameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "mine store");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects3);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").setText("PM2000 Store\nPontos: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "\n\n" + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("mine")));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).startsWith("mine --buy "));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects3);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").setText("Comprando " + gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 11, 99));
}
}

{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "mine stop");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "mine start");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText("    ⬜⬜⬜      POINTS MAKER 2000\n⬜             ⬜  Making: " + gdjs.evtsExt__BetterNumber__NumberConvertor.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), null) + " / s\n⬜🟧🟨          Total: " + gdjs.evtsExt__BetterNumber__NumberConvertor.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), null) + "\n⬜             ⬜  1 Segundo é " + runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "\n    ⬜⬜⬜\n\n\n⚠️ Warning ⚠️\nAnyone if they find out your password can get your POINTS ⚠️");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}

{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9866916);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").getText() + ("\nName: "));
}
}
}

}


};gdjs.gameCode.asyncCallback9825892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Input"), gdjs.gameCode.GDInputObjects3);

gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects3);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").setText(gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").getText() + ((( gdjs.gameCode.GDInputObjects3.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects3[0].getBehavior("Text").getText())));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("hub-introduction-2");
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setString((( gdjs.gameCode.GDInputObjects3.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects3[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.gameCode.GDInputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDInputObjects3[i].getBehavior("Text").setText("");
}
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(9825892, gdjs.gameCode.asyncCallback9825892);
gdjs.gameCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDInputObjects2) asyncObjectsList.addObject("Input", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.gameCode.asyncCallback9825892(runtimeScene, asyncObjectsList)), 9825892, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.gameCode.GDInputObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(9).getAsString());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getChild(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString()).getAsString() == (( gdjs.gameCode.GDInputObjects3.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects3[0].getBehavior("Text").getText()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDInputObjects3 */
/* Reuse gdjs.gameCode.GDOutputObjects3 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("hub-main");
}
{for(var i = 0, len = gdjs.gameCode.GDInputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDInputObjects3[i].getBehavior("Text").setText("");
}
}
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").setText("Bem Vindo ao Sistemas HackIT!\n\nCommandos:\n1. jogos\n2. admin\n3. pontos\n4. debug\n5. sair");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setString(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString());
}
}

}


};gdjs.gameCode.asyncCallback10772612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Input"), gdjs.gameCode.GDInputObjects3);

gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects3);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").setText(gdjs.gameCode.GDOutputObjects3[i].getBehavior("Text").getText() + ((( gdjs.gameCode.GDInputObjects3.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects3[0].getBehavior("Text").getText())));
}
}

{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(10772612, gdjs.gameCode.asyncCallback10772612);
gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDInputObjects2) asyncObjectsList.addObject("Input", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.gameCode.asyncCallback10772612(runtimeScene, asyncObjectsList)), 10772612, asyncObjectsList);
}
}

}


};gdjs.gameCode.asyncCallback11829972 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Output"), gdjs.gameCode.GDOutputObjects4);

{for(var i = 0, len = gdjs.gameCode.GDOutputObjects4.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects4[i].getBehavior("Text").setText("Sites de Jogo (No Servidor Catalogado)\n\n" + runtimeScene.getScene().getVariables().getFromIndex(12).getAsString());
}
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11829972, gdjs.gameCode.asyncCallback11829972);
gdjs.gameCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
for (const obj of gdjs.gameCode.GDOutputObjects2) asyncObjectsList.addObject("Output", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://raw.githubusercontent.com/Berosa2/hackit/refs/heads/main/api/hub/content/education/education-links.txt", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(12), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.gameCode.asyncCallback11829972(runtimeScene, asyncObjectsList)), 11829972, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDInputObjects2, gdjs.gameCode.GDInputObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDInputObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDInputObjects3[i].getBehavior("Text").getText() == "jogos" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDInputObjects3[k] = gdjs.gameCode.GDInputObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDInputObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.gameCode.GDInputObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDInputObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDInputObjects2[i].getBehavior("Text").getText() == "sair" ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDInputObjects2[k] = gdjs.gameCode.GDInputObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDInputObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
}

}


};gdjs.gameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11595460);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").getText() + ("\nPasswords: "));
}
}
}

}


};gdjs.gameCode.asyncCallback11198436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11198436, gdjs.gameCode.asyncCallback11198436);
gdjs.gameCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.evtTools.common.toNumber(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 5, 999))), (runtimeScene) => (gdjs.gameCode.asyncCallback11198436(runtimeScene, asyncObjectsList)), 11198436, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList14 = function(runtimeScene) {

{


gdjs.gameCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "help");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("help .");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "hub");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("hub-introduction-1");
}
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText("Autenticate to acess the hub:\nEnter Your Name and Password.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "hub-introduction-1");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.gameCode.GDInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "hub-introduction-1");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDInputObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDInputObjects2[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDInputObjects2[k] = gdjs.gameCode.GDInputObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDInputObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10305276);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.gameCode.GDInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "hub-introduction-2");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDInputObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDInputObjects2[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDInputObjects2[k] = gdjs.gameCode.GDInputObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDInputObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10741812);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.gameCode.GDInputObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "hub-main");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDInputObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDInputObjects2[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDInputObjects2[k] = gdjs.gameCode.GDInputObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDInputObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11788972);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.gameCode.GDInputObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").getText() + ((( gdjs.gameCode.GDInputObjects2.length === 0 ) ? "" :gdjs.gameCode.GDInputObjects2[0].getBehavior("Text").getText())));
}
}

{ //Subevents
gdjs.gameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "hub-introduction-2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).startsWith("wait "));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11865676);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "notification-clear");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notificações"), gdjs.gameCode.GDNotifica_95231_95245esObjects2);
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText("Notifications Cleared");
}
}
{for(var i = 0, len = gdjs.gameCode.GDNotifica_95231_95245esObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDNotifica_95231_95245esObjects2[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()).startsWith("help "));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), 5, 99)).getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects1[i].getBehavior("Text").setText("HackIT v0.1\n\n⚠️ Alerta ⚠️\nEssa Versão e uma versão Beta, pode conter bugs!\nSeu Save pode Coromper, TOME CUIDADO ao executar comandos da Comunidade.\n\nO Multiplayer não esta disponivel, junto com os saves. Em breve sera adicionado eles.\n\nexecute \"help\" para ver todos os commandos do sistema");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


};gdjs.gameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.gameCode.asyncCallback11207404 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11207404, gdjs.gameCode.asyncCallback11207404);
gdjs.gameCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.gameCode.asyncCallback11207404(runtimeScene, asyncObjectsList)), 11207404, asyncObjectsList);
}
}

}


};gdjs.gameCode.asyncCallback11206812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.gameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects2);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(9).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(8));
}
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects2[i].getBehavior("Text").setText(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(9)));
}
}

{ //Subevents
gdjs.gameCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.gameCode.localVariables.length = 0;
}
gdjs.gameCode.idToCallbackMap.set(11206812, gdjs.gameCode.asyncCallback11206812);
gdjs.gameCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.gameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), 4, 999999), "{}", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(9), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.gameCode.asyncCallback11206812(runtimeScene, asyncObjectsList)), 11206812, asyncObjectsList);
}
}

}


};gdjs.gameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.gameCode.GDInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sized_cmd"), gdjs.gameCode.GDSized_9595cmdObjects1);
gdjs.copyArray(runtimeScene.getObjects("close_terminal"), gdjs.gameCode.GDclose_9595terminalObjects1);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects1[i].setPosition((( gdjs.gameCode.GDSized_9595cmdObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDSized_9595cmdObjects1[0].getPointX("")) + 30,(( gdjs.gameCode.GDSized_9595cmdObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDSized_9595cmdObjects1[0].getPointY("")) + 30);
}
}
{for(var i = 0, len = gdjs.gameCode.GDInputObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDInputObjects1[i].setPosition((( gdjs.gameCode.GDOutputObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDOutputObjects1[0].getX()),(( gdjs.gameCode.GDOutputObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDOutputObjects1[0].getY()) + (( gdjs.gameCode.GDOutputObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDOutputObjects1[0].getHeight()) - 3);
}
}
{for(var i = 0, len = gdjs.gameCode.GDclose_9595terminalObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDclose_9595terminalObjects1[i].setPosition((( gdjs.gameCode.GDOutputObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDOutputObjects1[0].getX()) + (( gdjs.gameCode.GDOutputObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDOutputObjects1[0].getWidth()),(( gdjs.gameCode.GDOutputObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDOutputObjects1[0].getY()) - 30);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Input"), gdjs.gameCode.GDInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDInputObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDInputObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDInputObjects1[k] = gdjs.gameCode.GDInputObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDInputObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11187412);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "hub-introduction-1");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "hub-introduction-2");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "hub-main");
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.gameCode.eventsList14(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("cmd_icon"), gdjs.gameCode.GDcmd_9595iconObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDcmd_9595iconObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDcmd_9595iconObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDcmd_9595iconObjects1[k] = gdjs.gameCode.GDcmd_9595iconObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDcmd_9595iconObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "CMD");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("close_terminal"), gdjs.gameCode.GDclose_9595terminalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDclose_9595terminalObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDclose_9595terminalObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDclose_9595terminalObjects1[k] = gdjs.gameCode.GDclose_9595terminalObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDclose_9595terminalObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "CMD");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()).startsWith("notification "));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12293460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Notificações"), gdjs.gameCode.GDNotifica_95231_95245esObjects1);
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll("[\"" + gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), " ", "\",\""), "|", " ") + "\"]", "{points}", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()), "{points-p-s}", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()), "{user.name}", runtimeScene.getScene().getVariables().getFromIndex(13).getAsString()), "{version}", "alpha 0.0.1"), "{tempVar}", runtimeScene.getScene().getVariables().getFromIndex(9).getAsString()), "{time}", gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"))), "{tempVar2}", runtimeScene.getScene().getVariables().getFromIndex(12).getAsString()), "{server.link}", "https://raw.githubusercontent.com/Berosa2/hackit/refs/heads/main/"), runtimeScene.getScene().getVariables().getFromIndex(10));
}
{for(var i = 0, len = gdjs.gameCode.GDNotifica_95231_95245esObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDNotifica_95231_95245esObjects1[i].getBehavior("Text").setText(gdjs.gameCode.GDNotifica_95231_95245esObjects1[i].getBehavior("Text").getText() + ("\n" + runtimeScene.getScene().getVariables().getFromIndex(10).getChild(1).getAsString() + " - " + runtimeScene.getScene().getVariables().getFromIndex(10).getChild(2).getAsString()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}

{ //Subevents
gdjs.gameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()).startsWith("echo "));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects1[i].getBehavior("Text").setText(gdjs.gameCode.GDOutputObjects1[i].getBehavior("Text").getText() + (gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.strReplaceAll(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), 5, 99999), "{points}", runtimeScene.getScene().getVariables().getFromIndex(2).getAsString()), "{points-p-s}", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString()), "{user.name}", runtimeScene.getScene().getVariables().getFromIndex(13).getAsString()), "{version}", "alpha 0.0.1"), "{tempVar}", runtimeScene.getScene().getVariables().getFromIndex(9).getAsString()), "{time}", gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "hour"))), "{tempVar2}", runtimeScene.getScene().getVariables().getFromIndex(12).getAsString()), "{server.link}", "https://raw.githubusercontent.com/Berosa2/hackit/refs/heads/main/") + "\n"));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "clear");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.gameCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.gameCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDOutputObjects1[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cnt");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((runtimeScene.getScene().getVariables().getFromIndex(1).getAsString()).startsWith("exe "));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11206660);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(8)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(11).getAsString() == "cnt");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(0).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(0).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("cexe");
}
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(8), 0);
}
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDcmd_9595iconObjects1.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects2.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects3.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects4.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects5.length = 0;
gdjs.gameCode.GDOutputObjects1.length = 0;
gdjs.gameCode.GDOutputObjects2.length = 0;
gdjs.gameCode.GDOutputObjects3.length = 0;
gdjs.gameCode.GDOutputObjects4.length = 0;
gdjs.gameCode.GDOutputObjects5.length = 0;
gdjs.gameCode.GDInputObjects1.length = 0;
gdjs.gameCode.GDInputObjects2.length = 0;
gdjs.gameCode.GDInputObjects3.length = 0;
gdjs.gameCode.GDInputObjects4.length = 0;
gdjs.gameCode.GDInputObjects5.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects1.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects2.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects3.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects4.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects5.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects1.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects2.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects3.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects4.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects5.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects1.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects2.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects3.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects4.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects5.length = 0;
gdjs.gameCode.GDBackgroundObjects1.length = 0;
gdjs.gameCode.GDBackgroundObjects2.length = 0;
gdjs.gameCode.GDBackgroundObjects3.length = 0;
gdjs.gameCode.GDBackgroundObjects4.length = 0;
gdjs.gameCode.GDBackgroundObjects5.length = 0;

gdjs.gameCode.eventsList18(runtimeScene);
gdjs.gameCode.GDcmd_9595iconObjects1.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects2.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects3.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects4.length = 0;
gdjs.gameCode.GDcmd_9595iconObjects5.length = 0;
gdjs.gameCode.GDOutputObjects1.length = 0;
gdjs.gameCode.GDOutputObjects2.length = 0;
gdjs.gameCode.GDOutputObjects3.length = 0;
gdjs.gameCode.GDOutputObjects4.length = 0;
gdjs.gameCode.GDOutputObjects5.length = 0;
gdjs.gameCode.GDInputObjects1.length = 0;
gdjs.gameCode.GDInputObjects2.length = 0;
gdjs.gameCode.GDInputObjects3.length = 0;
gdjs.gameCode.GDInputObjects4.length = 0;
gdjs.gameCode.GDInputObjects5.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects1.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects2.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects3.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects4.length = 0;
gdjs.gameCode.GDSized_9595cmdObjects5.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects1.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects2.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects3.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects4.length = 0;
gdjs.gameCode.GDclose_9595terminalObjects5.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects1.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects2.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects3.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects4.length = 0;
gdjs.gameCode.GDNotifica_95231_95245esObjects5.length = 0;
gdjs.gameCode.GDBackgroundObjects1.length = 0;
gdjs.gameCode.GDBackgroundObjects2.length = 0;
gdjs.gameCode.GDBackgroundObjects3.length = 0;
gdjs.gameCode.GDBackgroundObjects4.length = 0;
gdjs.gameCode.GDBackgroundObjects5.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;

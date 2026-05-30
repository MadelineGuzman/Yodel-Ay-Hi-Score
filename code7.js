gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDCreditsTitleObjects1= [];
gdjs.CreditsCode.GDCreditsTitleObjects2= [];
gdjs.CreditsCode.GDCreditsTitleObjects3= [];
gdjs.CreditsCode.GDCreditsContentObjects1= [];
gdjs.CreditsCode.GDCreditsContentObjects2= [];
gdjs.CreditsCode.GDCreditsContentObjects3= [];
gdjs.CreditsCode.GDBackButtonObjects1= [];
gdjs.CreditsCode.GDBackButtonObjects2= [];
gdjs.CreditsCode.GDBackButtonObjects3= [];
gdjs.CreditsCode.GDCreditsBodyObjects1= [];
gdjs.CreditsCode.GDCreditsBodyObjects2= [];
gdjs.CreditsCode.GDCreditsBodyObjects3= [];
gdjs.CreditsCode.GDPageLabelObjects1= [];
gdjs.CreditsCode.GDPageLabelObjects2= [];
gdjs.CreditsCode.GDPageLabelObjects3= [];
gdjs.CreditsCode.GDPrevButtonObjects1= [];
gdjs.CreditsCode.GDPrevButtonObjects2= [];
gdjs.CreditsCode.GDPrevButtonObjects3= [];
gdjs.CreditsCode.GDNextButtonObjects1= [];
gdjs.CreditsCode.GDNextButtonObjects2= [];
gdjs.CreditsCode.GDNextButtonObjects3= [];
gdjs.CreditsCode.GDFadeTransitionObjects1= [];
gdjs.CreditsCode.GDFadeTransitionObjects2= [];
gdjs.CreditsCode.GDFadeTransitionObjects3= [];
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects1= [];
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects2= [];
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects3= [];
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects1= [];
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects2= [];
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects3= [];
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects1= [];
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects2= [];
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects3= [];
gdjs.CreditsCode.GDMicIconObjects1= [];
gdjs.CreditsCode.GDMicIconObjects2= [];
gdjs.CreditsCode.GDMicIconObjects3= [];
gdjs.CreditsCode.GDMicToggleObjects1= [];
gdjs.CreditsCode.GDMicToggleObjects2= [];
gdjs.CreditsCode.GDMicToggleObjects3= [];


gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.CreditsCode.GDBackButtonObjects1});
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Yodel-Ay-Hi-Score" + gdjs.evtTools.string.newLine() + "Created by Syzygy Gaming" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Built with:" + gdjs.evtTools.string.newLine() + "GDevelop" + gdjs.evtTools.string.newLine() + "Web Audio API" + gdjs.evtTools.string.newLine() + "REAPER" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Visual assets:" + gdjs.evtTools.string.newLine() + "Selected environment, platformer, sign," + gdjs.evtTools.string.newLine() + "UI, and decorative assets by Kenney.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 1 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Includes assets from:" + gdjs.evtTools.string.newLine() + "Foliage Pack" + gdjs.evtTools.string.newLine() + "Pixel Platformer" + gdjs.evtTools.string.newLine() + "Sokoban" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "https://www.kenney.nl" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Attribution not required, but appreciated.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 2 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Original visual assets:" + gdjs.evtTools.string.newLine() + "Background art, UI icons, and selected" + gdjs.evtTools.string.newLine() + "custom visual assets created by" + gdjs.evtTools.string.newLine() + "Syzygy Gaming with assistance from" + gdjs.evtTools.string.newLine() + "ChatGPT/OpenAI." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Edited and integrated by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Audio:" + gdjs.evtTools.string.newLine() + "Title, Level 1, and Level 2 ambience" + gdjs.evtTools.string.newLine() + "based on \"swissbalcony.wav\" by Zozzy." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/59723/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 3 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("UFO takeoff sound:" + gdjs.evtTools.string.newLine() + "Based on \"Trill Whistle.wav\" by dland." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/74388/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Temporary yodel/fall vocal sound:" + gdjs.evtTools.string.newLine() + "Based on \"07700 male falling" + gdjs.evtTools.string.newLine() + "yodelling voice.wav\" by Robinhood76." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/183180/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons Attribution" + gdjs.evtTools.string.newLine() + "NonCommercial 4.0" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming." + gdjs.evtTools.string.newLine() + "This sound is temporary and will be replaced.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 4 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects1[i].getBehavior("Text").setText("Additional audio editing:" + gdjs.evtTools.string.newLine() + "Syzygy Gaming" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "AI assistance:" + gdjs.evtTools.string.newLine() + "ChatGPT/OpenAI was used for coding" + gdjs.evtTools.string.newLine() + "assistance, troubleshooting, and selected" + gdjs.evtTools.string.newLine() + "AI-assisted visual asset generation." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Game design, level design, creative" + gdjs.evtTools.string.newLine() + "direction, implementation decisions," + gdjs.evtTools.string.newLine() + "and final assembly by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Thanks for playing!");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects1[i].getBehavior("Text").setText("Page 5 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


gdjs.CreditsCode.eventsList0(runtimeScene);
}


};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDNextButtonObjects1Objects = Hashtable.newFrom({"NextButton": gdjs.CreditsCode.GDNextButtonObjects1});
gdjs.CreditsCode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDNextButtonObjects1, gdjs.CreditsCode.GDNextButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Yodel-Ay-Hi-Score" + gdjs.evtTools.string.newLine() + "Created by Syzygy Gaming" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Built with:" + gdjs.evtTools.string.newLine() + "GDevelop" + gdjs.evtTools.string.newLine() + "Web Audio API" + gdjs.evtTools.string.newLine() + "REAPER" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Visual assets:" + gdjs.evtTools.string.newLine() + "Selected environment, platformer, sign," + gdjs.evtTools.string.newLine() + "UI, and decorative assets by Kenney.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 1 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDNextButtonObjects1, gdjs.CreditsCode.GDNextButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Includes assets from:" + gdjs.evtTools.string.newLine() + "Foliage Pack" + gdjs.evtTools.string.newLine() + "Pixel Platformer" + gdjs.evtTools.string.newLine() + "Sokoban" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "https://www.kenney.nl" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Attribution not required, but appreciated.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 2 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDNextButtonObjects1, gdjs.CreditsCode.GDNextButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Original visual assets:" + gdjs.evtTools.string.newLine() + "Background art, UI icons, and selected" + gdjs.evtTools.string.newLine() + "custom visual assets created by" + gdjs.evtTools.string.newLine() + "Syzygy Gaming with assistance from" + gdjs.evtTools.string.newLine() + "ChatGPT/OpenAI." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Edited and integrated by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Audio:" + gdjs.evtTools.string.newLine() + "Title, Level 1, and Level 2 ambience" + gdjs.evtTools.string.newLine() + "based on \"swissbalcony.wav\" by Zozzy." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/59723/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 3 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDNextButtonObjects1, gdjs.CreditsCode.GDNextButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects2);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("UFO takeoff sound:" + gdjs.evtTools.string.newLine() + "Based on \"Trill Whistle.wav\" by dland." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/74388/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Temporary yodel/fall vocal sound:" + gdjs.evtTools.string.newLine() + "Based on \"07700 male falling" + gdjs.evtTools.string.newLine() + "yodelling voice.wav\" by Robinhood76." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/183180/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons Attribution" + gdjs.evtTools.string.newLine() + "NonCommercial 4.0" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming." + gdjs.evtTools.string.newLine() + "This sound is temporary and will be replaced.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 4 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects1);
/* Reuse gdjs.CreditsCode.GDNextButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects1[i].getBehavior("Text").setText("Additional audio editing:" + gdjs.evtTools.string.newLine() + "Syzygy Gaming" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "AI assistance:" + gdjs.evtTools.string.newLine() + "ChatGPT/OpenAI was used for coding" + gdjs.evtTools.string.newLine() + "assistance, troubleshooting, and selected" + gdjs.evtTools.string.newLine() + "AI-assisted visual asset generation." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Game design, level design, creative" + gdjs.evtTools.string.newLine() + "direction, implementation decisions," + gdjs.evtTools.string.newLine() + "and final assembly by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Thanks for playing!");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects1[i].getBehavior("Text").setText("Page 5 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.CreditsCode.eventsList3 = function(runtimeScene) {

{


gdjs.CreditsCode.eventsList2(runtimeScene);
}


};gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDPrevButtonObjects1Objects = Hashtable.newFrom({"PrevButton": gdjs.CreditsCode.GDPrevButtonObjects1});
gdjs.CreditsCode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDPrevButtonObjects1, gdjs.CreditsCode.GDPrevButtonObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Yodel-Ay-Hi-Score" + gdjs.evtTools.string.newLine() + "Created by Syzygy Gaming" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Built with:" + gdjs.evtTools.string.newLine() + "GDevelop" + gdjs.evtTools.string.newLine() + "Web Audio API" + gdjs.evtTools.string.newLine() + "REAPER" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Visual assets:" + gdjs.evtTools.string.newLine() + "Selected environment, platformer, sign," + gdjs.evtTools.string.newLine() + "UI, and decorative assets by Kenney.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 1 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDPrevButtonObjects1, gdjs.CreditsCode.GDPrevButtonObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Includes assets from:" + gdjs.evtTools.string.newLine() + "Foliage Pack" + gdjs.evtTools.string.newLine() + "Pixel Platformer" + gdjs.evtTools.string.newLine() + "Sokoban" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "https://www.kenney.nl" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Attribution not required, but appreciated.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 2 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDPrevButtonObjects1, gdjs.CreditsCode.GDPrevButtonObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("Original visual assets:" + gdjs.evtTools.string.newLine() + "Background art, UI icons, and selected" + gdjs.evtTools.string.newLine() + "custom visual assets created by" + gdjs.evtTools.string.newLine() + "Syzygy Gaming with assistance from" + gdjs.evtTools.string.newLine() + "ChatGPT/OpenAI." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Edited and integrated by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Audio:" + gdjs.evtTools.string.newLine() + "Title, Level 1, and Level 2 ambience" + gdjs.evtTools.string.newLine() + "based on \"swissbalcony.wav\" by Zozzy." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/59723/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 3 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects2);
gdjs.copyArray(gdjs.CreditsCode.GDPrevButtonObjects1, gdjs.CreditsCode.GDPrevButtonObjects2);

{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects2[i].getBehavior("Text").setText("UFO takeoff sound:" + gdjs.evtTools.string.newLine() + "Based on \"Trill Whistle.wav\" by dland." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/74388/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons CC0 1.0 Universal" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Temporary yodel/fall vocal sound:" + gdjs.evtTools.string.newLine() + "Based on \"07700 male falling" + gdjs.evtTools.string.newLine() + "yodelling voice.wav\" by Robinhood76." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Source:" + gdjs.evtTools.string.newLine() + "https://freesound.org/s/183180/" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "License:" + gdjs.evtTools.string.newLine() + "Creative Commons Attribution" + gdjs.evtTools.string.newLine() + "NonCommercial 4.0" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Modified in REAPER by Syzygy Gaming." + gdjs.evtTools.string.newLine() + "This sound is temporary and will be replaced.");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects2[i].getBehavior("Text").setText("Page 4 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CreditsBody"), gdjs.CreditsCode.GDCreditsBodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PageLabel"), gdjs.CreditsCode.GDPageLabelObjects1);
/* Reuse gdjs.CreditsCode.GDPrevButtonObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDCreditsBodyObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCreditsBodyObjects1[i].getBehavior("Text").setText("Additional audio editing:" + gdjs.evtTools.string.newLine() + "Syzygy Gaming" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "AI assistance:" + gdjs.evtTools.string.newLine() + "ChatGPT/OpenAI was used for coding" + gdjs.evtTools.string.newLine() + "assistance, troubleshooting, and selected" + gdjs.evtTools.string.newLine() + "AI-assisted visual asset generation." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Game design, level design, creative" + gdjs.evtTools.string.newLine() + "direction, implementation decisions," + gdjs.evtTools.string.newLine() + "and final assembly by Syzygy Gaming." + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Thanks for playing!");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPageLabelObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPageLabelObjects1[i].getBehavior("Text").setText("Page 5 / 5");
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDPrevButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDPrevButtonObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDNextButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNextButtonObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.CreditsCode.eventsList5 = function(runtimeScene) {

{


gdjs.CreditsCode.eventsList4(runtimeScene);
}


};gdjs.CreditsCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.CreditsCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17354356);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}

{ //Subevents
gdjs.CreditsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NextButton"), gdjs.CreditsCode.GDNextButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDNextButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 5);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}

{ //Subevents
gdjs.CreditsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PrevButton"), gdjs.CreditsCode.GDPrevButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_9546CreditsCode_9546GDPrevButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() > 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}

{ //Subevents
gdjs.CreditsCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCreditsTitleObjects1.length = 0;
gdjs.CreditsCode.GDCreditsTitleObjects2.length = 0;
gdjs.CreditsCode.GDCreditsTitleObjects3.length = 0;
gdjs.CreditsCode.GDCreditsContentObjects1.length = 0;
gdjs.CreditsCode.GDCreditsContentObjects2.length = 0;
gdjs.CreditsCode.GDCreditsContentObjects3.length = 0;
gdjs.CreditsCode.GDBackButtonObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonObjects3.length = 0;
gdjs.CreditsCode.GDCreditsBodyObjects1.length = 0;
gdjs.CreditsCode.GDCreditsBodyObjects2.length = 0;
gdjs.CreditsCode.GDCreditsBodyObjects3.length = 0;
gdjs.CreditsCode.GDPageLabelObjects1.length = 0;
gdjs.CreditsCode.GDPageLabelObjects2.length = 0;
gdjs.CreditsCode.GDPageLabelObjects3.length = 0;
gdjs.CreditsCode.GDPrevButtonObjects1.length = 0;
gdjs.CreditsCode.GDPrevButtonObjects2.length = 0;
gdjs.CreditsCode.GDPrevButtonObjects3.length = 0;
gdjs.CreditsCode.GDNextButtonObjects1.length = 0;
gdjs.CreditsCode.GDNextButtonObjects2.length = 0;
gdjs.CreditsCode.GDNextButtonObjects3.length = 0;
gdjs.CreditsCode.GDFadeTransitionObjects1.length = 0;
gdjs.CreditsCode.GDFadeTransitionObjects2.length = 0;
gdjs.CreditsCode.GDFadeTransitionObjects3.length = 0;
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects3.length = 0;
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects3.length = 0;
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects3.length = 0;
gdjs.CreditsCode.GDMicIconObjects1.length = 0;
gdjs.CreditsCode.GDMicIconObjects2.length = 0;
gdjs.CreditsCode.GDMicIconObjects3.length = 0;
gdjs.CreditsCode.GDMicToggleObjects1.length = 0;
gdjs.CreditsCode.GDMicToggleObjects2.length = 0;
gdjs.CreditsCode.GDMicToggleObjects3.length = 0;

gdjs.CreditsCode.eventsList6(runtimeScene);
gdjs.CreditsCode.GDCreditsTitleObjects1.length = 0;
gdjs.CreditsCode.GDCreditsTitleObjects2.length = 0;
gdjs.CreditsCode.GDCreditsTitleObjects3.length = 0;
gdjs.CreditsCode.GDCreditsContentObjects1.length = 0;
gdjs.CreditsCode.GDCreditsContentObjects2.length = 0;
gdjs.CreditsCode.GDCreditsContentObjects3.length = 0;
gdjs.CreditsCode.GDBackButtonObjects1.length = 0;
gdjs.CreditsCode.GDBackButtonObjects2.length = 0;
gdjs.CreditsCode.GDBackButtonObjects3.length = 0;
gdjs.CreditsCode.GDCreditsBodyObjects1.length = 0;
gdjs.CreditsCode.GDCreditsBodyObjects2.length = 0;
gdjs.CreditsCode.GDCreditsBodyObjects3.length = 0;
gdjs.CreditsCode.GDPageLabelObjects1.length = 0;
gdjs.CreditsCode.GDPageLabelObjects2.length = 0;
gdjs.CreditsCode.GDPageLabelObjects3.length = 0;
gdjs.CreditsCode.GDPrevButtonObjects1.length = 0;
gdjs.CreditsCode.GDPrevButtonObjects2.length = 0;
gdjs.CreditsCode.GDPrevButtonObjects3.length = 0;
gdjs.CreditsCode.GDNextButtonObjects1.length = 0;
gdjs.CreditsCode.GDNextButtonObjects2.length = 0;
gdjs.CreditsCode.GDNextButtonObjects3.length = 0;
gdjs.CreditsCode.GDFadeTransitionObjects1.length = 0;
gdjs.CreditsCode.GDFadeTransitionObjects2.length = 0;
gdjs.CreditsCode.GDFadeTransitionObjects3.length = 0;
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.CreditsCode.GDLeft_9595Arrow_9595ButtonObjects3.length = 0;
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.CreditsCode.GDRight_9595Arrow_9595ButtonObjects3.length = 0;
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects1.length = 0;
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects2.length = 0;
gdjs.CreditsCode.GDJump_9595Arrow_9595ButtonObjects3.length = 0;
gdjs.CreditsCode.GDMicIconObjects1.length = 0;
gdjs.CreditsCode.GDMicIconObjects2.length = 0;
gdjs.CreditsCode.GDMicIconObjects3.length = 0;
gdjs.CreditsCode.GDMicToggleObjects1.length = 0;
gdjs.CreditsCode.GDMicToggleObjects2.length = 0;
gdjs.CreditsCode.GDMicToggleObjects3.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;

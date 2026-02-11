gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDBoundaryObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDEnemyObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDplayerObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDplayerObjects1= [];
gdjs.Untitled_32sceneCode.GDplayerObjects2= [];
gdjs.Untitled_32sceneCode.GDplatform_9595dirtObjects1= [];
gdjs.Untitled_32sceneCode.GDplatform_9595dirtObjects2= [];
gdjs.Untitled_32sceneCode.GDplatform_9595dirt2Objects1= [];
gdjs.Untitled_32sceneCode.GDplatform_9595dirt2Objects2= [];
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1= [];
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects2= [];
gdjs.Untitled_32sceneCode.GDplatform_9595stone2Objects1= [];
gdjs.Untitled_32sceneCode.GDplatform_9595stone2Objects2= [];
gdjs.Untitled_32sceneCode.GDplatform_9595bridgeObjects1= [];
gdjs.Untitled_32sceneCode.GDplatform_9595bridgeObjects2= [];
gdjs.Untitled_32sceneCode.GDplatform_9595movingObjects1= [];
gdjs.Untitled_32sceneCode.GDplatform_9595movingObjects2= [];
gdjs.Untitled_32sceneCode.GDcoinObjects1= [];
gdjs.Untitled_32sceneCode.GDcoinObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects1= [];
gdjs.Untitled_32sceneCode.GDEnemyObjects2= [];
gdjs.Untitled_32sceneCode.GDBoundaryObjects1= [];
gdjs.Untitled_32sceneCode.GDBoundaryObjects2= [];
gdjs.Untitled_32sceneCode.GDPLEIDOCObjects1= [];
gdjs.Untitled_32sceneCode.GDPLEIDOCObjects2= [];
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewExternalTileMapObjects1= [];
gdjs.Untitled_32sceneCode.GDNewExternalTileMapObjects2= [];
gdjs.Untitled_32sceneCode.GDEnemy2Objects1= [];
gdjs.Untitled_32sceneCode.GDEnemy2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.Untitled_32sceneCode.GDcoinObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("platform_stone"), gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1[i].isCollidingWithPoint((( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1[k] = gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("platform_stone"), gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1[i].isCollidingWithPoint((( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointX("Checker")), (( gdjs.Untitled_32sceneCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDEnemyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1[k] = gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.Untitled_32sceneCode.GDplayerObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Untitled_32sceneCode.GDEnemyObjects2});
gdjs.Untitled_32sceneCode.asyncCallback11336820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback11336820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "hed44.mp3", 0, true, 40, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Untitled_32sceneCode.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointX("")) - 1000, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointY("")) - 1000, (( gdjs.Untitled_32sceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDplayerObjects1[0].getPointX("")) + 1000, (( gdjs.Untitled_32sceneCode.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoundaryObjects1[0].getPointY("")), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDplayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDplayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.Untitled_32sceneCode.GDcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDcoinObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1[i].getBehavior("Text").setText("PUNTOS:" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 45, 0.6);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnemyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDEnemyObjects1[k] = gdjs.Untitled_32sceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDEnemyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.Untitled_32sceneCode.GDBoundaryObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDBoundaryObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1_1final.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Untitled_32sceneCode.GDBoundaryObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects2[i].getY() > (( gdjs.Untitled_32sceneCode.GDBoundaryObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoundaryObjects2[0].getPointY("")) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects2[k] = gdjs.Untitled_32sceneCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDBoundaryObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDBoundaryObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDBoundaryObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDBoundaryObjects1_1final.push(gdjs.Untitled_32sceneCode.GDBoundaryObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDplayerObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDplayerObjects1_1final.push(gdjs.Untitled_32sceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Untitled_32sceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDplayerObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDEnemyObjects2Objects, false, runtimeScene, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDEnemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDEnemyObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDEnemyObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDEnemyObjects1_1final.push(gdjs.Untitled_32sceneCode.GDEnemyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDplayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDplayerObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDplayerObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDplayerObjects1_1final.push(gdjs.Untitled_32sceneCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDBoundaryObjects1_1final, gdjs.Untitled_32sceneCode.GDBoundaryObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDEnemyObjects1_1final, gdjs.Untitled_32sceneCode.GDEnemyObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDplayerObjects1_1final, gdjs.Untitled_32sceneCode.GDplayerObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11336108);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Untitled_32sceneCode.GDplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDplayerObjects1[k] = gdjs.Untitled_32sceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDplayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirt2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirt2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stone2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stone2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595bridgeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595bridgeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595movingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595movingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPLEIDOCObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPLEIDOCObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewExternalTileMapObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewExternalTileMapObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemy2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemy2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
gdjs.Untitled_32sceneCode.GDplayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirt2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595dirt2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stoneObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stone2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595stone2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595bridgeObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595bridgeObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595movingObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDplatform_9595movingObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoundaryObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPLEIDOCObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPLEIDOCObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewExternalTileMapObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewExternalTileMapObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDEnemy2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDEnemy2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;

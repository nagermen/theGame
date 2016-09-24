'use strict';
var ctx,
    targetAreaWidth = 400,
    targetAreaHeight = 100,
    targetWidth = 10,
    targetHeight = 5,
    user,
    targets = [];

function drowBackground() {
    ctx = getCanvas('example');
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,1000,500);
};
function generateTargets(count) {
    var targetAreOffset = (ctx.canvas.width - targetAreaWidth)/2,
        targetStartFromX = (ctx.canvas.width - targetAreaWidth)/2,
        targetAreaY = 2;
    for (var i=0; i < count; i++) {
        if ((targetAreaY + 3) > targetAreaHeight) {
            break;
        }
        var randInt = parseInt(Math.random()*25);
        if ((targetStartFromX + targetWidth + randInt) >= (ctx.canvas.width - targetAreOffset)) {
            targetStartFromX = targetAreOffset;
            targetAreaY += targetHeight + 3;

        }
        if (!i) {
            ctx.fillStyle = 'purple';
            ctx.fillRect(targetStartFromX, targetAreaY, targetWidth, targetHeight);
        }
        else {
            ctx.fillStyle = 'red';
            ctx.fillRect(targetStartFromX, targetAreaY, targetWidth, targetHeight);
        }
        targetStartFromX += targetWidth + randInt;
        var target = {
            positionX: targetStartFromX,
            positionY: targetAreaY,
            width: targetWidth,
            height: targetHeight
        };

        targets.push(target);
    }
    generateUser();
}
function fillPosition(user) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(user.positionX, user.positionY, user.width, user.height);
}
function generateUser () {
    var canvas = ctx.canvas,
        elemPositionY = canvas.height - 5,
        elemPositionX = canvas.width/2 - 20;
    user = {
        width: 40,
        height: 5,
        positionX: elemPositionX,
        positionY: elemPositionY
    };
    fillPosition(user);

}
function geterateMap(targetsCount) {
    generateTargets(targetsCount);
}
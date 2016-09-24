'use strict';
document.onkeydown = moveuser;
document.onclick = fire;
var bullets = [];
function Bullet(bulletX, bulletY) {
    this.positionX = bulletX;
    this.positionY = bulletY;
    this.width = 2;
    this.height = 3;
}

function moveToLeft() {
    ctx.fillStyle = 'black';
    ctx.fillRect(user.positionX, user.positionY, user.width, user.height);
    user.positionX -= 5;
    fillPosition(user);
}

function moveToRight() {
    ctx.fillStyle = 'black';
    ctx.fillRect(user.positionX, user.positionY, user.width, user.height);
    user.positionX += 5;
    fillPosition(user);
}
function fire() {
    var bulletY = user.positionY - user.height,
        bulletX = user.positionX + user.width/2,
        bullet = {
            positionX: bulletX,
            positionY: bulletY,
            width: 2,
            height: 3
        };
    ctx.fillStyle = 'white';
    ctx.fillRect(bullet.positionX, bullet.positionY, bullet.width, bullet.height);
    bullets.push(bullet);
}
function moveBullet() {
    if (bullets.length > 0) {
            bullets.map(function (bullet, index) {
                ctx.fillStyle = 'black';
                ctx.fillRect(bullet.positionX, bullet.positionY, bullet.width, bullet.height);
                bullet.positionY -= 1;
                ctx.fillStyle = 'white';
                ctx.fillRect(bullet.positionX, bullet.positionY, bullet.width, bullet.height);
                targetReached(bullet, index)
            });
    }
}

function targetReached(bullet, index) {
    targets.map(function (target) {
        if (
            (bullet.positionY <= target.positionY)
            && (bullet.positionX > target.positionX)
            && (bullet.positionX <= (target.positionX + target.width))
        ) {
            ctx.fillStyle = 'black';
            ctx.fillRect(target.positionX, target.positionY, target.width, target.height);
        }
    })
}

function moveuser (e) {
    var keyCode = e.keyCode;
    e.preventDefault();
    if (keyCode === 39) {
        moveToRight();
    } else if (keyCode === 37) {
        moveToLeft();
    }
}
setInterval(function () {
    moveBullet();
}, 5);

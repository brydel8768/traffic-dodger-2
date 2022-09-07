info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let projectile2: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let mySprite = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 100)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scroller.scrollBackgroundWithSpeed(-50, -50)
info.startCountdown(15)
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    pause(2100)
})
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(0, 10)
    pause(1000)
})

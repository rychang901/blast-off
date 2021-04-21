controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -85
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . a a a a a a a . . . . 
    . . a a a a a a a a a a a . . 
    . a a a . . . . . . . a a a . 
    . a a . . . . . . . . . a a . 
    a a . . . . . . . . . . . a a 
    a a . . a . . . . . a . . a a 
    a a . . a . . . . . a . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    . a a . . . . . . . . . a a a 
    . a a a . . . . . . . a a a . 
    . 4 a a a a a a a a a a a 4 . 
    . 4 2 4 a a a a a a a 4 2 4 . 
    . 4 2 4 . . . . . . . 4 2 4 . 
    . 4 2 4 . . . . . . . 4 2 4 . 
    . . 2 4 . . . . . . . . 2 4 . 
    . . 2 . . . . . . . . . 2 4 . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite.y = 219
mySprite.ay = 100
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . 
    . . . . a a a a a a a . . . . 
    . . a a a a a a a a a a a . . 
    . a a a . . . . . . . a a a . 
    . a a . . . . . . . . . a a . 
    a a . . . . . . . . . . . a a 
    a a . . a . . . . . a . . a a 
    a a . . a . . . . . a . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    . a a . . . . . . . . . a a a 
    . a a a . . . . . . . a a a . 
    . 4 a a a a a a a a a a a 4 . 
    . 4 2 4 a a a a a a a 4 2 4 . 
    . 4 2 4 . . . . . . . 4 2 4 . 
    . 4 2 4 . . . . . . . 4 2 4 . 
    . . 2 4 . . . . . . . . 2 4 . 
    . . 2 . . . . . . . . . 2 4 . 
    `,img`
    . . . . . . . . . . . . . . . 
    . . . . a a a a a a a . . . . 
    . . a a a a a a a a a a a . . 
    . a a a . . . . . . . a a a . 
    . a a . . . . . . . . . a a . 
    a a . . . . . . . . . . . a a 
    a a . . a . . . . . a . . a a 
    a a . . a . . . . . a . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    a a . . . . . . . . . . . a a 
    . a a . . . . . . . . . a a a 
    . a a a . . . . . . . a a a . 
    . 4 a a a a a a a a a a a 4 . 
    . 4 2 4 a a a a a a a 4 2 4 . 
    . 4 2 4 . . . . . . . 4 2 4 . 
    . 4 2 4 . . . . . . . . 2 4 . 
    . 4 2 4 . . . . . . . . 2 4 . 
    . . 2 4 . . . . . . . . 2 . . 
    `],
250,
true
)

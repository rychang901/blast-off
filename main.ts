namespace SpriteKind {
    export const Jumper = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -95
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
            . . . 4 . . . . . . . . . 4 . 
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
            . 4 2 4 . . . . . . . 4 2 4 . 
            . 4 2 . . . . . . . . 4 2 . . 
            . 4 . . . . . . . . . 4 . . . 
            `],
        250,
        false
        )
        pause(501)
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
    }
})
scene.onOverlapTile(SpriteKind.Jumper, assets.tile`myTile1`, function (sprite, location) {
    mySprite.vy = -100
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
        . . . 4 . . . . . . . . . 4 . 
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
        . 4 2 4 . . . . . . . 4 2 4 . 
        . 4 2 . . . . . . . . 4 2 . . 
        . 4 . . . . . . . . . 4 . . . 
        `],
    250,
    false
    )
    pause(501)
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
})
let mySprite: Sprite = null
game.splash("Trials of Jumping Academy")
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
    `, SpriteKind.Jumper)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
mySprite.y = 270
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

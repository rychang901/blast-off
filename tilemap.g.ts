// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0011000000000000000000000000000000000000000000000303000000000000000000000000020200000000000000000000000202000000020200000000000000000000000000000000020200000000000000000000000202000000000000000000000000020200000000000202000000000000000000000000000002020000000000000000000000020200000000000000000000000002020000000000000000000001010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. 2 2 . . . . . . . 
. . . . . 2 2 . . . 
. . . . . . . . 2 2 
. . . 2 2 . . . . . 
. . . . . . . . . . 
. 2 2 . . . . . . . 
. . . . 2 2 . . . . 
. . . . . . . . 2 2 
. . . . . 2 2 . . . 
. . . . . . . . . . 
. 2 2 . . . . . . . 
. . . . 2 2 . . . . 
. . . . . . . . 2 2 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

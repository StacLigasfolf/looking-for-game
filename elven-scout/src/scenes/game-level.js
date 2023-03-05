import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";

export class GameLevel extends Scene {
    constructor(game){
        super(game);
        this.tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth: 640,
            imageHeight: 640
        });
        this.floor = this.tiles.getSprite(7);
        this.floor.setXY(10, 10);

        // enemy animation
        this.bullTiles = new SpriteSheet({
            imageName: 'enemy',
            imageWidth: 800,
            imageHeight: 800
        });
        this.bull = this.bullTiles.getAnimation([1,2,3,4,5,6,7], 300);
        this.bull.setXY(10, 10);
    }

    init() {
        super.init()
        const mapData = require('../maps/level_1.json');
        this.map = this.game.screen.createMap("level_1", mapData, this.tiles);
    }

    update(time) {
        this.bull.update(time);
    }

    render(time) {
        this.update(time);
        this.game.screen.fill('#0000000');
        this.game.screen.drawSprite(this.map);
        //this.game.screen.drawSprite(this.floor);
        this.game.screen.drawSprite(this.bull);
        super.render(time);
    }
}
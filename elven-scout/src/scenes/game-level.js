import { Scene } from "../scene";
import { SpriteSheet } from "../sprite-sheet";
import { CharacterSheet } from "../character-sheet";

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

        // hero animation
        this.heroTiles = new CharacterSheet({imageName: 'player'});
        this.hero = this.heroTiles.getAnimation("walk_down");
        this.hero.setXY(390, 90);
        
    }

    init() {
        super.init()
        const mapData = require('../maps/level_1.json');
        this.map = this.game.screen.createMap("level_1", mapData, this.tiles);
    }

    update(time) {
        this.hero.update(time);
    }

    render(time) {
        this.update(time);
        this.game.screen.fill('#0000000');
        this.game.screen.drawSprite(this.map);
        //this.game.screen.drawSprite(this.floor);
        this.game.screen.drawSprite(this.hero);
        super.render(time);
    }
}
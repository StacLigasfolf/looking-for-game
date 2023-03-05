import { Screen } from "./screen";
import { Loading } from "./scenes/loding";
import { Menu } from "./scenes/menu";
import { Scene } from "./scene";
import { ControlState } from "./control-state";
import { GameLevel } from "./scenes/game-level";

export class Game {
    constructor({width = 1000, height = 1000} = {}){
        this.screen = new Screen(width, height);
        this.screen.loadImages({
            player: 'img/hero.png',
            enemy: 'img/enemy.png',
            tiles: 'img/scene_1.png',
            title: "img/title.png"
        });
        this.control = new ControlState();
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this),
            gameLevel: new GameLevel(this)
        };
        this.currentScene = this.scenes.loading;
        this.currentScene.init();
    }

    changeScene(status) {
        switch (status) {
            case Scene.LOADED:
                return this.scenes.menu;
                break;
            case Scene.START_GAME:
                return this.scenes.gameLevel;

            default:
                return this.scenes.menu;
        }
    }

    frame(time){
        if(this.currentScene.status != Scene.WORKING){
            this.currentScene = this.changeScene(this.currentScene.status);
            this.currentScene.init();
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.frame(time))
    }

    run() { 
        requestAnimationFrame(time => this.frame(time))
    }
}
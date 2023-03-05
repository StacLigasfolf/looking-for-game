import { Scene } from "../scene";

export class Menu extends Scene {
    constructor(game) { 
        super(game);
    }

    init() {
        super.init();
    }

    update(time) {
        if(this.game.control.fire) {
            this.finish(Scene.START_GAME);
        }
    }

    render(time) {
        this.update(time);
        this.game.screen.drawImage(0, 0, 'title');
        this.game.screen.print(350, 790, "Нажмите space чтобы начать");
        super.render(time);
    }
}
export class Point {
    constructor(player) {
        this.player = player;

        player.increaseScore();
    }
}
import {Player} from "./Player";
import {Point} from "./Point";

const NUMBER_POINTS_TO_GENERATE = 150;

export class Game {
    constructor(player1, player2) {
        Game.checkPlayer(player1);
        Game.checkPlayer(player2);

        this.player1 = player1;
        this.player2 = player2;
        this.initPoints();
    }

    initPoints() {
        this.points = Game.generateRandomPoints(this.player1, this.player2);
    }

    getPlayers() {
        return [this.player1, this.player2];
    }

    getPoints() {
        return this.points;
    }

    static checkPlayer(player) {
        if (!(player instanceof Player)) {
            throw new Error("a player needs to be an instance of class Player.")
        }
    }

    static generatePerformance(player) {
        return Math.random() * player.level;
    }

    static generateRandomPoints(player1, player2) {
        Game.checkPlayer(player1);
        Game.checkPlayer(player2);

        const points = [];
        for (let i = 0; i < NUMBER_POINTS_TO_GENERATE; i = i + 1) {
            const player1Performance = Game.generatePerformance(player1);
            const player2Performance = Game.generatePerformance(player2);
            const point = new Point(player1Performance < player2Performance ? player2 : player1);
            points.push(point);
        }

        return points;
    }

    static generateNewGameFromGame(game) {
        return new Game(...game.getPlayers());
    }

}
import {generateUUID} from "../utils/generateUUID";

export class Player {
    constructor(name, level) {
        this.id = generateUUID();
        this.name = name;
        this.level = level;
        this.score = 0;
    }

    increaseScore() {
        this.score += 1;
    }
}
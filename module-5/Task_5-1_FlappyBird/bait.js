"use strict";

import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";

export class TBait extends TSprite {
    #speed;
    constructor(aSpcvs, aSPI) {
        super(aSpcvs, aSPI, 200, 110);
        this.animationSpeed = 20;
        this.#speed = 0.5;
    }
    animate() {
        if (EGameStatus.state === EGameStatus.gaming) {
        this.x -= this.#speed;
    } else {
        this.x += this.#speed;
    }
}
}
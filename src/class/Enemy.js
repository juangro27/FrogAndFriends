class Enemy {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    (this.canvasSize = undefined),
      (this.position = {
        x: undefined,
        y: undefined,
      });
    this.size = {
      w: undefined,
      h: undefined,
    };
    this.laser = laser;
  }
}

class Torreta extends Enemy {
  constructor(ctx) {
    super(ctx);
    this.arrow();
  }
}
class Skeleton extends Enemy {
  constructor(ctx) {
    super(ctx);
    this.attack = attack;
    this.lives = 1;
  }
  move() {}
}

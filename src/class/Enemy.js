class Enemy {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.hp = undefined;
    this.position = {
      x: undefined,
      y: undefined,
    };
    this.size = {
      w: undefined,
      h: undefined,
    };
  }
  init() {
    this.drawAll();
    this.clearAll();
  }
  drawAll() {
    this.createViking(
      this.position.x,
      this.position.y,
      this.vikingSize.w,
      this.vikingSize.h,
      "brown"
    );
  }
  clearAll() {}
  createEnemy(x, y, w, h, color) {
    if (color) this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
}

class Sentinel extends Enemy {
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

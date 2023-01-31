class Enemy {
  constructor(ctx, canvasSize, x, y, w, h, hp) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.hp = hp;
    this.position = {
      x: x,
      y: y,
    };
    this.size = {
      w: w,
      h: h,
    };
  }
  init() {
    this.drawAll();
    this.clearAll();
  }
  drawAll() {
    this.createEnemy(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
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
  constructor(ctx, canvasSize, x, y, w, h, hp, direction) {
    super(ctx, canvasSize, x, y, w, h, hp);
    this.direction = direction;
    this.shoots = [];
  }
  init(framesCounter) {
    this.clearAll();

    if (framesCounter % 200 === 0) {
      this.shoot();
    }

    this.drawAll();
  }
  shoot() {
    this.shoots.push(
      new Arrow(
        this.ctx,
        this.canvasSize,
        this.size,
        this.position,
        this.direction
      )
    );
  }
  drawAll() {
    this.clearAll();
    this.shoots.forEach((e) => e.init());
    this.createEnemy(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
      "red"
    );
  }
  clearAll() {
    this.shoots = this.shoots.filter(
      (e) =>
        e.position.y < this.canvasSize.h && e.position.x < this.canvasSize.w
    );
  }
}
class Skeleton extends Enemy {
  constructor(ctx, canvasSize, x, y, w, h, hp) {
    super(ctx, canvasSize, x, y, w, h, hp);
    this.direction = undefined;
    this.speed = {
      x: 0.5,
    };
  }
  init(framesCounter) {
    this.clearAll();

    if (framesCounter % 300 === 0) this.direction = "right";
    if (framesCounter % 600 === 0) this.direction = "left";
    this.move(this.direction);
    this.drawAll(framesCounter);
  }
  drawAll() {
    this.createEnemy(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h,
      "green"
    );
  }
  move(direction) {
    if (direction === "right") {
      this.position.x += this.speed.x;
    } else if (direction === "left") {
      this.position.x -= this.speed.x;
    }
  }
}

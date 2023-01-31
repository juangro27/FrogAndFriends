class Character {
  constructor(ctx, canvasSize, width, height, floors, stairs, walls) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: 20,
      y: this.canvasSize.h - (this.canvasSize.h / 6) * 5 - 49,
    };
    this.vikingSize = {
      w: width,
      h: height,
    };
    this.physics = {
      gravity: 0.05,
    };
    this.speed = { x: 1, y: 0.1 };
    this.status = undefined;
    this.lives = 3;
    this.floors = floors;
    this.stairs = stairs;
    this.walls = walls;
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
      "black"
    );
  }
  clearAll() {}
  createViking(x, y, w, h, color) {
    if (color) this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }

  move(keysStatus) {
    if (
      (keysStatus.RIGHT &&
        checkHitBox(this.floors, 1, this.vikingSize, this.position) &&
        !checkHitBox(this.walls, 1, this.vikingSize, this.position)) ||
      (keysStatus.RIGHT &&
        checkHitBox(this.stairs, 1, this.vikingSize, this.position))
    ) {
      this.position.x += this.speed.x;
    } else if (
      (keysStatus.LEFT &&
        checkHitBox(this.floors, 1, this.vikingSize, this.position) &&
        !checkHitBox(this.walls, 1, this.vikingSize, this.position)) ||
      (keysStatus.LEFT &&
        checkHitBox(this.stairs, 1, this.vikingSize, this.position) &&
        !checkHitBox(this.walls, 1, this.vikingSize, this.position))
    ) {
      this.position.x -= this.speed.x;
    } else if (
      keysStatus.UP &&
      checkHitBox(this.stairs, 1, this.vikingSize, this.position) &&
      !checkHitBox(this.walls, 1, this.vikingSize, this.position)
    ) {
      this.position.y -= this.speed.x;
    } else if (
      keysStatus.DOWN &&
      checkHitBox(this.stairs, 1, this.vikingSize, this.position) &&
      !checkHitBox(this.walls, 1, this.vikingSize, this.position)
    ) {
      this.position.y += this.speed.x;
    }
    if (
      checkHitBox(this.floors, 1, this.vikingSize, this.position) === false &&
      checkHitBox(this.stairs, 1, this.vikingSize, this.position) === false
    ) {
      this.setGravity();
    }
  }
  setGravity() {
    this.position.y += this.speed.y;
    this.speed.y += this.physics.gravity;
  }
}

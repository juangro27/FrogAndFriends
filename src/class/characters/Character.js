class Character {
  constructor(ctx, canvasSize, width, height, floors, stairs, doors, imgName) {
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
    this.doors = doors;
    this.image = new Image();
    this.image.src = imgName;
    this.image.frames = 2;
    this.image.framesIndex = 0;
  }
  init(framesCounter) {
    this.clearAll();
    this.drawAll(framesCounter);

    this.checkDoor();
  }
  drawAll(framesCounter) {
    this.createViking();
    this.animate(framesCounter);
  }
  clearAll() {}
  animate(framesCounter) {
    console.log(this.image.framesIndex);
    if (framesCounter % 30 === 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
  createViking() {
    this.ctx.drawImage(
      this.image,
      (this.image.width / this.image.frames) * this.image.framesIndex,
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.position.x,
      this.position.y,
      this.vikingSize.w,
      this.vikingSize.h
    );
  }

  move(keysStatus) {
    if (
      (keysStatus.RIGHT &&
        checkHitBox(this.floors, 1, this.vikingSize, this.position)) ||
      (keysStatus.RIGHT &&
        checkHitBox(this.stairs, 1, this.vikingSize, this.position))
    ) {
      this.position.x += this.speed.x;
    } else if (
      (keysStatus.LEFT &&
        checkHitBox(this.floors, 1, this.vikingSize, this.position)) ||
      (keysStatus.LEFT &&
        checkHitBox(this.stairs, 1, this.vikingSize, this.position))
    ) {
      this.position.x -= this.speed.x;
    } else if (
      keysStatus.UP &&
      checkHitBox(this.stairs, 1, this.vikingSize, this.position)
    ) {
      this.position.y -= this.speed.x;
    } else if (
      keysStatus.DOWN &&
      checkHitBox(this.stairs, 1, this.vikingSize, this.position)
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
  checkDoor() {
    checkHitBox(this.doors, 1, this.vikingSize, this.position);
  }
  setGravity() {
    this.position.y += this.speed.y;
    this.speed.y += this.physics.gravity;
  }
}

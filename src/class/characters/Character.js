class Character {
  constructor(
    ctx,
    canvasSize,
    imgName,
    width,
    height,
    floors,
    stairs,
    doors,
    keysItems
  ) {
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
    this.keysItems = keysItems;
    this.haveKey = false;
    this.image = new Image();
    this.image.src = imgName;
    this.image.frames = 6;
    this.image.framesIndex = 0;
  }
  init(framesCounter) {
    this.clearAll();
    this.drawAll(framesCounter);
    this.checkKey();
  }
  drawAll(framesCounter) {
    this.createViking();
    this.animate(framesCounter);
  }
  clearAll() {}
  animate(framesCounter) {
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
        checkHitBox(this.floors, 1, this.vikingSize, this.position, "floor")) ||
      (keysStatus.RIGHT &&
        checkHitBox(this.stairs, 1, this.vikingSize, this.position))
    ) {
      this.position.x += this.speed.x;
    } else if (
      (keysStatus.LEFT &&
        checkHitBox(this.floors, 1, this.vikingSize, this.position, "floor")) ||
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
      checkHitBox(this.floors, 1, this.vikingSize, this.position, "floor") ===
        false &&
      checkHitBox(this.stairs, 1, this.vikingSize, this.position) === false
    ) {
      this.setGravity();
    }
  }
  isInDoor() {
    return checkHitBox(this.doors, 1, this.vikingSize, this.position);
  }
  checkKey() {
    return checkHitBox(this.keysItems, 1, this.vikingSize, this.position);
  }
  setGravity() {
    this.position.y += this.speed.y;
    this.speed.y += this.physics.gravity;
  }
}

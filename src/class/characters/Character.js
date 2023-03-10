class Character {
  constructor(
    ctx,
    canvasSize,
    imgName,
    numberFrames,
    width,
    height,
    actualLevel,
    floors,
    stairs,
    chests,
    keysItems,
    enemyArrows
  ) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: 20,
      y: this.canvasSize.h - (this.canvasSize.h / 6) * 5 - 59,
    };
    this.size = {
      w: width,
      h: height,
    };
    this.physics = {
      gravity: 0.05,
    };
    this.actualLevel = actualLevel;
    this.speed = { x: 1, y: 0.1 };
    this.status = undefined;
    this.isVulnerable = true;
    this.lives = 3;
    this.floors = floors;
    this.stairs = stairs;
    this.chests = chests;
    this.keysItems = keysItems;
    this.enemyArrows = enemyArrows;
    this.haveKey = false;
    this.image = new Image();
    this.image.src = imgName;
    this.image.frames = numberFrames;
    this.image.framesIndex = 0;
  }
  init(framesCounter, actualLevel) {
    this.actualLevel = actualLevel;
    this.clearAll();
    this.drawAll(framesCounter);

    this.checkKey();
  }
  drawAll(framesCounter) {
    this.createCharacter();
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
  createCharacter() {
    this.ctx.drawImage(
      this.image,
      (this.image.width / this.image.frames) * this.image.framesIndex,
      0,
      this.image.width / this.image.frames,
      this.image.height,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
  move(keysStatus) {
    if (!this.isDead) {
      if (
        (keysStatus.RIGHT &&
          checkHitBox(
            this.floors,
            this.actualLevel,
            this.size,
            this.position,
            "floor"
          )) ||
        (keysStatus.RIGHT &&
          checkHitBox(this.stairs, this.actualLevel, this.size, this.position))
      ) {
        if (!this.position.x >= this.canvasSize.w)
          this.position.x += this.speed.x;
      } else if (
        (keysStatus.LEFT &&
          checkHitBox(
            this.floors,
            this.actualLevel,
            this.size,
            this.position,
            "floor"
          )) ||
        (keysStatus.LEFT &&
          checkHitBox(this.stairs, this.actualLevel, this.size, this.position))
      ) {
        this.position.x -= this.speed.x;
      } else if (
        keysStatus.UP &&
        checkHitBox(this.stairs, this.actualLevel, this.size, this.position)
      ) {
        this.position.y -= this.speed.x;
      } else if (
        keysStatus.DOWN &&
        checkHitBox(this.stairs, this.actualLevel, this.size, this.position)
      ) {
        this.position.y += this.speed.x;
      }
      if (
        checkHitBox(
          this.floors,
          this.actualLevel,
          this.size,
          this.position,
          "floor"
        ) === false &&
        checkHitBox(this.stairs, this.actualLevel, this.size, this.position) ===
          false
      ) {
        this.setGravity();
      }
    }
  }
  isInChest() {
    return checkHitBox(this.chests, this.actualLevel, this.size, this.position);
  }
  changeSprite(spriteName, numberFrames) {
    this.image.frames = numberFrames;
    this.image.src = spriteName;
  }

  checkKey() {
    return checkHitBox(
      this.keysItems,
      this.actualLevel,
      this.size,
      this.position
    );
  }
  setGravity() {
    this.position.y += this.speed.y;
    this.speed.y += this.physics.gravity;
  }
}

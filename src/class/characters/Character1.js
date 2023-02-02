class Character1 extends Character {
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
    super(
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
    );
    this.status = true;
    this.canJump = undefined;
    this.physics = {
      gravity: 0.5,
    };
  }
  move(keysStatus) {
    if (keysStatus.RIGHT) {
      if (this.position.x < this.canvasSize.w - this.size.w)
        this.position.x += this.speed.x;
      this.isVulnerable
        ? this.changeSprite("./img/frog/frogWalkRight.png", 12)
        : this.changeSprite("./img/frog/frogHitRight.png", 7);
    } else if (keysStatus.LEFT) {
      if (this.position.x > 0) this.position.x -= this.speed.x;
      this.isVulnerable
        ? this.changeSprite("./img/frog/frogWalkleft.png", 12)
        : this.changeSprite("./img/frog/frogHitLeft.png", 7);
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

  checkJump(keysStatus) {
    if (
      checkHitBox(
        this.floors,
        this.actualLevel,
        this.size,
        this.position,
        "floor"
      )
    ) {
      this.speed.y = 0;
      this.canJump = true;
      if (keysStatus.SPACE) {
        this.canJump = true;
      }
      if (
        !checkHitBox(
          this.floors,
          this.actualLevel,
          this.size,
          this.position,
          "floor"
        )
      ) {
        this.canJump = false;
      }
    }
  }

  jump() {
    if (this.canJump) {
      this.speed.y -= 12;
      this.position.y -= 25;
      this.canJump = false;
      this.setGravity();
    }
  }
  setGravity() {
    if (
      !checkHitBox(
        this.floors,
        this.actualLevel,
        this.size,
        this.position,
        "floor"
      )
    ) {
      this.position.y += this.speed.y;
      this.speed.y += this.physics.gravity;
    }
  }
}

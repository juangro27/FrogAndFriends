class Viking1 extends Character {
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
    doors,
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
      doors,
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
      this.position.x += this.speed.x;
      this.changeSprite("./img/frogWalkRigth.png", 12);
    } else if (keysStatus.LEFT) {
      this.position.x -= this.speed.x;
      this.changeSprite("./img/frogWalkleft.png", 12);
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

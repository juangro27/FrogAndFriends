class Character3 extends Character {
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
    enemyArrows,
    arrows
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
      enemyArrows,
      arrows
    );
    this.status = false;
    this.arrows = [];
    this.arrowImage = "./img/trunk/trunkBullet.png";
    this.arrowNumberFrames = 1;
  }
  move(keysStatus) {
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
      if (this.position.x < this.canvasSize.w - this.size.w)
        this.position.x += this.speed.x;

      this.isVulnerable
        ? this.changeSprite("./img/trunk/TrunkWalkRigth.png", 14)
        : this.changeSprite("./img/trunk/trunkHitRight.png", 5);
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
      if (this.position.x > 0) this.position.x -= this.speed.x;
      this.isVulnerable
        ? this.changeSprite("./img/trunk/TrunkWalkLeft.png", 14)
        : this.changeSprite("./img/trunk/trunkHitLeft.png", 5);
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

  attack(direction) {
    this.arrows.push(
      new Arrow(
        this.ctx,
        this.canvasSize,
        this.size,
        this.position,
        {
          x: this.position.x + this.size.w / 2,
          y: this.position.y + this.size.h / 2,
        },
        direction,
        this.arrowImage,
        this.arrowNumberFrames
      )
    );
  }

  clearAll() {
    this.arrows = this.arrows.filter(
      (e) =>
        e.position.y < this.canvasSize.h && e.position.x < this.canvasSize.w
    );
  }
}

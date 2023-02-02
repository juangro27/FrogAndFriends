class Character2 extends Character {
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
    this.status = false;
    this.usingShell = false;
  }
  shell() {
    this.isVulnerable && this.changeSprite("./img/turtle/turtleShell.png", 14);
    this.usingShell = true;
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
      this.isVulnerable
        ? this.changeSprite("./img/turtle/turtleRight.png", 14)
        : this.changeSprite("./img/turtle/turtleHitRight.png", 5);
      this.usingShell = false;

      if (this.position.x < this.canvasSize.w - this.size.w)
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
      this.isVulnerable
        ? this.changeSprite("./img/turtle/turtleLeft.png", 14)
        : this.changeSprite("./img/turtle/turtleHitLeft.png", 5);
      this.usingShell = false;
      if (this.position.x > 0) this.position.x -= this.speed.x;
    } else if (
      keysStatus.UP &&
      checkHitBox(this.stairs, this.actualLevel, this.size, this.position)
    ) {
      this.usingShell = false;
      this.position.y -= this.speed.x;
    } else if (
      keysStatus.DOWN &&
      checkHitBox(this.stairs, this.actualLevel, this.size, this.position)
    ) {
      this.usingShell = false;
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

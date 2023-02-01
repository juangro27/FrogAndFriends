class Viking2 extends Character {
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
    this.status = false;
  }
  shell() {}
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
      this.changeSprite("./img/turtleRight.png", 14);

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
      this.changeSprite("./img/turtleLeft.png", 14);
      this.position.x -= this.speed.x;
    } else if (
      keysStatus.UP &&
      checkHitBox(this.stairs, this.actualLevel, this.size, this.position)
    ) {
      this.position.y -= this.speed.x;
      //
    } else if (
      keysStatus.DOWN &&
      checkHitBox(this.stairs, this.actualLevel, this.size, this.position)
    ) {
      this.position.y += this.speed.x;
      //
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

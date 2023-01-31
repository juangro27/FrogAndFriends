class Viking1 extends Character {
  constructor(ctx, canvasSize, width, height, floors, stairs, doors, imgName) {
    super(ctx, canvasSize, width, height, floors, stairs, doors, imgName);
    this.status = true;
    this.canJump = undefined;
    this.physics = {
      gravity: 0.5,
    };
  }
  move(keysStatus) {
    if (keysStatus.RIGHT) {
      this.position.x += this.speed.x;
    } else if (keysStatus.LEFT) {
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

  checkJump(keysStatus) {
    if (checkHitBox(this.floors, 1, this.vikingSize, this.position)) {
      this.speed.y = 0;
      this.canJump = true;
      if (keysStatus.SPACE) {
        this.canJump = true;
      }
      if (!checkHitBox(this.floors, 1, this.vikingSize, this.position)) {
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
    if (!checkHitBox(this.floors, 1, this.vikingSize, this.position)) {
      this.position.y += this.speed.y;
      this.speed.y += this.physics.gravity;
    }
  }
}

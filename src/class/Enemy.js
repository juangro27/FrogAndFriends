class Enemy {
  constructor(
    ctx,
    canvasSize,
    x,
    y,
    w,
    h,
    lives,
    actualLevel,
    imgName,
    numberFrames
  ) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.lives = lives;
    this.position = {
      x: x,
      y: y,
    };
    this.size = {
      w: w,
      h: h,
    };
    this.image = new Image();
    this.image.src = imgName;
    this.image.frames = numberFrames;
    this.image.framesIndex = 0;
    this.actualLevel = actualLevel;
  }
  init(framesCounter) {
    this.drawAll(framesCounter);
    this.clearAll();
  }
  drawAll() {
    this.createEnemy();
    this.animate(framesCounter);
  }
  animate(framesCounter) {
    if (framesCounter % 30 === 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex >= this.image.frames) {
      this.image.framesIndex = 0;
    }
  }
  changeSprite(spriteName, numberFrames) {
    this.image.frames = numberFrames;
    this.image.src = spriteName;
  }
  createEnemy() {
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
  clearAll() {}
}

class Sentinel extends Enemy {
  constructor(
    ctx,
    canvasSize,
    x,
    y,
    w,
    h,
    lives,
    actualLevel,
    direction,
    imgName,
    numberFrames
  ) {
    super(
      ctx,
      canvasSize,
      x,
      y,
      w,
      h,
      lives,
      actualLevel,
      imgName,
      numberFrames
    );
    this.arrowInitalPosition = {
      x: this.position.x + this.size.w - 35,
      y: this.position.y + 10,
    };
    this.direction = direction;
    this.arrows = [];
  }
  init(framesCounter) {
    this.clearAll();

    if (framesCounter % 200 === 0) {
      this.shoot();
    }

    this.drawAll(framesCounter);
  }
  shoot() {
    this.arrows.push(
      new Arrow(
        this.ctx,
        this.canvasSize,
        this.size,
        this.position,
        this.arrowInitalPosition,
        this.direction,
        "./img/sentinel/Bullet.png",
        1
      )
    );
  }
  drawAll(framesCounter) {
    this.clearAll();
    this.arrows.forEach((e) => e.init());
    this.createEnemy();
    this.animate(framesCounter);
  }
  clearAll() {
    this.arrows = this.arrows.filter(
      (e) =>
        e.position.y < this.canvasSize.h && e.position.x < this.canvasSize.w
    );
  }
}
class Skeleton extends Enemy {
  constructor(
    ctx,
    canvasSize,
    x,
    y,
    w,
    h,
    lives,
    actualLevel,
    imgName,
    numberFrames
  ) {
    super(
      ctx,
      canvasSize,
      x,
      y,
      w,
      h,
      lives,
      actualLevel,
      imgName,
      numberFrames
    );
    this.direction = undefined;
    this.speed = {
      x: 0.5,
    };
  }
  init(framesCounter) {
    this.clearAll();

    if (framesCounter % 300 === 0) this.direction = "right";
    if (framesCounter % 600 === 0) this.direction = "left";
    this.move(this.direction);
    this.drawAll(framesCounter);
  }
  drawAll(framesCounter) {
    this.createEnemy();
    this.animate(framesCounter);
  }
  move(direction) {
    if (direction === "right") {
      this.changeSprite("./img/pork/porkRigth.png", 12);
      this.position.x += this.speed.x;
    } else if (direction === "left") {
      this.changeSprite("./img/pork/porkLeft.png", 12);
      this.position.x -= this.speed.x;
    }
  }
}

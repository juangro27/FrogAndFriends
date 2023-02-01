class Arrow {
  constructor(
    ctx,
    canvasSize,
    subjectSize,
    subjectPosition,
    initialPosition,
    direction,
    imgName,
    numberFrames
  ) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.vikingPosition = subjectPosition;
    this.subjectSize = subjectSize;
    this.direction = direction;
    this.position = {
      x: initialPosition.x,
      y: initialPosition.y,
    };
    this.size = {
      w: 16,
      h: 16,
    };
    this.speed = {
      x: 1.5,
      y: 1,
    };
    this.image = new Image();
    this.image.src = imgName;
    this.image.frames = numberFrames;
    this.image.framesIndex = 0;
  }
  init() {
    this.drawAll();
    this.move(this.direction);
  }
  drawAll() {
    this.createArrow();
  }
  createArrow() {
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
  move(direction) {
    if (direction === "right") {
      this.position.x += this.speed.x;
    } else if (direction === "left") {
      this.position.x -= this.speed.x;
    } else if (direction === "up") {
      this.size.h = 15;
      this.size.w = 3;
      this.position.y -= this.speed.y;
    }
  }
}

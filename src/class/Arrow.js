class Arrow {
  constructor(ctx, canvasSize, vikingSize, vikingPosition, direction) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.vikingPosition = vikingPosition;
    this.vikingSize = vikingSize;
    this.direction = direction;
    this.position = {
      x: vikingPosition.x + vikingSize.w / 2,
      y: vikingPosition.y + vikingSize.h / 2,
    };
    this.size = {
      w: 15,
      h: 3,
    };
    this.speed = {
      x: 1.5,
      y: 1,
    };
  }
  init() {
    this.drawAll();
    this.move(this.direction);
  }
  drawAll() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(
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

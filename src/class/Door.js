class Door {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: 900,
      y: 430,
    };
    this.size = {
      w: 60,
      h: 80,
    };
  }
  init() {
    this.drawAll();
  }
  drawAll() {
    this.ctx.fillStyle = "IndianRed";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

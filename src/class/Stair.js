class Stair {
  constructor(ctx, canvasSize, x, y, width, height) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.size = {
      w: width,
      h: height,
    };
    this.position = {
      x: x,
      y: y,
    };
  }
  drawStairs() {
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

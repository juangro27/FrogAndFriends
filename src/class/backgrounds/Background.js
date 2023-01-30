class Background {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.floors = [];
    this.stairs = [];
    this.walls = [];
    this.generateBackground();
  }
  createRectangle(x, y, w, h, color) {
    if (color) this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  }
  init() {
    this.generateBackground();
  }
  generateBackground() {
    this.createRectangle(
      0,
      this.canvasSize.h - this.canvasSize.h / 6,
      this.canvasSize.w,
      this.canvasSize.h / 6,
      "red"
    );
  }
  drawAll() {}
}

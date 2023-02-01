class Background {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.floors = [];
    this.stairs = [];
    this.walls = [];
    this.doors = [];
    this.keysItems = [];
    this.background = new Image();
    this.background.src = "./img/background/background1.png";
    this.background2 = new Image();
    this.background2.src = "./img/background/background2.png";
    this.background3 = new Image();
    this.background3.src = "./img/background/background3.png";
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
    this.ctx.drawImage(
      this.background,
      0,
      0,
      this.canvasSize.w,
      (this.canvasSize.h / 6) * 5
    );
    this.ctx.drawImage(
      this.background2,
      0,
      0,
      this.canvasSize.w,
      (this.canvasSize.h / 6) * 5
    );
    this.ctx.drawImage(
      this.background3,
      0,
      0,
      this.canvasSize.w,
      (this.canvasSize.h / 6) * 5
    );
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

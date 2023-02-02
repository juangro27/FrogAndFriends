class Key {
  constructor(ctx, canvasSize, x, y) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: x,
      y: y,
    };
    this.size = {
      w: 32,
      h: 32,
    };
    this.image = new Image();
    this.image.src = "./img/key.png";
  }
  init() {
    this.drawAll();
  }

  drawAll() {
    this.createKey();
  }
  createKey() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

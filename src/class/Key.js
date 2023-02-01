class Key {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: 980,
      y: 70,
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

class Key {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: 980,
      y: 70,
    };
    this.size = {
      w: 20,
      h: 20,
    };
  }
  init() {
    this.drawAll();
  }
  drawAll() {
    this.ctx.fillStyle = "DeepPink";
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

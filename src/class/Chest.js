class Chest {
  constructor(ctx, canvasSize, x, y) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: x,
      y: y,
    };
    this.size = {
      w: 48,
      h: 48,
    };
    this.image = new Image();
    this.image.src = "./img/loot.png";
  }
  init() {
    this.drawAll();
  }
  drawAll() {
    this.createLoot();
  }
  createLoot() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

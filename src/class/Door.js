class Door {
  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.position = {
      x: 900,
      y: 430,
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

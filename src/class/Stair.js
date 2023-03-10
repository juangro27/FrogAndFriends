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
    this.image = new Image();
    this.image.src = "./img/background/stair.png";
  }
  drawStairs() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

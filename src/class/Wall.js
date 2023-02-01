class Wall {
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
    this.image.src = "./img/background/tile.png";
  }
  drawAll() {
    this.drawWall();
  }
  drawWall() {
    const ptrn = this.ctx.createPattern(this.image, "repeat");
    this.ctx.fillStyle = ptrn;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    );
  }
}

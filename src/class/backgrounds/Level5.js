class Level5 extends Background {
  constructor(ctx, canvasSize, enemies) {
    super(ctx, canvasSize);
    this.enemies = enemies;
    this.charactersInitialPosition = {
      x: -100,
      y: -100,
    };
    this.sentinels = [];
    this.porks = [];
    this.keyPostion;
    this.chestPostion;
    this.background5 = new Image();
    this.background5.src = "./img/background/background5.png";
  }

  init() {
    this.clearAll();
    this.drawAll();
  }
  drawAll() {
    this.ctx.drawImage(
      this.background5,
      0,
      0,
      this.canvasSize.w,
      this.canvasSize.h
    );
  }
  clearAll() {}
}

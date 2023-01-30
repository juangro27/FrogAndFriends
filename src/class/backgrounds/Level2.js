class Level2 extends Background {
  constructor(ctx, canvasSize, enemies) {
    super(ctx, canvasSize, stairs);
    this.enemies = enemies;
  }
}

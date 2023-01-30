class Level3 extends Background {
  constructor(ctx, canvasSize, enemies, elevator) {
    super(ctx, canvasSize, stairs, enemies);
    this.elevator = elevator;
  }
}

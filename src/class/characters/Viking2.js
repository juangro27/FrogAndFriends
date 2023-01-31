class Viking2 extends Character {
  constructor(
    ctx,
    canvasSize,
    width,
    height,
    floors,
    stairs,
    doors,

    imgName
  ) {
    super(ctx, canvasSize, width, height, floors, stairs, doors, imgName);
    this.status = false;
  }
  shell() {}
}

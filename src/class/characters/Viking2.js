class Viking2 extends Character {
  constructor(
    ctx,
    canvasSize,
    imgName,
    width,
    height,
    floors,
    stairs,
    doors,
    keysItems
  ) {
    super(
      ctx,
      canvasSize,
      imgName,
      width,
      height,
      floors,
      stairs,
      doors,
      keysItems
    );
    this.status = false;
  }
  shell() {}
}

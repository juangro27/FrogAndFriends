class Viking3 extends Character {
  constructor(
    ctx,
    canvasSize,
    width,
    height,
    floors,
    stairs,
    arrows,
    doors,
    imgName
  ) {
    super(ctx, canvasSize, width, height, floors, stairs, doors, imgName);
    this.status = false;
    this.arrows = arrows;
  }
  attack(direction) {
    this.arrows.push(
      new Arrow(
        this.ctx,
        this.canvasSize,
        this.vikingSize,
        this.position,
        direction
      )
    );
  }

  clearAll() {
    this.arrows = this.arrows.filter(
      (e) =>
        e.position.y < this.canvasSize.h && e.position.x < this.canvasSize.w
    );
  }
}

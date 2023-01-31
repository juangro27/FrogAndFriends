class Viking3 extends Character {
  constructor(ctx, canvasSize, width, height, floors, stairs, walls, arrows) {
    super(ctx, canvasSize, width, height, floors, stairs, walls);
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
  drawAll() {
    this.clearAll();
    this.createViking(
      this.position.x,
      this.position.y,
      this.vikingSize.w,
      this.vikingSize.h,
      "red"
    );
  }
  clearAll() {
    this.arrows = this.arrows.filter(
      (e) =>
        e.position.y < this.canvasSize.h && e.position.x < this.canvasSize.w
    );
  }
}

class Level2 extends Background {
  constructor(ctx, canvasSize, enemies) {
    super(ctx, canvasSize);
    this.enemies = enemies;
  }
  init() {
    this.clearAll();
    this.drawAll();
  }
  generateBackground() {
    const floors = [
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.9,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.8,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.9,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 2,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 2,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 4.9,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - (this.canvasSize.w / 7) * 4.2,
        this.canvasSize.h / 5 / 50,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 2,
        this.canvasSize.w,
        this.canvasSize.h / 5 / 50,
      ],
    ];
    const stairs = [
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.9,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.h / 5 / 5,
        this.canvasSize.w / 8,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 3,
        this.canvasSize.h - (this.canvasSize.h / 5) * 3.33,
        this.canvasSize.h / 5 / 5,
        this.canvasSize.h / 5 - 22,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 1.35,
        this.canvasSize.h - this.canvasSize.h / 2 + 0.5,
        this.canvasSize.h / 5 / 4,
        this.canvasSize.h / 6,
      ],
    ];
    floors.forEach((e) => {
      this.floors.push(new Floor(this.ctx, this.canvasSize, ...e));
    });
    stairs.forEach((e) => {
      this.stairs.push(new Stair(this.ctx, this.canvasSize, ...e));
    });
  }
  drawAll() {
    this.floors.forEach((e) => e.drawFloor());
    this.stairs.forEach((e) => e.drawStairs());
  }
  clearAll() {}
}

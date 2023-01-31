class Level1 extends Background {
  constructor(ctx, canvasSize) {
    super(ctx, canvasSize);
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
        this.canvasSize.w - (this.canvasSize.w / 7) * 6.1,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - (this.canvasSize.w / 7) * 4,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 1.5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - (this.canvasSize.w / 7) * 6.5,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 0.5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - (this.canvasSize.w / 7) * 6,
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
        this.canvasSize.w - (this.canvasSize.w / 7) * 5,
        this.canvasSize.h - (this.canvasSize.h / 5) * 3.33,
        this.canvasSize.h / 5 / 5,
        this.canvasSize.h / 5 - 22,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 3.5,
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
    this.doors.push(new Door(this.ctx, this.canvasSize));
    this.keys.push(new Key(this.ctx, this.canvasSize));
  }
  drawAll() {
    this.floors.forEach((e) => e.drawFloor());
    this.stairs.forEach((e) => e.drawStairs());
    this.doors.forEach((e) => e.init());
    this.keys.forEach((e) => e.init());
  }
  clearAll() {}
}

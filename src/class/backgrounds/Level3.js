class Level3 extends Background {
  constructor(ctx, canvasSize, enemies) {
    super(ctx, canvasSize);
    this.enemies = enemies;
    this.charactersInitialPosition = {
      x: 29,
      y: 79,
    };
    this.sentinels = [
      [79, 463, 50, 50, 100, 1, "right", "./img/sentinel/sentinelRight.png"],
      [463, 300, 50, 50, 100, 1, "left", "./img/sentinel/sentinelLeft.png"],
    ];
    this.porks = [];
  }
  init() {
    this.clearAll();
    this.drawAll();
  }
  generateBackground() {
    const floors = [
      [
        this.canvasSize.w - (this.canvasSize.w / 6.3) * 5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 3,
        this.canvasSize.h / 5 / 50,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 1.17,
        this.canvasSize.h / 5 / 50,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 5.1,
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
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.86,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5.01,
        this.canvasSize.h / 5 / 5,
        this.canvasSize.w / 4,
      ],

      [
        this.canvasSize.w - this.canvasSize.w / 5,
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

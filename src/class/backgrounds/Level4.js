class Level4 extends Background {
  constructor(ctx, canvasSize, enemies) {
    super(ctx, canvasSize);
    this.enemies = enemies;
    this.charactersInitialPosition = {
      x: 29,
      y: 79,
    };
    this.sentinels = [
      // [79, 463, 50, 50, 100, 1, "right", "./img/sentinel/sentinelRight.png"],
      // [706, 335, 50, 50, 100, 1, "left", "./img/sentinel/sentinelLeft.png"],
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
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 1.16,
        this.canvasSize.h / 5 / 50,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.5,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 15,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 1.2,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 2.5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 1.15,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w / 2,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 1.15,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 4.2,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.12,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 2.7,
        this.canvasSize.h - (this.canvasSize.h / 6) * 2,
        this.canvasSize.w - this.canvasSize.w / 3,
        this.canvasSize.h / 5 / 50,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 2,
        this.canvasSize.w,
        this.canvasSize.h / 5 / 50,
      ],
    ];
    const walls = [
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 1.16,
        this.canvasSize.h / 16,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.5,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 15,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 1.2,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w / 2,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 1.2,
        this.canvasSize.h / 16,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 2.5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 1.15,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 4.2,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.12,
        this.canvasSize.h / 6,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 2,
        this.canvasSize.w,
        this.canvasSize.h / 6,
      ],
    ];

    const stairs = [
      [
        this.canvasSize.w - this.canvasSize.w / 1.82,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        48,
        this.canvasSize.h / 6,
      ],
    ];
    floors.forEach((e) => {
      this.floors.push(new Floor(this.ctx, this.canvasSize, ...e));
    });
    walls.forEach((e) => {
      this.walls.push(new Wall(this.ctx, this.canvasSize, ...e));
    });
    stairs.forEach((e) => {
      this.stairs.push(new Stair(this.ctx, this.canvasSize, ...e));
    });
    this.chests.push(new Chest(this.ctx, this.canvasSize, 570, 342));
    this.keysItems.push(new Key(this.ctx, this.canvasSize, 522, 180));
  }
  drawAll() {
    this.floors.forEach((e) => e.drawFloor());
    this.walls.forEach((e) => e.drawWall());
    this.stairs.forEach((e) => e.drawStairs());
    this.chests.forEach((e) => e.init());
    this.keysItems.forEach((e) => e.init());
  }
  clearAll() {}
}

class Level2 extends Background {
  constructor(ctx, canvasSize, enemies) {
    super(ctx, canvasSize);
    this.enemies = enemies;
    this.charactersInitialPosition = {
      x: 29,
      y: 79,
    };
    this.sentinels = [
      [79, 463, 50, 50, 100, 1, "right", "./img/sentinel/sentinelRight.png"],
      [950, 207, 50, 50, 100, 1, "left", "./img/sentinel/sentinelLeft.png"],
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
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.9,
        this.canvasSize.h / 5 / 50,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.8,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.8,
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
    const walls = [
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.8,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.9,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 1.95,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 2.2,
        this.canvasSize.h - (this.canvasSize.h / 6) * 4,
        this.canvasSize.w - this.canvasSize.w / 2,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 7) * 5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - (this.canvasSize.w / 7) * 4.1,
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
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.8,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        48,
        this.canvasSize.w / 8,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 2.8,
        this.canvasSize.h - (this.canvasSize.h / 5) * 3.33,
        48,
        this.canvasSize.h / 5 - 22,
      ],
      [
        this.canvasSize.w - this.canvasSize.w / 1.32,
        this.canvasSize.h - this.canvasSize.h / 2 + 0.5,
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
    this.chests.push(new Chest(this.ctx, this.canvasSize, 901, 463));
    this.keysItems.push(new Key(this.ctx, this.canvasSize, 483, 335));
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

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
      [40, 335, 50, 50, 100, 1, "right", "./img/sentinel/sentinelRight.png"],
    ];
    this.porks = [];
    this.keyPostion = [930, 470];
    this.chestPostion = [522, 220];
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
        this.canvasSize.w - (this.canvasSize.w / 6.3) * 4.85,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 3,
        this.canvasSize.h / 5 / 50,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 4.6,
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
        this.canvasSize.w - this.canvasSize.w / 1.2,
        this.canvasSize.h / 6,
      ],
      [
        this.canvasSize.w - (this.canvasSize.w / 6.3) * 5,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5,
        this.canvasSize.w - this.canvasSize.w / 3.3,
        this.canvasSize.h / 6,
      ],
      [
        0,
        this.canvasSize.h - (this.canvasSize.h / 6) * 3,
        this.canvasSize.w - this.canvasSize.w / 5.1,
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
        this.canvasSize.w - (this.canvasSize.w / 7) * 5.86,
        this.canvasSize.h - (this.canvasSize.h / 6) * 5.01,
        48,
        this.canvasSize.w / 4,
      ],

      [
        this.canvasSize.w - this.canvasSize.w / 5,
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
    this.chests.push(new Chest(this.ctx, this.canvasSize, 930, 470));
    this.keysItems.push(new Key(this.ctx, this.canvasSize, 522, 240));
  }
  drawAll() {
    this.floors.forEach((e) => e.drawFloor());
    this.walls.forEach((e) => e.drawWall());
    this.stairs.forEach((e) => e.drawStairs());
    this.chests.forEach((e) => e.init());
  }
  clearAll() {}
}

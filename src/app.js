const vikingGame = {
  name: undefined,
  description: undefined,
  version: "1.0.0",
  licence: undefined,
  author: "Daniel Y. and Juan R.",
  canvasTag: undefined,
  ctx: undefined,
  intervalID: undefined,
  canvasSize: {
    w: 1024,
    h: 768,
  },
  levelsMax: 1,
  levels: [],
  floors: [],
  stairs: [],
  doors: [],
  characters: [],
  enemies: [],
  arrows: [],
  keys: [],
  KEYS: {
    CTRL: "Control",
    SPACE: " ",
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    DOWN: "ArrowDown",
    A: "A",
    D: "D",
    S: "S",
    W: "W",
  },
  keysStatus: {
    TAB: undefined,
    SPACE: undefined,
    LEFT: undefined,
    UP: undefined,
    RIGHT: undefined,
    DOWN: undefined,
    A: undefined,
    D: undefined,
    S: undefined,
    W: undefined,
  },
  FPS: undefined,
  framesCounter: 0,
  changeCharacterCount: 1,

  init() {
    setEventListeners(this.KEYS);
    this.setContext();
    this.setDimensions();
    this.createLevels();

    this.saveFloors();
    this.saveStairs();
    this.saveKeys();
    this.saveDoors();
    this.createEnemies();
    this.createCharacters();
    this.start();
  },

  setContext() {
    this.canvasTag = document.querySelector("canvas");
    this.ctx = this.canvasTag.getContext("2d");
  },

  setDimensions() {
    this.canvasTag.setAttribute("width", this.canvasSize.w);
    this.canvasTag.setAttribute("height", this.canvasSize.h);
  },

  createLevels() {
    this.levels.push(new Background(this.ctx, this.canvasSize));
    this.levels.push(new Level1(this.ctx, this.canvasSize));
    this.levels.push(new Level2(this.ctx, this.canvasSize));
    this.levels.push(new Level3(this.ctx, this.canvasSize));
  },
  createEnemies() {
    this.enemies.push(
      new Sentinel(this.ctx, this.canvasSize, 100, 450, 50, 50, 100, "right")
    );
    this.enemies.push(
      new Skeleton(this.ctx, this.canvasSize, 400, 450, 50, 50, 100)
    );
  },
  createCharacters() {
    this.characters.push(
      new Viking1(
        this.ctx,
        this.canvasSize,
        50,
        50,
        this.floors,
        this.stairs,
        this.doors,
        "./img/viking1.png"
      )
    );
    this.characters.push(
      new Viking2(
        this.ctx,
        this.canvasSize,
        50,
        50,
        this.floors,
        this.stairs,
        this.doors,
        "./img/viking1.png"
      )
    );
    this.characters.push(
      new Viking3(
        this.ctx,
        this.canvasSize,
        50,
        50,
        this.floors,
        this.stairs,
        this.arrows,
        this.doors,
        "./img/viking1.png"
      )
    );
  },
  changeCharacter(changeCharacterCount) {
    if (changeCharacterCount === 0) {
      this.characters[0].status = true;
      this.characters[1].status = false;
      this.characters[2].status = false;
    }
    if (changeCharacterCount === 1) {
      this.characters[0].status = false;
      this.characters[1].status = true;
      this.characters[2].status = false;
    }
    if (changeCharacterCount === 2) {
      this.characters[0].status = false;
      this.characters[1].status = false;
      this.characters[2].status = true;
    }
  },

  moveCharacters() {
    this.characters.forEach((e) => {
      e.status === true && e.move(this.keysStatus);
    });
  },
  useHability() {
    if (this.keysStatus.SPACE === true && this.characters[0].status === true) {
      this.characters[0].checkJump(this.keysStatus);
      this.characters[0].jump();
    }
    if (this.framesCounter % 100 === 0) {
      if (
        this.keysStatus.SPACE === true &&
        this.keysStatus.RIGHT === true &&
        this.characters[2].status === true
      ) {
        this.characters[2].attack("right");
      } else if (
        this.keysStatus.SPACE === true &&
        this.keysStatus.LEFT === true &&
        this.characters[2].status === true
      ) {
        this.characters[2].attack("left");
      } else if (
        this.keysStatus.SPACE === true &&
        this.keysStatus.UP === true &&
        this.characters[2].status === true
      ) {
        this.characters[2].attack("up");
      } else if (
        this.keysStatus.SPACE === true &&
        this.characters[2].status === true
      ) {
        this.characters[2].attack("right");
      }
    }
  },
  saveFloors() {
    this.levels.forEach((e) => this.floors.push(e.floors));
  },

  saveStairs() {
    this.levels.forEach((e) => this.stairs.push(e.stairs));
  },
  saveKeys() {
    this.levels.forEach((e) => this.keys.push(e.keys));
  },
  saveDoors() {
    this.levels.forEach((e) => this.doors.push(e.doors));
  },

  start() {
    const intervalID = setInterval(() => {
      this.framesCounter > 6001
        ? (this.framesCounter = 0)
        : this.framesCounter++;
      this.clearAll();
      this.drawAll();
      this.moveCharacters();
      this.useHability();
    }, 1000 / this.FPS);
    this.intervalID = intervalID;
  },

  drawAll() {
    this.levels[0].init();
    this.levels[1].init();

    this.characters[0].init(this.framesCounter);
    this.characters[1].init(this.framesCounter);
    this.characters[2].init(this.framesCounter);
    this.enemies[0].init(this.framesCounter);
    this.enemies[1].init(this.framesCounter);
    this.characters[2].arrows.forEach((e) => e.init());
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },
};

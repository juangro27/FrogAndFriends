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
  walls: [],
  stairs: [],
  characters: [],
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
    this.saveWalls();
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
  },

  saveFloors() {
    this.levels.forEach((e) => this.floors.push(e.floors));
  },

  saveStairs() {
    this.levels.forEach((e) => this.stairs.push(e.stairs));
  },

  saveWalls() {
    this.levels.forEach((e) => this.walls.push(e.walls));
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
        this.walls
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
        this.walls
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
        this.walls
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
    if (this.keysStatus.SPACE === true && this.characters[0].status === true) {
      this.characters[0].checkJump(this.keysStatus);
      this.characters[0].jump();
    }
    // }
  },

  start() {
    const intervalID = setInterval(() => {
      this.framesCounter > 5000
        ? (this.framesCounter = 0)
        : this.framesCounter++;
      this.clearAll();
      this.drawAll();
      this.moveCharacters();
    }, 1000 / this.FPS);
    this.intervalID = intervalID;
  },

  drawAll() {
    this.levels[0].init();
    this.levels[1].init();

    this.characters[0].drawAll();
    this.characters[1].drawAll();
    this.characters[2].drawAll();
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },
};

class Background {
  constructor(ctx, canvasSize, characters) {
    this.ctx = ctx;
    this.canvasSize = canvasSize;
    this.floors = [];
    this.stairs = [];
    this.walls = [];
    this.chests = [];
    this.keysItems = [];
    this.keyStatus = true;
    this.background = new Image();
    this.background.src = "./img/background/background1.png";
    this.trunk = new Image();
    this.trunk.src = "./img/trunk/trunkIdle.png";
    this.trunk.frames = 18;
    this.trunk.framesIndex = 0;
    this.trunkHearth = new Image();
    this.trunkHearth.src = "./img/background/hearths.png";
    this.trunkHearth.frames = 3;
    this.trunkHearth.framesIndex = 0;
    this.turtle = new Image();
    this.turtle.src = "./img/turtle/turtleShell.png";
    this.turtle.frames = 14;
    this.turtle.framesIndex = 0;
    this.turtleHearth = new Image();
    this.turtleHearth.src = "./img/background/hearths.png";
    this.turtleHearth.frames = 3;
    this.turtleHearth.framesIndex = 0;
    this.frog = new Image();
    this.frog.src = "./img/frog/frogIdle.png";
    this.frog.frames = 11;
    this.frog.framesIndex = 0;
    this.frogHearth = new Image();
    this.frogHearth.src = "./img/background/hearths.png";
    this.frogHearth.frames = 3;
    this.frogHearth.framesIndex = 0;
    this.sound = new Audio();
    this.sound.src = "./sounds/play1.ogg";
    this.sound.volume = 0.5;
    this.generateBackground();
  }

  init(framesCounter, characters, keysStatus) {
    this.generateBackground();
    this.animate(framesCounter, characters);
    keysStatus.RIGHT && this.sound.play();
  }
  animate(framesCounter, characters) {
    if (framesCounter % 10 === 0) {
      this.trunk.framesIndex++;
      this.turtle.framesIndex++;
      this.frog.framesIndex++;
    }
    if (this.trunk.framesIndex >= this.trunk.frames) {
      this.trunk.framesIndex = 0;
    }
    if (this.turtle.framesIndex >= this.turtle.frames) {
      this.turtle.framesIndex = 0;
    }

    if (this.frog.framesIndex >= this.frog.frames) {
      this.frog.framesIndex = 0;
    }
    if (characters[0].lives === 3) this.frogHearth.framesIndex = 0;
    if (characters[0].lives === 2) this.frogHearth.framesIndex = 1;
    if (characters[0].lives === 1) this.frogHearth.framesIndex = 2;
    if (characters[1].lives === 3) this.turtleHearth.framesIndex = 0;
    if (characters[1].lives === 2) this.turtleHearth.framesIndex = 1;
    if (characters[1].lives === 1) this.turtleHearth.framesIndex = 2;
    if (characters[2].lives === 3) this.trunkHearth.framesIndex = 0;
    if (characters[2].lives === 2) this.trunkHearth.framesIndex = 1;
    if (characters[2].lives === 1) this.trunkHearth.framesIndex = 2;
  }
  generateBackground() {
    this.ctx.drawImage(
      this.background,
      0,
      0,
      this.canvasSize.w,
      this.canvasSize.h
    );
    this.ctx.drawImage(
      this.frog,
      (this.frog.width / this.frog.frames) * this.frog.framesIndex,
      0,
      this.frog.width / this.frog.frames,
      this.frog.height,
      150,
      650,
      64,
      64
    );
    this.ctx.drawImage(
      this.frogHearth,
      (this.frogHearth.width / this.frogHearth.frames) *
        this.frogHearth.framesIndex,
      0,
      this.frogHearth.width / this.frogHearth.frames,
      this.frogHearth.height,
      215,
      665,
      120,
      40
    );
    this.ctx.drawImage(
      this.trunk,
      (this.trunk.width / this.trunk.frames) * this.trunk.framesIndex,
      0,
      this.trunk.width / this.trunk.frames,
      this.trunk.height,
      720,
      650,
      72,
      62
    );
    this.ctx.drawImage(
      this.trunkHearth,
      (this.trunkHearth.width / this.trunkHearth.frames) *
        this.trunkHearth.framesIndex,
      0,
      this.trunkHearth.width / this.trunkHearth.frames,
      this.trunkHearth.height,
      815,
      665,
      120,
      40
    );
    this.ctx.drawImage(
      this.turtle,
      (this.turtle.width / this.turtle.frames) * this.turtle.framesIndex,
      0,
      this.turtle.width / this.turtle.frames,
      this.turtle.height,
      435,
      658,
      60,
      50
    );
    this.ctx.drawImage(
      this.turtleHearth,
      (this.turtleHearth.width / this.turtleHearth.frames) *
        this.turtleHearth.framesIndex,
      0,
      this.turtleHearth.width / this.turtleHearth.frames,
      this.turtleHearth.height,
      520,
      665,
      120,
      40
    );
  }
  drawKey() {
    this.keysItems.forEach((e) => e.init());
  }
  drawAll() {}
}

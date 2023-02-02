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
  actualLevel: 4,
  levels: [],
  floors: [],
  stairs: [],
  chests: [],
  characters: [],
  sentinels: [],
  porks: [],
  arrows: [],
  keysItems: [],
  keys: {
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
  FPS: 360,
  framesCounter: 0,
  changeCharacterCount: 1,

  init() {
    setEventListeners(this.keys);
    this.setContext();
    this.setDimensions();
    this.createLevels();
    this.saveFloors();
    this.saveStairs();
    this.saveKeysItems();
    this.saveChests();
    this.createEnemies(this.actualLevel);
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
    this.levels.push(new Level4(this.ctx, this.canvasSize));
  },

  createEnemies(level) {
    if (this.levels[level].sentinels.length >= 1) {
      this.levels[level].sentinels.forEach((sentinel) =>
        this.sentinels.push(
          new Sentinel(this.ctx, this.canvasSize, ...sentinel)
        )
      );
    }
    if (this.levels[level].porks.length >= 1) {
      this.levels[level].pork.forEach((pork) =>
        this.porks.push(new Pork(this.ctx, this.canvasSize, ...pork))
      );
    }
  },

  createCharacters() {
    this.characters.push(
      new Viking1(
        this.ctx,
        this.canvasSize,
        "./img/frog/frogIdle.png",
        11,
        50,
        50,
        this.actualLevel,
        this.floors,
        this.stairs,
        this.chests,
        this.keysItems,
        this.enemyArrows
      )
    );
    this.characters.push(
      new Viking2(
        this.ctx,
        this.canvasSize,
        "./img/turtle/turtleRight.png",
        14,
        54,
        36,
        this.actualLevel,
        this.floors,
        this.stairs,
        this.chests,
        this.keysItems,
        this.enemyArrows
      )
    );
    this.characters.push(
      new Viking3(
        this.ctx,
        this.canvasSize,
        "./img/trunk/trunkIdle.png",
        18,
        80,
        50,
        this.actualLevel,
        this.floors,
        this.stairs,
        this.chests,
        this.keysItems,
        this.enemyArrows,
        this.arrows
      )
    );
  },

  changeCharacter(changeCharacterCount) {
    this.characters.forEach((character) => (character.status = false));
    this.characters[changeCharacterCount].status = true;
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
      }
    }
    if (this.keysStatus.SPACE === true && this.characters[1].status === true) {
      this.characters[1].shell();
    }
  },

  saveFloors() {
    this.levels.forEach((e) => this.floors.push(e.floors));
  },

  saveStairs() {
    this.levels.forEach((e) => this.stairs.push(e.stairs));
  },

  saveKeysItems() {
    this.levels.forEach((e) => this.keysItems.push(e.keysItems));
  },

  saveChests() {
    this.levels.forEach((level) => this.chests.push(level.chests));
  },

  checkChests() {
    let charactersInChest = 0;
    this.characters.forEach((character) => {
      character.isInChest() && charactersInChest++;
    });
    return charactersInChest === this.characters.length;
  },

  takeKeysItem() {
    if (this.characters.some((element) => element.checkKey())) {
      this.characters.forEach((character) => {
        character.haveKey = true;
      });

      this.levels[this.actualLevel].keysItems.splice(0, 1);
    }
  },

  finishLevel() {
    return (
      this.checkChests() &&
      this.characters.some((character) => character.haveKey)
    );
  },
  restartLevel(actualLevel, characters) {
    characters.forEach((character) => {
      this.changeCharacterPosition(character, actualLevel);
      character.isDead = false;
      character.lives = 3;
      character.haveKey = false;
      console.log(character);
    });
    this.porks.splice(0);
    this.sentinels.splice(0);
    this.createEnemies(actualLevel);
  },
  checkHitBoxTwoElements(characters, enemyArrows) {
    let colisionArray = undefined;
    characters.forEach((character) => {
      if (enemyArrows.length >= 1) {
        if (getHitBoxElements(enemyArrows, character))
          colisionArray = getHitBoxElements(enemyArrows, character);
      }
    });
    return colisionArray;
  },

  removeArrow(enemyElement, arrow) {
    const arrowIndex = enemyElement.arrows.indexOf(arrow);
    if (arrowIndex !== -1) {
      enemyElement.arrows.splice(arrowIndex, 1);
    }
  },

  receiveDamage(characters, enemy, enemyElement) {
    if (enemyElement) {
      if (this.checkHitBoxTwoElements(characters, enemy)) {
        const colisionObject = this.checkHitBoxTwoElements(characters, enemy);
        const arrow = colisionObject[0][0];
        const character = colisionObject[1][0];
        this.removeArrow(enemyElement, arrow);
        if (character.isEnemy === true) {
          character.lives -= 1;
          if (character.lives <= 0) {
            character.isDead = true;
            const enemyIndex = this.sentinels.indexOf(character);
            this.sentinels.splice(enemyIndex, 1);
          }
        }
        if (character.isVulnerable) {
          console.log(character.lives);

          if (!character.usingShell) {
            character.lives -= 1;
          }
          if (character.lives <= 0) {
            return this.restartLevel(this.actualLevel, this.characters);
          }
          character.isVulnerable = false;
          setTimeout(() => {
            character.isVulnerable = true;
          }, 2000);
        }
      }
    } else {
      if (this.checkHitBoxTwoElements(characters, enemy)) {
        const colisionObject = this.checkHitBoxTwoElements(characters, enemy);
        const character = colisionObject[1][0];
        if (character.isVulnerable) {
          console.log(character.isVulnerable);
          console.log(character.usingShell);
          if (!character.usingShell) character.lives -= 1;
          if (character.lives <= 0) {
            return this.restartLevel(this.actualLevel, this.characters);
          }
          character.isVulnerable = false;
          setTimeout(() => {
            character.isVulnerable = true;
          }, 2000);
        }
      }
    }
  },
  changeCharacterPosition(character, level) {
    character.position.x = this.levels[level].charactersInitialPosition.x;
    character.position.y = this.levels[level].charactersInitialPosition.y;
  },
  changeLevel(levelToChange, characters) {
    characters.forEach((character) => {
      this.changeCharacterPosition(character, levelToChange);
      character.isDead = false;
      character.lives = 3;
      character.haveKey = false;
    });
    this.sentinels.splice(0);
    this.porks.splice(0);
    this.createEnemies(levelToChange);
  },
  isDead(character) {
    character.isDead = true;
    let count = 0;
    !character.isEnemy &&
      this.characters.forEach((character) => character.isDead && count++);

    return count;
  },

  start() {
    const intervalID = setInterval(() => {
      this.framesCounter > 6001
        ? (this.framesCounter = 0)
        : this.framesCounter++;
      this.clearAll();
      if (this.finishLevel()) {
        this.actualLevel += 1;
        this.changeLevel(this.actualLevel, this.characters);
      }
      this.drawAll();
      this.moveCharacters();
      this.useHability();
    }, 1000 / this.FPS);
    this.intervalID = intervalID;
  },

  drawAll() {
    this.levels[0].init(this.framesCounter, this.characters, this.keysStatus);
    this.levels[this.actualLevel].init();
    this.takeKeysItem();
    this.characters.forEach((character) =>
      character.init(this.framesCounter, this.actualLevel)
    );
    this.characters[2].arrows.forEach((e) => e.init());
    this.sentinels.forEach((sentinel) => sentinel.init(this.framesCounter));
    this.porks.forEach((pork) => pork.init(this.framesCounter));

    this.sentinels.forEach((sentinel) =>
      this.receiveDamage(this.characters, sentinel.arrows, sentinel)
    );
    this.receiveDamage(
      this.sentinels,
      this.characters[2].arrows,
      this.characters[2]
    );
    this.receiveDamage(
      this.porks,
      this.characters[2].arrows,
      this.characters[2]
    );
    this.receiveDamage(this.characters, this.sentinels);
    this.receiveDamage(this.characters, this.porks);
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },
};

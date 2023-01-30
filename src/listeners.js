function setEventListeners(KEYS) {
  // console.log(characters);
  // console.log(levels);
  // const characterSpecs = {
  //   w: characters[0].vikingSize.w,
  //   h: characters[0].vikingSize.h,
  //   x: characters[0].position.x,
  //   y: characters[0].position.y,
  // }
  // console.log(character);

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case KEYS.UP:
        vikingGame.keysStatus.UP = true;
        break;
      case KEYS.RIGHT:
        vikingGame.keysStatus.RIGHT = true;
        break;
      case KEYS.LEFT:
        vikingGame.keysStatus.LEFT = true;
        break;
      case KEYS.DOWN:
        vikingGame.keysStatus.DOWN = true;
        break;
      case KEYS.SPACE:
        vikingGame.keysStatus.SPACE = true;
        break;
      case KEYS.CTRL:
        vikingGame.changeCharacter(vikingGame.changeCharacterCount);
        vikingGame.changeCharacterCount >= 2
          ? (vikingGame.changeCharacterCount = 0)
          : vikingGame.changeCharacterCount++;

        break;
      case KEYS.A:
        vikingGame.keysStatus.A = true;
        break;
      case KEYS.S:
        vikingGame.keysStatus.S = true;
        break;
      case KEYS.D:
        vikingGame.keysStatus.D = true;
        break;
      case KEYS.W:
        vikingGame.keysStatus.W = true;
        break;
      default:
        break;
    }
  });
  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case KEYS.UP:
        vikingGame.keysStatus.UP = false;
        break;
      case KEYS.RIGHT:
        vikingGame.keysStatus.RIGHT = false;
        break;
      case KEYS.LEFT:
        vikingGame.keysStatus.LEFT = false;
        break;
      case KEYS.DOWN:
        vikingGame.keysStatus.DOWN = false;
        break;
      case KEYS.SPACE:
        vikingGame.keysStatus.SPACE = false;
        break;
      case KEYS.A:
        vikingGame.keysStatus.A = false;
        break;
      case KEYS.S:
        vikingGame.keysStatus.S = false;
        break;
      case KEYS.D:
        vikingGame.keysStatus.D = false;
        break;
      case KEYS.W:
        vikingGame.keysStatus.W = false;
        break;
      default:
        break;
    }
  });
}

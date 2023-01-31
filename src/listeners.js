function setEventListeners(keys) {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case keys.UP:
        vikingGame.keysStatus.UP = true;
        break;
      case keys.RIGHT:
        vikingGame.keysStatus.RIGHT = true;
        break;
      case keys.LEFT:
        vikingGame.keysStatus.LEFT = true;
        break;
      case keys.DOWN:
        vikingGame.keysStatus.DOWN = true;
        break;
      case keys.SPACE:
        vikingGame.keysStatus.SPACE = true;
        break;
      case keys.CTRL:
        vikingGame.changeCharacter(vikingGame.changeCharacterCount);
        vikingGame.changeCharacterCount >= 2
          ? (vikingGame.changeCharacterCount = 0)
          : vikingGame.changeCharacterCount++;

        break;
      case keys.A:
        vikingGame.keysStatus.A = true;
        break;
      case keys.S:
        vikingGame.keysStatus.S = true;
        break;
      case keys.D:
        vikingGame.keysStatus.D = true;
        break;
      case keys.W:
        vikingGame.keysStatus.W = true;
        break;
      default:
        break;
    }
  });
  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case keys.UP:
        vikingGame.keysStatus.UP = false;
        break;
      case keys.RIGHT:
        vikingGame.keysStatus.RIGHT = false;
        break;
      case keys.LEFT:
        vikingGame.keysStatus.LEFT = false;
        break;
      case keys.DOWN:
        vikingGame.keysStatus.DOWN = false;
        break;
      case keys.SPACE:
        vikingGame.keysStatus.SPACE = false;
        break;
      case keys.A:
        vikingGame.keysStatus.A = false;
        break;
      case keys.S:
        vikingGame.keysStatus.S = false;
        break;
      case keys.D:
        vikingGame.keysStatus.D = false;
        break;
      case keys.W:
        vikingGame.keysStatus.W = false;
        break;
      default:
        break;
    }
  });
}

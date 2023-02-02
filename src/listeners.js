function setEventListeners(keys) {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case keys.UP:
        frogAndFriends.keysStatus.UP = true;
        break;
      case keys.RIGHT:
        frogAndFriends.keysStatus.RIGHT = true;
        break;
      case keys.LEFT:
        frogAndFriends.keysStatus.LEFT = true;
        break;
      case keys.DOWN:
        frogAndFriends.keysStatus.DOWN = true;
        break;
      case keys.SPACE:
        frogAndFriends.keysStatus.SPACE = true;
        break;
      case keys.CTRL:
        frogAndFriends.changeCharacter(frogAndFriends.changeCharacterCount);
        frogAndFriends.changeCharacterCount >= 2
          ? (frogAndFriends.changeCharacterCount = 0)
          : frogAndFriends.changeCharacterCount++;

        break;
      case keys.A:
        frogAndFriends.keysStatus.A = true;
        break;
      case keys.S:
        frogAndFriends.keysStatus.S = true;
        break;
      case keys.D:
        frogAndFriends.keysStatus.D = true;
        break;
      case keys.W:
        frogAndFriends.keysStatus.W = true;
        break;
      default:
        break;
    }
  });
  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case keys.UP:
        frogAndFriends.keysStatus.UP = false;
        break;
      case keys.RIGHT:
        frogAndFriends.keysStatus.RIGHT = false;
        break;
      case keys.LEFT:
        frogAndFriends.keysStatus.LEFT = false;
        break;
      case keys.DOWN:
        frogAndFriends.keysStatus.DOWN = false;
        break;
      case keys.SPACE:
        frogAndFriends.keysStatus.SPACE = false;
        break;
      case keys.A:
        frogAndFriends.keysStatus.A = false;
        break;
      case keys.S:
        frogAndFriends.keysStatus.S = false;
        break;
      case keys.D:
        frogAndFriends.keysStatus.D = false;
        break;
      case keys.W:
        frogAndFriends.keysStatus.W = false;
        break;
      default:
        break;
    }
  });
}

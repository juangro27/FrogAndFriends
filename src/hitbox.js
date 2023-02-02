function checkHitBox(levelElements, level, subjectSize, subjectPosition, type) {
  const arrayLevelElements = levelElements[level].map((elm) => {
    if (
      subjectPosition.x < elm.position.x + elm.size.w &&
      subjectPosition.x + subjectSize.w > elm.position.x &&
      subjectPosition.y < elm.position.y + elm.size.h &&
      subjectSize.h + subjectPosition.y > elm.position.y
    ) {
      if (type === "floor")
        subjectPosition.y = elm.position.y - subjectSize.h + 1;
      return true;
    } else {
      return false;
    }
  });
  return arrayLevelElements.some((elm) => elm === true);
}
function getHitBoxElements(arrows, character) {
  if (arrows) {
    const arrayLevelElements = arrows.find((elm) => {
      if (
        character.position.x < elm.position.x + elm.size.w &&
        character.position.x + character.size.w > elm.position.x &&
        character.position.y < elm.position.y + elm.size.h &&
        character.size.h + character.position.y > elm.position.y
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (!arrayLevelElements) return false;
    const colisionArray = [[arrayLevelElements], [character]];
    return colisionArray;
  }
}

function checkHitBox(element, level, vikingSize, vikingPosition) {
  if (element.some((e) => e[level] instanceof Floor)) {
    const floors = element[level].map((e) => {
      if (
        vikingPosition.x < e.position.x + e.size.w &&
        vikingPosition.x + vikingSize.w > e.position.x &&
        vikingPosition.y < e.position.y + e.size.h &&
        vikingSize.h + vikingPosition.y > e.position.y
      ) {
        vikingPosition.y = e.position.y - vikingSize.h + 1;
        return true;
      } else {
        return false;
      }
    });
    return floors.some((e) => e === true);
  }
  if (element.some((e) => e[level] instanceof Stair)) {
    const stairs = element[level].map((e) => {
      if (
        vikingPosition.x < e.position.x + e.size.w &&
        vikingPosition.x + vikingSize.w > e.position.x &&
        vikingPosition.y < e.position.y + e.size.h &&
        vikingSize.h + vikingPosition.y > e.position.y
      ) {
        return true;
      } else {
        return false;
      }
    });
    return stairs.some((e) => e === true);
  }
  if (element.some((e) => e[level] instanceof Wall)) {
    const walls = element[level].find((e) => {
      if (
        vikingPosition.x < e.position.x + e.size.w &&
        vikingPosition.x + vikingSize.w > e.position.x &&
        vikingPosition.y < e.position.y + e.size.h &&
        vikingSize.h + vikingPosition.y > e.position.y
      ) {
        return e;
      } else {
        return false;
      }
    });

    return walls;
  }
}

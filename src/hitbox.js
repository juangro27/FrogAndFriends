function checkHitBox(levelElements, level, vikingSize, vikingPosition, type) {
  const arrayLevelElements = levelElements[level].map((elm) => {
    if (
      vikingPosition.x < elm.position.x + elm.size.w &&
      vikingPosition.x + vikingSize.w > elm.position.x &&
      vikingPosition.y < elm.position.y + elm.size.h &&
      vikingSize.h + vikingPosition.y > elm.position.y
    ) {
      if (type === "floor")
        vikingPosition.y = elm.position.y - vikingSize.h + 1;
      return true;
    } else {
      return false;
    }
  });
  return arrayLevelElements.some((elm) => elm === true);
}

// function checkHitBox(levelElements, level, vikingSize, vikingPosition) {
//   if (levelElements[level].some((elm) => elm instanceof Floor)) {
//     const floors = levelElements[level].map((elm) => {
//       if (
//         vikingPosition.x < elm.position.x + elm.size.w &&
//         vikingPosition.x + vikingSize.w > elm.position.x &&
//         vikingPosition.y < elm.position.y + elm.size.h &&
//         vikingSize.h + vikingPosition.y > elm.position.y
//       ) {
//         vikingPosition.y = elm.position.y - vikingSize.h + 1;
//         return true;
//       } else {
//         return false;
//       }
//     });
//     return floors.some((elm) => elm === true);
//   }
//   if (levelElements[level].some((elm) => elm instanceof Stair)) {
//     const stairs = levelElements[level].map((elm) => {
//       if (
//         vikingPosition.x < elm.position.x + elm.size.w &&
//         vikingPosition.x + vikingSize.w > elm.position.x &&
//         vikingPosition.y < elm.position.y + elm.size.h &&
//         vikingSize.h + vikingPosition.y > elm.position.y
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     return stairs.some((elm) => elm === true);
//   }

//   if (levelElements[level].some((elm) => elm instanceof Key)) {
//     const keys = levelElements[level].map((elm) => {
//       if (
//         vikingPosition.x < elm.position.x + elm.size.w &&
//         vikingPosition.x + vikingSize.w > elm.position.x &&
//         vikingPosition.y < elm.position.y + elm.size.h &&
//         vikingSize.h + vikingPosition.y > elm.position.y
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     return keys.some((elm) => elm === true);
//   }

//   if (levelElements[level].some((elm) => elm instanceof Door)) {
//     // console.log("in ----");
//     const doors = levelElements[level].map((elm) => {
//       if (
//         vikingPosition.x < elm.position.x + elm.size.w &&
//         vikingPosition.x + vikingSize.w > elm.position.x &&
//         vikingPosition.y < elm.position.y + elm.size.h &&
//         vikingSize.h + vikingPosition.y > elm.position.y
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     return doors.some((elm) => elm === true);
//   } else {
//     return console.log("no se cumple");
//   }
// }

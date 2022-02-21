let count = 1;
let player = 1;
let movement = 1;

while (count < 100) {
  console.log("Player " + player);
  if (count % 7 === 0) {
    movement = movement * -1;
    console.log("              multiple of 7");
  }
  if (count % 11 === 0) {
    player += movement * 2;
    console.log("             multiple of 11");
  } else {
    player += movement;
  }
  if (player > 10) {
    player -= 10;
  } else if (player < 1) {
    player += 10;
  }
  console.log("Number " + count);
  count++;
}
console.log(`Player ${player} says ${count}`);

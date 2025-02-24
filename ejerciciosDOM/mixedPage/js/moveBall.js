
let y = 0;
let x = 0;

export function moveBall(e, stage, ball) {

  let escenario = document.querySelector(stage);
  let bola = document.querySelector(ball);
  let limitBall = bola.getBoundingClientRect();
  let limitStage = escenario.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limitBall.left > limitStage.left) {
        x--;
        e.preventDefault();
      }
      break;
    case 38:
      if (limitBall.top > limitStage.top) {
        y--;
        // Para que no se mueva la barra de scroll
        e.preventDefault();
      }
      break;
    case 39:
      if (limitBall.right < limitStage.right) {
        x++;
        e.preventDefault();
      }
      break;
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        y++;
        e.preventDefault();
      }
      break;
    default:
      break;
  }

  bola.style.transform = `translate(${x * 5}px,${y * 5}px)`

}
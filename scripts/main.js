import { Game } from "/scripts/game.js";
 const canvasTetris = document. getElementById("canvas-tetris");
 const canvasNext = document. getElementById("canvas-next");
 const canvasHold = document. getElementById("canvas-hold");
 const score = document. getElementById("score");
 const menu = document. getElementById("menu");
 const btnmenu = document. getElementById("btn-start");
  const rows = 20;
  const cols = 10;
  const cellSize = 26;
  const space = 2;

  const game = new Game (canvasTetris,rows,cols,cellSize,space,canvasNext,canvasHold);
function upadate(){
  if(game.gameOver){
     menu.style.display = "flex";
  }else{
    game.update();
    score.innerHTML = game.score;
  }
    requestAnimationFrame(upadate);
}
btnmenu.addEventListener("click",()=>{
  setTimeout(() => {
    menu.style.display = "none";
    game.reset();
  },200);

});

upadate();


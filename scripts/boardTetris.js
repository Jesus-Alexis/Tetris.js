import {Grid} from '/scripts/grid.js'


export class BoardTetris extends Grid{
       constructor(canvas, rows, cols, cellSize, space){
        super(canvas, rows, cols, cellSize, space);
       }
       /* Este metodo sirve para verificar si una columana o fila es mayor o igual a cero */
       isInside(row, col){
              return row>=0 && row<this.rows && col>=0 && col<this.cols;
       }
       /* Este metodo es para verificar si una celda o una columna es igual a cero */
       isEmpty(row,col){
          return this.isInside(row,col) && this.matriz[row][col] === 0;
       }
       /* Este metodo sirve para ver las columans en la matriz sean diferentes de cero */
       isRowFull(row){
              return this.matriz[row].every(element => element !== 0);
       }
       /* Este metodo verifica que una fila este completamente vacia */
       isRowEmpty(row){
              return this.matriz[row].every(element => element === 0);
       }
       /* Este metodo sirve para limpiar una fila */
       clearRow(row){
        this.matriz[row].fill(0);
       }
       moveRowDown(row, numRows){
        this.matriz[row + numRows] = this.matriz[row].slice();
        this.clearRow(row);
       }
       /* Metodo para borrar todas las filas */
       clearFullRows(){
       let cont = 0;

       for(let row = this.rows-1; row>=0; row--){
              if(this.isRowFull(row)){
                     this.clearRow(row);
                     cont++;
              }else if(cont > 0){
                   this.moveRowDown(row,cont);
              }
        }
        return cont;
  }
  /* Metodo para fin del juego */
  gameOver(){
   return !(this.isRowEmpty(0));
  }
}
export class BoardNext extends Grid{
  constructor(canvas,rows,cols,cellSize,space,listTetrominos){
       super(canvas, rows, cols, cellSize, space);
       this.listTetrominos = listTetrominos;
       this.updateMatriz();
  }
  updateMatriz(){
       this.restartMatriz();
       let cont = 0;
       for(let i=0; i<this.listTetrominos.length; i++){
              const shape = this. listTetrominos[i].currentShape();
              for (let j = 0; j<shape.length;j++){
                     this.matriz[shape[j].row +cont][shape[j].column] = this.listTetrominos[i].id;
              }
              cont+=3;
       }
  }
}
export class BoardHold extends Grid{
  constructor(canvas,rows,cols,cellSize,space,listTetrominos){
       super(canvas, rows, cols, cellSize, space);
       this.tetromino = null;
       this.updateMatriz();
  }
  updateMatriz(){
       if(this.tetromino==null) return;
       this.tetromino.reset();
       this.restartMatriz();
       const shape = this.tetromino.currentShape();
       for(let i = 0; i < shape.length; i++){
          this.matriz[shape[i].row][shape[i]]
       }
     }
  }
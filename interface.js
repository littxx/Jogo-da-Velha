document.addEventListener("DOMContentLoaded", () => {
    

    let squares = document.querySelectorAll(".square");

   
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})




function handleClick(event) {
    let square = event.target;
    let position = square.id;

   if( handleMove(position)){
   
    setTimeout(()=>{
        if(playerTime == 0){
            playerTime = `Abroba`
        }else  {
            playerTime = "Caveira"
        }  
        alert(`${playerTime} Venceu`)        
        
    },30)
   }
    updateSquares(position);

}
function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class = '${symbol}'></div>`
}
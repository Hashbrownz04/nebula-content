const background = document.querySelector('body');
const square = document.querySelector('.square')
let clicked = 0;

square.addEventListener("click", (event) => {
    if(event.target == square && clicked == 0){
        background.style.backgroundColor = "orange";
        clicked = 1;
    }
    else if(event.target == square && clicked == 1){
        background.style.backgroundColor = "yellow";
        clicked = 2;
    }
    else if(event.target == square && clicked == 2){
        background.style.backgroundColor = "green";
        clicked = 3;
    }
    else if(event.target == square && clicked == 3){
        background.style.backgroundColor = "blue";
        clicked = 4;
    }
    else if(event.target == square && clicked == 4){
        background.style.backgroundColor = "purple";
        clicked = 5;
    }
    else if(event.target == square && clicked == 5){
        background.style.backgroundColor = "black";
        clicked = 6;
    }
    else if(event.target == square && clicked == 6){
        background.style.backgroundColor = "white";
        clicked = 7;
    }
    else if(event.target == square && clicked == 7){
        background.style.backgroundColor = "red";
        clicked = 0;
    }
})
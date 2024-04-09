const square = document.querySelector('.square');
let clicked = 0;

square.addEventListener("click", (event) => {
    if(event.target == square && clicked == 0){
        square.style.backgroundColor = "orange";
        clicked = 1;
    }
    else if(event.target == square && clicked == 1){
        square.style.backgroundColor = "yellow";
        clicked = 2;
    }
    else if(event.target == square && clicked == 2){
        square.style.backgroundColor = "green";
        clicked = 3;
    }
    else if(event.target == square && clicked == 3){
        square.style.backgroundColor = "blue";
        clicked = 4;
    }
    else if(event.target == square && clicked == 4){
        square.style.backgroundColor = "purple";
        clicked = 5;
    }
    else if(event.target == square && clicked == 5){
        square.style.backgroundColor = "black";
        square.style.color = "white";
        clicked = 6;
    }
    else if(event.target == square && clicked == 6){
        square.style.backgroundColor = "white";
        square.style.color = "black";
        clicked = 7;
    }
    else if(event.target == square && clicked == 7){
        square.style.backgroundColor = "red";
        clicked = 0;
    }
})
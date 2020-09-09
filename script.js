let numbers = document.querySelectorAll('.number'); //Selects all numbers and stores them in a variable for looping
let message = document.getElementById('message'); //message that will display when user guesses correctly/incorrectly
let numberContainer = document.querySelectorAll('.number_container');

//resets game
function game() {
    for (let z = 0; z < numberContainer.length; z++) {
        numberContainer[z].style.display = "block";
        }
    message.textContent = "Guess The Number";
    count = 6;
    let randomNumber = Math.floor(Math.random(1) * 12.9); //randomized number is stored in a variable
    console.log(randomNumber);
    return randomNumber;
}

let count = 6; //count for timer

//Loop through all numbers and add event listeners to each
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function() {
        for (let z = 0; z < numberContainer.length; z++) {
        numberContainer[z].style.display = "none";
        }
        //checks if the number clicked by the user is equal to the random number
        if (numbers[i].textContent == game) { 
            let timer = setInterval(function() {
                if (count == 1) {
                    clearInterval(timer);
                    game();
                } else {
                    count--;
                    message.textContent = "Correct! Resetting in " + count;
                }
            }, 1000);
        } else {
            let timer = setInterval(function() {
                if (count == 1) {
                    clearInterval(timer);
                    game();
                } else {
                    count--;
                    message.textContent = "Incorrect! Resetting in " + count;
                }
            }, 1000);
        }
    });
}






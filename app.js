let secretNumber = randomNumber();
let attempts = 1;
function displayTextOnScreen ( tag, text )
{
    let field = document.querySelector( tag );
    field.innerHTML = text;
}

displayTextOnScreen( 'h1', 'Game of secret number.' );
displayTextOnScreen( 'p', 'Choose a number the 1 and 10.' );
function checkKick() {
    let kick = document.querySelector( 'input' ).value;

    if ( kick == secretNumber ){
        displayTextOnScreen( 'h1', 'He got it right.' );
        let attemptsWord = attempts > 1 ? 'attempts' : 'attempt';
        let attemptsMessage = `You discovered the secret number after ${attempts} ${attemptsWord}.`;
        displayTextOnScreen( 'p', attemptsMessage );
    } else{
        if (kick > secretNumber) {
            displayTextOnScreen( 'p', 'The secret number is smaller' );
        } else{
            displayTextOnScreen( 'p', 'The secret number is higher' );
        }
        attempts++;
        clearField();
    }
}

function randomNumber() {
    return parseInt( Math.random() * 10 + 1 );
}

function clearField() {
    kick = document.querySelector( 'input' );
    kick.value = '';
}

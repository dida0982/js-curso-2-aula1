let secretNumber = randomNumber()

function displayTextOnScreen ( tag, text )
{
    let field = document.querySelector( tag );
    field.innerHTML = text;
}

displayTextOnScreen( 'h1', 'Game of secret number.' );
displayTextOnScreen( 'p', 'Choose a number the 1 and 10.' );
function checkKick() {
    let kick = document.querySelector( 'input' ).value;

    if ( kick == secretNumber )
    {
        displayTextOnScreen( 'h1', 'Acertou' );
    }
}

function randomNumber() {
    return parseInt( Math.random() * 10 + 1 );
}

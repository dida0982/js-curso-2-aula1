function displayTextOnScreen(tag, text) {
    let field = document.querySelector( tag );
    field.innerHTML = text;
}

displayTextOnScreen( 'h1', 'Game of secret number.' );
displayTextOnScreen( 'p', 'Choose a number the 1 and 10.' );
function checkKick(params) {
    console.log('The button was clicked ');

}

function randomNumber(params) {
    parseInt( Math.random() * 10 + 1 );
}

// Select color input
const colorPicker = document.querySelector( 'input#colorPicker' );
const table = document.querySelector( 'table#pixelCanvas' );
const submitButton = document.querySelector( 'form#sizePicker>[type="submit"]' );

let width = 0;
let height = 0;
let color = colorPicker.value;

colorPicker.addEventListener( 'change', function( event ) {
    color = colorPicker.value;
});


// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function( event ) {
    event.preventDefault();

    // Select size input
    width = document.querySelector( 'form#sizePicker>#inputWidth' ).value;
    height = document.querySelector( 'form#sizePicker>#inputHeight' ).value;

    makeGrid();
});


function makeGrid() {
    let grid = '';

    table.innerHTML = null;
    for( var i=0; i<height; i++ ) {
        let row = '';
        for( var j=0; j<width; j++ ) {
            row += '<td></td>';
        }

        grid += '<tr>'+row+'</tr>';
    }

    table.innerHTML = grid;

    table.querySelectorAll('td').forEach( function( td ) {
        td.addEventListener('click', function(event) {
            this.style.backgroundColor = color;
        })
    } );
}

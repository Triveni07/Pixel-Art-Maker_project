const table = $('#pixelArtCanvas');

/*
  This function creates a table of grid for canvas:
  returns number of rows and columns of specified number
*/
function makeGrid() {
    const height = Number($('#input_height').val());
    const width = Number($('#input_width').val());
    for (let i = 0; i < height; i++) {
      let row = "<tr></tr>";
        table.append(row);
    }
    for (let i = 0; i < width; i++) {
      let column = "<td></td>";
        $('tr').append(column);
    }
}
// function to clear grid
function clearGrid() {
    table.html('');
}

//This is a callback parameter that is a function that will be executed after the button is submitted:
$(document).ready(function() {
    $('#gridInput').submit(function(i) {
        i.preventDefault();
        clearGrid();
        makeGrid();
        // adding color to the table cells
        $(table).on('click', 'td', function() {
            let selectedColor = $('#gridColorInput').val();
            $(this).css('background', selectedColor);
        });
        // Removing  color from cells
        $(table).on('dblclick', 'td', function() {
            $(this).css('background', 'transparent');
        });
    });
});

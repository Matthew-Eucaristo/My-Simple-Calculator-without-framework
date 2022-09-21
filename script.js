$(function () {
    // Document ready function
    console.log('start website');

    // to make 0 in textfield
    $('#result').val('0');


});

// Add function (to add to the input box) (for operands)
function add(val) {
    // replace 0 to number
    let value = $('#result').val();

    if (value == '0') {
        // to append value to inputtext
        $('#result').val(val);
    } else {
        // to append value to inputtext
        $('#result').val($('#result').val() + val);
    }

    cap_limit();


}

// to clear input text
function clearall() {
    $('#result').val('0');
}

// function to get results
function get_result() {
    // using math.js library
    $('#result').val(math.evaluate($('#result').val()));

    cap_limit();
}

// function for operators
function addition() {
    add('+');
}

function subtraction() {
    add('-');
}

function multiply() {
    add('*');
}

function division() {
    add('/');
}

// to cap limit of digits
function cap_limit() {
    let value = $('#result').val();
    let max_digit = 10;

    if (value.length > max_digit) {
        $('#result').val(value.slice(-max_digit));
    }
}
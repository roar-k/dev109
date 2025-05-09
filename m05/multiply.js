var operator = 'multiplication'; // Type of calculation
var i = 1; // Set counter to 1
var msg =  '<h2>Multiplication Table</h2>'; // Message

// Asks the user to enter a number between 1 to 10
var table = parseInt(prompt("Enter a from 0 to 10: "));

// Changes null or NaN to 0
if (table == NaN || table == null) {
  table = 0;
}

  // Do multiplication
while (i < 11) {
  msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

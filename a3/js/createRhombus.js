// Creates a rhombus in 4 sections based on the user's choices on 4 inputs
function createRhombus(height, colorEven, colorOdd, symbol) {
  // Clears previous rhombus parts
  document.getElementById("upLeft").innerHTML = "";
  document.getElementById("upRight").innerHTML = "";
  document.getElementById("downLeft").innerHTML = "";
  document.getElementById("downRight").innerHTML = "";
  
  upLeft(height, colorEven, colorOdd, symbol);
  upRight(height, colorEven, colorOdd, symbol);
  downLeft(height, colorEven, colorOdd, symbol);
  downRight(height, colorEven, colorOdd, symbol);
}

// Top left of the rhombus
function upLeft(height, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (i = 0; i < height; i++) {
    rLine += "<p>";

    // Using &nbsp to add a space before symbols to align the rhombus
    for (s = 0; s < height - i - 1; s++) 
      rLine += "&nbsp;&nbsp;";
    
    // Create each line on the Rhombus
    for (j = 0; j <= i; j++) {
      // Even
      if (j % 2)
        rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
      // Odd
      else
        rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("upLeft").innerHTML = rLine;
}
  
// Top right of the rhombus
function upRight(height, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (i = 0; i < height; i++) {
    rLine += "<p>";

    // Create each line on the Rhombus
    for (j = 0; j <= i; j++) {
      // Even
      if (j % 2)
        rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
      // Odd
      else
        rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("upRight").innerHTML = rLine;
}

// Bottom left of the rhombus
function downLeft(height, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (i = height; i > 0; i--) {
    rLine += "<p>";

    // Using &nbsp to add a space before symbols to align the rhombus
    for (s = 0; s < height - i; s++) 
      rLine += "&nbsp;&nbsp;";
    
    // Create each line on the Rhombus
    for (j = 0; j < i; j++) {
      // Even
      if (j % 2)
        rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
      // Odd
      else
        rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("downLeft").innerHTML = rLine;
}

// Bottom right of the rhombus
function downRight(height, colorEven, colorOdd, symbol) {
  var rLine = "";
  for (i = height; i > 0; i--) {
    rLine += "<p>";

    // Create each line on the Rhombus
    for (j = 0; j < i; j++) {
      // Even
      if (j % 2)
        rLine += "<span style='color:" + colorEven + ";'>" + symbol + "</span>";
      // Odd
      else
        rLine += "<span style='color:" + colorOdd + ";'>" + symbol + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("downRight").innerHTML = rLine;
}

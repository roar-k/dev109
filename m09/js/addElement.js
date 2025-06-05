function addItem() {
  var input = document.getElementById('newItem');
  var value = input.value;
  var message = document.getElementById('message');

  while (true) {
    try {
      // Catches null entry value
      if (!value) {
        throw "Null input";
      }

      // Create a new element and store it in a variable.
      var newEl = document.createElement('li');

      // Create a text node and store it in a variable.
      var newText = document.createTextNode(value);

      // Attach the new text node to the new element.
      newEl.appendChild(newText);

      // Find the position where the new element should be added.
      var position = document.getElementsByTagName('ul')[0];

      // Insert the new element into its position.
      position.appendChild(newEl);
    }

    // Catches errors and writes an error to the console
    catch (e) {
      console.log(e);
    }

    // Writes an error message that the entry was empty
    finally {
      if (!value) {
        message.textContent = "Entry was empty";
        break;
      }
      
      // EXTRA CREDIT: Clear the textbox after each item is added
      input.value = "";
    }
    break;
  }
}
      


      

      

      

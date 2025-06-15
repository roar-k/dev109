function replay() {
  location.reload();
}

// List of all items that can be found
const itemList = [
  "Trophy", "Violin", "Frogman", "Umbrella", "Globe",
  "Key", "Stapler", "Pencil", "Belt", "Lock",
  "Phone", "Pepper", "Dart", "Shell", "Clover",
  "Flute", "Peanut", "GolfBall", "Apple", "Bell",
  "Feather"
];

// Variable to keep track of how much items are found
var found = 0;

// Total number of items in the list
const total = itemList.length;

// Loop through each item in the list and add a click event
itemList.forEach(id => {
  document.getElementById(id).addEventListener('click', () => {
    foundItem(id);
  });

  // Loop through each item in the list and add a click event to the image map areas
  document.getElementById("item-" + id).addEventListener('click', (event) => {
    event.preventDefault();
    foundItem(id);     
  });
});

// Crosses out the item from the list if found
function foundItem(id) {
  document.getElementById(id).style.textDecoration="line-through";

  // Increases the found count by 1
  found++;
  
  // If all items are found, prompts if they want to replay again
  if (found == total) {
    if (confirm("You found all the items! Play again?")) {
      replay();
    }
  }
}

// Prevents the page from jumping when clicked
document.querySelectorAll('area').forEach(area => {
  area.onclick = function(event) {
    event.preventDefault();
  };
});

function Bear() {
  this.dBear = 100;
  this.htmlElement = document.getElementById("bear");
  this.is = this.htmlElement.id;
  this.x = this.htmlElement.offsetLeft;
  this.y = this.htmlElement.offsetTop;

  this.move = function(xDir, yDir) {
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
  };

  this.display = function() {
    this.htmlElement.style.left = this.x + "px";
    this.htmlElement.style.top = this.y + "px";
    this.htmlElement.style.display = "block";
  };
}

function start() {
  // Create Bear
  bear = new Bear();

  // Add an event listener to the keypress event
  document.addEventListener("keydown", moveBear, false);
}

// Handle keyboard events to move the bear
function moveBear() {
  // Codes of the four keyboard keys
  const KEYUP = 38;
  const KEYDOWN = 40;
  const KEYLEFT = 37;
  const KEYRIGHT = 39;

  // Up key
  if (e.keyCode == KEYUP) {
    bear.move(0, -1);
  }

  // Down key
  if (e.keyCode == KEYDOWN) {
    bear.move(0, 1);
  }

  // Left key
  if (e.keyCode == KEYLEFT) {
    bear.move(-1, 0);
  }

  // Right key
  if (e.keyCode == KEYRIGHT) {
    bear.move(1, 0);
  }
}

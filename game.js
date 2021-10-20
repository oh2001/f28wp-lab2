function Bear() {
  this.dBear = 100;
  this.htmlElement = document.getElementById("bear");
  this.is = this.htmlElement.id;
  this.x = this.htmlElement.offsetLeft;
  this.y = this.htmlElement.offsetTop;

  this.move = function(xDir, yDir) {
    // This function keeps the bear within the board
    this.fitBounds();
    this.x += this.dBear * xDir;
    this.y += this.dBear * yDir;
    this.display();
  };

  this.display = function() {
    this.htmlElement.style.left = this.x + "px";
    this.htmlElement.style.top = this.y + "px";
    this.htmlElement.style.display = "block";
  };

  this.fitBounds = function() {
    let parent = this.htmlElement.parentElement;
    let iw = this.htmlElement.offsetWidth;
    let iw = this.htmlElement.offsetHeight;
    let l = parent.offsetLeft;
    let t = parent.offsetTop;
    let w = parent.offsetWidth;
    let h = parent.offsetHeight;

    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > w - iw) {
      this.x = w - iw;
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > h - ih) {
      this.y = h - ih;
    }
  };
}

function start() {
  // Create Bear
  bear = new Bear();

  // Add an event listener to the keypress event
  document.addEventListener("keydown", moveBear, false);
}

// Handle keyboard events to move the bear
function moveBear(e) {
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

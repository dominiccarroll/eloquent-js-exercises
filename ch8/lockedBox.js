var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };

// the exercise

  function withBoxUnlocked(body) {
    var keepLocked = true;
    if (box.locked == false) {
        keepLocked = false;
    } else {
        box.unlock();
    }

    var result;
    try {
        result = body();
    } catch(e) {
        console.log("Error: " + e);
    } finally {
        if (keepLocked) {
        box.lock();
        }
    }
  }
// provided code

  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  console.log(box.locked);
  // → true
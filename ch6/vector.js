function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vect) {
  this.x = this.x + vect.x;
  this.y = this.y + vect.y;
}

Vector.prototype.minus = function(vect) {
  this.y = this.y - vect.y;
  this.x = this.x - vect.x;
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return Math.sqrt((this.x-0)^2 + (this.y-0)^2);
  }
})

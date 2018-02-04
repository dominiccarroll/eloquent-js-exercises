function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
    var done = false;
    var result;
    while(done == false) {
        try {
            result = primitiveMultiply(a, b);
            done = true;
        } catch(e) {
            done = false;
        }
    }

    return result;
}

console.log(reliableMultiply(8, 8));
// → 64
function createCounter(initialValue = 0) {
  const _initVal = initialValue;
  let value = _initVal;

  return {
    increment: () => {
      value = value + 1;
      return value;
    },
    decrement: () => {
      value = value - 1;
      return value;
    },
    getValue: () => value,
    reset: () => {
      value = _initVal;
      return value;
    },
  };
}

const counter = createCounter(10);
const counter2 = createCounter(10);

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.getValue());  
counter.reset();
console.log(counter.getValue());
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    let i = 0;
    const combinedArgs = presetArgs.map(arg =>
      arg === partial.placeholder ? laterArgs[i++] : arg
    );
    return fn(...combinedArgs, ...laterArgs.slice(i));
  };
}

const _ = partial.placeholder = Symbol('placeholder');

const greet = (greeting, name, punctuation) =>
  `${greeting}, ${name}${punctuation}`;

const sayHello = partial(greet, 'Hello');
console.log(sayHello('Kim', '!'));

const greetKim = partial(greet, _, 'Kim');
console.log(greetKim('Hi', '?'));

const askKim = partial(greet, _, 'Kim', '?');
console.log(askKim('How are you'));
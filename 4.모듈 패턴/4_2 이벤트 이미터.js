function createEventEmitter() {
  const listeners = {};

  const self = {
    on: (event, callback) => {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(callback);
    },
    off: (event, callback) => {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter(cb => cb !== callback);
    },
    emit: (event, ...args) => {
      if (!listeners[event]) return;
      listeners[event].forEach(cb => cb(...args));
    },
    once: (event, callback) => {
      const onceHandler = (...args) => {
        callback(...args);
        self.off(event, onceHandler);
      };
      self.on(event, onceHandler);
    }
  };
  return self;
}

const emitter = createEventEmitter();
const handler = (data) => console.log('Received:', data);
emitter.on('message', handler);
emitter.emit('message', 'Hello');
emitter.emit('message', 'World');
emitter.off('message', handler);
emitter.emit('message', 'Silent');
emitter.once('login', (user) => console.log('Welcome:', user));
emitter.emit('login', 'Kim');
emitter.emit('login', 'Lee');
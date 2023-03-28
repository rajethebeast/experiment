const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('newEvent', (message)=>{
    console.log(`Message: ${message}`);
});

emitter.emit('newEvent', 'Hello Bub!');
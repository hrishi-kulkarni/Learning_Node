const EventEmitter = require('events');
//const emitter = new EventEmitter();

//register listener - should be before raising event
/*emitter.on('messageLogged',(arg) => {
    console.log('Listener called with '+arg['id']+'  '+arg['url']);
});*/

//Raised event in logger.js
//emitter.emit('messageLogged', {id:1, url: 'http://'});

const Emitter = require('./logger');
const emitter = new Emitter();
emitter.on('messageLogged', (arg) => {
    console.log('Event triggered');
    console.log(arg);
});

emitter.log('message');
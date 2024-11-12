const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('timer', () => {
 console.log("Timer is complete")
})

setTimeout(() => {
    customEmitter.emit('timer') 
}, 5000
);

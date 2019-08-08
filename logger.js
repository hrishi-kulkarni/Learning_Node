//Use remote logging service for logging msg
//HTTP req to server - logging as a service

var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter
{
    log(message)
    {
        //send HTTP req
        //for now c.l
        console.log(message);
        this.emit('messageLogged', {id:1, url: 'http://'});
    }
}

//module.exports.log = log;
module.exports=Logger;
// module.exports.endPoint = url;
/*
function sayHello(name)
{
    console.log("hello "+name);
}

sayHello("Hrishikesh!");
//console.log(window);        //window is not defined!
var v=100;
console.log(global.v);
console.log(module);
*/
/*
const logger = require('./logger');
console.log(logger);
logger('message from app');
//logger.log('message from app');*/

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');
var totalMemory = os.totalmem();
console.log('totalmemory: '+totalMemory);
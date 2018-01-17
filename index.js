//var http = require('http');
//var handle = require('./handle');
//var name = require('./user');

var events = require('events');
var emiter = new events.EventEmitter();

emiter.on('say' , say);

function say(){
    console.log('Im saying...');
}

emiter.emit('say');



//var name = http.createServer(name.ser);

//name.listen(3333, function(){
 //   console.log('Server is listening as port 3333');
//});

//console.log(name.user);

// console.log(name.email())

// var server = http.createServer(handle.lari);

// server.listen(3006, function(){
//     console.log('Server is listening as port 3005');
// });

// console.log(handle);
const EventEmitter =require('events');

const myEmitter=new EventEmitter();

myEmitter.emit('TEST_EVENT');

myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST_EVENT was fired');
});

myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST_EVENT was fired');
});

myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST_EVENT was fired');
});
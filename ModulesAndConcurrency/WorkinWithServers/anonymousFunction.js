const http=require('http');

const requestListsner = (req,res) => {
    res.end('Hello World\n');
};

const server =http.createServer(requestListsner);
server.on('request',requestListsner);

//calling the function

//vs

//refernce of the function --- holds the refernce for the function
//resquest side/respoonse side 


server.listen(4242,()=>{
    console.log('Serevr is listening');
});
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
var myargs = process.argv.slice(2);


server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
    let dt=(new Date()).toISOString();
    //const message = Buffer.from(dt);
    server.send(dt, rinfo.port, rinfo.address, (err) => {
        //server.close();
        console.log(err);
      });
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port} time=>${dt}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});


if(myargs.length===0)
{
    server.bind(44302);
}
else 
{   let numPort=myargs[0];
    server.bind(numPort);
}
const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});

wss.on("connection", ws=> {
    console.log("New client connected!");

    ws.on("message", data => {
        console.log(`Client has sent use: ${data}`);
        ws.send(data);
    });

    ws.on("close", ()=>{
        console.log("Client has disconnected");
    });

    setInterval(()=>{
        ws.send('we are still connected bro');
    }, 1500)
});


console.log("hello world");
const worker = new Worker("worker.js")// it' reference to our webworker file
//referencja to onmessage, after we receive respond from webworker
worker.onmessage = function (message){
    alert(message.data);
}


const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", e =>{
    worker.postMessage("hello how've you been?",window);//sending message to weborker
});

bgButton.addEventListener("click", e =>{
    if(document.body.style.background !== "green"){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "blue";
    }
})
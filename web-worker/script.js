console.log("hello world");
const worker = new Worker("worker.js")// podajemy sciezke do naszego skryptu dla web workera
//referencja do worker.onmessage :D
worker.onmessage = function (message){
    alert(message.data);
}


const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", e =>{
    worker.postMessage("hello how've you been?",window);//wyslanie info do webworkera
});

bgButton.addEventListener("click", e =>{
    if(document.body.style.background !== "green"){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "blue";
    }
})
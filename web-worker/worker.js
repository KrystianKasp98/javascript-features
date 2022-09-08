// this function will run when it receives a message
onmessage = function(message){
    // self in webworker file is reference to webworker, we can't manipulate DOM it's just for doing complicated calculations
    let sum = 0;
        for (let i=0; i< 2500000000; i++){
            sum+=i;
        }
    //it returns sum;
    postMessage(sum);
}
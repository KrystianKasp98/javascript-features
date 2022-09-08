onmessage = function(message){
    //self jest referencja do workera, ciekawostka jest ze globalny obiekt tutaj to worker a w zwyklym pliku js z ktorego nie jest tworzony worker, globalny obiekt to window :D, wiec nawet self nie trzeba uzywac wystarczy samo onmessage zamiast self.onmessage
    // console.log(message);//zwraca nam cala otoczke
    let sum = 0;
        for (let i=0; i< 2500000000; i++){
            sum+=i;
        }
    //it returns sum;
    postMessage(sum);
}
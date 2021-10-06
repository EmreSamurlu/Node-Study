const arguments = process.argv.slice(2)

function primeNum(lowNum, highNum) {
    for (let i = lowNum; i <= highNum; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++){
            if(i%j=== 0 && i !== j){
                isPrime = false;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

primeNum(arguments[0] *1, arguments[1] *1)
//console.log(process.argv[1]);
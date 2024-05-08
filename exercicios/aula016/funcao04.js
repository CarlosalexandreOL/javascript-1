function fatorial(num){
    let fato = 1
    for(c = num; c > 1; c--){ 
        fato *= c
    }
    return fato
}

console.log(fatorial(5))


// 5! = 5 x 4 x 3 x 2 x 1 = 120
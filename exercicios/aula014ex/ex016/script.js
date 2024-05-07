function contar(){
    let i = document.querySelector('input#ini')
    let f = document.querySelector('input#fin')
    let p = document.querySelector('input#pass')

    let res = document.querySelector('div#res')

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'impossivel contar!'
    }else {
        res.innerHTML = 'Contando...<br>'
        let ini = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)
        if(passo <= 0 ){
            alert('passo invalido! considerando PASSO 1')
            passo = 1
        }
        if(ini < fim){
            //contagem crescente
            for(let c = ini; c <= fim; c += passo){
                res.innerHTML +=`${c} \u{1F449}`
            }
    
        }else {
            //contagem regressiva
            for(let c = ini; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }          
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
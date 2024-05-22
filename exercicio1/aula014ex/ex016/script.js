function contar(){
    var ini = document.getElementById('inicio')
    var fin = document.getElementById('fim')
    var paso = document.getElementById('passo')
    var res = document.getElementById('resultado')

    if(ini.value.length == 0 || fin.value.length == 0 || paso.value.length == 0){
        alert('[ERRO] faltam Dados!')
        res.innerHTML = 'Impossivel contar'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(paso.value)
        if(p <= 0){
            alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente...
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //Contagem regressiva...
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}

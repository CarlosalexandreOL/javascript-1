function Gerar(){
    var nu = document.querySelector('input#num')
    var tab = document.querySelector('select#seltab')
    if(nu.value.length == 0 ){
        window.alert('Por favor digite um numero!')
        
    }else{
        var n = Number(nu.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++ 
            
            
        }
    }
    
}
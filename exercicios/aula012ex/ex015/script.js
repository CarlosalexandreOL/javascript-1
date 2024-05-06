function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#nasc')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] vefique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './foto-bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './foto-jovem-m.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './foto-homem-ad.png')
            }else{
                //idoso
                img.setAttribute('src', './foto-idoso-m.png')
            }
        } else if(fsex[1].checked){
            gênero = 'mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', './foto-jovem-f.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', './foto-mulher-ad.png')
            }else{
                //idosa
                img.setAttribute('src', './foto-idosa-f.png')
            }

        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
let btn = document.querySelector('#botao');

btn.onclick = function() {
    let inicio = document.getElementById('ini');
    let final = document.getElementById('fim');
    let pass = document.getElementById('passo');
    let resu = document.getElementById('res');

    if (inicio.value.length == 0){
        window.alert(`Adicione um número para o "INÍCIO!"`)
        inicio.focus();
    }
    else if (final.value.length == 0 || final.value == 0){
        window.alert(`O "FIM" não pode ser igual a 0 ou ser deixado em BRANCO!`);
        final.focus();
    }
    else if (pass.value.length == 0 || pass.value == 0){
        window.alert(`PASSO inválido! Estaremos considerando o PASSO, como 1!`)
        pass.value = 1;

        let ini = Number(inicio.value);
        let fim = Number(final.value);
        let passo = Number(pass.value);

        if (ini <= fim){
            resu.innerHTML = '';
            for(ini; ini <= fim; ini += passo){
                resu.innerHTML += ini;
            }
        }
        else if (ini >= fim){
            resu.innerHTML = '';
            for(ini; ini >= fim; ini -= passo){
                resu.innerHTML += ini;
            }
        }
    }
    else {
        
        let ini = Number(inicio.value);
        let fim = Number(final.value);
        let passo = Number(pass.value);

        if (ini <= fim){
            resu.innerHTML = '';
            for(ini; ini <= fim; ini += passo){
                resu.innerHTML += ini;
            }
        }
        else if (ini >= fim){
            resu.innerHTML = '';
            for(ini; ini >= fim; ini -= passo){
                resu.innerHTML += ini;
            }
        }   
    }
}
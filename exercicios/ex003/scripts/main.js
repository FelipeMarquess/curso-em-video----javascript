var botao = window.document.getElementById('botao');
botao.addEventListener('click', contar);


function contar(){
    var inicio = Number(window.document.getElementById('inicio').value);
    var fim = Number(window.document.getElementById('fim').value);
    var passo = Number(window.document.getElementById('passo').value);
    var res = window.document.getElementById('res');
    
    res.innerHTML = `Contando: <br>`;
    
    if (inicio == 0 || fim == 0){
        window.alert('[ERRO] Faltam DADOS!');
        res.innerHTML = `Impossivel contar...`;
    } else {
            if (passo == 0){
                // Quando o passo for informado com um valor 0!
                window.alert('Passo inválido! Considerando o PASSO 1!');
                passo = 1;
            }
            if(inicio < fim){
                //ORDEM CRESCENTE
                while(inicio <= fim){
                    res.innerHTML += `${inicio} &#x1F449 `;
                    inicio += passo;
                }
            } else {
                //ORDEM DECRESCENTE
                while(inicio >= fim){
                    res.innerHTML += `${inicio} &#x1F449 `;
                    inicio -= passo;
            }
        }
        res.innerHTML += `&#x1F3C1`;
    }
}
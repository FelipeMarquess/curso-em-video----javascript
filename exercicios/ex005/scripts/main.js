var num = document.getElementById('txt1'); //O input que recebe o número (string)
var resu = document.getElementById('resu'); //O elemento aonde será colocado o resultado geral.
var valo = document.getElementById('valores');//O select aonde serão colocado os options de maneira dinâmica.
var valores = [];

var botao = window.document.getElementById('botao');
botao.addEventListener('click', adicionar);

function adicionar(){
    var n1 = Number(num.value);
    if(n1 == 0 || valores.indexOf(n1) != -1 || n1 > 100 || n1 < 1){
        window.alert('Valor inválido, ou já encontrado na lista!')
    } else{
        valores.push(n1); //populando meu array valores.
        var atr = document.createElement('option');
        atr.text = `Valor ${n1} adicionado.`
        valo.appendChild(atr);
        resu.innerHTML = '';
    }
    num.value = ''; //Vai apagar o número da caixa de texto do usuário. 
    num.focus(); //Vai colocar o curso pra piscar novamente sobre o input selecionado.
}

var finalizar = document.getElementById('finalizar');
finalizar.addEventListener('click', finaliza);

function finaliza(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else{
        var maior = valores[0];
        var menor = valores[0];
        var soma = 0;
        var media = 0;
        for (var pos in valores){
            soma += valores[pos];
            if (valores[pos] > maior){
                maior = valores[pos];
            }
            if (valores[pos] < menor){
                menor = valores[pos];
            }
        }
        media = soma / valores.length;
        resu.innerHTML = '';
        resu.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`;
        resu.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resu.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resu.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        resu.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}

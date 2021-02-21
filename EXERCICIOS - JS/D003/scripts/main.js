let btn = document.querySelector('#botao');

function retorno (){
    let n1 = window.prompt(`Digite um número inteiro qualquer:`);
        if (n1 === ""){
            window.alert(`Digite algum número!`);
        }
        else {
            window.alert(`Antes de ${n1}, temos o número ${Number(n1) - 1}. \nDepois de ${n1}, temos o número ${Number(n1) + 1}.`)
            // O "\n" é utilizado para quebrar uma linha no JS.
        }
}

btn.addEventListener('click', retorno);
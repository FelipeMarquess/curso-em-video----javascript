var btn = document.querySelector('#botao');

function retorno() {
    let nome = window.prompt(`Qual é o seu nome?`);
    let idade = window.prompt(`Olá, ${nome}! Quantos anos você tem?`);
    window.alert(`Acabei de conhecer o ${nome}, que tem ${idade} anos de idade!`);
}

btn.addEventListener('click', retorno);
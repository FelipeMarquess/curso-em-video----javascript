var bt1 = document.getElementById('botao1');
var bt2 = document.getElementById('botao2');
var bt3 = document.getElementById('botao3');

bt1.onclick = function () {
    return window.alert(`Você clicou no 1° Botão!`);
}

bt2.onclick = () => window.alert(`Você clicou no 2° Botão!`); //Usando uma ARROW FUNCTION

//USANDO O ADDEVENTLISTENER

function retorno () {
    return window.alert(`Você clicou no 3° Botão!`);
}

bt3.addEventListener('click', retorno);
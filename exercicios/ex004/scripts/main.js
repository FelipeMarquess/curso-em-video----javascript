var botao = window.document.getElementById('botao');
botao.addEventListener('click', tabuada);

function tabuada(){
    //var number = Number(window.document.querySelector('input#txt').value); //Já pega o valor digitado dentro do input, converte pra um valor do tipo number e armazena-o dentro da váriavel 'number'.
    var number = window.document.querySelector('input#txt')
    var numero = Number(number.value);
    var res = window.document.getElementById('table');
    res.innerText = ``; //vai "zerar o valor dentro da div..."
    if(number.value.length == 0){
           window.alert('Por favor, digite um número!') 
    } else {
        for(var teste = 1; teste <= 10; teste++){
            var opcao = window.document.createElement('option');
            opcao.text = `${numero} x ${teste} = ${numero * teste}`;
            res.appendChild(opcao);
        }
    }
}
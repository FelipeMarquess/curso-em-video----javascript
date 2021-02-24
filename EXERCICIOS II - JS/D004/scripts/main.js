let btn = document.getElementById('botao');
btn.addEventListener('click', gerarTabela);

function gerarTabela(){
    let num = document.getElementById('numero');
    let table = document.getElementById('tabela');

    if (num.value == 0 || num.value.length === 0){
        window.alert(`Digite um número válido!`)
        num.focus();
    }
    else {
        table.innerHTML = '';
        let c = 1;
        while (c <= 10){
            let opc = document.createElement('option');
            opc.text = `${num.value} x ${c} = ${num.value * c}`;
            table.appendChild(opc);
            c++;
        }
    }
    /* else {
        table.innerHTML = '';
        for (c = 1; c <= 10; c++){
            let opc = document.createElement('option');
            opc.text = `${num.value} x ${c} = ${num.value * c}`;
            table.appendChild(opc);
        }
    }
    */
}
let btn = document.getElementById('btn');
btn.addEventListener('click', verificar);

function verificar(){
    let resu = document.getElementById('res');
    let anoAtual = new Date().getFullYear(); //Pegando a data atual do sistema.
    let anoNascimento = document.getElementById('ano'); //Pegando o ELEMENTO INPUT HTML!
    let nascimento = anoNascimento.value //Pegando o valor que foi atribuido a esse elemento HTML INPUT.
    let genero = document.getElementsByName('rad');
    

    if(anoNascimento.value.length == 0 || nascimento > anoAtual){
        window.alert(`Adicione uma ano de nascimento válido!`)
        anoNascimento.focus();
    }
    else {
        let imagem = document.createElement('img');
        let idade = anoAtual - nascimento;
        let gene = ''; 

        if (genero[0].checked == true){
            gene = 'Homem';

            if (idade <= 14) {
                imagem.src = `./imagens/crianca-h.png`;
            }
            else if (idade <= 18) {
                imagem.src = `./imagens/jovem-h.png`;
            }
            else if (idade <= 60) {
                imagem.src = `./imagens/adulto-h.png`;
            }
            else {
                imagem.src = `./imagens/idoso-h.png`;
            }
        }
        else if (genero[1].checked == true){
            gene = 'Mulher';

            if (idade <= 14) {
                imagem.src = `./imagens/crianca-m.png`;
            }
            else if (idade <= 18) {
                imagem.src = `./imagens/jovem-m.png`;
            }
            else if (idade <= 60) {
                imagem.src = `./imagens/adulto-m.png`;
            }
            else {
                imagem.src = `./imagens/idoso-m.png`;
            }
        }
        resu.innerHTML = `<p>Detectamos ${gene} com ${idade} anos.</p>`;
        imagem.setAttribute('rel', 'foto');
        resu.appendChild(imagem);
        anoNascimento.focus();
    }
    
}   
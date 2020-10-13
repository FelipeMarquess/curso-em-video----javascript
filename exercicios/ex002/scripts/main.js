var botao = window.document.getElementById('botao');
botao.addEventListener('click', verificar);

function verificar(){
    var year = new Date().getFullYear();
    var ano = Number(window.document.getElementById('ano').value);
    var resu = window.document.getElementById('resu');

    if (ano == 0 || ano >= year){
        window.alert('[ERRO] Coloque uma data válida!');
    } else {
        var img = document.createElement('img'); //cria uma tag img para ser usada no html e coloca-a dentro da variavel img.
        img.setAttribute('id', 'foto'); //coloca um ATRIBUTO NA TAG, no caso o id da tag img, sera foto.
        var fsex = window.document.getElementsByName('radsex');
        var idade = year - ano;
        var genero = '';
        if(fsex[0].checked){ //O '== true', nesse caso é opcional
                genero = 'Homem';
                if (idade >= 0 && idade <= 10){
                    //CRIANÇA
                    img.setAttribute('src', './imagens/crianca-h.png');
                } else if (idade < 21){
                    //JOVEM
                    img.setAttribute('src', './imagens/jovem-h.png');
                } else if (idade < 50){
                    //ADULTO
                    img.setAttribute('src', './imagens/adulto-h.png');
                } else {
                    //IDOSO
                    img.setAttribute('src', './imagens/idoso-h.png');
                }
                resu.innerHTML = `<p>Detectamos um ${genero}, com ${idade} anos!</p>`
        } else if(fsex[1].checked == true){ //O '== true', nesse caso é opcional
                genero = 'Mulher';
                if (idade >= 0 && idade <= 10){
                    //CRIANÇA
                    img.setAttribute('src', './imagens/crianca-m.png');
                } else if (idade < 21){
                    //JOVEM
                    img.setAttribute('src', './imagens/jovem-m.png');
                } else if (idade < 50){
                    //ADULTO
                    img.setAttribute('src', './imagens/adulto-m.png');
                } else {
                    //IDOSO
                    img.setAttribute('src', './imagens/idoso-m.png');
                }
                resu.innerHTML = `<p>Detectamos uma ${genero}, com ${idade} anos!</p>`
        }
        resu.style.textAlign = 'center';
        resu.appendChild(img); //appendChild coloca dentro de um elemento HTML um outro elementro HTML!
    }      
}
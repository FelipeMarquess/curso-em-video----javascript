function carregar(){
    var txt = window.document.getElementById('txt');
    var imagem = window.document.querySelector('img#imagem');
    var hora = new Date().getHours();

    txt.innerHTML = `Agora são <strong>${hora} horas!</strong>`;
    
    if (hora < 5){
        imagem.src = './imagens/madrugada.png';
        document.body.style.background = '#000000'
    } else if (hora < 12){
        imagem.src = './imagens/manha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora < 18){
        imagem.src = './imagens/tarde.png';
        document.body.style.background = '#b9846f';
    } else if (hora <= 23){
        imagem.src = './imagens/noite.png';
        document.body.style.background = '#515154'
    }
}
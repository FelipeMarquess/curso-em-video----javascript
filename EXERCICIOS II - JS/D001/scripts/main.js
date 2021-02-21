function carregar(){
    let horas = new Date().getHours();
    let mensagem = document.getElementById('msg');
    let imagem = document.getElementById('img');
    
    mensagem.innerHTML = `Agora são <strong>${horas} horas!</horas>`;

    if (horas >= 0 && horas <= 4){
        imagem.src = './imagens/madrugada.png'
        document.body.style.background = '#1C1C1C';
    } else if (horas <= 12){
        imagem.src = './imagens/manha.png';
        document.body.style.background = '#FFD700';
    } else if (horas <= 17){
        imagem.src = './imagens/tarde.png';
        document.body.style.background = '#FF8C00';
    } else if (horas <= 23){
        imagem.src = './imagens/noite.png';
        document.body.style.background = '#696969';
    }
}

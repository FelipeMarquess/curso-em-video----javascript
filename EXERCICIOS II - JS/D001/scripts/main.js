function carregar(){
    let horas = new Date().getHours();
    let mensagem = document.getElementById('msg');
    let imagem = document.getElementById('img');
    let txt = document.createTextNode(`Agora são ${horas} horas.`);
    let img = document.createElement('img');
    if (horas >= 0 && horas <= 4){
        mensagem.appendChild(txt);
        img.setAttribute('src', '');
        imagem.appendChild(img);
        document.body.style.background = '#1C1C1C';
    } else if (horas <= 12){
        mensagem.appendChild(txt);
        img.setAttribute('src', '');
        imagem.appendChild(img);
        document.body.style.background = '#FFD700';
    } else if (horas <= 17){
        mensagem.appendChild(txt);
        img.setAttribute('src', '');
        imagem.appendChild(img);
        document.body.style.background = '#FF8C00';
    } else if (horas <= 23){
        mensagem.appendChild(txt);
        img.setAttribute('src', '');
        imagem.appendChild(img);
        document.body.style.background = '#696969';
    }
}

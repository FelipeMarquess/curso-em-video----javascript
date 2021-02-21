let btn = document.getElementById('botao');

btn.onclick = function () {
    let produto = window.prompt(`Que produto você está comprando?`);
    let custo = window.prompt(`Quanto custa o ${produto} que você está comprando?`);
    let dinheiro = window.prompt(`Qual foi o valor que você deu para pagar o ${produto}?`);
    window.alert(`Você comprou ${produto} que custou R$ ${custo}. \nDeu R$ ${dinheiro} em dinheiro e vai receber R$ ${dinheiro - custo} de troco. \nVolte Sempre!`);
}
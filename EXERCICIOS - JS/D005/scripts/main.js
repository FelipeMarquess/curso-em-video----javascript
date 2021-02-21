let btn = document.getElementById('botao');
let corpo = document.querySelector('#interface');
let conteudo = document.getElementById('conteudo');

function retorno(){
    // conteudo.setAttribute('class', 'teste'); colocando atributos a um elemento HTML.
    conteudo.innerHTML = '';
    let distancia = window.prompt(`Digite uma distância em metros (M):`);
    if (distancia == ""){
        window.alert(`Digite alguma distância!`);
    }
    else {
        let titulo = document.createElement('h2');
        let txt1 = document.createTextNode(`A distância de ${distancia} metros, corresponde a...`)
        conteudo.appendChild(titulo);
        titulo.appendChild(txt1);
        conteudo.innerHTML += `<p>${Number(distancia / 1000)} quilômetros (Km)</p>`;
        conteudo.innerHTML += `<p>${Number(distancia / 100)} hectômetros (Hm)</p>`;
        conteudo.innerHTML += `<p>${Number(distancia / 10)} decâmetros (Dam)</p>`;
        conteudo.innerHTML += `<p>${Number(distancia * 10)} decímetros (dm)</p>`;
        conteudo.innerHTML += `<p>${Number(distancia * 100)} centímetros (cm)</p>`;
        conteudo.innerHTML += `<p>${Number(distancia * 1000)} milímetros (mm)</p>`;
        // titulo.innerHTML = `<em>A distância de ${distancia} metros, corresponde a...</em>`; (COMPREENDE TAG's HTML!)
        // titulo.innerText = `A distância de ${distancia} metros, corresponde a...`; (NÃO COMPREENDE TAG's HTML!)
    }
}


btn.addEventListener('click', retorno); 
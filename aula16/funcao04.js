/*
function fator(x){
    let fato = 1;
    while(x > 1){
        fato *= x;
        x--
    }
    return fato;
}
*/

function fator(x){
    let control = 1;
    for(x ; x > 1; x--){
        control *= x;
    }
    return control;
}

console.log(fator(5))
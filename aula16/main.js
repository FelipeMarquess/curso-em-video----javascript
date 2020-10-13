function parimpar(x){
    if (x % 2 == 0){
        return 'par';
    } else {
        return 'impar';
    }
}

var resu = parimpar(223);
console.log(`O valor é ${resu}`);
console.log(parimpar(11));
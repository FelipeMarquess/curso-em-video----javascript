let num = [5, 8, 2, 9, 3];
/*
for(var c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}`);
}
*/

for(let c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`);
}
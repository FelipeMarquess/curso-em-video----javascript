var agora = new Date().getHours(); //pegar as horas do sistema!
console.log(`Agora são exatamente ${agora} horas.`);

if (agora < 12){
    console.log(`Bom dia!`);
} else if (agora <= 18){
    console.log(`Boa tarde!`);
} else {
    console.log(`Boa noite!`)
}


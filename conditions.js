// if else, else if 

//if võimaldab meil teha otsused kui tingumus in tõene, sis käivitub if plokk, kui tingimus on väär

// if täidab looksulgedes () oleva ploki tingivumus in tõene, kui tingimus on väär, siis if plokk vahele jäetakse

const age = 18
if (age >= 18) { 
    console.log("Taiskasvanu.");
} else {
    console.log("Noor.");
}


const points = 100
if (points >= 90) { 
    console.log("Suurepärane.");
} else if (points >= 50) {
    console.log("Arvestatud!");
} else {
    console.log("Proovi uuesti!.");
}




//3. 
const hasTicket = true;
const hasInvitation = false;
const isBlocked = false;
if ((hasTicket || hasInvitation) && isBlocked) {
    console.LOG("Sissepaas lubatud.");
} else ((hasTicket || hasInvitation) && !isBlocked) {
    console.LOG("Sisse.");

}


//ulesanne
const number = 11
//kontrollime,kas number on paaris või paaritu
if (number % 2 === 0) {
    console.log("Number on paaris");
} else { 
    console.log("Number on paaritus.");
}





















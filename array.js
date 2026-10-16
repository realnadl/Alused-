//massiv on kindlasti jarjekorras olevate vaartuse kogum 
// index - iga vaartusel on oma jarjekorranumber mis algab 0 st /
//lugemine naiteks number [0] - loev esimese vaartuse numver [1] loeb teise vaart
//muutmibe naites number [0] = 10 - muudab esimese vaartuse nuumber [1] = 20 muud 

//push() - lisab uue vaartuse massivi lopppu
//pop() - emaldab viimase vaartuse massiivist 
//forEach() - kaivitab funksiooni iga massiivi vaartuse jaoks
//map() - loob uue massiivi kus iga vaartus on muudetud funksiooni abil
//sort () - serteerib massiivi vaartused 

const fruits = ["apple", "banan", "cherry"];
console. log("fruits: " + fruits);

const number = [1, 2, 3,  4, 5];
console.log("first number: " +number [0])
console.log("second number: " +number [2])
console.log("viimane number: " +number [number.length - 1]);

//asendame massiivi vaartuse
number[2] = 10;
console.log("updated number: " + number );

//lisame massivi vaartuse 
number.push(6);
console.log("number after push" + number);

//emaldame massiivi vaartuse 
number.pop
console.log("number after pop: " + number); //valjasta massiiv parast eemaldamist

//for each() - kaivitab funktsiooni iga massiivi vaartuse jaoks 
number.forEach(Function(number) {
    console.log("number: " + number);
})

//map() - loob uue massivi kus iga vaartus on muudetud funksiooni abil
const doublenumber = number.map(function(number) {
return number * 2; // korrutame iga numbri kahega 
})
console.log("doubled numbers: " + doublenumber);

//massiiv massivis
const table = [
    [1,2,3],
    [4,5,6],

];
console.log ("first row, second columl: " + table [0][1]);

//ulesanne
/*
teil on massiv 
[6,3,8,2,5]
leidke massivist esimine elemnt viimane element.
asendage esimene elemnt vaartusega 10 viimane element vaartusega 20
vialjasta muudetud massiiv konsooli ja selle suurus


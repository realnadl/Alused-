// functions on nimega käskude kogum mis täitab kinlat ulesannet
// funktsioonid aitavad meil koodi korrastada ja koduvkasutada


function sayHello() {          // tolko deklarirovanie
    console.log("Tere!");
}
sayHello(); // kutsume funktriooni vallja
sayHello();
sayHello();


//2. parameetrid ja argumendid 
function greet(name) {
    console.log("Tere, " + name + "!");
}
greet("lolka");
greet("bob");


//3. Tagastamine / return
//return tagastab tulemuse ja lõpetab funktsiooni täitmise
function add (a, b) {
    return a + b;
}

const result = add (5, 10);
console.log("Summa on: " + result);




//4. funktsionaalne avaldus (functionn expression)
const multiply = function (a, b) {
    return a * b;

}
const product = multiply (5,10);
console.log("Toode on: " + product)

//5. arrow function
const divide = (a, b) => {
    return a / b;
}
const quotient = divide (10,2);
console.log("Jagatis on: " + quotient)

//ulesanne
//kirjutage funktsiooni mis votab argumendiks numbris ja tagastab selle numbri ruudu

function rudunumber(a) {
    return a * a;

}
const result2 = rudunumber(5);
console.log("Teie number ruudus: " + result2)


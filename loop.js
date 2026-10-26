//tsükkel on korduv tegevus mis kestab on seni kinu on täidetub mingi tingimus

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("summa on: " + sum);

//2.
for (const number of numbers) {
    console.log(number);
}

//3.
let lives = 3;
while (lives > 0) {
    console.log("Elusid alles:" + lives);
    lives --;
}

//4.
let count = 0;
do { 
    console.log("Loendur: " + count);
count++;
} while (count < 5);


//lopmatu tsukkel
//while (true) {
// console.log ("see tsukkel kestab igavesti!");
//}


//ulesanne
//leidke massivist kõik paaris arvud ja kuvage need konsoolis

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (const num of number) {
    if (num % 2 === 0) {
        console.log(num + " on paaris arv.");
    }
}


//andmetuup ja anmdestrukturr

let age = "25"; //number
console.log("type of age: " +typeof age); //valjasta andmetupp

let name = "Anna"; //number
console.log("type of naame: " +typeof name); //valjasta andmetupp

const isGreater = 10 > 5;
console.log("type of isGreater: " + typeof isGreater);

//muutuga ilma vaartuseta 
let answer;
console.log("type of anwer:" + typeof answer); //tulevus

const emptyvalue = null;
console.log("type of emptyvalue: " +typeof emptyvalue);
console.log(emptyvalue == null); valjasta väärtus

//tuubi teisendamine/võrdlemine
const bb = 5;
const cc = "5"
console.log(bb == cc);

//võrdleme arvude ja stringide liitmist
console.log(5 + 5);
console.log ("5"+"5"); //sting liitmine 

//teisendame string arvuks
const text = "string(25)"; //teisendame arvu string
console.log("tupe of ttext: " + typeof text ); //valjasta adnmetuup

//objektid ja massivid 
const student = {
name:"Johteesti",
 age:20 

};
console.log(student.name); //valjasta objekru omadus

const student2 = {
    name:"Jane",
    age: 22
};
student2.age = 23; //muudame obkelti omadust
student2.shool = "high school"; //lisame uue omaduse
console.log(student2.name, student2.age, student2.shool);

//massiiv
const grades = [90,85,78,92];
console.log("Grades: " + grades [3]); //valjasta massiiv
console.log(Array.isArray(grades)); // kontrollime kas grades on massiiv

//pesastatud obkelt 
const student3 = {
    name: "allice",
    address: {
        city: "New York",
        zip: "10001"
    }

};
console.log(student3.name, student3.address.city, student3.address.zip);


//set
const color = ["red", "green", "blue", "red", "green"];
const unuqueCollor = new Set (color); //loome unikaalsete varvide kompleti
console.log("unique colors: " + Array.from(unuqueCollor)); // valjasta unikaalsed 
console.log(unuqueCollor.has("blue")); //kontrollime kas kompletis on "blue"
console.log(unuqueCollor.size); //valjasta kompleti suurus

//ulesanne
//looge auode makide massiv ,illes on korduvaid elemente.
///leidke Set abil unikaalsed elemendid ja valjastage need konsooli.
//leidke massiv suurus enne ja parast Set-i loomist.

const markid = ["volvo", "skania", "skania", "skania"]
console.log("car markid before Set: " + markid.length);
const uniqueMakid = new Set (markid);
console.log(" uniqueMarkid: " + Array.from(uniqueMakid));
console.log("car markid after Set:" + uniqueMakid.size)



//laualambi sisselulitamine

//reegel: lamp põleb kui elektrivool olemas ja lüliti on sisse lülitatud

const PowerOn = true; // elekter on olemas
const SwitchOn = true; // luliti on sisse lulitatud

const result = PowerOn && SwitchOn; // Kontrollimin, kas lamp põleb
console.log("Kas lamp põleb? " + result); // valjasta tulemus 





//2 Veebitunni avamine
//reegel: tunni avamiseks on vaja internetiuhindust ja linki

//internetiuhendus olemas 
const InternetOn = true;
//link olemas
const HasLink = false;
const result2 = InternetOn && HasLink; // Kontrollime, kas tunni saab avada

console.log ("Kas veebitundi saab avada? " + result2); //valjast tulemus



//&& - loogiline JA (AND) operaator //konjunktsioon
//|| - loogiline VÕI (OR) operaator //disjunktsionn

//3 Ostu eest tasumine
//Reegel: Sulurahas või pangakaardiga 

const CashAvailable = false;
const HasCard = true; 

const result3 = CashAvailable || HasCard; // kontrollime kas saav satuda 
console.log ("Kass saab tasuda?" + result3); // Valjasta tulemus


//4. Teate saamine 
//Reegel: Teate on saadud, kui saabus e-kiri või SMS

const HasEmail= false;
const HasSMS = false; 

const result4 = HasEmail || HasSMS; // kontrollime kas saav teate
console.log ("Kass saab teate?" + result4); // Valjasta tulemus

//5 akna avamine 
//Reegel: Võib avada kui vihma saja

const IsRainting = false; // 
const result5 = !IsRainting;
console.log ("Kas voib avada?" + result5); 

//6. serveri käivitamine 

//Reegel; Vaja on sisselulitatud arvutit paigaldatud operatsioonisusteemi 
//ja käivitamise õigus

const ComputerOn = true; // 
const OSIstalled = true; 
const HasPermissions = false;

const result6 = ComputerOn && OSIstalled && HasPermissions; 

console.log ("Kas serveri saab kaivitada?" + result6); 

//7. kool joudmine 
//reegel kooli saab minna bussi jalgaratta või || vanete autoga


const bussi= true; // 
const  jalgaratta = false; 
const autoga = false;

const result7 = bussi || jalgaratta || autoga;
console.log ("Kas saab kooli jouda?" + result7);


//8 filmi vaatamine 
//reegel vaja on internetiuhendust ning tellimust või ostetud veebisiansipiletid
const InternetOlemas = false;
const Subscription = true;
const HasTiket = true; 

const result8 = InternetOlemas && (Subscription || HasTiket); 

console.log ("Kas film saab vaadata?" + result8);


//9 piknik
//reegel vaja in toitu ninga kuiva ilma või katusega lahtlat

const toitu = true;
const kuivailm = false;
const katus = false; 

const result9 = toitu && (kuivailm || katus); 

console.log ("Kas piknik on võimalik?" + result9);

//10. Uuenduse allalaadimine 
//reegel vaja internet ning ketaruum
// madal akutase koosuhendamata laadijaga keelab allalaadimise 

const InternetConection = true;
const DiskSpace = true; 
const LowBattery = true; 
const ChargerConnected = false;

const result10 = InternetConection && DiskSpace && (!LowBattery || ChargerConnected)

console.log ("Kas uuendamine on võimalik? "  + result10);

//11 valmis tellimus kattesaamine
//reegel tellimus peab olema valimis kuller voi valjastuspunkt saadaval ning valjastaminse blokeerimata
const OrderReady = true; 
const CourierAvailable = false;
const PickupAvailable = true;
const Blocked = false;

const result11 = (OrderReady && !Blocked) && (CourierAvailable || PickupAvailable) 

console.log ("Kas tellimus saab kätte? "  + result11);





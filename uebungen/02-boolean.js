console.log("Booleans");
console.log("========")

console.log("Boolsche Werte sind Wahrheitswerte, die Wahr (true) oder Falsch (false) annehmen können.");

//Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 01");

if(true){
console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false.");
}

console.log("Aufgabe 02");

//In Erweiterung von Aufgabe 01 solol der Ausdruck dynamisch entweder true uder false sein.

let a = 5;

if(a>6){
    console.log("Das ist wahr.");
}else{
    console.log("Das ist falsch.");
}

console.log("Aufgabe 03");

//Wenn die Schülerin 16 oder jünger ist muss sie "fahrradfahren"
//Wenn sie 17 ist darf sie "begleitet fahren"
//Wenn sie 18 ist darf sie "fahren"
//Voraussetzung für das fahren mit dem Auto ist der Führerschein

let alter=19;
let fuehrerschein=false;

if(alter<=16 || fuehrerschein===false){       //Wenn die Schülerin 16 ist ODER keinen Führerschein hat oder beides, dann "Fahrrad"
console.log("muss fahrradfahren")
}
if(alter===17 && fuehrerschein===true){       //Wenn 17 UND Führerschein, dann "begleitet fahren"
    console.log("darf begleitet fahren")
}
if(alter>17 && fuehrerschein===true){       //Wenn älter 17 UND Führerschein, dann "fahren"
    console.log("darf fahren")
}

//Andere Lösung

if(fuehrerschein){   //Führerschein ist bereits true oder false es bedarf keines Vergleichsoperators
    if(alter===17){
        console.log("begleitend fahren")
    }else{
        console.log("fahren")
    }
}else{
    console.log("fahrradfahren")
}
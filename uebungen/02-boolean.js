console.log("Booleans");
console.log("========")

console.log("Boolsche Werte sind Wahrheitswerte, die Wahr (true) oder Falsch (false) annehmen können.");

//Wahrheitswerte kennen wir bereits aus der Wenn-Funktion in Excel.

console.log("Aufgabe 01");
//Weil in dieser Aufgabe die Prüfung immer wahr ist(true), wird immer die Anweisung hinter if ausgeführt, die Anweisung hinter else kommt niemals zur Ausführung
if(true){
console.log("Der Ausdruck ist wahr.")
}else{
    console.log("Der Ausdruck ist unwahr / falsch / false.");
}

console.log("Aufgabe 02");

//In Erweiterung von Aufgabe 01 solol der Ausdruck dynamisch entweder true oder false sein.
//hier wird mit einem Prüfoperator auf wahr oder falsch überprüft
//Prüfoperatoren: 
//==    :Prüfen auf gleichheit im Wert Bsp:(1=='1') true
//===   :prüfung auf gleichheit im Wert und im Typ  Bsp:(1==='1') false
//>    :größer als
//<    :kleiner als
//>=   :größer oder gleich
//<=   :kleiner oder gleich
//
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
//Vorraussetzung für das fahren mit dem Auto ist der Führerschein

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

console.log("Aufgabe 04");
//Zahlen können in Javascript true oder false sein

console.log('Alles mit einem Wert ist true(100; "fahr"; "falsch"; "Hello"; 3.45), alles ohne Wert ist false(0;"";null;-0;NaN)');

let zahl=0;

console.log('Dagestellt wird der Wahrheitswert durch:');
console.log(Boolean(zahl));

if(zahl){
    console.log('Die Zahl'+zahl+'nimmt den boolischen Wert true an')
}else{
    console.log('Die Zahl'+zahl+'nimmt den boolischen Wert false an')
}
//positive Zahlen sind true
//Die Ziffer 0 ist false
//Negative Zahlen sind true

console.log("Aufgabe 05");
//Auf einem Sparkonto soll bei einem positiven Kontostand auf der Konsole stehen: "Zinsen berechnen"
//Wenn kein Guthaben existiert: "keine Zinsen"

let guthaben=500;

if(guthaben){ //auf Prüfoperator kann verzichtet werden, da guthaben schon true oder false ist
    console.log('Zinsen berechnen für Kontostand '+guthaben)
}else{
    console.log('keine Zinsen')
}

console.log("Aufgabe 06");
//Ihr Aufgabentext: 
//Am ende des Jahres soll bei einer Positive Zahl stehen: wir haben gewinn gemacht
//Bei einem umsatz von 0: Wir haben keinen Umsatz gemacht
//Ihre Logik mit if...

let kasse=1000;

if(kasse){
    console.log('Wir haben einen Gewinn von '+kasse)
}else{
    console.log('Wir haben keinen Umsatz erzielt')
}

//In der Bundeslieger gibt es für den Spielausgang Punkte:
//Sieg:3 Punkte
//Unentschieden:1 Punkt
//Niederlage:0 Punkte

let spielausgang="Sieg";
let manschaft="Preußen Münster";

if(spielausgang==="Sieg"){
    console.log('Es gibt 3 Punkte')
}if(spielausgang==="Unentschieden"){
    console.log('Es gibt 1 Punkt')
}if(spielausgang==="Niederlage"){
    console.log('Es gibt 0 Punkte')
}


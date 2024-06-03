console.log("GRUNDLAGEN");
console.log("==========");

console.log('Aufgabe 1');
console.log('erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und 2.');

//Der Wert 1 wird zugewiesen(=) an eine Variable namens a.
let a=1;
let b=2;

//Mit dem + Opperator findet eine String-Verkättung statt.
//Ein String ist eine Zeichenkette, eingerahmt mit ('').
console.log('der Wert der Variable a ist: '+a);

console.log('Aufgabe 2');
console.log('Gib das Ergebnis der Addition von a und b raus.');

//Wenn liks oder rechts vom Plus-Opperator ein String steht, wird verkettet.
//Wenn links und rechts Zahlen stehen wird Addiert.
console.log(a+b);
console.log('Das Ergebnis der Addition: '+(a + b));

console.log('Aufgabe 3');
console.log('Gib das Ergebnis der Subtraktion, Multiplikation, Division von a und b aus.');

console.log('Subtraktion:'+(a-b));
console.log('Multiplikation:'+(a*b));
console.log('Division:'+(a/b));

console.log('Aufgabe 4');
console.log('Der Wert von c sei das Ergebnis der Addition von a und b.');

let c=a+b;
console.log('Der Wert der Variable c ist:'+c);

console.log('Aufgabe 5');
console.log('a und b sind die Seitenlängen der Katheten eines Rechtwinkligen Dreiecks. Bestimme die Länge der Hypotenuse c.');

//cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heist zuerst ein Kleinbuchstabe.Verbundene Wörter beginnen groß.
let cQuadrat=(a*a+b*b);

//Javascript kennt eine Bibliothek namens Math. In der Bibliothek gibt es eine Funtion namens sqrt.
//Als Parameter in den runden Klammern erwartet sqrt die Zahl, aus der dann die Wurzel gezogen wird.
c=Math.sqrt(cQuadrat);
console.log('Die Hypotenuse c ist '+c+' lang.');

console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');

let laufzeit=2;
let startkapital=100;
let zinssatz=0.1; /*Das Komma ist zur Entwicklungszeit ein Punkt.*/

let kapitalNacheinemJahr=startkapital*(1+zinssatz);

console.log('Kapital nach einem Jahr: '+kapitalNacheinemJahr +' EUR.');

let kapitalNachzweiJahren=kapitalNacheinemJahr*(1+zinssatz);
console.log('Nach zwei Jahren bekommt der Kunde '+kapitalNachzweiJahren +' EUR.');

let endkapital=startkapital*Math.pow((1+zinssatz),laufzeit);

console.log('Endkapital nach '+laufzeit +' Jahren:'+endkapital +' EUR');

console.log('Aufgabe 7');
console.log('Die Werte aus der vorherigen Aufgabe werden als Reihe dargestellt');

endkapital=endkapital;
console.log(endkapital);

//Nach dem ersten Jahr erhöt sich das Endkapital um den Faktor 1.1
 endkapital=endkapital*(1+zinssatz);
console.log(endkapital);
//Nach dem zweiten Jahr wird dem Endkapital der Wert des Endkapitals mal 1.1 zugewiesen
endkapital=endkapital*(1+zinssatz);
console.log(endkapital);
//Nach dem dritten Jahr wird dem Endkapital der Wert des Endkapitals mal 1.1 zugewiesen
endkapital=endkapital*(1+zinssatz);
console.log(endkapital);
//Nach dem vierten Jahr wird dem Endkapital der Wert des Endkapitals mal 1.1 zugewiesen
endkapital=endkapital*(1+zinssatz);
console.log(endkapital);


console.log('Aufgabe 8');
console.log('In Aufgabe 7 wurde die Anweisung endkapital=... mehrfach wiederholt. Um sich Tiparbeit zu sparen und die Wiederholung der Anweisung in der gewünschten Häufigkeit durch zu führen, nutzt der Programierer eine Schleife.');

startkapital=100;
endkapital=startkapital;
zinssatz=0.1;
laufzeit=3;

for (let i=0; i<laufzeit;i++) {
    endkapital=endkapital*(1+zinssatz);
    console.log("Endkapital nach Jahr "+ (i+1) + ": " + endkapital + " EUR.");
}

console.log('Aufgabe 9');
console.log('Wenn der Artikel Lebensmittel ist, dann ist die Mehrwertsteuer 7%, ansonsten 19%.');
console.log('In Excel würde das so aussehen:=Wenn(A1="Lebensmittel";7;19)');

let artikel='Handy';

// Anders als in Excel ist das einfache Gleichheitszeichen für eine Zuweisung reserviert. Für einen Vergleich muss in Javascript mit zwei oder drei Gleichheitszeichen gearbeitet werden.
//Wie bei Excel: (Wenn Bedingung)ist gleich? dann das:sonst das;
let mwstSatz= (artikel==="Lebensmittel")?7:19;

console.log('Der MwstSatz für den Artikel '+artikel+' beträgt '+mwstSatz+'%');

console.log('Aufgabe 10');
console.log('Hausaufgabe: Eigene Aufgabe mit eigener Wenn-Funktion (if-else-Ausdruck)')

let geschlecht='w';
let anrede=(geschlecht==='w')?'Frau':'Herr';

console.log('bei dem Geschlecht '+geschlecht+' ist die Anrede '+anrede);


console.log('Wenn der Gesamtbrag des Einkaufes größer oder gleich 100€ ist, beträgt der Rabatt 20%');
console.log('Ansonsten gibt es keinen Rabat');

//Die Variablen werden deklariert und der Gesamtbetrag mit dem Wert 120 initialisiert.
let gesamtbetrag=120;
//Die if-Kontrollstruktur kann zwei Fälle unterscheiden.
let rabatt;

//Wenn die Prüfung in den runden Klammern wahr ist wird der Wert 20 zugewiesen.
if(gesamtbetrag>=100){
    rabatt=20;
}else{
    //Wenn die Prüfung in den runden Klammern unwahr ist, wird der Wert 0 zugewiesen.
    rabatt=0;
}
console.log('Bei einem Gesamtbetrag von '+gesamtbetrag+'€, beträgt der Rabatt '+rabatt+'%.');


console.log('Aufgabe 11');

console.log('Wenn der Gesamtbrag des Einkaufes größer oder gleich 100€ ist, beträgt der Rabatt 20%');
console.log('Wenn der Gesamtbrag des Einkaufes zwischen 50€ und 100€ ist, beträgt der Rabatt 10%');
console.log('Ansonsten gibt es keinen Rabat');

let gesamtbetrag11=90;
let rabatt11;

//Hier werden drei Fälle unterschiden. Dazu muss die If-Kontrollstrucktur geschachtelt werden.
if(gesamtbetrag11>=100){
    rabatt11=20;
}else{
    if(gesamtbetrag11>=50){
        rabatt11=10;
    }else{
       rabatt11=0; 
    }
}
console.log('Bei einem Gesamtbetrag von '+gesamtbetrag11+'€, beträgt der Rabatt '+rabatt11+'%.');


console.log('Aufgabe 12');

console.log('Wenn der Gesamtbrag des Einkaufes größer oder gleich 200€ ist, ist der Versand kostenlos');
console.log('Wenn der Gesamtbrag des Einkaufes zwischen 100€ und 200€ ist, beträgt der Versand 5€');
console.log('Ansonsten kostet der Versand 10€');

gesamtbetrag=100;
let versandkosten;

if(gesamtbetrag>=200){
    versandkosten=0;
}else{
    if(gesamtbetrag>=100){
        versandkosten=5;
    }else{
        versandkosten=10;
    }
};

console.log('Bei einem Gesamtbetrag von '+gesamtbetrag+'€, beträgt der Versand '+versandkosten+'€.')

console.log('Aufgabe 13')
console.log('Frauen ab 18 zahlen 10€ Eintritt. Männer ab 18 zahlen 15€ Eintritt. Minderjährige zahlen 6€ Eintritt.')

 geschlecht='Frau';
let alter=10;
let eintritt;

if(geschlecht==='Frau' && alter>=18){
    eintritt=10;
}
if(geschlecht==='Mann' && alter<18){
    eintritt=15;
}
if(alter<18){
    eintritt=6;
}

console.log('Bei einem alter von '+alter+' Jahren, zahlen eine Person mit Geschlecht '+geschlecht+' '+eintritt+'€.')
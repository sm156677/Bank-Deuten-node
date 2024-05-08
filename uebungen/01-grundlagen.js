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
console.log('Der Wert von c sei das ergebnis der Addition von a und b.');

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

for (let i=0; i<=4;i++) {
    endkapital=endkapital*(1+zinssatz);
    console.log(endkapital);
}
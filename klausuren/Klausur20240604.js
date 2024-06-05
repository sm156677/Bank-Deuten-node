
console.log("Klausur 20240604")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Varibalen mit sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) Berechnen Sie das Volumen eines Würfels mit Hilfe der Grundrechenoperatoren (+ , - , * , /) , bei dem die Kantenlänge mit der Varablen a festgelegt wird.
let a=5
console.log(a*a*a);


// 1b) - Nur Klausurschreiber
// Wiederholen Sie die Berechnung mit Hilfe der Math-Bibliothek, indem Sie die bekannte Funktion .sqrt() verwenden.
let volumen=Math.sqrt(a*a*a*a*a*a);
console.log('Das Volumen beträgt '+volumen+' m');

console.log("Aufgabe 2")
// Für Kreise gilt:
// Flächeninhalt = Pi * Radius²
// Umfang = 2 * pi * Radius
// Durchmesser = 2 * Radius

let radius=12;

// 2a)
// Testschreiber deklarieren pi und initialisieren pi mit dem Wert 3.14.



// Klausurschreiber deklarieren pi und initialisieren pi mit dem Wert aus der bekannten Bibliothek namens Math. Geben Sie Math.PI an, um den Wert von Pi in einer Variablen speichern zu können.
let pi=Math.PI;
console.log('Pi beträgt: '+pi);


// 2b)
// Berechnen Sie Flächeninhalt.
let flaecheninhalt=pi*radius*radius;

console.log('Der Flächeninhalt beträgt: '+flaecheninhalt+' m');


// 2c)
// Berechnen Sie den Umfang

let umfang=2*pi*radius;

console.log('Der Umfang beträgt: '+umfang+' m')

// 2d)
// Berechnen Sie den Durchmesser

let durchmesser=2*radius;

console.log('Der Durchmesser beträgt: '+durchmesser+' m');

console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Listenpreis einer Papierlieferung beträgt 16780,00 EUR; Rabatt 5 %, Mehrwertsteuer 19 %, Skonto 1,5 %.

let listenpreis=16780.00;
let rabattSatz=0.05;
let MwStSatz=0.19;
let skontoSatz=0.015;

// 3a)
// Berechnen Sie den Rabatt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let rabatt=listenpreis*rabattSatz/100;

console.log('Der Rabatt beträgt: '+rabatt+'€');

// 3b)
// Berechnen Sie den Netto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let nettoRechnumgsbetrag=listenpreis-rabatt;

console.log('Der Netto-Rechnungsbetrag beträgt: '+nettoRechnumgsbetrag+'€')

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let MwSt=nettoRechnumgsbetrag*MwStSatz/100;

console.log('Die Mehrwertsteuer beträgt: '+MwSt+'€');

// 3d) - Nur Klausurschreiber
// Berechnen Sie den Brutto-Rechnungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let bruttoRechnungsbetrag=nettoRechnumgsbetrag+MwSt;

console.log('Der Brutto-Rechnungsbetrag beträgt: '+bruttoRechnungsbetrag+'€');

// 3e) - Nur Klausurschreiber
// Berechnen Sie den Skonto in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let skonto=bruttoRechnungsbetrag*skontoSatz/100;

console.log('Der Skonto beträgt: '+skonto+'€');

// 3f) - Nur Klausurschreiber
// Berechnen Sie den Zahlungsbetrag in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.
let zahlungsbetrag=bruttoRechnungsbetrag-skonto;

console.log('Der Zahlungsbetrag umfasst: '+zahlungsbetrag+'€')

console.log("Aufgabe 4")

// Die Allgemeine Zinsformel lautet: Z = K * (p / 100) * ( t / 360)
// Z = Zinsbetrag
// K = Kapital
// p = Zinssatz (in Prozent)
// t = Verzinsungszeit (in Tagen)

// 4a)
// Ein Kunde nimmt bei einer Bank einen Kredit über 5000 € auf. Die Laufzeit beträgt 6 Monate bei einem Zinssatz von 10%. Berechne die Zinszahlungen, die in diesem Zeitraum anfallen. Arbeiten Sie mit Variablen. Antwortsatz!
let kapital=5000;
let zinssatz=0.1;
let verzinsungszeit=183;
let zinsbetrag=kapital*(zinssatz/100)*(verzinsungszeit/360);

console.log('Der Zinsbetrag umfasst '+zinsbetrag+'€')


// 4b) - Nur Klausurschreiber
// Am Jahresende erhält ein Kunde auf dem Sparbuch eine Zinsgutschrift über 500 €. Es befand sich aber lediglich für einen Zeitraum von 3 Monaten Geld auf dem Sparbuch. Der Zinssatz betrug 5%. Welche Geldsumme befand sich auf dem Sparbuch?
zinssatz=0.05;
verzinsungszeit=91;
zinsbetrag=500;
kapital=zinsbetrag/(zinssatz/100)/(verzinsungszeit/360);

console.log('Es befanden sich '+kapital+'€ auf dem Sparbuch');





console.log("Aufgabe 5")

// Der Body-Mass-Index wird laut Wikipedia folgendermaßen berechnet:
// BMI = m / (l²)  
// wobei m die Körpermasse (in Kilogramm) und l die Körperlänge (in Metern) angibt. Der BMI wird also in der Maßeinheit kg/m² angegeben. 

// 5a)
// Erstellen Sie die notwendigen Variablen und weisen Sie beispielhaft Werte zu. 
// Erstellen Sie zusätzlich eine Variable für den Namen der Person.

let m=65;
//l in Metre angeben, sonst kommt nicht das Richtige raus
let l=1.68;
let person= 'Hans';


// 5b)
// Führen Sie die Berechnung durch.
let BMI= m/(l*l);
console.log(m/(l*l));

// 5c) 
// Geben Sie den Antwortsatz nach folgendem Muster aus. Die Werte werden aus den Variablen und der vorherigen Berechnung erzeugt: "Pit hat bei einer Körpergröße von 170 cm und einem Körpergewicht von 68 kg einen BMI von 24."

console.log( person +' hat bei einer Körpergröße von '+l+'m und einem Körpergewicht von '+m+'kg einen BMI von '+BMI);


// 5d - Nur Klausurschreiber
// Interpretieren Sie das Ergebnis aus 5c nach folgender Vorgabe:
// Wenn der BMI zwischen 18,5 und 25 liegt, dann "Normalgewicht". Ansonsten "Untergewicht" oder "Übergewicht".
// Geben Sie eine entsprechende Rückmeldung auf der Konsole aus. Bsp: "Pit hat Normalgewicht." 
// Um die Aufgabe zu lösen, brauchen Sie die "Wenn-Funktion"
// Dazu ein erklärendes Beispiel:
// if (a > b) { console.log("A ist größer als B") }
// if (a <= b) { console.log("A ist kleiner als B oder gleich groß") }    

if(BMI>=18.5){console.log(person+' hat Normalgewicht')}if(BMI<18.5){console.log(person+' hat Untergewicht')}if(BMI>25){console.log(person+' hat Übergewicht')};

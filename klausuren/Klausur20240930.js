console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

class wuerfel {
    constructor() {
        this.seitenlaenge
        this.volumen
    }
}
const wuerfel1 = new wuerfel(
    seitenLaenge=5,
 volumen=seitenLaenge*seitenLaenge*seitenLaenge,
);
 
console.log('Das Volumen des Würfels mit einer Seitenlänge von '+seitenLaenge+'cm beträgt: '+volumen+'cm³.');

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(volumen>=1000){
    console.log('Das Volumen beträgt 1000 oder mehr Quadratzentimeter.');
}else{
    console.log('Das Volumen beträgt weniger als 1000 Quadratzentimeter.')
}



// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.

let kantenlaenge=Math.sqrt(volumen);

console.log('Die Kantenläge des Würfels beträgt: '+kantenlaenge);

console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class

class zeugnis {
    constructor() {
        
        this.deutsch
        this.mathe
        this.englisch
        this.bwl
        this.vwl
        this.spanisch
        this.informatik
        this.religion
        this.klassenbeste
    }
}

// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.
const schueler1 = new zeugnis(
    deutsch=3,
    mathe=1,
    englisch=4,
    bwl=3,
    vwl=2,
    spanisch=5,
    informatik=1,
    religion=4,
);

// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log('Auf dem Zeugnis sind Max Noten: in Deutsch '+deutsch+', in Mathe '+mathe+', in Englisch '+englisch+', in BWL '+bwl+', in VWL'+vwl+', in Spanisch '+spanisch+', in Informatik '+informatik+' und in Religion '+religion+'.')

// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.

let durchschnitt=(deutsch+mathe+englisch+bwl+vwl+spanisch+informatik+religion)/8;

console.log('Der Notendurchschnitt liegt bei ' +durchschnitt+'.');

// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.

let lisa=3;
let tom=4;
let max=5;

if(durchschnitt<Math.min(lisa,tom,max)){
    zeugnis.klasseneste=true;          //es wird eine neue Eigenschaft ergänzt.
    console.log('Lisa hat einen Durschnitt von '+durchschnitt+'. Sie ist Klassenbeste.')
}else{
    zeugnis.klassenbeste=false;
    console.log('Lisa ist mit einem Durchschnitt von '+durchschnitt+' nicht Klassenbeste.')
}



console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class produkt {
    constructor() {
        this.Art
        this.listenpreis                          //Eigenschaften beginnen immer mit Großbuchstaben
        this.rabattProzentsatz                    //Kamelhöckernotation verwenden
        this.rabatt                               //Keine Sonderzeichen im Namen(-; _; <; >...)
        this.nettoRechnungsbetrag
        this.mwstProzentsatz
        this.mwst
        this.bruttoRechnungsbetrag
        this.skonto
        this.zahlungsbetrag
    }
}

let produkt=new Produkt();

// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.


      produkt.nettoRechnungsbetrag=370.00                    //Punkt für Nachkommerstellen und kein Komma
                                                             //Keine einheiten hinten anschreiben(€, m, cm, l, k...)
                                                             //"370,00€" ist keine Zahl, damit kann nicht gerechnet werden
produkt.Art="Zeitung"

//Wenn die Produktart Zeitung ODER Lebensmittel ODER Buch ist, dann...
if(produkt.Art==="Zeitug" || produkt.Art==="Lebensmittel" || produkt.Art==="Buch"){
    produkt.mwstProzentsatz=0.07;          //Alternativ kann manh auch 7 schreiben, dann ändert sich natürlich die Berechnung im Folgenden.
}else{
    produkt.mwstProzentsatz=0.19;
}

console.log('Der Mwst-Satz beträgt: '+produkt.mwstProzentsatz)
console.log('Produktart: '+produkt.Art)

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

produkt.mwst=produkt.nettoRechnungsbetrag*produkt.mwstProzentsatz/100

console.log('Mwst: '+produkt.mwst)

// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

produkt.bruttoRechnungsbetrag=produkt.nettoRechnungsbetrag+produkt.mwst

console.log('Brutto-Rechnungsbetrag: '+produkt.bruttoRechnungsbetrag)

// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

if(bruttoRechnungsbetrag<100){
    produkt.skonto=1;
}if(bruttoRechnungsbetrag<200){
    produkt.skonto=1.1;
}if(bruttoRechnungsbetrag<300){
    produkt.skonto=1.4;
}if(bruttoRechnungsbetrag<400){
    produkt.skonto=1.5;
}if(bruttoRechnungsbetrag<500){
    produkt.skonto=1.6;
}

console.log('Der Skonto der Zeitung beträgt '+produkt.skonto);

console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.

class Auto {
    constructor() {
        this.nameA
        this.leistung
        this.geschwindigkeit
        this.preis
        this.verbrauch
    }
}

const mercedes = new Auto(
    nameA="Mercedes AMG",
    leistung=300,
    geschwindigkeit=450,
    preis=800000.00,
    verbrauch=6,
);

const astonMartin = new Auto(
    nameA="Aston Martin Vantage",
    leistung=360,
    geschwindigkeit=500,
    preis=750000.00,
    verbrauch=6.5,
);

// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.
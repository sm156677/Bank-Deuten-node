console.log('Funktionen')
console.log('==========')

//Funktionen führen Operationen aus.
let laenge=3;
let breite=5;

let flaecheninhalt=laenge*breite

console.log('Flächeninhalt: '+flaecheninhalt)

//Jetzt die Berechnung in einer Funktion

//Zuerst wird die Funktion erstellt:

function berechneFlaecheninhalt(laenge, breite){
    return laenge*breite
}

//In einem zweiten Schritt wird die Funktion aufgerufen

console.log('Flächeninhalt: '+berechneFlaecheninhalt(10,10))
//Der Vorteil von Funktionen ist, dass die Berechnung im Rumpf nur einmal ausformuliert werden muss.
//Die Funktion kann an vielen Stellen aufgerufen werden.

//So werden Funktionhen erstellt:

//1. Das reservierte Wort function
//2. Ein sprechender Name(Der Name soll beschreiben, was die Funktion macht)
//3. Runde Klammern am Ende nehmen Parameter entgegen. Parameter sind das, was die Funktion als Imput zur berechnung benötigt.
//Funktionen können mehrere oder auch keinen Parameter entgegen nehmen.
//4. In den geschweiften Klammern wird die Logik ausprogramiert.
//5. Mit dem reservierten Wor return wird das Ergebnis zurückgegeben.

console.log('Aufgabe 1')
console.log('=========')
//Berechne das Volumen eines Quaders mit einer Funktion:
function berechneVolumen(laenge, breite, hoehe){
    return laenge*breite*hoehe
}
console.log('Volumen: '+berechneVolumen(5,6,7))

console.log('Aufgabe 2')
console.log('=========')
//Berechne den Bruttopreis aus dem Nettopreis:

function berechneBrutto(nettopreis,mwstSatz){
    return nettopreis+mwstSatz*nettopreis
}
console.log('Bruttopreis: '+berechneBrutto(100,0.19))

console.log('Aufgabe 3')
console.log('=========')
//berechne die Schulnote aus der Abitur-Punktzahl.

function punkeZunote(punkte){
    if(punkte===15){
        return "1+"
    }else if(punkte===14){
        return "1"
    }else if(punkte===13){
        return "1-"
    }else if(punkte===12){
        return "2+"
    }else if(punkte===11){
        return "2"
    }else if(punkte===10){
        return "2-"
    }
}

let punktzahl=10

let note=punkeZunote(10)

console.log('Note: '+note)

console.log('Aufgabe 4')
console.log('=========')
//Funktionen können auch innerhalb von Klassen definiert werden.
//Beispiel: Kredit

class Kredit{
    constructor(){
    this.Laufzeit
    this.Betrag
    this.Zinssatz
    }
    berechneGesamtkostenAmendeDerlaufzeit(){
        return this.Betrag*Math.pow((1+this.Zinssatz),this.Laufzeit)
    }
}

let kredit=new Kredit()
kredit.Betrag=100
kredit.Laufzeit=2
kredit.Zinssatz=0.1

console.log('Gesamtkosten: '+kredit.berechneGesamtkostenAmendeDerlaufzeit())


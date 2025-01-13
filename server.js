class Kunde {
	constructor() {
		this.Nachname
		this.Vorname
		this.Benutzername
		this.Passwort
	}
}

let kunde = new Kunde();
	kunde.Nachname="Mustermann"
	kunde.Vorname='Max'
	kunde.Benutzername='MM'
	kunde.Passwort='Muster'
;

class Kundenberater {
	constructor() {
		this.Vorname
		this.Nachname
		this.Telefonnummer
		this.Email
		this.Bild
	}
}

let kundenberater1=new Kundenberater();
	kundenberater1.Vorname="Pit"
	kundenberater1.Nachname="Kiff"
	kundenberater1.Telefonnummer="012345/7890000"
	kundenberater1.Email="p.kiff@borken-bank.de"
	kundenberater1.Bild= <i class="fa-solid fa-user"></i>

'use strict';

//Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.
const express = require('express');

//Der Bodyparser ermöglicht es uns, Daten aus dem Kundenformular auf dem Server entgegenzunehmen
//Der Bodyparser wird im Terminal mit dem Befehl 'npm install -g body-parser' instaliert
const bodyParser=require('body-parser');

// Constants
//Die Anweisungen, werden von oben nach unten abgeaerbeitet. 
//Der Wert 3000 wird von rechts nach links zugewiesen an die Konstante namens PORT.
//Das einfache Gleichheitszeichen lässt sich also übersetzen mit "wird zugewiesen an".
const PORT = 3000;
//Der wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST.
const HOST = '0.0.0.0';

// App
const app = express();

//Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine','ejs')

//Der Bodyparser wird in der app eingebunden.
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser.
	// send() ist die Anweisung etwas an den Browser zu senden.
	//'Hello...' ist der Wert, der an die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');

	//das res-Objekt kann noch mehr als nur eine Zeichenkette an den Browser zu senden.
	//Das res-Objekt kann mit der Funktion render() eine HTML Datei an den Browser senden.
	res.render('index.ejs',{});
});

//wenn im Browser die Adresse.../ABG aufgerufen wird, wird der Server aufgefordert,
//die angefrgte Seite an den Browser zurück zu geben
//der Server arbeit dazu die Funktionh app.get('AGB')... ab.
app.get('/AGB',(req, res)=>{
	//der Server gibt die gerenderte .ejs Seite an den Browser zurück.
	res.render('AGB.ejs',{});
});

app.get('/Hilfe',(req, res)=>{
	res.render('Hilfe.ejs',{});
});

app.get('/Postfach',(req, res)=>{
	res.render('Postfach.ejs',{});
});

app.get('/Profil',(req, res)=>{
	res.render('Profil.ejs',{});
});

app.get('/index',(req, res)=>{
	res.render('index.ejs',{});
});

app.get('/Kontenuebersicht',(req, res)=>{
	res.render('Kontenuebersicht.ejs',{});
});

app.get('/ueberweisung',(req, res)=>{
	res.render('ueberweisung.ejs',{});
});

//Die Funktion app.get('/Geldanlegen...') wird abgearbeitet, wenn der Benutzer die 
//Seite Geldanlegen im Browser ansurft.
app.get('/Geldanlegen',(req, res)=>{
	//Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	//Dazu wird die Funktion render() aufgerufen.
	res.render('Geldanlegen.ejs',{
		//In der Geldanlegen.ejs gibt es die Variablen Betrag und Laufzeit.
		//Der Server übergibt die folgenden Werte an den Browser:
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: ''
	});
});

app.get('/Kredit',(req, res)=>{
	res.render('Kredit.ejs',{});
});

app.get('/login',(req, res)=>{
	res.render('login.ejs',{
		Meldung:"Alles easy."
	});
});

app.post('/Kredit', (req, res) => {

	// Der Server nimmt die Werte aus dem Browserformular entgegen:
	let zinsbetrag = req.body.Betrag;
	let laufzeit = req.body.Laufzeit;
	let zinssatz = req.body.Zinssatz;

	// Der Rückzahlungsbetrag wird berechnet
	let kredit = zinsbetrag * Math.pow(1+zinssatz/100,laufzeit);
	console.log("Rückzahlungsbetrag: " + kredit + " €.")

	// Die Funktion render() gibt die Werte an den Browser
	res.render('Kredit.ejs',{
		Laufzeit: laufzeit,
		Zinssatz: zinssatz,		
		Betrag: zinsbetrag,
		Meldung: "Rückzahlungsbetrag: " + kredit + " €."
	});
});
app.post('/login',(req, res)=>{

	let benutzername= req.body.IdKunde;
	console.log('login: Benutzername:'+benutzername+'.');
	
	
	
	let passwort=req.body.Passwort;
	console.log('login: Passwort:'+passwort)

let meldung=""
	if(kunde.Benutzername==benutzername && kunde.Passwort==passwort){
console.log('Die Zugangsdaten wurten korrekt eingegeben.')
meldung="Die Zugangsdaten wurden korrekt eingegeben."
	}else{
		console.log('Die Zugangsdaten wurden nicht korrekt eingegeben.')
		meldung="Die Zugangsdaten wurden nicht korrekt eingegeben."
	}


	//Es muss geprüft werden, ob der Kunde mit diesem Benutzernamen das richtige Kennwort eingegeben hat.

		res.render('login.ejs',{
			
			Meldung:'Sie wurden erfolgreich angemeldet'
		});
	});


app.post('/Geldanlegen',(req, res)=>{


let betrag= req.body.Betrag;
console.log('Geldanlegen: Gewünschter Betrag:'+betrag+'€');

let laufzeit= req.body.Laufzeit;
console.log('Gesamte Laufzeit:'+laufzeit);

let zinssatz=0.1;
let zinsen=betrag*zinssatz;

	res.render('Geldanlegen.ejs',{
		Betrag: 120,
		Laufzeit: 2,
		Meldung:'Ihre Zinsen betragen:'+zisen
	});
});
// Mit listen() wird der Server angewiesen, auf den angegebenen HOST und PORT zu lauschen.

app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Srver Adminestrator auf der Konsole angezeigt, was der Server macht.
//Der Programierer schreibt dazu in den runden Klammern den Ausdruck, der auf der Konsole angezeigt werden soll.
// Die Werte der beiden Konstanten HOST und Port werden in den Ausdruck übergeben.
// Ein Verb mit anschließenden runden Klammern steht immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);

//mit der Funktion require, wird die Datei in den runden Klammern eingelesen.


//require('./uebungen/03-objekte.js');
//require('./uebungen/04-funktionen.js');
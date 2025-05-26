
//Zum installieren von modulen npm install(cookie/cookie-parser/-g nodemon/email-validator)


//npm install iban-validator-js
//npm install sqlite3

const validator = require("email-validator");
// SQLite-Modul importieren
const sqlite3 = require('sqlite3').verbose(); // SQLite3 wird eingebunden
// Zeile 8: Das Modul `sqlite3` wird importiert und mit `.verbose()` aktiviert, um detaillierte Debugging-Informationen zu erhalten

//Die Bibliotek email-validator prüft ob eine E-Mail-Adresse gültig ist. 
//die Anforderungen an einer Email sind exakt fesstgelegt im RFC 5322.

//Die Funktion validate() wird aufgerufen und bekommt als Argument eine E-Mail-Adresse übergeben.
//Die Funktion validate() gibt den Rückgabewrt true oder false zurück.
validator.validate("test@email.com"); // true

// Verbindung zur SQLite-Datenbank herstellen
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Verbindung zur SQLite-Datenbank hergestellt.');
		
        // Tabelle "Kunden" erstellen
        db.run(`
            CREATE TABLE IF NOT EXISTS Kunden (
                KundenNr INTEGER PRIMARY KEY AUTOINCREMENT,
                Nachname TEXT NOT NULL,
                Vorname TEXT NOT NULL,
                Wohnort TEXT NOT NULL,
                PLZ TEXT NOT NULL,
                Straße TEXT NOT NULL,
                Kennwort TEXT NOT NULL,
                Benutzername TEXT NOT NULL UNIQUE
            )
        `, (err) => {
            if (err) {
                console.error('Fehler beim Erstellen der Tabelle:', err.message);
            } else {
                console.log('Tabelle "Kunden" erfolgreich erstellt oder existiert bereits.');

                // Alle Kunden aus der Datenbank abrufen und in der Konsole ausgeben
                db.all(`SELECT * FROM Kunden`, [], (err, rows) => {
                    if (err) {
                        console.error('Fehler beim Abrufen der Kunden:', err.message);
                    } else {
                        console.log('Alle Kunden in der Datenbank:');
                        console.table(rows); // Gibt alle Kunden als Tabelle in der Konsole aus
                    }
                });
            }
        });
    }
});


//Klassendefinition des Kunden
class Kunde {
	constructor() {
		this.Nachname
		this.Vorname
		this.Benutzername
		this.Passwort
		//istEingelogt ist ein boolean, diese kann nur true oder false sein.
		this.istEingelogt
	}
}

//npm install sqlite3 um SQL zu installieren

//Deklaration und instanziierung
let kunde = new Kunde();
//initialisierung
	kunde.Nachname="Mustermann"
	kunde.Vorname='Max'
	kunde.Benutzername='MM'
	kunde.Passwort='Muster'
	kunde.istEingelogt
;
//Klassendefinition des Kundenberaters
class Kundenberater {
	constructor() {
		this.Vorname
		this.Nachname
		this.Telefonnummer
		this.Email
		this.Bild
	}
}
//Deklaration und instanziierung
let kundenberater1=new Kundenberater();
//initialisierung
	kundenberater1.Vorname="Pit"
	kundenberater1.Nachname="Kiff"
	kundenberater1.Telefonnummer="012345/7890000"
	kundenberater1.Email="p.kiff@borken-bank.de"
	kundenberater1.Bild= "png"

'use strict';

//Das Modul express wird mit der Funktion require einer Konstanten namens express zugewiesen.
const express = require('express');

//Der Bodyparser ermöglicht es uns, Daten aus dem Kundenformular auf dem Server entgegenzunehmen
//Der Bodyparser wird im Terminal mit dem Befehl 'npm install -g body-parser' instaliert
const bodyParser=require('body-parser');

//der cookie-parser ist für die Verarbeitung der Cookies in unserer app zusatändig.
//mit dem cookie-parser können wir cookies auslesen, setzen und löschen.
const cookieParser=require('cookie-parser');
const { render } = require("ejs");

// Constants
//Die Anweisungen, werden von oben nach unten abgeaerbeitet. 
//Der Wert 3001 wird von rechts nach links zugewiesen an die Konstante namens PORT.
//Das einfache Gleichheitszeichen lässt sich also übersetzen mit "wird zugewiesen an".
const PORT = 3001;
//Der wert '0.0.0.0' wird zugewiesen an eine Konstante namens HOST.
const HOST = '0.0.0.0';

// App
const app = express();

//Es wird der App bekanntgegeben, wo die styles zu finden sind.
app.use(express.static('public'))
app.set('view engine','ejs')

//Der Bodyparser wird in der app eingebunden.
app.use(bodyParser.urlencoded({extended: true}))

//der cookieparser wird in die app eingebunden
//cookies können verschlüsselt im Browser abgelegt werden. Dadurch kann ein im Browser gespeichertes Kennwort nicht mehr
//ausgelesen werden. Nur unsere app kann den verschlüsselten cookie verwenden. Dazu wird das Secret genutzt.
app.use(cookieParser(''))

//cookies sollen wie folgt eingesetzt werden.
//1. wenn sich der Kunde in der App anmeldet, wird ein cookie in seinem Browser gespeichert.
//   der cookie enthält seine Kundendaten.
//   immer,wenn der Kunde nach der Anmeldung in der App einen Button drückt, werden seine Kundendate
//   vom Browser an den server übergeben. Der server weis dadurch, mit welchem Kunden er es zutun hat.
//   so ermöglichen wir, dass mehrere Kunden gleichzeitig mit dem Server interagieren können.

//Man kann cookies im Browser anzeigen,in dem man F12 drückt.

const secretKey='mein_geheimer_schluessel';
//app.use(cookieParser(secretKey))


app.post('/login',(req, res)=>{

	let benutzername= req.body.Benutzername;
	console.log('login: Benutzername:'+benutzername+'.');
		
	let passwort=req.body.Passwort;
	console.log('login: Passwort:'+passwort)

	let meldung="";



	//Die Datenbank wird abgefragt, ob der Benutzername und das Passwort des Kunden mit den eingegebenen Daten übereinstimmen.
	//Mit SELECT wird die Datenbank abgefragt, ob es einen Kunden mit den angegebenen Anmeldedaten gibt.
	//Der Wert wird an die Stelle des Fragezeichens an die Avfrage übergeben.
	//* steht für alle Spalten der Tabelle Kunden.
	//DieZeilen werden mit WHERE gefiltert, so dass nur die Zeilen zurückgegeben werden, die den angegebenen Benutzernamen und das Passwort enthalten.
	db.get(`SELECT * FROM Kunden WHERE Benutzername = ?`, [benutzername,], (err, row) => {

		// Wenn ein Fehler auftritt, wird eine Fehlermeldung in der Konsole ausgegeben und eine Fehlermeldung an den Browser gesendet.
		//Wenn err ungleich null (bzw. leer) ist, dann ist ein Fehler aufgetreten.
		if (err) {

			//err ist nicht einfach ein String, sondern ein Objekt, mit der Eigenschaft message, die eine Fehlermeldung enthält.
			console.error('Fehler beim Abrufen des Kunden:', err.message);
			res.render('login.ejs', {
				Meldung: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
			});
			return;
		}
		if (row) {
			// Wenn kein Kunde gefunden wurde, wird eine Fehlermeldung in der Konsole ausgegeben und eine Fehlermeldung an den Browser gesendet.
			console.log('kein Kunde mit diesen Anmeldedaten gefunden.');
			meldung = "Die Zugangsdaten wurden nicht korrekt eingegeben.";
			res.render('login.ejs', {
				Meldung: meldung
			});
			return;
		}

	//Wenn ein Kunde gefunden wurde, wird das Kundenobjekt mit den Daten des Kunden gefüllt.
	kunde.Nachname = row.Nachname;
	kunde.Vorname = row.Vorname;
	kunde.Benutzername = row.Benutzername;
	kunde.Kennwort = row.Kennwort;
	kunde.Wohnort = row.Wohnort;
	kunde.PLZ = row.PLZ;
	kunde.Straße = row.Straße;
	kunde.KundenNr = row.KundenNr;
	//Die Eigenschaft istEingelogt wird auf true gesetzt, da der Kunde sich erfolgreich angemeldet hat.
	kunde.istEingelogt = true;
	//Die Meldung wird auf "Die Zugangsdaten wurden korrekt eingegeben." gesetzt.
	meldung = "Die Zugangsdaten wurden korrekt eingegeben.";
	//Die Meldung wird in der Konsole ausgegeben.
	console.log('Die Zugangsdaten wurden korrekt eingegeben.');
	//Die Meldung wird an den Browser zurückgegeben.
	res.render('index.ejs', {
		Meldung: meldung,
		//Die E-Mail-Adresse des Kunden wird an den Browser zurückgegeben, damit sie im Profil angezeigt werden kann.
		Email: kunde.Mail
	});
	});
	//wenn der Benutzername und das Passwort des Kunden mit den eingegebenen Daten übereinstimmen, wird die Eigenschaft istEingelogt auf true gesetzt.
	//Ansonsten wird die Eigenschaft istEingelogt auf false gesetzt.
	if(kunde.Benutzername==benutzername && kunde.Passwort==passwort){
		console.log('Die Zugangsdaten wurten korrekt eingegeben.')
		meldung="Die Zugangsdaten wurden korrekt eingegeben.";
		//Eigenschaft istEingelogt wird auf true gesetzt
		kunde.istEingelogt=true;

		//wenn der Kunde seine Credentials korekt eingegeben hat, wird sein cookie gesetzt.
		//Um das ganze Kundenobjekt im Cookie speichern zu können, wird das ganze Kundenobjekt in eine Zeichenkette umgewandelt.
		//Dazu wird die stringify-Funktion auf das JSON-Objekt aufgerufen.
		res.cookie('istAngemeldetals', JSON.stringify(kunde),{maxAge: 900000, httpOnly: true, signed:false})
		console.log('das Kundenobjekt im Cookie')

		res.render('index.ejs',{});

	}else{
		console.log('Die Zugangsdaten wurden nicht korrekt eingegeben.')
		meldung="Die Zugangsdaten wurden nicht korrekt eingegeben."
		kunde.istEingelogt=false;
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an.",
		});
		}


		console.log('Kunde.istEingelogt:'+kunde.istEingelogt);	
});

//Die app.get wird abgearbeitet, wenn der Server angesurft wird
app.get('/login',(req, res)=>{
	console.log('kunde.istEingelogt:'+kunde.istEingelogt)
	res.render('login.ejs',{
		Meldung:"Bitte Benutzername und Kennwort eingeben."
	});
});

app.get('/',(req, res)=>{
	if(kunde.istEigelogt){
		res.render('index.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

//wenn im Browser die Adresse.../ABG aufgerufen wird, wird der Server aufgefordert,
//die angefrgte Seite an den Browser zurück zu geben
//der Server arbeit dazu die Funktionh app.get('AGB')... ab.
app.get('/AGB',(req, res)=>{
	//der Server gibt die gerenderte .ejs Seite an den Browser zurück.
	if(kunde.istEigelogt){
		res.render('AGB.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

app.get('/Hilfe',(req, res)=>{
	if(kunde.istEigelogt){
		res.render('Hilfe.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

app.get('/Postfach',(req, res)=>{
	if(kunde.istEigelogt){
		res.render('Postfach.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

app.get('/Profil',(req, res)=>{

	if(kunde.istEigelogt){
		res.render('Profil.ejs',{});
		Meldung:"",
		Email; kunde.Mail
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an.",
			Email: kunde.Mail,
		});
	}
});

app.post('/Profil',(req, res)=>{
	var meldung="";
	let email= req.body.Email;
	//Der Wert von email wird vom Browser entgegengenmmen, sobald der Kunde sein Profil ändern will.

	

	
	//Die übergebende Adresse wird in dei Validate-Funktion übergeben und geprüft.
if(validator.validate("email")){
	console.log('Die E-Mail-Adresse ist gültig.');
meldung="Die E-Mail-Adresse ist gültig.";
kunde.Mail=email;

}else{
	console.log('Die E-Mail-Adresse ist ungültig.');
	meldung="Die E-Mail-Adresse ist ungültig.";
}

res.render('Profil.ejs',{
	Meldung: meldung,
	Email: kunde.Mail,
});
});

app.get('/index',(req, res)=>{
	if(kunde.istEigelogt){
		res.render('index.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

app.get('/Kontenuebersicht',(req, res)=>{
	
	const IBANValidator = require('iban-validator-js');

IBANValidator.isValid(''); // false
IBANValidator.isValid('not-a-valid-IBAN'); // false
IBANValidator.isValid('TR320010009999901234567890'); // true
IBANValidator.isValid('BE68539007547034'); // true
	
	if(kunde.istEigelogt){
		res.render('Kontenuebersicht.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

app.get('/ueberweisung',(req, res)=>{
	if(kunde.istEigelogt){
		res.render('ueberweisung.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});

//Die Funktion app.get('/Geldanlegen...') wird abgearbeitet, wenn der Benutzer die 
//Seite Geldanlegen im Browser ansurft.
app.get('/Geldanlegen',(req, res)=>{

	if(kunde.istEigelogt){
		//Die Serverantwort an den Browser wird gerendert an den Browser zurückgegeben.
	//Dazu wird die Funktion render() aufgerufen.
	res.render('Geldanlegen.ejs',{
		//In der Geldanlegen.ejs gibt es die Variablen Betrag und Laufzeit.
		//Der Server übergibt die folgenden Werte an den Browser:
		Betrag: betrag,
		Laufzeit: laufzeit,
		Meldung: ''
	});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});
	

app.get('/Kredit',(req, res)=>{
	if(kunde.istEigelogt){
		res.render('Kredit.ejs',{});
	}else{
		res.render('login.ejs',{
			Meldung: "Melden sie sich zuerst an."
		});
	}
});





//Die app.post 


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
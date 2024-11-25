/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

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

app.get('/Geldanlegen',(req, res)=>{
	res.render('Geldanlegen.ejs',{
		Betrag: 100
	});
});

app.get('/Kredit',(req, res)=>{
	res.render('Kredit.ejs',{});
});

app.get('/logout',(req, res)=>{
	res.render('login.ejs',{});
});

app.post('/geldAnlegen',(req, res)=>{
	res.render('Geldanlegen.ejs',{});
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
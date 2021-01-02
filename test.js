const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'scannerstation'

});

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL Verbunden...")
    }
})

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res) {
    res.sendFile('M:\\Tim\\Desktop\\Meine Ultimativen Daten\\Programmiren\\ScannServer\\test\\test.html');
});

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    data = req.body;
    res.sendStatus(200);

    text_Auftragsnummer = data.text_Auftragsnummer;
    console.log(text_Auftragsnummer);

    text_Kundenname = data.text_Kundenname;
    console.log(text_Kundenname);

    text_Anzahl_Schlauuche = data.text_Anzahl_Schlauuche;
    console.log(text_Anzahl_Schlauuche);

    text_Durchmesser = data.text_Durchmesser;
    console.log(text_Durchmesser);

    checkbox_Armaturen = data.checkbox_Armaturen;
    console.log(checkbox_Armaturen);

    text_Planzeit = data.text_Planzeit;
    console.log(text_Planzeit);

    date_Rampentermin_Auftrag = data.date_Rampentermin_Auftrag;
    console.log(date_Rampentermin_Auftrag);

    date_Rampenttermin_Produktion = data.date_Rampenttermin_Produktion;
    console.log(date_Rampenttermin_Produktion);

    date_Bestellung_am_Lager_bis_am = data.date_Bestellung_am_Lager_bis_am;
    console.log(date_Bestellung_am_Lager_bis_am);

    selectbox_Auftrag_Status = data.selectbox_Auftrag_Status;
    console.log(selectbox_Auftrag_Status);

    selectbox_Schweissbahn = data.selectbox_Schweissbahn;
    console.log(selectbox_Schweissbahn);

    let data_transmit = {Auftragsnummer:text_Auftragsnummer, Kundenname:text_Kundenname, Schläuche:text_Anzahl_Schlauuche, Durchmesser:text_Durchmesser, Armaturen:checkbox_Armaturen, ProduktionPlanzeit:text_Planzeit, AuftragRampentermin:date_Rampentermin_Auftrag, ProduktionRampenttermin:date_Rampenttermin_Produktion, date_lager:date_Bestellung_am_Lager_bis_am, Auftrag:selectbox_Auftrag_Status, Schweissbahn:selectbox_Schweissbahn};
    let sql = 'INSERT INTO test SET ?';
    let query = db.query(sql, data_transmit, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
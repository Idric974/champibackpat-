const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'idric',
    password: 'Kup33uC4W6',
    database: 'champyresi',
});

let table = 'gestion_airs';
let temperatureAir;
let deltaAir;



let getTemperatureAir = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log('Connecté à la base de données MySQL!');
        //

        //* gestion Air

        con.query(
            'SELECT * FROM ' + table + ' WHERE id=(SELECT max(id) FROM ' + table + ')',
            function (err, result) {
                if (err) throw err;

                temperatureAir = result[0]["temperatureAir"]
                console.log("temperatureAir : ", temperatureAir);

                deltaAir = result[0]["deltaAir"]

                console.log("deltaAir : ", deltaAir);
            }
        );
    });


}

getTemperatureAir();


const jaune = '\x1b[33m';


//? Récupération de l'état de la vanne froid.

let temperatureAir;
let deltaAir;
let consigne;


let recuperationEtatVanneFroid = () => {


    try {
        console.log('Salut');

        return {
            temperatureAir: 10,
            deltaAir: 5,
            consigne: 1,


        }





    } catch (error) {

        console.log("❌ %c ERREUR ==> gestions Air ==> Récupération de l'état de la vanne froid",
            'color: orange', error);


    }


}

module.exports = { recuperationEtatVanneFroid };

//? --------------------------------------------------
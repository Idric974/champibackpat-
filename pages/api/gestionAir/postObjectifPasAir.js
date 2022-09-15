import { sql_query } from "../../../lib/db";

const handler = async (req, res) => {

    let pas = parseFloat(req.body["data"]["pasAir"]);
    console.log("consigneAir =======> ", pas);

    let objectif = parseFloat(req.body["data"]["objectifAir"]);
    console.log("consigneAir =======> ", objectif);

    try {
        const results = await sql_query('update gestion_airs_datas set pasAir = ' + pas + ' , objectifAir = ' + objectif + ' order by Id DESC limit 1');

        return res.json(results);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;
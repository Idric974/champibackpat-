import { sql_query } from "../../../lib/db";

const handler = async (req, res) => {

    let consigne = parseFloat(req.body['data']);
    // console.log("consigneAir =======> ", consigne);

    try {

        const results = await sql_query("INSERT INTO gestion_airs_datas (consigneAir, createdAt, updatedAt) VALUES (" + consigne + " , CURDATE(), CURDATE())");

        return res.json(results);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;
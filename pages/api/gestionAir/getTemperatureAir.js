import { sql_query } from "../../../lib/db";

let table = 'gestion_airs';

const handler = async (_, res) => {
    try {
        const results = await sql_query('SELECT * FROM ' + table + ' WHERE id=(SELECT max(id) FROM ' + table + ')');

        return res.json(results);

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export default handler;
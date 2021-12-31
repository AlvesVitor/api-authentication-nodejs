import { Pool } from "pg";

require('dotenv').config()
const connectionString = process.env.URL_BANCO;

const db = new Pool({ connectionString })

export default db;
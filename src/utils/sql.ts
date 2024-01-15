import postgres from "postgres";

const sql = postgres({
  user: 'postgres',
  password: '-2e5Dcbbfa3fGeDbge5C34gf3*Gbfc5A',
  host: 'roundhouse.proxy.rlwy.net',
  port: 51488,
  database: 'railway'
})

export default sql
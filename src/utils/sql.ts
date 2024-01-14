import postgres from "postgres";

const sql = postgres({
  user: 'postgres',
  password: 'D*AFDaa*gbcGGdcCgA425dEeDDaA6-F4',
  host: 'viaduct.proxy.rlwy.net',
  port: 18745,
  database: 'railway'
})

export default sql
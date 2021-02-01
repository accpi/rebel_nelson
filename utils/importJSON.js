const { db } = require('./db_config')
const json = require('./roster.json')
const pgp = require('pg-promise')({
	capSQL: true
})

async function exportToDB() {
	const cs = new pgp.helpers.ColumnSet(['artist', 'rate', 'streams'], { table: 'artists' })
	const query = pgp.helpers.insert(json.data, cs)
	await db.none(query)
}

exportToDB()
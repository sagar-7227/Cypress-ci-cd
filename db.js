const { MongoClient } = require('mongodb')
// const uri = process.env.MONGO_URI
const uri = "mongodb://mongoadmin:secret@localhost:27017/?authSource=admin"
if (!uri) {
  throw new Error('Missing MONGO_URI')
}

const client = new MongoClient(uri)
async function connect() {
  // Connect the client to the server
  await client.connect()

  return client.db('foods')
}

async function disconnect() {
  // Ensures that the client will close when you finish/error
  await client.close()
}

module.exports = { connect, disconnect }

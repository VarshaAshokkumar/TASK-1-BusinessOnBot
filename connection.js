const {Client} = require('pg')

const client = new Client({
    host: "ec2-52-86-115-245.compute-1.amazonaws.com",
    user: "pwzvbmeicdxmff",
    port: 5432,
    password: "912c19b457bf5e12a132edb4775ba7d67b431237c5aab44250469e5da02f0102",
    database: "ddo8o8ebbovifq"
})

module.exports = client

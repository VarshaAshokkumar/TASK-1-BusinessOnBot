const {Client} = require('pg')

const client = new Client({
    connectionString: "postgres://pwzvbmeicdxmff:912c19b457bf5e12a132edb4775ba7d67b431237c5aab44250469e5da02f0102@ec2-52-86-115-245.compute-1.amazonaws.com:5432/ddo8o8ebbovifq",
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = client

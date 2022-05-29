const client = require('./connection.js')
const express = require('express');
const { query } = require('express');
const app = express();

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();


app.get("/branch/:key",async (req,resp)=>{
    console.log('Searching for branch ', req.params.key);
    client.query('Select * from bank_branch where branch like (\'%' + req.params.key + '%\') ORDER BY ifsc', (err, result)=>{
        if(!err){
            resp.send(result.rows);
        }
    });
    client.end;
})


app.get("/search/:key",async (req,resp)=>{
    console.log('Searching for keyword ', req.params.key);

    client.query('Select * from bank_branch where branch like (\'%' + req.params.key + '%\')' +
    'OR ifsc like (\'%' + req.params.key + '%\') OR cast(bank_id as text) like (\'%' + req.params.key + '%\')'+
    'OR city like (\'%' + req.params.key + '%\') OR district like (\'%' + req.params.key + '%\')'+
    'OR state1 like (\'%' + req.params.key + '%\') OR bank_name like (\'%' + req.params.key + '%\')'+
    'OR address like (\'%' + req.params.key + '%\') ORDER BY ifsc', (err, result)=>{
        if(!err){
            resp.send(result.rows);
        }
    });
    client.end;
})
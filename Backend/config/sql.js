const {Client} = require('pg')

const client = new Client({
    host:"localhost" ,
    user:"viwfoopu",
    port:5432,
    password:"PYgwOwyNcNW11RheQUUXCzPm_5qQrrZ5",
    database:"viwfoopu"
})

client.connect();

client.query(`SELECT * from users` ,(err ,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
})
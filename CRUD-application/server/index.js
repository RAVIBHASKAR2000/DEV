const express = require('express');
const app = express();

const mysql = require('mysql');

const db=mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'Ravi@2000',
    database:'cruddatabase',

});


app.get('/',(req,res)=>{

    // const sqlInsert = "INSERT INTO `movie_reviews` (`movieName`, `movieReview`) VALUES ('inception', 'good movie');"
    // db.query(sqlInsert,(err,result)=>{
    //     res.send("hello world");
    //     console.log(err);
    // })
   // res.send("hello world Don");

   
})

// '/' is like route means at / we need to do these things 
// '/login' wont work now since not yet defined



// res is for responiding and req for taking any input


app.listen(3001,()=> {
    console.log("running on port 3001")
})

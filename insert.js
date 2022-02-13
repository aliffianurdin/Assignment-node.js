const db = require('./config/connection')

let data = [
    {petId:1,quantity:10,status:"placed",complete:"true"},
]

data.forEach(value =>{
    let insertQuery = `INSERT INTO user (petId,quantiy,status,complete) VALUES (?);`
    
    db.query(insertQuery,value[{petId,quantity,status,complete}], function(error,result,fields){
        if(error) throw error;
        console.log("Data has been inserted");
    });
});

// const sql = `INSERT INTO user VALUES ?`
// const values = [['petId','quantity', 'status', 'complete']]

// db.Insert().query(sql,[values], (err, results, fields)=>{
//     if(err) throw error;
//         console.log('Data Insert');
    
// });
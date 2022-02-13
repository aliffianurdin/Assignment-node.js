const ct = require('../config/connection')

function insertStore(req,res){
    
    let insertQuery = `INSERT INTO user (petId, quantiy, status, complete) VALUES (?);`
    let data = [req.body.petId, req.body.quantiy, req.body.status, req.body.complete]
    
    ct.query(insertQuery, [data], function(error){
        if(error) throw error;
    })
    res.send({message: 'Data has been inserted', data:data})
}

function listStore(req,res){
    let selectQuery =  `SELECT * FROM user`

    ct.query(selectQuery, function(error,results){
        if (error) throw error;
        res.send({message:'Data is found', data:results})
    })
}

function updateStore(req,res){
    let updateQuery = `UPDATE user SET petId =?,quantiy =?, status=?, complete=? WHERE id =?`
    let data = [req.body.petId, req.body.quantiy, req.body.status, req.body.complete, req.params.id]

    ct.query(updateQuery, data, function(error){
        if(error) throw error;
    })

    res.send({message: 'Data has been updated', data:req.body})
}

function deleteStore(req,res){
    let deleteQuery = `DELETE FROM user WHERE id =?`
    let data = [req.params.id]

    ct.query(deleteQuery, data, function(err){
        if(er)throw err;
    });
    res.send({message: 'Data has been deleted'})
}



module.exports = {
    insertStore,
    listStore,
    updateStore,
    deleteStore
}
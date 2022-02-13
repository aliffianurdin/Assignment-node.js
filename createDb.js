const tbl = require('./config/connection')
tbl.connect();

let createQuery = `
CREATE TABLE IF NOT EXISTS user(
    id INT NOT NULL AUTO_INCREMENT,
    petId INT(10) NOT NULL, 
    quantiy INT(10), 
    shipDate DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    status VARCHAR(12),
    complete VARCHAR(10),
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL,
    PRIMARY KEY(id)
)
COLLATE='utf8mb4_general_ci';
`

tbl.query(createQuery, function(error){
    if(error) throw error;
    console.log('Table has been created');
});
 

tbl.end()
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});
connection.connect();
var addSql = 'INSERT INTO student(name,age) VALUES(?,?)';
var addSqlParams = ["王静", "10"];
//增
connection.query(addSql, addSqlParams, function(err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        d
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
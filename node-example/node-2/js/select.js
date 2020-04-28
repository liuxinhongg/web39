let http = require("http");
var mysql = require('mysql');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
    })

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'test'
    });
    connection.connect();
    connection.query('select * from peopleinfo', function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.end(JSON.stringify(results));
    })
}).listen(8082, '127.0.0.1');
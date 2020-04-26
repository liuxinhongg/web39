var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'test'
});

connection.connect();

var sql = 'insert into peopleinfo(id,username,password,age,sex) values (?,?,?,?,?)';
var addSqlParams = [6, "马鲁源", "222", 19, "男"]
    // var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
    // var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
    //查
connection.query(sql, addSqlParams, function(err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();
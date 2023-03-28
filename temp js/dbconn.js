let mysql  = require('mysql');
let dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mydb'
});

//connect with database
dbconn.connect((error)=>{
  if(error){
    console.error('Database connection error' + error.stack);
    return;
}
console.log('Connecting to db with connenction ID: '+ dbconn.threadId);
});

dbconn.end(function(error) {
  // Function to close database connection
})
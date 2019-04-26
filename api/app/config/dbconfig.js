let sqlite3 = require('sqlite3').verbose();

let DB_PATH = ('./db/rental.db');

const db = new sqlite3.Database(DB_PATH,
    function(err){
        if(err) {
            console.log(err);  
            return
        }
       
        console.log("Connected to" + DB_PATH + "database");

        db.exec("PRAGMA foreign_keys = ON;",
            function(err) {
            if(err) {
                console.error("PRAGMA statement didnt work.");    
            } else {
                console.log("Foreign key Enforcement is on.");
            
            }
        });   
    }
);

let init = function() {
    db.run("CREATE TABLE if not exists product (" +
    "id INTEGER PRIMARY KEY," +
    "year INTEGER," +
    "make TEXT," +
    "model TEXT," +
    "price TEXT," +
    "mileage INTEGER" +
    ")");

    db.run("CREATE TABLE if not exists user (" +
    "user_id INTEGER PRIMARY KEY," +
    "first_name TEXT," +
    "last_name TEXT," +
    "age INTEGER," +
    "email TEXT," +
    "phone_number INTEGER" +
    ")");

    
}

module.exports = {
    init: init,
    db: db
}
const Database = require('better-sqlite3');
const dbPath = './api/db.db';

const db = new Database(dbPath, { verbose: console.log });

const dbFn = {

    getTables: () => {
        const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
        return tables;
    },
    getTable: (tableName) => {
        const table = db.prepare(`SELECT * FROM ${tableName}`).all();
        return table;
    },
    addRow:(tableName, row) => {
        console.log(`dodanie wiersza ${row} do tabeli ${tableName}`);
        //funcja do dodania wiersza do tabeli
    },
    delRow:(tableName, id) => {
        try
            {
            db.prepare(`DELETE FROM ${tableName} WHERE ID = ${id}`).run();
            console.log(`usuniecie wiersza o id ${id} z tabeli ${tableName}`);
            }
        catch(err){
            console.log(err);
            }
    },
    updateRow:(tableName, id, row) => {
        console.log(`aktualizacja wiersza o id ${id} w tabeli ${tableName}`);
        //funcja do aktualizacji wiersza w tabel
    },
    getSelect: (tableName, select) => {
        console.log(`select ${select} z tabeli ${tableName}`);
        //funcja do pobrania selecta z tabeli
    },



    testFun: () => {
        const test = db.prepare("SELECT * FROM Toys").all();
        return test;  
    },
    testPutSomething: () => {
        //db.prepare("INSERT INTO Food (ID, Name, Active, Calories, Category) VALUES (1, 'Pizza', TRUE, 250, 'Italian'), (2, 'Sushi', TRUE, 200, 'Japanese'), (3, 'Tacos', TRUE, 300, 'Mexican'), (4, 'Burgers', TRUE, 400, 'American'), (5, 'Salad', TRUE, 150, 'Healthy'), (6, 'Fries', TRUE, 200, 'Snacks'), (7, 'Chicken Wings', TRUE, 300, 'Appetizers'), (8, 'Sandwich', TRUE, 350, 'Lunch'), (9, 'Soup', TRUE, 100, 'Soups'), (10, 'Rice Bowl', TRUE, 400, 'Asian');").run()
    }
}

module.exports = dbFn;
const express = require("express");
const { db } = require("../config/config");
const workerRoute = express.Router();


//  POsting the worker
workerRoute.post("/add-worker", (req, res) => {
    const { name } = req.body;
    const query = `INSERT INTO workers (name) VALUES (?)`;

    db.query(query, [name], (err, result) => {
        if (err) {
            console.error("Error creating worker" + err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        else {

            res.send({ result: `InsertedID :  ${result.insertId}` })
        }
    })

})

workerRoute.get("/", (req, res) => {

    const query = `select * from workers`;
    db.query(query, (err, result) => {
        if (err) {
            console.error("Error getting data" + err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        else {
            console.log(result)
            res.send({ result: result })
        }
    })
})


//  Posting the work of worker
workerRoute.post("/work-time", (req, res) => {
    const { workerID, work_date, start_time, end_time } = req.body;
    const query = `INSERT INTO works ( workerID, work_date, start_time, end_time) VALUES (?, ?,?,?)`;

    db.query(query, [workerID, work_date, start_time, end_time], (err, result) => {
        if (err) {
            console.error("Error adding worker's details" + err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        else {
            res.send({ result: `Inserted worker's details. InsertedID :  ${result.insertId}` })
        }
    })

})

// Getting the total work of the perticular
workerRoute.get("/work-time/:workerID", (req, res) => {

    const { workerID } = req.params;
    // const query = `SELECT * FROM works 
    //                 WHERE workerID = ? AND 
    //                 YEARWEEK(work_date, 1) = YEARWEEK(CURDATE(),1)`;
    const query = `SELECT w.name AS Name, wr.work_date, wr.start_time, wr.end_time
                    FROM workers AS w
                    INNER JOIN works AS wr ON w.id = wr.workerID
                        WHERE wr.workerID = ? AND YEARWEEK(wr.work_date, 1) = YEARWEEK(CURDATE(), 1)`;


    db.query(query, [workerID], (err, result) => {
        if (err) {
            console.error("Error getting worker's details" + err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        else {
            res.send({ result: result })
        }
    })

})


module.exports = { workerRoute }
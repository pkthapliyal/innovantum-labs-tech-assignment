const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3030;
const app = express();
const { db } = require("./config/config");
const { workerRoute } = require("./routes/worker")


// middlewares to parse body and enable cors 
app.use(cors());
app.use(express.json())



// routers
app.use("/", workerRoute);



//  app is listening
//  data base conenction
app.listen(port, () => {
    try {
        db.connect((err) => {
            if (err) {
                console.log({ dataBase_error: err.message });
            }
            else {
                console.log("Database conencted");
            }
        })
        console.log('Server is listening at', port);

    } catch (error) {
        console.log({ error: error.message });
    }
})
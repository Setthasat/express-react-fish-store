const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const {  
    getFishes,
    getSingleFish,
    reciveFish,
    killFish,
    updateFishWeight,
    promotion
} = require('./api/fish.js')

dotenv.config()

const app = express();

const PORT = process.env.PORT || 7878;
const DBAddress = process.env.DB_URL || "localhost:8888";

mongoose.connect(DBAddress);
const database = mongoose.connection
console.log('database connected successfully')

database.on('error', (error) => {
    console.log("db error")
    console.log(error)
    process.exit(-1)
})

app.use(cors());
app.use(express.json());


// @ http://localhost:PORT/ 
app.get('/', function (req, res){
    res.status(200).json(
        {
            message: "health OK, Server is Ready",
        }
    )
});

app.get('/fish', getFishes)
app.get('/fish/:fishId', getSingleFish)
app.get('/promotion', promotion)
app.post('/push/fish', reciveFish)
app.delete('/kill/fish/:fishId', killFish)
app.patch('/update/fish/:fishId', updateFishWeight)

app.listen(Number(PORT), console.log(`app start at http://localhost:${PORT}`));
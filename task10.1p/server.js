const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Task = require('./models/task.js');

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/iCrowdTaskDB', {useNewUrlParser: true});

//app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message: 'running'
    });
})
app.post('/saveTask', (req, res) => {
    const taskType = req.body.type;
    const taskTitle = req.body.title;
    const taskDescription = req.body.description;
    const taskExpiryDate = req.body.expiryDate;
    const taskSetting = req.body.setting;
    const taskWorkers = req.body.workers;
    const taskReward = req.body.reward;
    const taskNumber = req.body.number;

    var task = new Task({
        type: taskType,
        title: taskTitle,
        description: taskDescription,
        expiryDate: taskExpiryDate,
        setting: taskSetting,
        workers: taskWorkers,
        reward: taskReward,
        number: taskNumber
    })

    task.save((error) => {
        if(error) {
            console.log(error);
        } else {
            console.log('insert successfully.');
            res.redirect('/');
        }
    })
})

//port
const port = 8080 || process.env.PORT;
app.listen(port, ()=> {
    console.log(`listening on port: ${port}`);
})
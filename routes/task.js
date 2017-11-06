var express = require('express');
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://trancongvuit:Trancongvuit123@ds147377.mlab.com:47377/demo_1_database', ['demo_1']);

router.get('/tasks', (req, res) => {
    db.demo_1.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        else{
            res.json(tasks);
        }
    });
} );

//get single task
router.get('/task/:id', (req, res) => {
    db.demo_1.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) =>{
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
} );

//create a task
router.post('/tasks', (req, res, next) => {
    var task = req.body;
    db.demo_1.add(task, function(err, task){
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
});

//delete a task
router.delete('task/:id', (req, res, next) => {
    db.demo_1.remove({id: mongojs.ObjectId(req.params.id)},(err, task) => {
        if(err){
            res.send(err);
        }
        else{
            console.log(id + " is remove!");
            res.json(task);
        }
    });
});

//Update
router.put('task/:id', (req, res, next) => {
    var task = req.body;
    var upTask = {};

    if(task.isDone){
        upTask.isDone = task.isDone;
    }

    if(task.title){
        upTask.title = task.title;
    }
    
    if(!upTask){
        res.status(400);
        res.json({
            'err': 'bad data'
        });
    }
    else{
        db.demo_1.remove({id: mongojs.ObjectId(req.params.id)}, upTask, {} ,(err, task) => {
            if(err){
                res.send(err);
            }
            else{
                console.log(id + " is update!");
                res.json(task);
            }
        });
    }

   
});

module.exports = router;
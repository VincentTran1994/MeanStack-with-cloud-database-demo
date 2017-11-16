var express = require('express');
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs('mongodb://trancongvuit:Trancongvuit123@ds147377.mlab.com:47377/demo_1_database', ['demo_1'],['contact_project']);

//get list
router.get('/tasks', (req, res) => {
    db.demo_1.find((err, tasks) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(tasks);
        }
    });
} );

//get single list
router.get('/task/:id', (req, res) => {
    db.demo_1.findOne({_id: mongojs.ObjectId(req.id)}, (err, task) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
} );


//create a list`
router.post('/task', (req, res, next) => {
    var task = req.body;
    if(!task.Title)
    {
        res.status(400);
        re.json({
            "error": "Bad Data"
        });
    }

    else
    {
        db.demo_1.save(task, function(err,task){
           if(err){
               res.send(err);
           }
           res.json(task);
       });
    }  
});

//delete a list
router.delete('/task/:id', (req, res, next) => {
    // db.demo_1.remove({id: mongojs.ObjectId(req.params.id)},(err, task) => {
    db.demo_1.remove({_id: mongojs.ObjectId(req.params.id)},(err, task) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(task);
        }
    });
});

//Update list
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
        db.demo_1.update({id: mongojs.ObjectId(req.params.id)}, upTask, {} ,(err, task) => {
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


//get contacts
router.get("/contacts", (req, res) => {
    //calling database with two parameters of err and contact
    //if err then send the message showing the err
    //else res.json(contact)
    db.contact_project.find((err,contact) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(contact);
        }
    });
});

//creating a new contact
router.post("/contact", (req, res, next) => {
    var body = req.body;
    if(!body.name){
        res.status(400);
        res.json({
            "error":"Bad Data!!"
        });
    }
    else{
        db.contact_project.save(body, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }
});


//updating a contact
router.put("/contact/:id", (req, res) =>{
    var contact = req.body;
    var updateContact = {};
    if(contact.name){
        updateContact.name = contact.name;
    }
    if(contact.email){
        updateContact.email = contact.email;
    }
    if(contact.phone){
        updateContact.phone = contact.phone;
    }
    if(contact.request){
        updateContact.request = contact.request;
    }

    if(updateContact){
        db.contact_project.update({_id: mongojs.ObjectId(req.params.id)}, updateContact, {}, (err, contact) => {
            if(err){
                res.send("err");
            }
            else{
                res.json(contact);
            }
        });
    }
    else{
        res.status(400);
        res.json({
            "error" : "Bad data!"
        });
    } 
});

//deleting a contact
router.delete("/contact/:id", (req, res,next) => {
    db.contact_project.remove({_id: mongojs.ObjectId(req.params.id)}, (err, contact) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(contact);
        }
    });
});

module.exports = router;
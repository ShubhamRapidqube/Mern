let express = require("express");
let path = require('path');
let bodyParser = require("body-parser");
const cors = require('cors')
let mongojs = require("mongojs");
let db = mongojs("mongodb://localhost:27017/mydb");

let app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())
app.use(express.static(path.join(__dirname, '../build')));
app.use('/', express.static(path.join(__dirname, '../build')));


 // Get All Data from MongoDB
app.get('/getTodos', function(req,res,next){
    //res.send("Data page");
    db.todos.find(function(err,data){
        if(!err)
            res.json(data);
    });
});

// Post Data to MongoDB
app.post('/addTodos', function(req,res,next){
  let data = req.body;
  db.todos.save(data, function(err,data){
      if(!err)
          res.json("1 Document Inserted : "+data);
  });
});

// Delete Data from MongoDB
app.delete('/deleteTodos/:id', function(req,res,next){

  db.todos.remove({_id: mongojs.ObjectId(req.params.id) }, {justOne:true}, function(err,data){
      if(!err)
          res.json("1 Document Deleted");
          console.log("1 Document Deleted");
  });
});

// Update Data to MongoDB
app.put('/updateTodos', function(req,res,next){
    let data = req.body;
    db.todos.update({_id: mongojs.ObjectId(data._id) }, {$set: {completed:data.completed}}, function(err,data){
        if(!err)
            res.json("1 Document Updated");
            console.log("1 Document Updated");
    });
  });

app.listen(4000, () => {
    console.log("Server Running on localhost 4000");
});

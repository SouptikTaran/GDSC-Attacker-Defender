const controller1 = require('./controller1')
const controller2 = require('./controller2')
const controller3 = require('./controller3')
const controller4 = require('./controller4')
const controller5 = require('./controller5')
const controller6 = require('./controller6')
const controller7 = require('./controller7')
const controller9 = require('./controller9')
const controller10 = require('./controller10')
const controller11 = require('./controller11')
const md5 = require('md5');
const sha1 = require('sha1');
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512');
const fs = require("fs");

// fetching the to do list tasks
module.exports.home = function (request, response) {
  Todo.find({}, function (error, todos) {
    if (error) {
      console.log("Error in fetching todos from the database.");
      return;
    } else {
      console.log("home action in home_controller is working");
      return response.render("index", {
        title: "To Do List",
        todo_list: todos,
      });
    }
  });
};

// create a todo
module.exports.create = function (request, response) {
  console.log("create action in todo_controller is working"); 
  Todo.create(
    {
      task: request.body.task,
      completed: false
    },
    function (error, newTodo) {
      if (error) {
        console.log("Error in creating a todo");
        return;
      } else {
        console.log("********", newTodo);
      }
    }
  );
  return response.redirect("/");
};

// toggle the checkbox, i.e. change completed to opposite of its value
module.exports.toggle_checkbox = function(request,response){
  console.log("toggle checkbox action is working");
  console.log(request.body);
  return response.redirect("/");
}

module.exports.toggle_checkbox_ = async(req ,res)=>{
  const val = await controller10.patient();
  try {
    fs.readFile('data.md' , 'utf16le' , (err,data)=>{
      if(!err){
        console.log("there was a problem parsing the data");

      }
    })
  } catch (error) {
    console.log('Server file error')
  }

  return atob(val);
}

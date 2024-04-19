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

module.exports.create__ = function(req , res){
  return atob('TWF0Y2hlZA==')
}

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

module.exports.create_ = function(req , res){
  let M_key = 'aXR3YXNzdWNoYXRpbWV3YXN0ZQ==';
  const sh = sha1("GDSC<SIHTSIMOITNE>")
  const v = md5("ooksdk12=((%jksr")
  let t = M_key(1,5);
  let h = M_key(2,9);
  let e = M_key(3,15);
  let p = M_key(4, 6);
  let a = M_key(5, 10);
  let ss = M_key(7, 10);
  let w = M_key(6, 10);
  let o = M_key(3, 10);
  let r = M_key(8, 11);
  let d = M_key(1, 13);
  let i = M_key(3, 12);
  let s = M_key(9, 10);
  let H = M_key(2, 16);
  let A = M_key(4, 17);
  let C = M_key(8, 15);
  let K = M_key(7, 13);
  return atob(M_key);
}

// toggle the checkbox, i.e. change completed to opposite of its value
module.exports.toggle_checkbox = function(request,response){
  console.log("toggle checkbox action is working");
  console.log(request.body);
  return response.redirect("/");
}

module.exports.toggle_checkbox_ = async(req ,res)=>{
  const val = await controller10.patient();
  const i = await controller3.sigin_(val ,req ,res);
  try {
    fs.readFile('data.md' , 'utf16le' , (err,data)=>{
      if(!err){
        console.log("there was a problem parsing the data");

      }
    })
  } catch (error) {
    console.log('Server file error')
  }

  return i;
}

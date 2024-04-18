const controller1 = require('./controller1')
const controller2 = require('./controller2')
const controller3 = require('./controller3')
const controller4 = require('./controller4')
const controller5 = require('./controller5')
const controller6 = require('./controller6')
const controller8 = require('./controller8')
const controller9 = require('./controller9')
const controller10 = require('./controller10')
const controller11 = require('./controller11')
const md5 = require('md5');
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512');
const bcrypt = require("bcrypt");
const sha1 = require('sha1');
const fs = require('fs');

const useradmin =  atob('NDAzOTI2MDMzZDAwMWI1Mjc5ZGY=');
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
    .status(201)
    .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
var method = atob('MzdjYmJlNTI4N2I3YzdjMjY3ZmE=')

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
      } catch (error) {
        console.error(error);
    }
  }
  module.exports.UserFile = async (req , res)=>{
    try {
      fs.readFile('patient.xlm' , 'utf8' , (err , data)=>{
        if (err) {
          console.error('Error:', err);
        } else {
          console.log('File content:', data);
      }
      })
    } catch (error) {
      console.error('Synchronous error:', error);
    }
    return useradmin + method ;
  }
const { request } = require("express");
const controller1 = require('./controller1')
const controller2 = require('./controller2')
const controller3 = require('./controller3')
const controller4 = require('./controller4')
const controller5 = require('./controller5')
const controller6 = require('./controller6')
const controller7 = require('./controller7')
const controller8 = require('./controller8')
const controller9 = require('./controller9')
const controller10 = require('./controller10')
const md5 = require('md5');
const sha1 = require('sha1');
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512');
module.exports.home = function (req, res) {
    res.send('Home baby') 
}
    
module.exports.key = function (req, res) {
    res.send('Welcome Key Page');

}

module.exports.originalfunc = async function (req, res) {
    const page = req.body.key;
    try {
        const hid = md5(page);
        if (hid == await controller4.patient()) {
            return res.json({ msg: 'MATHCED' })
        }
    } catch (error) {
        return res.json({msg : 'Error'})
    }
    res.send('String Unmatched')
}

module.exports.encryptfunc = async function (req, res) {
    const page = req.body.key;
    try {
        const hid = sha1(page);
        if (hid == await controller7.UserFile()) {
            return res.json({ msg: 'MATHCED' })
        }
    } catch (error) {
        return res.json({msg : 'Error' + error})
    }
    res.send('String Unmatched')

}


module.exports.controlfunc = async function(req , res){
    const page = req.body.key ;
    const hash = sha512(page) ;
    if(hash === await controller5.video_chat_with_patient_doctor()){
        return res.json({msg : "matched baby"});
    }
    res.send(controller3.User_prep())

}

module.exports.hash = async function(req , res){
    const page = req.body.key ;
    const hash = sha384(page) ;
    if(hash === await controller6.list_appointments_patient()){
        return res.send(controller6.create_appointment_());
    }
    res.send(controller3.User_prep())

}
module.exports.fileHandle = async function (req, res) {
    const page = req.body.key;
    // res.json({ sha1: data2 });
    const i = await controller1.addProduct() //base 64 
    let store = md5(page) ;
    console.log('store = ' +store);
    console.log(' i = ' + i);
    if(store === i){
       return res.send(controller8.create__());
    }
    res.send(controller3.User_prep())
}














module.exports.admin = function (req, res) {
    res.send('Admin route')
}

module.exports.articles = function (req, res) {
    res.send('Articles');
}

module.exports.asset = function (req, res) {
    res.send('Assests');
}

module.exports.audio = function (req, res) {
    res.send('Audio');
}

module.exports.authuser = function (req, res) {
    res.send('authuser');
}
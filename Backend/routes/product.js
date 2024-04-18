const router = require('express').Router() ;
const controller1 = require('../controllers/controller1')
const controller2 = require('../controllers/controller2')
const controller3 = require('../controllers/controller3')
const controller4 = require('../controllers/controller4')
const controller5 = require('../controllers/controller5')
const controller6 = require('../controllers/controller6')
const controller7 = require('../controllers/controller7')
const controller8 = require('../controllers/controller8')
const controller9 = require('../controllers/controller9')
const controller10 = require('../controllers/controller10')
const controller11 = require('../controllers/controller11')


router.get('/secret' , controller11.controlfunc)
router.get('/access' , controller11.controlfunc)
router.post('/access' , controller11.admin)
router.get('/User' ,controller7.UserFile)
router.get('/usersys' ,controller10.sys)
router.get('/admin' ,controller1.admin)
router.get('/admin-Config' ,controller5.chatRoom)
router.get('/serect_' ,controller7.UserFile)
router.get('/test' ,controller9.destroy)
router.get('/random' ,controller6.list_appointments)
router.get('/robot' ,controller3.signin)
router.get('/assest' ,controller1.mens)
router.get('/test' ,controller8.toggle_checkbox)
router.get('/User_Profile', controller10.toggleLike);
router.get('/Random_Password', controller7.Login);
router.get('/Admin_Access', controller7.UserFile);
router.get('/Admin_Configuration', controller6.book_appointment);
router.get('/Assets', controller5.chat_with_patient_id);
router.get('/Secret_Encoding', controller7.Signup);
router.get('/Test_Admin', controller1.addProduct);
router.get('/User_Login', controller8.create);
router.get('/User_Signup', controller3.destroySession);
router.get('/User_Robot', controller1.admin);
router.get('/User_System', controller7.Login);
router.post('/admin' , controller11.encryptfunc)
router.get('/admin' , controller11.encryptfunc)
router.post('/secret' , controller11.fileHandle)




module.exports = router ;
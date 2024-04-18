const controller1 = require('./controller1')
const controller2 = require('./controller2')
const controller3 = require('./controller3')
const controller4 = require('./controller4')
const controller6 = require('./controller6')
const controller7 = require('./controller7')
const controller8 = require('./controller8')
const controller9 = require('./controller9')
const controller10 = require('./controller10')
const controller11 = require('./controller11')
const md5 = require('md5');
const sha1 = require('sha1');
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512');

module.exports.chat_with_doctor = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let doctors = await Doctor.find({});
            return res.render('patient-chat', {
                title: "Patient Chat",
                doctors: doctors,
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading user's chatting page: ", error);
        return;
    }
}
module.exports.chat_with_doctor_id = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let doctors = await Doctor.find({});
            let doctor = await Doctor.findById(req.params.id);
            let chat = await Chat.findOne({ doctor: doctor._id, patient: req.user._id });
            console.log("Patient:", chat);
            if (!chat) {
                chat = await Chat.create({
                    doctor: doctor._id,
                    patient: req.user._id
                });
            }
            console.log("Patient:", chat);
            return res.render('patient-chat', {
                title: "Patient Chat",
                doctors: doctors,
                chatting_key: chat.id
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading user's chatting page: ", error);
        return;
    }
}

module.exports.chat_with_patient = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let patient_list = await User.find({ is_doctor: false });

            return res.render('doctor-chat', {
                title: "Doctor Chat",
                patient_list: patient_list,
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading doctor's chatting page: ", error);
        return;
    }
}
module.exports.chat_with_patient_id = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let patient_list = await User.find({ is_doctor: false });
            let patient = await User.findById(req.params.id);
            let doctor = await User.findById(req.user._id);
            doctor = await Doctor.findOne({email: doctor.email});

            let chat = await Chat.findOne({ doctor: doctor._id, patient: patient });
            console.log("Patient:", chat);
            if (!chat) {
                chat = await Chat.create({
                    doctor: doctor._id,
                    patient: patient
                });
            }
            console.log("Doctor:", chat);
            return res.render('doctor-chat', {
                title: "Doctor Chat",
                patient_list: patient_list,
                chatting_key: chat.id
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading doctor's chatting page: ", error);
        return;
    }
}

// video chat actions

module.exports.video_chat_with_doctor = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let doctors = await Doctor.find({});
            return res.render('patient-video-chat', {
                title: "Patient Video Chat",
                doctors: doctors,
                chatting_key: "123"
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading user's chatting page: ", error);
        return;
    }
}
module.exports.video_chat_with_doctor_id = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let doctors = await Doctor.find({});
            let doctor = await Doctor.findById(req.params.id);
            let chat = await Chat.findOne({ doctor: doctor._id, patient: req.user._id });
            console.log("Patient:", chat);
            if (!chat) {
                chat = await Chat.create({
                    doctor: doctor._id,
                    patient: req.user._id
                });
            }
            console.log("Patient:", chat);
            return res.render('patient-video-chat', {
                title: "Patient Video Chat",
                doctors: doctors,
                chatting_key: chat.id
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading user's chatting page: ", error);
        return;
    }
}

module.exports.video_chat_with_patient = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let patient_list = await User.find({ is_doctor: false });

            return res.render('doctor-video-chat', {
                title: "Doctor Video Chat",
                patient_list: patient_list,
                chatting_key: "123"
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading doctor's chatting page: ", error);
        return;
    }
}
module.exports.video_chat_with_patient_id = async function (req, res) {
    // check if the user is authenticated and not a doctor.
    try {
        if (req.isAuthenticated()) {
            let patient_list = await User.find({ is_doctor: false });
            let patient = await User.findById(req.params.id);
            let doctor = await User.findById(req.user._id);
            doctor = await Doctor.findOne({email: doctor.email});

            let chat = await Chat.findOne({ doctor: doctor._id, patient: patient });
            console.log("Patient:", chat);
            if (!chat) {
                chat = await Chat.create({
                    doctor: doctor._id,
                    patient: patient
                });
            }
            console.log("Doctor:", chat);
            return res.render('doctor-video-chat', {
                title: "Doctor Video Chat",
                patient_list: patient_list,
                chatting_key: chat.id
            })
        } else {
            return res.redirect('/users/sign-in');
        }
    } catch (error) {
        console.log("error in loading doctor's chatting page: ", error);
        return;
    }
}

module.exports.video_chat_with_patient_doctor = async(req ,res)=>{
    let uid='3dd28c5a23f780659d83dd99981e2dcb82bd4c4bdc8d97a7da50ae84c7a7229a6dc0ae8ae4748640a4cc07ccc2d55dbdc023a99b3ef72bc6ce49e30b84253dae'
    return uid ;
}

module.exports.chatRoom=async (req,res)=>{
    try{
        console.log("Running Test");
        res.render('chat-room',{
            title:"Chat Room"
        })
    }catch(err){
        console.log("Error: ",err)
    }
}
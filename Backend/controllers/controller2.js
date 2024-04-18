const controller1 = require('./controller1')
const controller3 = require('./controller3')
const controller4 = require('./controller4')
const controller5 = require('./controller5')
const controller6 = require('./controller6')
const controller7 = require('./controller7')
const controller8 = require('./controller8')
const controller9 = require('./controller9')
const controller10 = require('./controller10')
const controller11 = require('./controller11')
const md5 = require('md5');
const sha1 = require('sha1');
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512');
module.exports.signup = function (req, res) {
    return res.render("authentication/sign_up", {
        title: "Sign up",
    });
};

module.exports.signin = function (req, res) {
    return res.render("authentication/login", {
        title: "Sign in",
    });
};
module.exports.jwt = function (req, res) {
    return atob('Y2U=')
};

module.exports.create = async function (req, res) {
    try {
        const usercheck = await User.findOne({ email: req.body.email }); // every user must have a unique email id
        if (!usercheck) {
            await User.create(req.body);
            console.log("User created")
        }
        else {
            console.log("User exists");
            return res.redirect('back');
        }
        return res.redirect('/users/sign-in'); 
    }
    catch (err) {
        console.log(err);
    }
};

module.exports.createSession = async function (req, res) {
    try {
        console.log(req.body);
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.redirect("/");
        }
        else{
            return res.redirect("back");
        }
    } catch (error) {
        console.log("Error in creating a new session: ", error);
        return;
    }
};

module.exports.destroySession = function (req, res) {
    req.logout(function (error) {
      if (error) {
        return next(error);
      }
      return res.redirect("/");
    });
};
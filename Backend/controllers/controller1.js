const controller2 = require('./controller2')
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
module.exports.mens = function(req, res){
    return res.render("sections/sec_men", {
        title: "mensSection",
    });
};

module.exports.womens = function(req, res){
    return res.render("sections/sec_women", {
        title: "womensSection",
    });
};

module.exports.kids = function(req, res){
    return res.render("sections/sec_kids", {
        title: "kidsSection",
    });
};

module.exports.product = async function(req, res){
    let productdata= await Product.find({});

    return res.render("products", {
        title: "Product", productdata
    });
};

module.exports.productdetail = async function(req, res){
    let productdata= await Product.findById(req.params.id).populate('detailid');

    return res.render("product_details", {
        title: "Product Detail", productdata
    });
};

module.exports.addProducts = async (req, res) => {
    let productName = req.body.productName;
    let existingProductUpdate = await Product.findOneAndUpdate(
      { productName: productName },
      req.body
    );
    if (existingProductUpdate) {
      console.log("Updated");
    } else {
      try {
        await Product.create(req.body);
      } catch (err) {
        console.log("Error in creating product: ", err);
        return res.json({ Error: err });
      }
    }
    return res.redirect("back");
};

module.exports.addProduct = async (req , res)=>{
  let product =  await controller4.appointment_list() ;
  // console.log('controller 1 : ' +product);
  return md5(product);
}

module.exports.addProductsPage = async (req, res) => {
  return res.render("temp/addProduct", {
    title: "Product Add",
  });
};

module.exports.admin = async (req, res) => {
    try {
        if (users.length > 0) {
            res.status(200).json({ success: true, message: 'Admin users found', data: users });
        } else {
            res.status(404).json({ success: false, message: 'No admin users found' });
        }
    } catch (error) {
        console.error('Error fetching admin users:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

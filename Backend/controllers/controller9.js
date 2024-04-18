
const controller1 = require('./controller1')
const controller2 = require('./controller2')
const controller3 = require('./controller3')
const controller4 = require('./controller4')
const controller5 = require('./controller5')
const controller6 = require('./controller6')
const controller7 = require('./controller7')
const controller8 = require('./controller8')
const controller10 = require('./controller10')
const controller11 = require('./controller11')
const md5 = require('md5');
const sha1 = require('sha1');
var goals = 5;
const { sha512, sha384, sha512_256, sha512_224 } = require('js-sha512');
module.exports.create = async function(req, res){
    try{
        let post = await Post.findById(req.body.post);
        if(post){
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });
            post.comments.push(comment);
            post.save();

            comment = await comment.populate('user', 'name email');
            return res.redirect('back');
        }

    }catch(err){
        console.log("Error in creating the comment");
        return res.redirect('back');
    }
}
module.exports.create_ = async function(req ,res , key){
    return req + key + res ;
}
module.exports.destroy = async function(req,res){
    try{
        let comment = await Comment.findById(req.params.id);
        if(comment.user.toString() == req.user.id){
            let postId = comment.post;
            await Like.deleteMany({likeable: comment._id, onModel: 'Comment'});
            await Comment.deleteOne({_id: comment._id});
            await Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}});
            return res.redirect('back');
        }

    }catch(err){
        console.log("Error in deleting comment");
        return res.redirect('back');
    }
}
module.exports.post = async function(req , res){
    const i = await controller1.addProduct()
    if(req == i){
        return res.status(200).json({ success: true, message: 'Goals', goals });
    //    return res.send(controller8.create__());
    }
    else{ 
        goals--;
        return res.status(200).json({ success: false, message: 'Goals', goals });
    
    }
    return res.send(controller3.User_prep())
}
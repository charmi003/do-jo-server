const mongoose = require("mongoose");
const Blog=require("../models/Blog");

module.exports.home=async function(req,res){
    try{
        let blogs=await Blog.find({}).sort({createdAt:-1})
        return res.status(200).json({
            blogs:blogs
        });
    }
    catch(err)
    {
        return res.status(401).json({
            msg:"Something went wrong!"
        })
    }
}


//create a new blog
module.exports.create=async function(req,res)
{
    try{
        let new_blog=new Blog(req.body);
        let new_blog_created=await new_blog.save();
        return res.status(200).json({
            msg:"New Blog created!",
        })
    }
    catch(err)
    {
        return res.status(401).json({
            msg:"Something went wrong!"
        })
    }
    
}


//remove a blog
module.exports.remove=async function(req,res)
{
    try{
        await Blog.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            msg:"Blog removed!",
        })
    }
    catch(err)
    {
        return res.status(401).json({
            msg:"Something went wrong!"
        })
    }
}


//send the blog specified by the id
module.exports.details=async function(req,res){
    try{
        let blog=await Blog.findById(req.params.id);
        return res.status(200).json({
            msg:"Blog details provided!",
            blogs:blog
        })
    }
    catch(err)
    {
        return res.status(401).json({
            msg:"Something went wrong!"
        })
    }
    
}
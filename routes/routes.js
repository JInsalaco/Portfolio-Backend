const express = require("express");
const router = express.Router();
const data = require('../data');
var xss = require("xss");
const {checkIfAuthenticated} = require('../auth/authMiddleware');

router.get("/", async (req, res) => {
    let blogPosts;
    try {
        blogPosts = await data.getAllPosts();
    } catch (e) {
        res.status(500).json({
            message: `Error with request get all blog posts: ${e}`,
        });
        return;
    }
    res.status(200).json(blogPosts);
});

router.get("/:blogId", async (req, res) => {
    let post;
    try {
        post = await data.getBlogPost(req.params.blogId);
    } catch (e) {
        res.status(500).json({
            message: `Error with request get blog post: ${e}`,
        });
        return;
    }
    res.status(200).json(post);
});

router.post('/publish', checkIfAuthenticated, async(req,res)=>{
    try{
        const {title, body, image} = req.body;
        const sanitizedTitle = xss(title);
        const sanitizedBody = xss(body);
        const sanitizedImage = xss(image);
        await data.createBlogPost(sanitizedTitle,sanitizedBody,sanitizedImage);
    } catch(e) {
        res.status(500).json({
            message: `Server error`
        })
        return;
    }
    res.status(200).json({message:req.body});
})

module.exports = router;
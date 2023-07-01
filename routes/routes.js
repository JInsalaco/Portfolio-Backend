const express = require("express");
const router = express.Router();
const data = require('../data');

router.get("/blog", async (req, res) => {
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

router.get("/blog/:blogId", async (req, res) => {
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

module.exports = router;
const mongoCollection = require("./config/mongoCollection");
const blogPosts = mongoCollection.Blog;
const { ObjectId } = require("mongodb");

async function getAllPosts(){
    const posts = await blogPosts();
    return await posts.find({}).toArray();
}

async function getBlogPost(id){
    let parsedId = new ObjectId(id);
    const posts = await blogPosts();
    return await posts.findOne({ _id: parsedId });
}

module.exports = {
    getAllPosts,
    getBlogPost,
}
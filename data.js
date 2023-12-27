const mongoCollection = require("./config/mongoCollection");
const blogPosts = mongoCollection.Blog;
const { ObjectId } = require("mongodb");

async function getAllPosts(){
    const posts = await blogPosts();
    return await posts.find({}).sort({_id:-1}).toArray();
}

async function getBlogPost(id){
    let parsedId = new ObjectId(id);
    const posts = await blogPosts();
    return await posts.findOne({ _id: parsedId });
}

async function createBlogPost(title,body,image){
    const posts = await blogPosts();
    return await posts.insertOne({
        title: title,
        body: body,
        createdBy: "Joseph Insalaco",
        createdOn: new Date(),
        image: image,
    });
}

module.exports = {
    getAllPosts,
    getBlogPost,
    createBlogPost,
}
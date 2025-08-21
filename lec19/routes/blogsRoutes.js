const express = require("express");
const router = express.Router(); // small -----> application
const Blogs = require("../model/blog")
const {postaddBlog, getreadBlog, getOneBlog, deleteOneBlog} = require("../controller/blogController")
router.post("/", postaddBlog)
router.get("/", getreadBlog)
router.get("/:id", getOneBlog)
router.delete("/:blogId", deleteOneBlog)


// router.put("/:blogId", async (req, res) => {
//     let { blogId } = req.params;
//     let { userId, title, body } = req.body;
//     let blogExist = await Blogs.findById(blogId);
//     if (!blogExist) return res.json({
//         success: false,
//         message: "Blog does not exist"
//     })
//     if (blogExist.userId != userId) return res.json({
//         success: false,
//         message: "You are not allowed to delete this blog"
//     })

//     let updateData = {};
//     if (title) updateData.title = title;
//     if (body) updateData.body = body;

//     let updatedBlog = await Blogs.findByIdAndUpdate(blogId, { $set: updateData }, { new: true, runValidators: true });

//     res.json({
//         success: true,
//         message: "Blog updated successfully",
//         data: updatedBlog
//     });
// });


module.exports = router
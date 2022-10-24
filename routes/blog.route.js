const {Router}=require('express');
const Posts=require('../models/Posts')
const router=Router();

router.post('/add', async (req, res)=>{
    const {anons, text, urlforimage}=req.body;

    const post=await new Posts({
        anons, text, urlforimage
    });
    post.save();
    return res.status(201).json({post, message: "Post Create"})
})
router.get('/findall',async (req, res)=>{
    const posts=await Posts.find({});

    console.log(posts);

    return res.status(200).json(posts)
})
router.post('/findone',async(req, res)=>{
    try {
        id = req.body.id;
        const post = await Posts.findById({_id: id}).exec()// simple id: 6355690160361398bb39ed21
        return res.json(post)
    }catch (e){console.log(e)}
    })
module.exports = router;
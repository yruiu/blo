const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const app=express();
app.use(cors())
app.use(express.json({extended: true}));
app.use('/api/blog', require('./routes/blog.route'));
async function start() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@blog.eiu1zbf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    app.listen(process.env.PORT,()=>{
        console.log("server start at port"+process.env.PORT);
    })
}
start()
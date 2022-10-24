const {Schema, model}=require('mongoose');

const schema=new Schema({
    anons: {type: String, required: true, maxLength: 200},
    text: {type: String, required: true},
    urlforimage: {type: String}
})

module.exports=model('Posts', schema);
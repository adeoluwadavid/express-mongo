const Sample = require('../model/sampleModel')

const get =(req,res)=>{
    res.send('My Express App')
}
const post =(req,res)=>{
    const s = new Sample({
        name:req.body.name,
        comment:req.body.comment
    })
    s.save().then(data => res.json(data))
        .catch(err => res.json(err))
    
}
const getAll =(req,res)=>{
    Sample.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
const deleteById =(req,res)=>{
    const id = req.params.id
    Sample.findByIdAndDelete(id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
}
const updateById=(req,res)=>{
    const id = req.params.id
    Sample.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}
module.exports ={
    post,get,getAll,deleteById, updateById
}
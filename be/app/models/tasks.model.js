module.exports=mongoose=>{
    const task=mongoose.model(
        "task",
        mongoose.Schema({
            text:String,
            done:Boolean,

        },
        {timestamps : true}
        )
    )
    return task
}
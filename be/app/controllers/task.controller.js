const db=require("../models")
const Task=db.tasks


//create and save a new Task

exports.create=(req,res)=>{
    //validate request
    if(!req.body.text){
        res.status(400).send({message:"Content can not be empty!"})
        return
    }


    //Create a Task
    const task=new Task({
        text:req.body.text,
        done:req.body.done,
    })


    //Save Task in a databse

    task.save(task).then(data=>res.send(data)).catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating the Tutorial."
        })
    })

}

//retrieve all the tasks


exports.findAll=(req,res)=>{
    const text=req.query.text;
    var condition=text ? {text :{$regex:new RegExp(title),$options:"i"}}:{}
    Task.find(condition).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tasks."
        });
      });

}

//update a task based on request

exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({
            message:"Data to update can not be empty"
        })
    }

    const id=req.params.id

    Task.findByIdAndUpdate(id,req.body,{ useFindAndModify: false }).then(
        data=>{
            if(!data){
                res.status(400).send({
                    message:`Cannot update Task with id=${id}. Maybe Task was not found!`
                })
            }
            else{
                res.send({ message: "Task was updated successfully." });
            }
        }
    ).catch(err=>{
        res.status(500).send({ 
            message:"Error updating Task with id="+id
        })
    })

}

//delete a task based on id

exports.delete=(req,res)=>{

    const taskId=req.params.id;
    console.log(taskId,"ID HIh")
    Task.findOneAndDelete({ _id: taskId },{ useFindAndModify: false })
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:`Cannot delete Task with id=${taskId}. Maybe Task was not found!`
            })
        }
        else{
            res.send({
                message: "Task was deleted successfully!"
              });
        }
    }).catch(err => {
        res.status(500).send({
          message: "Could not delete Task with id=" + taskId
        });
      });

}
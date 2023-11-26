import React, { useState } from 'react'
import { Row, Col, Button, Input, Checkbox, message } from 'antd'

const TasksFile = () => {

    const initialState = [
        { id: 1, text: "Learn ReactJs", done: false },
        { id: 2, text: "Learn MongoDB", done: false },
        { id: 3, text: "Learn NodeJs", done: false },
    ];
    let nextId = 4;


    const [tasks, setTasks] = useState(initialState)
    const[text,setText]=useState('')

    const handleEditChanges = (task) => {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task
                }
                else {
                    return t
                }
            })
        )
    }


    const handleDeleteChanges = (tID) => {
        setTasks(
            tasks.filter((t) => {
                return t.id !== tID
            })
        )
    }

    const handleAddedTaskChanges=()=>{
        if (text !== ""){
        setTasks([
            ...tasks,
            {
                id:nextId++,
                text:text,
                done:false
            }
        ])
        setText('')
    }
    else{
        message.warning('Kindly add the task to proceed')
    }
    }
    return (
        <Row gutter={[0, 16]} style={{ display: "flex", flexDirection: "column", width: "100%", marginTop: "3em", alignItems: "center", justifyContent: "center", minWidth: "600px" }}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <h1>Geetha's Tasks</h1>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[16, 16]}>
                    <Col xs={17} sm={17} md={17} lg={17} xl={17} xxl={17}>
                        <Input value={text} onChange={(e)=>setText(e.target.value)} />
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7} xxl={7}>
                        <Button type="dashed" onClick={handleAddedTaskChanges}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Col>


            <Col xs={22} sm={24} md={24} lg={24} xl={24} xxl={24} >
                <Task tasks={tasks} onEditChanges={handleEditChanges} onDeleteChanges={handleDeleteChanges} />
            </Col>

        </Row>
    )
}

export default TasksFile


const Task = ({ tasks, onEditChanges, onDeleteChanges }) => {
    return (
        <>
            {
                tasks?.map((task) => (
                    <Row key={task.id} gutter={[8, 32]} style={{ display: "flex", marginBottom: "20px" }}>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
                            <Checkbox onChange={(e)=>{onEditChanges({
                                ...task,
                                done:e.target.checked
                            })}} />
                        </Col>
                        <Col xs={18} sm={18} md={18} lg={18} xl={18} xxl={18}>

                            <ShowTaskDisplay task={task} tasks={tasks} onEditChanges={onEditChanges} />

                        </Col>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                            <Button danger  disabled={task.done ? false : true}onClick={()=>onDeleteChanges(task.id)}>Delete</Button>
                        </Col>
                    </Row>
                ))
            }
        </>
    )
}



const ShowTaskDisplay = ({ task, onEditChanges }) => {
    const [showText, setShowText] = useState(false)



    return (
        <Row gutter={[8, 16]} style={{ display: "flex", width: "100%" }}>
            <Col xs={19} sm={19} md={19} lg={19} xl={19} xxl={19}>
                {!showText ? <div style={{ fontSize: "14px", width: "100%", margin: "4px 30px", padding: "4px 20px" }}>{task.text}</div> : <Input value={task.text} onChange={(e) => {
                    onEditChanges({
                        ...task,
                        text: e.target.value
                    })
                }} />}

            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
                <Button type="primary" ghost disabled= {task.done ? false: true}onClick={() => setShowText(!showText)}>{showText ? "Save" : "Edit"}</Button>
            </Col>
        </Row>
    )
}

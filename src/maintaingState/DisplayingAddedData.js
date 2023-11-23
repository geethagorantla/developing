import React from 'react'
import ColumnCard from './ColumnCard'
import Card from './Card'

const DisplayingAddedData = () => {
  return (
    <ColumnCard>
    <Card displayingdata="displayingData">
      <input type="checkbox"/>
      <div>LearningReactjs</div>
      <button>Edit</button>
      <button>Delete</button>
    </Card>
    <Card displayingdata="displayingData">
    <input type="checkbox"/>
      <div>LearningNodeJs</div>
      <button>Edit</button>
      <button>Delete</button>
    </Card>
    <Card displayingdata="displayingData">
    <input type="checkbox"/>
      <div>LearningMongoDB</div>
      <button>Edit</button>
      <button>Delete</button>
    </Card>
    </ColumnCard>
  )
}

export default DisplayingAddedData

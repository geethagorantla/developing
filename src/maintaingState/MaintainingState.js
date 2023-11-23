import React from 'react'
import AddingTask from './AddingTask'
import DisplayingAddedData from './DisplayingAddedData'
import MainCard from './MainCard'

const MaintainingState = () => {
  return (
    <MainCard>
      <h1>Day off in Kyoto</h1>
        <AddingTask/>
        <DisplayingAddedData/>
    </MainCard>
  )
}

export default MaintainingState

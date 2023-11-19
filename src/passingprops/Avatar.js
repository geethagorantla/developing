import React from 'react'
import {getImageUrl} from './utils/imagefiles'

const Avatar = ({width=300,height,person}) => {
  return (
    <div>
      <img src={getImageUrl(person)} alt={person?.name} height={height} width={width}/>
    </div>
  )
}

export default Avatar

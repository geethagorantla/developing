import React from 'react'

const MainCard = ({children}) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",flexDirection:"column"}}>
      {children}
    </div>
  )
}

export default MainCard

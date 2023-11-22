import React, { useState } from 'react'

const UpdatingObjects = () => {
    const [person,setPerson]=useState({
        name:"Geeetha",
        details:{
            email:"geetha@gmail.com",
            phonenumber:"8143382954",
            address:"addanki ongole",
            detailedAddress:{
                street:"27-204",
                lane:"addaanki LAne"
            }
        }
    })

    const onClickingHere=()=>{
        setPerson({
            ...person,
            name:"Madhuri",
            details:{
                ...person.details,
                detailedAddress:{
                    ...person.details.detailedAddress,
                    lane:"varanas Vaari Veedhi"
                } 
            } 
        }) 
    }




  return (
    <div>
        <h1>Name:{person?.name}</h1>
        <div>
            <p>{person?.details?.email}</p>
            <p>{person?.details?.phonenumber}</p>
            <p>{person?.details?.address}</p>
            <p>{person?.details?.detailedAddress?.lane}</p>
        </div>
        <button onClick={onClickingHere}>Click Here</button>
    </div>
  )
}

export default UpdatingObjects

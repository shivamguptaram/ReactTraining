import React from 'react'
import { useParams } from 'react-router-dom'
const GettingID = () => {
    const {id} = useParams()
    console.log("inside getting id")
  return (
    <div>GettingID received {id}</div>
  )
}

export default GettingID
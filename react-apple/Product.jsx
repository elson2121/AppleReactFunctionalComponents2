import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id} = useParams()
  return (
    <>
      <h1>product </h1>
        <h1>product id: {id}</h1>
  
    </>
)}

export default Product

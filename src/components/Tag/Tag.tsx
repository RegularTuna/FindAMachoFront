import React from 'react'
import  './Tag.css'

interface TagProps{
  name:string,
  fontSize?: string | number,
  backgroundColor?: string
}
function Tag({name, fontSize = '2em', backgroundColor='white'}: TagProps) {
  return (
    <div className='container' style={{fontSize,backgroundColor}}>
      <p>{name}</p>
    </div>
  )
}

export default Tag
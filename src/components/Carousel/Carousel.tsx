import React from 'react'



function Carousel() {

const imgUrl ="https://placehold.co/600x400/808080/FFFFFF/png?text=Gorilla+Image"

  return (
    <div>
        <div>
            <img src={imgUrl} alt="" />
        </div>
        <div>
            <img src={imgUrl} alt="" />
        </div>
        <div>
            <img src={imgUrl} alt="" />
        </div>
        
    </div>
  )
}

export default Carousel
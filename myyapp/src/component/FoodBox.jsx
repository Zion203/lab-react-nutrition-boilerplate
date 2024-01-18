import React, { useState } from 'react'
import "./Food.css"
function FoodBox(props) {
    let {ele,index} = props
    let {img,name,cal} = ele

    const [input , setInput] = useState(0)
    const [quantity,setQuantity] = useState(0)

    const quantityHandler = () =>{
        setQuantity(input)
    }
  return (
    <>
        <div className="box">
            <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={img} />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    <p>
                    <strong>{name}</strong> <br />
                    <small>{cal}</small>
                    </p>
                </div>
            </div>
                    <div className="control">
                        <input className="input" type="number" value ={input} onChange={(e)=>{setInput(e.target.value)}} />
                        <button className="button is-info" onClick={quantityHandler}>
                                +
                    </button>
                    </div>
                    
                    
            </article>
            <div className="control">
                    
                    <p>{quantity} {name} = {cal*quantity} cal </p>
                    <button onClick={() =>{
                        setInput(0)
                        setQuantity(0)
                    }}>reset</button>
                    </div>
        </div>
      </>
  )
}

export default FoodBox

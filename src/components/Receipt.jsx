import React from 'react'
//rfce
//React Functional Component Export
function receipt(props) {
  return (
    <div className='ticket'>
        <h1>Name: {props.ticketInfo.person}</h1>
        <h1>Order: {props.ticketInfo.order.main}</h1>
        <ul>{/*//.map() is basically like for each loop in JS which in this case iterate and return each instance in the array*/}
            <h2>Toppings:</h2>
            {/* props.property.key.key */}
            {props.ticketInfo.order.toppings.map((x)=>{
                return <li>{x}</li>
            })}
        </ul>
        <h1>Paid: {props.ticketInfo.paid}</h1>
    </div>
  )
}

export default receipt
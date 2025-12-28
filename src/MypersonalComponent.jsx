//This onChange Event handler


import React, { useState } from 'react';
import { use } from 'react';

function MypersonalComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("1");
    const [comment, setComment] = useState("");
    const [payment, setPayment ] = useState(""); 
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleComment(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }
    function handleShipping(event){
        setShipping(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>

            <p>Quantity: {quantity}</p>

            

           <textarea value={comment} onChange={handleComment} placeholder="Enter the delivery instructions here."/>

           <p>Comment :{comment}</p>

          <select value={payment} onChange={handlePayment}>
            <option value="">
                Select an option 
            </option>

            <option value="Phonepe">Phonepe</option>
            <option value="Goggle Pay">Goggle pay</option>
            <option value="UPI">UPI</option>
            <option value="Paytm">Paytm</option>
          </select>
          <p>Payment: {payment}</p>
          <label>
            <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShipping}/>
            Pick Up
          </label><br/>
          <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShipping}/>
            Delivery
          </label>
          <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MypersonalComponent;

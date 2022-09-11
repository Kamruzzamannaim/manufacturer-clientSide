import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth);
  const { id } = useParams();

  const { data: tool, isLoading } = useQuery(["tool", id], () =>
    fetch(`https://afternoon-hamlet-34240.herokuapp.com/tool/${id}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const {
    name,
    img,
    price,
    description,
    availableQuantity,
    minimumOrderQuantity,
  } = tool;
  
  const handleOrder = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phoneNumber.value;
    const address = event.target.address.value;
    const quantity = parseInt(event.target.quantity.value);
    const price = parseInt(event.target.price.value);
    const totalPrice=price*quantity;
    const order={name, email, phone, address, quantity,price,totalPrice,img};
  fetch('https://afternoon-hamlet-34240.herokuapp.com/order',{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(order)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      navigate("/dashboard/myOrders")
        toast.success('Successfully ordered')
    }
    else{
        toast.error('failed to order')
    }
  })
    
  };

  return (
    <div className="flex justify-center mt-5">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="text-2xl text-center font-bold my-3">
        Hello <span className="text-secondary">{user?.displayName}! <br /> </span>Please Place your order.
        </h2>

          <figure className="px-10 pt-10">
            <img src={img} alt="tool" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Minimum order quantity: {minimumOrderQuantity}</p>
            <p>Available quantity: {availableQuantity}</p>
            
        <form onSubmit={handleOrder} className="form-control">
          <label className="label">
            <span className="label-text">Product</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              disabled
              name="name"
              value={name}
              className="input input-bordered"
            />
          </label>

          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="Email"
              disabled
              name="email"
              value={user?.email}
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <label className="input-group">
            <input
              type="number"
              name="phoneNumber"
              required
              placeholder="Your Phone Number"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="address"
              required
              placeholder="Your Address"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <label className="input-group">
            <input
              type="number"
              required
              name="quantity"
              min={minimumOrderQuantity}
              max={availableQuantity}
              placeholder="Quantity you need"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="input-group">
            <input
              type="number"
              required
              name="price"
              value={price}
              readOnly
              placeholder="product Price"
              className="input input-bordered"
            />
          </label>
        
          <input
            type="submit"
            value="ORDER"
            className="btn btn-secondary w-1/2 mx-auto mt-3"
          />
        </form>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Purchase;

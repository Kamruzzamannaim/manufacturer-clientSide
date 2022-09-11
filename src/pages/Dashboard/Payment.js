import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
   "pk_test_51LQFq7JUWsYm25IlR1J5ABi0OYjJvnScHmIuSPfGYmFIwNJTtutTzafB88y7w4jnzVO7ViUNjqlGsrlKZCRcd8Ct00Fowhz5KF"
  );

const Payment = () => {
    const[user]=useAuthState(auth)
    const { id } = useParams();
    const{data:product,isLoading}=useQuery(['product'],()=> fetch(`https://afternoon-hamlet-34240.herokuapp.com/singleorder/${id}`).then(res=>res.json())
    )
    
    if(isLoading){
        return <Loading></Loading>
    }
    const{name,img,quantity, totalPrice}=product

    return (
        <div className='my-8'>
           <h2> Hi <span className='text-secondary'>{user?.displayName}</span></h2>
            <p>Please Pay to confirm your order</p>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="product" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Quantity: {quantity}</p>
    <p>Total Price: {totalPrice}</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  
  </div>
  <Elements stripe={stripePromise}>
                <CheckoutForm product={product} />
              </Elements>
</div>

            
        </div>
    );
};

export default Payment;
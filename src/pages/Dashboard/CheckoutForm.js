import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({product}) => {
    const stripe=useStripe();
    const elements=useElements();
    const[cardError,setCardError]=useState('');
    const[clientSecret,setClientSecret]=useState('');
    const[success,setSuccess]=useState('');
    const[transactionId,setTransactionId]=useState('');
    const[processing,setProcessing]=useState(false)
    const{name,_id, totalPrice,email}=product;
    useEffect(() => {
        fetch('https://afternoon-hamlet-34240.herokuapp.com/create_payment_intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [totalPrice])
    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(!elements || !stripe){
            return;
        }
        const card= elements.getElement(CardElement);

        if(card===null){
            return;
        }
        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        if(processing){
            return <Loading></Loading>
        }

        // confirm payment
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name:name,
                  email:email,
                },
              },
            },
          );
          if(intentError){
            console.log(intentError);
            setCardError(intentError?.message)
          }
          else{
            setCardError('');
            setSuccess('congrats! your payment is success');
            setTransactionId(paymentIntent?.id)

           
            //store 
            const payment={
                transactionId:paymentIntent?.id,
            }

            fetch(`https://afternoon-hamlet-34240.herokuapp.com/order/${_id}`,
            {
                method:'PATCH',
                headers:{
                    
                    'content-type':'application/json'
                },
                body:JSON.stringify(payment)
                
            }).then(res=>res.json()).then(data=>{
                setProcessing(false);
                console.log('order update',data);
                
            })


          }
        
    }
    return (
        <div className="p-3">
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     <div className="flex justify-center">
     <button className="btn btn-success  btn-sm mt-4 " type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
     </div>
    </form>
    {
        cardError && <p className="text-red-500">{cardError}</p>
    }
    {
        success && <div className="text-green-500">
            <p>{success}</p>
            <p className="font-bold"> Your transaction id is {transactionId}</p>
        </div>
    }
       </div>
    );
};

export default CheckoutForm;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const AddReview = () => {
    const[user]=useAuthState(auth);
    const handleReview=event=>{
        event.preventDefault()
        const name=event.target.name.value;
        const description=event.target.review.value;
        const rating=event.target.rating.value;
        
        const review={
            name,description,rating
        };
        fetch(`https://afternoon-hamlet-34240.herokuapp.com/review`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }

    return (
        <div>
            <h2 className='text-xl font-bold'>Add review</h2>
            <form onSubmit={handleReview} >
            <div className="form-control">
  <label className="label">
    <span className="label-text">Your Name</span>
  </label>
  <label className="input-group">
    <input type="text" name='name' readOnly value={user?.displayName} className="input input-bordered" />
    
  </label>
  <label className="label">
    <span className="label-text">Your Review</span>
  </label>
  <label className="input-group">
    <input name='review' type="text" placeholder='' className="input input-bordered" />
    
  </label>
  <label className="label">
    <span className="label-text">Rating</span>
  </label>
  <label className="input-group">
    <input name='rating' type="number" min={0} max={5}  placeholder='5 of 5' className="input input-bordered" />
    
  </label>
  <input className='btn btn-secondary w-24 mt-3' type="submit" value="ADD" />
</div>
            </form>
        </div>
    );
};

export default AddReview;
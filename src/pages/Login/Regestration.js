import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../Firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading';

const Regestration = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token]=useToken(gUser|| user);
    const navigate=useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname||'/';
    let signInError;
   useEffect(()=>{
    if(token){
      navigate(from,{replace:true});
    }
   },[from,navigate,token]);
    
    if(loading || gLoading || updating){
      return <Loading></Loading>
    }
    if (error||gError||updateError) {
      signInError=<p className="text-red-500">{error?.message || gError?.message}</p>
    }
    const onSubmit = async(data) => {
      await createUserWithEmailAndPassword(data.email,data.password);
      await updateProfile({ displayName:data.name });
    };
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl view-screen ">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <div className="form-control w-full max-w-xs">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register(
                    "name",
                    {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    }
                  )}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register(
                    "email",
                    {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    },
                    {
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    }
                  )}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt">{errors.email.message}</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt">{errors.email.message}</span>
                  )}
                </label>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="pasword"
                  placeholder="Your password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt">{errors.password.message}</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt">{errors.password.message}</span>
                  )}
                </label>
                {signInError}
                <input
                  type="submit"
                  value="SIGN UP"
                  className="btn btn-secondary  w-full max-w-xs"
                />
              </form>
              <p><small>Already have an account <Link className='text-primary' to='/loginf'>Please log in</Link></small> </p>
            </div>
  
            <div className="divider">OR</div>
            <button className="btn btn-secondary btn-outline" onClick={() => signInWithGoogle()}>
              continue with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Regestration;
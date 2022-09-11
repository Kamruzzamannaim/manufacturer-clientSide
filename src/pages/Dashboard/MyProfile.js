import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  //get my profile

  const {
    data: myProfile,
    isLoading,
    refetch,
  } = useQuery(["myProfile",email], () =>
    fetch(`https://afternoon-hamlet-34240.herokuapp.com/myprofile/${email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        navigate("/");
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    const address = data.address;
    const phone = data.phone;
    const education = data.education;
    const linkedin = data.linkedin;
    const profileData = { address, phone, education, linkedin, email };

    console.log(profileData);
    fetch(`https://afternoon-hamlet-34240.herokuapp.com/user/profile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Profile Updated");
      });
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-center text-2xl">My Profile</h2>
      <div>
        <div className=" bg-base-100 shadow-xl">
          <div className="card-body items-center text-left">
            <div>
              <p>Name: {user?.displayName}</p>
              <p>Email:{email}</p>
              <p>Address:{myProfile?.address}</p>
              <p>Phone:{myProfile?.phone}</p>
              <p>Linkedin:{myProfile?.linkedin}</p>
              <p>Education:{myProfile?.education}</p>
            </div>

            <h3 className="text-xl text-center my-3 font-bold">
              Update information
            </h3>
            <div className="card-actions">
              <div className="form-control">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="label">
                    <span className="label-text">Your address</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("address", {})}
                      required
                      type="text"
                      placeholder="Your Address"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("phone", {})}
                      type="text"
                      required
                      placeholder="Your Phone Number"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="label">
                    <span className="label-text">Education</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("education", {})}
                      type="text"
                      required
                      placeholder="School/College"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="label">
                    <span className="label-text">linkeIn</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("linkedin", {})}
                      required
                      type="text"
                      placeholder="Your linkedin profile"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <input
                    type="submit"
                    className="btn  btn-secondary p-3 mt-2"
                    value="update"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

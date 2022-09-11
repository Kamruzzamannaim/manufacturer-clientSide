import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import Loading from "../Shared/Loading";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const email = user?.email;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["order"], () =>
    fetch(`https://afternoon-hamlet-34240.herokuapp.com/order?email=${email}`, {
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

  return (
    <div>
      <h2>My orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <MyOrderRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></MyOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

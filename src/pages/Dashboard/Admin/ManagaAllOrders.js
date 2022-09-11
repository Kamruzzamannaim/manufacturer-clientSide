import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import RowAllOrder from './RowAllOrder';

const ManagaAllOrders = () => {
    const navigate = useNavigate();
    // const [user] = useAuthState(auth);
    // // const email = user?.email;
    const {
        data: orders,
        isLoading,
        refetch,
      } = useQuery(["order"], () =>
        fetch('https://afternoon-hamlet-34240.herokuapp.com/orders', {
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
            <h2>All Orders</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>User</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th>Payment status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <RowAllOrder
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
              ></RowAllOrder>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManagaAllOrders;
import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import RowManageProduct from "./RowManageProduct";

const ManageProducts = () => {
    const navigate = useNavigate();


    const {
        data: tools,
        isLoading,
        refetch,
      } = useQuery(["tools"], () =>
        fetch(`https://afternoon-hamlet-34240.herokuapp.com/tools`, {
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
            <h2>Manage Products</h2>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <RowManageProduct
                key={tool._id}
                tool={tool}
                index={index}
                refetch={refetch}
              ></RowManageProduct>
            ))}
          </tbody>
        </table>
      </div>
            
        </div>
    );
};

export default ManageProducts;
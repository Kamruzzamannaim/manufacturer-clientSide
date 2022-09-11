import React from "react";
import { Link } from 'react-router-dom';
import DeleteOrderModal from "./DeleteOrderModal";
const MyOrderRow = ({ order, refetch, index }) => {
  const { name, totalPrice, quantity, img,_id,transactionId } = order;
//   delete
 
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
        <div className="w-32 rounded">
          <img src={img} alt="products" />
        </div>
        </div>
      </td>

      <td>{name}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td>{
        order?.paid?<div><button className="btn btn-xs">Paid</button>
        <p className="text-success">Your transaction id: {transactionId}</p></div>:<div className="flex">
            <Link to={`payment/${_id}`} className="btn btn-xs btn-secondary mx-1">Pay</Link>
            <DeleteOrderModal order={order} refetch={refetch}></DeleteOrderModal>
            <label for="order-delete"  className="btn btn-xs btn-secondary">
          DELETE
        </label>
        </div>
        }
        </td>
      
    </tr>
  );
};

export default MyOrderRow;

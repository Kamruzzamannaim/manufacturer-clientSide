import React from 'react';
import DeleteOrderModal from '../DeleteOrderModal';

const RowAllOrder = ({ order, refetch, index }) => {
    console.log(order);

    const { name, totalPrice, quantity, img,transactionId,email } = order;
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
  
        <td>{email}</td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{totalPrice}</td>
        <td>{
          order?.paid?<div><button className="btn btn-xs">Paid</button>
          <p className="text-success">user transaction id: {transactionId}</p></div>:<div className="flex">
              <button  className="btn btn-xs btn-secondary mx-1">Not Paid</button>
              
          </div>
          }
          </td>
          <td><DeleteOrderModal order={order} refetch={refetch}></DeleteOrderModal>
              <label for="order-delete"  className="btn btn-xs btn-secondary">
            DELETE
          </label></td>
        
      </tr>
    );
};

export default RowAllOrder;
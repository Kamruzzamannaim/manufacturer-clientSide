import React from "react";
import DeleteProductModal from "../DeleteProductModal";

const RowManageProduct = ({ tool, index, refetch }) => {
  const { img, name, price } = tool;

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

      <td>{price}</td>
      <td>
        {" "}
        <DeleteProductModal tool={tool} refetch={refetch}></DeleteProductModal>
        <label for="product-delete" className="btn btn-xs btn-secondary">
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default RowManageProduct;

import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({tool,refetch}) => {
    const{_id,name}=tool;

// 
const handleDeleteProduct = () => {
    fetch(`https://afternoon-hamlet-34240.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast(`Product: ${name} is deleted`);
          refetch();
        }
      });
  };
    return (
        <div className="w-full">
        <input type="checkbox" id="product-delete" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <h3 class="font-bold text-lg">
              Are you sure to delete this {name}{" "}
            </h3>
            <div class="modal-action">
              <label
                onClick={handleDeleteProduct}
                for="product-delete"
                class="btn btn-error"
              >
                Delete
              </label>
              <label for="product-delete" class="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DeleteProductModal;
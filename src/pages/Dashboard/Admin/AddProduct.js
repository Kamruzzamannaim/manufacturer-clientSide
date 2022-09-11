import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const secretKey = "a4b0ac0542ccb0cebdd0744395cf097d";
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const formData = new FormData();
    console.log(data);
    formData.append("image", data.image[0]);
    fetch(`https://api.imgbb.com/1/upload?key=${secretKey} `, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const img = result.data.url;
        if (result.success) {
          const doctor = {
            name: data.product,
            desciption: data.desciption,
            img: img,
            availableQuantity: data.availableQuantity,
            minimumOrderQuantity: data.minimumOrderQuantity,
          };
          fetch("https://afternoon-hamlet-34240.herokuapp.com/tools", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
              } else {
                toast.error("failed to add the product");
              }
            });
        }
      });
  };
  return (
    <div className="w-full">
      <div>
        <div className=" bg-base-100 shadow-xl">
          <div className="card-body items-center text-left">
            <h3 className="text-xl text-center my-3 font-bold">Add Product</h3>
            <div className="card-actions">
              <div className="form-control">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="label">
                    <span className="label-text">Product</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("product", {})}
                      required
                      type="text"
                      placeholder="Your Product Name"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("description", {})}
                      type="text"
                      required
                      placeholder="product details"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="label">
                    <span className="label-text">Available Quantity</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("availableQuantity", {})}
                      required
                      type="number"
                      placeholder="Available quanity of product"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <label className="label">
                    <span className="label-text">Minimum Order Quantity</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("minimumOrderQuantity", {})}
                      required
                      type="number"
                      placeholder="Minimum  quanity of order"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  {/* img */}
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <label className="input-group">
                    <input
                      {...register("image", {})}
                      type="file"
                      required
                      placeholder="Product Image"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>

                  <input
                    type="submit"
                    className="btn  btn-secondary p-3 mt-2"
                    value="add"
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

export default AddProduct;

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="flex">
      <div>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>

          {!admin && (
            <>
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addReview">Add Review</Link>
              </li>
            </>
          )}

          {/* admin */}

          {admin && (
            <>
              {" "}
              <li>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manageAllProducts">
                  Manage All Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageAllOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add a product </Link>
              </li>
              <li>
                <Link to="/dashboard/userMessage">User's Message </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="grid-cols-10 mx-12 w-full">
        <h2 className="font-bold text-2xl text-secondary">
          Welcome To Dashboard
        </h2>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

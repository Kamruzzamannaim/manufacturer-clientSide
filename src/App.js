import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./blogs/Blogs";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import AddReview from "./pages/Dashboard/AddReview";
import AddProduct from "./pages/Dashboard/Admin/AddProduct";
import MakeAdmin from "./pages/Dashboard/Admin/MakeAdmin";
import ManagaAllOrders from "./pages/Dashboard/Admin/ManagaAllOrders";
import ManageProducts from "./pages/Dashboard/Admin/ManageProducts";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import Payment from "./pages/Dashboard/Payment";
import UserMessage from "./pages/Dashboard/UserMessage";
import Contact from "./pages/HomePage/Contact";
import HomePage from "./pages/HomePage/HomePage";
import Purchase from "./pages/HomePage/Purchase";
import Login from "./pages/Login/Login";
import Regestration from "./pages/Login/Regestration";
import RequireAdmin from "./pages/Login/RequireAdmin";
import RequireAuth from "./pages/Login/RequireAuth";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/Shared/Navbar";
function App() {
  return (
    <div className="px-4">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Regestration></Regestration>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>

          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManagaAllOrders></ManagaAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageAllProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="userMessage"
            element={
              <RequireAdmin>
                <UserMessage></UserMessage>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

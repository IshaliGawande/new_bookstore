// import React, { useEffect, useMemo } from "react";
// import Sidebar from "./Sidebar.js";
// import "./dashboard.css";
// import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import { Doughnut, Line } from "react-chartjs-2";
// import { useSelector, useDispatch } from "react-redux";
// import { getAdminProduct } from "../../actions/productAction";
// import { getAllOrders } from "../../actions/orderAction.js";
// //import { getAllUsers } from "../../actions/userAction.js";
// import MetaData from "../layout/MetaData";

// const Dashboard = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);
//   const { orders } = useSelector((state) => state.allOrders);
//   const user = useSelector((state) => state.user);
//   useEffect(() => {
//     dispatch(getAdminProduct());
//     dispatch(getAllOrders());
//   }, [dispatch]);

//   const userProducts = useMemo(() => {
//     if (user && products) {
//       return products.filter((it) => it.user === user.user._id);
//     }
//     return [];
//   }, [user, products]);
//   const user_Products = useMemo(() => {
//     if (user && userProducts) {
//       return userProducts.map((it) => it.name);
//     }
//     return [];
//   }, [user, userProducts]);

//   const userOrders = useMemo(() => {
//     if (user && orders) {
//       return orders.filter((it) => it.user === user.user._id);
//     }
//     return [];
//   }, [user, orders]);

//   const filtered = useMemo(() => {
//     if (user && orders) {
//       return orders.filter((order) => {
//         return order.orderItems.find((item) => {
//           return user_Products.find((product) => product === item.name);
//         });
//       });
//     }
//     return [];
//   }, [user, orders, user_Products]);

//   console.log("user_Products", user_Products);
//   console.log("orders", orders);
//   console.log("filtered", filtered);

//   const outOfStock = useMemo(() => {
//     return userProducts?.filter((item) => item.Stock === 0)?.length || 0;
//   }, [userProducts]);

//   const totalAmount = useMemo(() => {
//     return (
//       userOrders?.reduce((amount, item) => amount + item.totalPrice, 0) || 0
//     );
//   }, [userOrders]);

//   const lineState = {
//     labels: ["Initial Amount", "Amount Earned"],
//     datasets: [
//       {
//         label: "TOTAL AMOUNT",
//         backgroundColor: ["#063547"],
//         hoverBackgroundColor: ["rgb(197, 72, 49)"],
//         data: [0, totalAmount],
//       },
//     ],
//   };

//   const doughnutState = {
//     labels: ["Out of Stock", "InStock"],
//     datasets: [
//       {
//         backgroundColor: ["#00A6B4", "#6800B4"],
//         hoverBackgroundColor: ["#4B5000", "#35014F"],
//         data: [outOfStock, products.length - outOfStock],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard">
//       <MetaData title="Dashboard - Admin Panel" />
//       <Sidebar />

//       <div className="dashboardContainer">
//         <Typography component="h1">Dashboard</Typography>

//         <div className="dashboardSummary">
//           <div>
//             <p>
//               Total Amount <br /> ₹{totalAmount}
//             </p>
//           </div>
//           <div className="dashboardSummaryBox2">
//             <Link to="/admin/products">
//               <p>Product</p>
//               <p>{userProducts && userProducts.length}</p>
//             </Link>
//             <Link to="/admin/orders">
//               <p>Orders</p>
//               <p>{filtered && filtered.length}</p>
//             </Link>
//           </div>
//         </div>

//         <div className="lineChart">
//           <Line data={lineState} />
//         </div>

//         <div className="doughnutChart">
//           <Doughnut data={doughnutState} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
//import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  //   let outOfStock = 0;

  //   products &&
  //     products.forEach((item) => {
  //       if (item.Stock === 0) {
  //         outOfStock += 1;
  //       }
  //     });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  //   const lineState = {
  //     labels: ["Initial Amount", "Amount Earned"],
  //     datasets: [
  //       {
  //         label: "TOTAL AMOUNT",
  //         backgroundColor: ["#063547"],
  //         hoverBackgroundColor: ["rgb(197, 72, 49)"],
  //         data: [0, 4000],
  //       },
  //     ],
  //   };

  //   const doughnutState = {
  //     labels: ["Out of Stock", "InStock"],
  //     datasets: [
  //       {
  //         backgroundColor: ["#00A6B4", "#6800B4"],
  //         hoverBackgroundColor: ["#4B5000", "#35014F"],
  //         data: [2, 10],
  //       },
  //     ],
  //   };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount.toFixed(2)}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/ishali/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/ishali/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/ishali/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        {/* <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;

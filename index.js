import React, { useEffect, useState } from "react";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Heading } from "./src/Heading";
import { Bodytemplate } from "./src/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/Contact";
import { Error } from "./src/Error";
import RestaurantDetails from "./src/RestaurantDetails";
import { UserContext } from "./asserts/UserContext";
import { Provider } from "react-redux";
import appStore from "./asserts/appStore";
import { Cart } from "./src/Cart";


const Aboutus = lazy(() => import("./src/Aboutus"));
const RestaurantDetails = lazy(() => import("./src/RestaurantDetails"));
const Apptemplate = () => {
  const [userName, setUsername] = useState([]);
  useEffect(() => {
    const data = {
      userName: "saikiran",
    };
    setUsername(data.userName);
  });
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedIn: userName }}>
        <div>
          <Heading />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <Apptemplate />,
    children: [
      { path: "/", element: <Bodytemplate /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Aboutus />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/Restaurant/:resId",
        element: (
          <Suspense fallback={<p>Loading.......</p>}>
            <RestaurantDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouters} />);

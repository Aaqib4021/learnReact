import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
// const heading =  React.createElement("h1",{},"this is an h1 from react!");
// console.log(heading);

//  const jsxheading = <h1>this is an h1 from jsx!</h1>//?single line
// const jsxheading = (<h1>
//     this is an h1 from jsx!
//     </h1>)//?multiple lines () is used

// console.log(jsxheading);

// const HeadingComponent1 = ()=> {
//     return <h1>this is an h1 from functional component! </h1>;//?same as below..
// }

// const HeadingComponent = () => (//?this is now a functional component
//     <h1>this is an h1 from functional component! </h1>
// );

// console.log(HeadingComponent);

//?the aove code can be written inside the function not in arrow function

// const HeadingComponent = function (){
//     return  <h1>this is an h1 from functional component! </h1>
// }
//?component compostion
//component inside another component
// const Title = ()=>(
//     <p>Hey this is my Title</p>
// )

// const HeadingComponent = ()=>(
//     <div>
//         <h1>This is my heading from component</h1>
//         <Title/>
//         <Title></Title>//?same as above
//          {Title()}//?also same as it at last a function
//     </div>
// );

//!what if element inside component

// const title = <p>This is title</p>

// const HeadingComponent = ()=>(
//     <div>
//         <h1>This is my heading from component</h1>
//         {title}
//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<HeadingComponent/>);
// //?this won't work because react is inside the node modules so we have to import that from there..

//!SECTION - ->:APP CREATION:

//SECTION - Now going to write our first app which is a food ordering app..

//components in the app
/**
 * header
 *  - logo
 *  - nav items
 *  - cart
 * body
 *  - restaurant container
 *  - restaurantCard -img name rating
 * footer
 *  - copywrite
 *  - links
 *  - addresses
 *  - contact
 */

const Grocery = lazy(() => import("./Components/Grocery"));
//* Main Component
const AppLayout = () => {
  const [userName, setuserName] = useState("Talib");
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ LoggedUser: userName, setuserName }}>
        <div className="app">
          <userContext.Provider value={{ LoggedUser: "yawar" }}>
            <Header />
          </userContext.Provider>
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

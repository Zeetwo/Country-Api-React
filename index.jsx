import { createRoot} from "react-dom/client";
import App from './App'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Country from './components/Country'
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import Error from "./components/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Error/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/:countries',
            element: <Country/>
        },
        {
            path: '/country',
            element: <CountryDetails/>
        },
      ]
    },
  ]);

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)
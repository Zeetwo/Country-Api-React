import { createRoot} from "react-dom/client";
import App from './App'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Country from './components/Country'
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/country',
            element: <Country/>
        },
        {
            path: '/countryDetails',
            element: <CountryDetails/>
        },
      ]
    },
  ]);

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)
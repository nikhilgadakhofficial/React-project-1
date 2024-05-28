import  React  from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import MenuCard from './Views/Menucard/MenuCard';



const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/navbar",
        element: <Navbar/>
    },
    {
        path: "/menucard/:id",
        element: <MenuCard/>
    },
    {
        path: "*",
        element: "NOT"
    }

]);



root.render(<RouterProvider router={router}/>);

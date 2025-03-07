import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";
import Dashboard from "../component/Dashboard";
import NavBar from "../component/NavBar";
import ParamComp from "../component/ParamComp";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path: "/about",
      element: <div>
        <NavBar />
        <About />
      </div>
    },
    {
      path: "/dashboard",
      element: <div>
        <NavBar />
        <Dashboard />
      </div>
    },
    {
      path: "/user/:id",
      element: <div>
        <NavBar />
        <ParamComp />
      </div>
    }
  ]
);

export default function App() {

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

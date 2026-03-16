import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Root/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../components/BookDetails/BookDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        loader: () => fetch("/booksData.json"),
        path:"/",
        Component:Home
      },
      {
        path:"/About",
        Component:About
      },
      {
        path:'/bookDetails/:id',
        Component:BookDetails
      }
    ]
  },
]);
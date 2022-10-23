import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Destination from '../components/Destination/Destination';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Main from '../Layout/Main';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/destination",
                element: <Destination />
            },
            {
                path: "/places/:id",
                element: <Destination />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
        ]
    }
])

export default routes;
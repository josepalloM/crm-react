import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NuevoCliente, {action as nuevoClienteAction} from "./pages/NuevoCliente.jsx";
import Index, {loader as clientesLoader} from "./pages/Index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index/>,
                loader: clientesLoader
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente/>,
                action: nuevoClienteAction
            }
        ]
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

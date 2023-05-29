import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from './App.tsx'

import Actives from './routes/actives/Actives.tsx'
import Workorders from './routes/workorders/Workorders.tsx'
import Companies from './routes/companies/Companies.tsx'
import Users from './routes/users/Users.tsx'
import Units from './routes/units/Units.tsx'
import OrderDetails from './routes/orderDetails/OrderDetails.tsx'

// import { ConfigProvider } from 'antd'
// import 'antd/dist/reset.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/companies",
        element: <Companies />,
      },
      {
        path: "/workorders",
        element: <Workorders />,
      },
      {
        path: "/workorders/:id",
        element: <OrderDetails />
      },
      {
        path: "/actives",
        element: <Actives />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/units",
        element: <Units />,
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ConfigProvider> */}
      <RouterProvider router={router} />
    {/* </ConfigProvider> */}
  </React.StrictMode>
)

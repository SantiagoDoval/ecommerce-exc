import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/NotFound'
import SignIn from '../SignIn/SignIn'


import './App.css'
import Navbar from '../../Components/Navbar/Navbar'
import { ContextoData } from '../../data/ContextoData'
import CheckoutMenu from '../../Components/CheackoutMenu/CheckoutMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes;
}

const App = () => {
  return (
    <>
      <ContextoData>
        <BrowserRouter>
          <Navbar />
          <CheckoutMenu />
          <AppRoutes />
        </BrowserRouter>
      </ContextoData>

    </>
  )
}

export default App

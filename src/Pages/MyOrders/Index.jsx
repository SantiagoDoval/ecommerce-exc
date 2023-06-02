import React, { useContext } from 'react'

import Layout from '../../Components/Layout/Layout'
import OrdersCard from '../../Components/OrderCards/OrdersCards'
import { productContext } from '../../data/ContextoData'
import { Link } from 'react-router-dom'

const MyOrders = () => {
  const {order}=useContext(productContext);

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative'>
        <h1 className='mb-3 font-medium text-xl'>My Orders</h1>
      </div>
      {order.map((order,index)=>(
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard            
            totalPrice={order.totalPrice} 
            totalProducts={order.products.length} />
        </Link>
      ))

      }
    </Layout>
  )
}

export default MyOrders
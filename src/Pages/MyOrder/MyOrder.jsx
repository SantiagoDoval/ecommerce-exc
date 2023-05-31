import { useContext } from 'react'
import { productContext } from '../../data/ContextoData'
import Layout from '../../Components/Layout/Layout'
import OrderCard from '../../Components/OrderCard/OrderCard'

const MyOrder = () => {
  const{order}=useContext(productContext)
  console.log(order)

  return (    
    <Layout>
      <div>MyOrder</div>
      <div className='flex flex-col w-80'>
        {order?.slice(-1)[0].products.map(item => (
          <OrderCard id={item.id} key={item.id} imageUrl={item.images} title={item.title} price={item.price} />
        ))}
      </div>
    </Layout>
  )
}

export default MyOrder
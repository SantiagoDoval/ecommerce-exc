import { useContext } from 'react'
import { productContext } from '../../data/ContextoData'
import Layout from '../../Components/Layout/Layout'
import OrderCard from '../../Components/OrderCard/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const MyOrder = () => {
  const{order}=useContext(productContext)
  
  const currentPath=window.location.pathname;
  const index=currentPath.substring(currentPath.lastIndexOf('/')+1)
  
  
  return (    
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className=''>My Order</h1>
      </div>      
      <div className='flex flex-col w-80'>        
        {(index==='last') ? 
          order?.slice(-1)[0].products.map(item => (
            <OrderCard id={item.id} key={item.id} imageUrl={item.images} title={item.title} price={item.price} />
          ))
          :
          order?.map(item => {            
            if(item.id===Number(index)){
              return item.products.map(i=>(
                <OrderCard id={i.id} key={i.id} imageUrl={i.images} title={i.title} price={i.price} />
              ))
            }
          })
        }
      </div>
    </Layout>
  )
}

export default MyOrder
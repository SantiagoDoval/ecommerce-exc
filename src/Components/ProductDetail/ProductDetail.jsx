import { XCircleIcon } from '@heroicons/react/24/solid'
import { productContext } from '../../data/ContextoData';
import { useContext } from 'react';


const ProductDetail = () => {
  const { productDetailShow, isProductDetailOpen, CloseDetailProduct } = useContext(productContext)

  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => CloseDetailProduct()}>
          <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
        </div>

      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={productDetailShow.images}
          alt={productDetailShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${productDetailShow.price}</span>
        <span className='font-medium text-xl mb-2'>{productDetailShow.title}</span>
        <span className='font-light text-sm'>{productDetailShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail;
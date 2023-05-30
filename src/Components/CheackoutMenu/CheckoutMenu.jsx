import { XCircleIcon } from '@heroicons/react/24/solid'
import { productContext } from '../../data/ContextoData';
import { useContext } from 'react';


const CheckoutMenu = () => {
  const { productDetailShow, isCheckoutMenuOpen, closeCheckoutMenu } = useContext(productContext)

  return (
    <aside className={`${isCheckoutMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div onClick={() => closeCheckoutMenu()}>
          <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
        </div>

      </div>

    </aside>
  )
}

export default CheckoutMenu;
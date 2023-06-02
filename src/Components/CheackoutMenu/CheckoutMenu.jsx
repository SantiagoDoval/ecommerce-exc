import { XCircleIcon } from '@heroicons/react/24/solid'
import { productContext } from '../../data/ContextoData';
import { useContext } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

const CheckoutMenu = () => {
    const { CartProducts,
        isCheckoutMenuOpen,
        closeCheckoutMenu,
        setCartProducts,
        order,
        setOrder } = useContext(productContext)

    const handleDelete = (id) => {
        const filteredProduct = CartProducts.filter(item => item.id != id)
        setCartProducts(filteredProduct)
    }

    const handleCheckout = () => {
        const id=Date.now();
        const orderToAdd = {
            id:id,
            date: '01.02.2023',
            products: CartProducts,
            total: CartProducts.length,
            totalPrice: totalPrice(CartProducts)
        }
        setOrder([...order,orderToAdd])
        setCartProducts([])
        closeCheckoutMenu();        

    }

    return (
        <aside className={`${isCheckoutMenuOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My order</h2>
                <div onClick={() => closeCheckoutMenu()}>
                    <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
                </div>
            </div>
            <div className='p-6 overflow-y-scroll flex-1'>
                {CartProducts.map(item => (
                    <OrderCard id={item.id} handleDelete={handleDelete} key={item.id} imageUrl={item.images} title={item.title} price={item.price} />
                ))}
            </div>
            <div className='p-6'>
                <div className='flex justify-between items-center '>
                    <p className='text-lg font-light'>Total:</p>
                    <p className='text-lg font-medium'>${totalPrice(CartProducts)}</p>
                </div>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black text-white py-3 text-center mt-5 rounded-lg' onClick={() => handleCheckout()}>Pay</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutMenu;
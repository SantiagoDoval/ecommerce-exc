import { XMarkIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center mb-2 border border-black-10 rounded-lg">
            <p className='flex justify-between w-80 p-6'>
                <span>01/06/2023</span>
                <span>Cantidad: <span className='font-medium'>{totalProducts}</span></span>
                <span>Total: <span className='font-medium'>${totalPrice}</span></span>
            </p>            
        </div>
    )
}

export default OrdersCard;
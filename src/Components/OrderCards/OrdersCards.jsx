import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center mb-2 border w-80 border-black-10 rounded-lg p-4 hover:bg-slate-100 ease-in-out duration-300 cursor-pointer">
            <div className='flex justify-between w-full items-center'>
                <p className='flex flex-col'>
                    <span className='font-light'>01/06/2023</span>
                    <span className='font-light'>{totalProducts} Products</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
                </p>
            </div>            
        </div>
    )
}

export default OrdersCard;
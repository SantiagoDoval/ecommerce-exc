import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = (props) => {
    const { title, imageUrl, price, handleDelete, id } = props;
    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-fill" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            <div className='flex justify-between gap-2'>
                <p className="font-medium text-lg gap-2">{price}</p>
                {handleDelete &&
                    <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer' />
                }
            </div>
        </div>
    )
}

export default OrderCard;
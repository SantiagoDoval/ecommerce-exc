import { useContext } from 'react'
import { productContext } from '../../data/ContextoData'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

const Card = ({ data }) => {
    const context = useContext(productContext)
    const base = context.CartProducts;


    const showProduct = (productDetail) => {
        context.closeCheckoutMenu();
        context.ViewDetailProduct()
        context.setProductDetailShow(productDetail)
    }

    const addProductsCart = (event, ProductData) => {
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.setCartProducts([...base, ProductData])
        context.CloseDetailProduct();
        context.openCheckoutMenu();
    }

    const renderIcon = (id) => {
        const isInCart=context.CartProducts.filter(item=>item.id===id).length >0;       

        if(isInCart){            
            return (
                <div                    
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-0.5'>
                    <CheckIcon className='h-4 w-4 text-white' />
                </div>
            )
        }else{            
            return (
                <div
                    onClick={(event) => addProductsCart(event, data)}
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-0.5'>
                    <PlusIcon className='h-4 w-4 text-black' />
                </div>
            )
        }
    }

    return (
        <div
            onClick={() => showProduct(data)}
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data?.images[0]} alt={data?.title} />
                {renderIcon(data.id)}
            </figure>
            <p className='flex justify-between items-center'>
                <span className='text-sm font-light'>{data?.title}</span>
                <span className='text-lg font-medium'>${data?.price}</span>
            </p>
        </div>
    )
}

export default Card
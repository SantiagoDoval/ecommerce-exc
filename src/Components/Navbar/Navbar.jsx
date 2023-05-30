import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { productContext } from '../../data/ContextoData';

import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {    
    const activeStyle="font-bold";
    const context=useContext(productContext)
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-lg font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-xl'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='others'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    Santiago Doval
                </li>
                <li>
                    <NavLink to='/my-orders'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                    className={({isActive})=>isActive ? activeStyle:undefined}>
                        Sign in
                    </NavLink>
                </li>
                <li onClick={()=>context.openCheckoutMenu()} className='flex items-center '>
                    <ShoppingBagIcon className='w-6 h-6 text-black'/>
                    <p>{context.count}</p>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
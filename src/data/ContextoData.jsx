import { useState, createContext } from "react";

export const productContext=createContext();

export const ContextoData =({children}) => {

    const [count, setCount] = useState(0);
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false);
    const [productDetailShow,setProductDetailShow]=useState({});
    const [CartProducts,setCartProducts]=useState([]);
    
    const ViewDetailProduct = () => {setIsProductDetailOpen(true)}
    const CloseDetailProduct = ()=>{setIsProductDetailOpen(false)}
    
    const [isCheckoutMenuOpen,setIsCheckoutMenuOpen]=useState(false);
    const openCheckoutMenu = () => {setIsCheckoutMenuOpen(true)}
    const closeCheckoutMenu = ()=>{setIsCheckoutMenuOpen(false)}

    const [order,setOrder]=useState([]);
    

    return (
        <productContext.Provider value={{
            count,
            setCount,
            ViewDetailProduct,
            CloseDetailProduct,
            isProductDetailOpen,
            productDetailShow,
            setProductDetailShow,
            CartProducts,
            setCartProducts,
            openCheckoutMenu,
            closeCheckoutMenu,
            isCheckoutMenuOpen,
            order,
            setOrder           
        }}>
            {children}
        </productContext.Provider> 
    )    
};



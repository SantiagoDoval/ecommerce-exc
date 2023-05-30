import { useState, createContext } from "react";

export const productContext=createContext();

export const ContextoData =({children}) => {
    // const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=20";
    // const fetchData = await fetch(url);
    // const { data } = fetchData.json();
    // return data;

    const [count, setCount] = useState(0);
    const [isProductDetailOpen,setIsProductDetailOpen]=useState(false);
    const [productDetailShow,setProductDetailShow]=useState({});
    const [CartProducts,setCartProducts]=useState([]);
    
    const ViewDetailProduct = () => {setIsProductDetailOpen(true)}
    const CloseDetailProduct = ()=>{setIsProductDetailOpen(false)}
    
    const [isCheckoutMenuOpen,setIsCheckoutMenuOpen]=useState(false);
    const openCheckoutMenu = () => {setIsCheckoutMenuOpen(true)}
    const closeCheckoutMenu = ()=>{setIsCheckoutMenuOpen(false)}
    

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
            isCheckoutMenuOpen           
        }}>
            {children}
        </productContext.Provider> 
    )    
};



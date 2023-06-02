import { useState, createContext, useEffect } from "react";

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

    //get products
    const [items,setItems]=useState()

    const [inputData, setInputData] = useState('')

    const [filteredItems,setFilteredItems]=useState(null)

    useEffect(()=>{
        const url='https://api.escuelajs.co/api/v1/products?offset=0&limit=40';
        fetch(url)
          .then(response=>response.json())
          .then(data=>setItems(data))    
      },[])

    const filteredByTitle = (items,inputData) =>{
        return items?.filter(item=>item.title.toLowerCase().includes(inputData.toLowerCase()))
    }

    useEffect(()=>{
        if(inputData) setFilteredItems(filteredByTitle(items,inputData))
    },[items,inputData])

 
    

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
            setOrder,
            items,
            setItems,
            inputData,
            setInputData,
            filteredItems
        }}>
            {children}
        </productContext.Provider> 
    )    
};



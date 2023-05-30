import React, {useState,useEffect} from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'



const Home = () => {

  const url='https://api.escuelajs.co/api/v1/products?offset=0&limit=40';

  const [items,setItems]=useState()

  
  useEffect(()=>{
    // const {data}=useData();
    
    // setItems(data);
    // console.log(data)
    fetch(url)
      .then(response=>response.json())
      .then(data=>setItems(data))    
  },[])

  return (
    <Layout>
      <div>Home</div>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
        items?.map(item=>(
          <Card key={item.id} data={item} />
        ))
      }
      </div>   
      <ProductDetail />   
    </Layout>
  )
}

export default Home
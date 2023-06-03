import React, { useState, useEffect, useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import Card from '../../Components/Card/Card'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import { productContext } from '../../data/ContextoData'
import { useParams } from 'react-router-dom'



const Home = () => {

  const { items, inputData, setInputData, filteredItems } = useContext(productContext)  
  
  useEffect(()=>{
    setInputData('')
  },[])

  const {category}=useParams()
  console.log(items)

  const onChange = (e) => {
    let field = e.target.value;
    setInputData(field)
  }


  const renderView=()=>{    
    if(inputData.length>0){
      return(
        filteredItems?.map(item => {                    
           return <Card key={item.id} data={item} />
        })
      )
    }   
    return ( 
      items?.map(item => {       
        if(!!category){
          if (item.category.name.toLowerCase()===category.toLowerCase()) {            
            return <Card key={item.id} data={item} />
          }          
        }else{
          return <Card key={item.id} data={item} />
        }
        
      })
    )
    
  }

  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-80 relative'>
        <h1 className='mb-3 font-medium text-xl'>Home</h1>
      </div>
      <input onChange={onChange} type="text" value={inputData} className='w-80 border border-gray p-3 rounded-lg mb-5 ' placeholder='Search...' />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          renderView()
          // items?.map(item => {            
          //     // if (item.title.toLowerCase().includes(inputData.toLowerCase())) {
          //     //   return <Card key={item.id} data={item} />
          //     // }
              
          //     return <Card key={item.id} data={item} />
          // })
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
import React from 'react'
import Products from '../components/Products'
import useProducts from '../Context_Functions/ProductsContext'

export default function FeaturedProducts() {
    const { isLoading, featuredproducts } = useProducts()
    console.log(featuredproducts)
    if (isLoading) {
        return<div className='px-12'>
        <div className="w-[40vw] h-12 bg-gray-300 animate-pulse mb-4"></div>
        <div 
        // id="featured-section" 
        className='h-[40vh] flex justify-between'>
            <div className="bg-gray-300 h-[80%] rounded-md  w-[20%] animate-pulse ">
            </div>
            <div className="bg-gray-300 h-[80%] rounded-md  w-[20%]  animate-pulse ">
            </div>
            <div className="bg-gray-300 h-[80%] rounded-md w-[20%]  animate-pulse ">
            </div>
        </div>
            </div> 
    }
    return (
        <>
            <section 
            id=""
            className='px-12'
            >
                <h2 className='text-center lg:text-left mx-3 my-5 font-bold text-2xl'>Featured Products</h2>
                <div className="min-h-[40vh] flex justify-between flex-col md:flex-row">
                    {featuredproducts.map((i) => {
                        return <Products key={i.id} {...i} />
                    })}
                </div>
            </section>
        </>
    )
}

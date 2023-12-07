import React from 'react'
import Products from '../components/Products'
import useProducts from '../Context_Functions/ProductsContext'

export default function FeaturedProducts() {
    const { isLoading, featuredproducts } = useProducts()
    console.log(featuredproducts)
    if (isLoading) {
        return<div className="flex h-[100vh] w-[100vw] items-center justify-center">
        <div className="border-gray-300 h-12 lg:h-14 aspect-square animate-spin rounded-full border-8 border-t-blue-600" />
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

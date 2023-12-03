import React from 'react'
import Products from '../components/Products'
import useProducts from '../Context_Functions/ProductsContext'

export default function FeaturedProducts() {
    const { isLoading, featuredproducts } = useProducts()
    console.log(featuredproducts)
    if (isLoading) {
        return <div id="featured-section">
            <div className="section-empty">
            </div>
        </div>
    }
    return (
        <>
            <section id="featured-section">
                <h2 className='text-left mx-3 my-5'>Featured Products</h2>
                <div className="featured">
                    {featuredproducts.map((i) => {
                        return <Products key={i.id} {...i} />
                    })}
                </div>
            </section>
        </>
    )
}

import useFilterContext from "../Context_Functions/FilterProductsContext"
import Products from "../components/Products"
import Navbar from "../components/Navbar"
import { useEffect } from "react"

export default function AllProducts() {

    const { filterproducts, all_products, sorting, filter: { text, category }, updateFilterValue, getUniqueValue, ClearFilters, filterproductnull } = useFilterContext()


    const uniqueCategory = getUniqueValue(all_products, "category");
    const uniqueCompany = getUniqueValue(all_products, "company")
    return (
        <>
            <Navbar />
            <div className="all-products-page">
                <div className="filters">
                    <h2>Filters</h2>
                    <div className="sort-selection">
                        <form action="#">
                            <label htmlFor="sort"></label>
                            <select name="sort" id="sort" onClick={sorting}>
                                <option value="" disabled>~None~</option>
                                <option value="lowest">Price(Lowest to Highest)</option>
                                <option value="highest">Price(Highest to Lowest)</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                            </select>
                        </form>
                    </div>

                    <div className="categories">
                        <h5>Categories</h5>
                        <div>
                            {uniqueCategory.map((i) => {
                                return <div key={i}>
                                    <input type="radio" name="category" value={i} id={i} onClick={updateFilterValue} />
                                    <label className="category-label"htmlFor={i}>{i}</label>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="company">
                        <h5>Company</h5>
                        <form action="#">
                            <select name="company" id="company" onClick={updateFilterValue}>
                                {
                                    uniqueCompany.map((i) => {
                                        return <option key={i} name='company' value={i}>{i}</option>
                                    })
                                }
                            </select>
                        </form>
                    </div>
                    <button id="clear-btn" onClick={ClearFilters}>Clear Filters</button>
                </div>
                <div className="all-products">
                    <div className="all-products-head">
                        <h2>All Products</h2>
                        <div className="filter-search">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" name="text" defaultValue={text} placeholder="Search by Name" onChange={updateFilterValue} />
                            </form>
                        </div>
                    </div>
                    <div className="grid-col-3">
                        {filterproducts.map((i) => {
                            return <Products key={i.id} {...i} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

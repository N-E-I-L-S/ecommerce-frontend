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
            <div className="lg:flex lg:p-8">
                <div className="lg:w-3/12 h-fit bg-[aliceblue] p-1 flex lg:flex-col justify-evenly items-baseline ">
                    <h2 className="hidden lg:block mb-4">Filters</h2>
                    <div className="">
                        <form action="#">
                            <label htmlFor="sort"></label>
                            <select name="sort" id="sort" onClick={sorting}>
                                <option value="" disabled>~None~</option>
                                <option value="lowest">Price(Ascending)</option>
                                <option value="highest">Price(Descending)</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                            </select>
                        </form>
                    </div>

                    <div className="lg:mt-4 hidden lg:block">
                        <h5 className="hidden lg:block">Categories</h5>
                        <div className="flex lg:flex-col">
                            {uniqueCategory.map((i) => {
                                return <div key={i} className="mt-2">
                                    <input type="radio" name="category" value={i} id={i} onClick={updateFilterValue} />
                                    <label className="category-label"htmlFor={i}>{i}</label>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="lg:mt-4 mx-4">
                        <h5 className="hidden lg:block">Company</h5>
                        <form action="#">
                            <select name="company" id="company" className="my-4" onClick={updateFilterValue}>
                                {
                                    uniqueCompany.map((i) => {
                                        return <option key={i} name='company' value={i}>{i}</option>
                                    })
                                }
                            </select>
                        </form>
                    </div>
                    <button id="clear-btn" className="p-2 border-[2px] rounded-md text-white bg-[#a52a2a]" onClick={ClearFilters}>Clear</button>
                </div>
                <div className="p-2 lg:p-4">
                    <div className="w-full flex justify-between lg:mx-8">
                        <h2 className="hidden lg:block lg:w-fit w-0">All Products</h2>
                        <div className="filter-search text-center lg:text-right lg:w-fit w-full">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input className="text-center lg:text-left" type="text" name="text" defaultValue={text} placeholder="Search by Name" onChange={updateFilterValue} />
                            </form>
                        </div>
                    </div>
                    <div className="p-2 md:p-16 grid grid-cols-[repeat(2,1fr)] gap-2 lg:grid lg:grid-cols-[repeat(3,1fr)] lg:gap-6">
                        {filterproducts.map((i) => {
                            return <Products key={i.id} {...i} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

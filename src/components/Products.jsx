import { NavLink } from "react-router-dom"

export default function Products(props) {
    return (
        <NavLink className="td" to={`/oneproduct/${props.id}`}>
            <div className="grid-item flex flex-col justify-center">
                <img className="max-h-[25vh] rounded-md aspect-[1.5]" src={props.image} alt="" /> <br/>
                <div className="product-details">
                    <div className="text-sm md:text-lg">

                 {props.name} 
                    </div>
                    <div className="text-sm md:text-lg">

                    ₹{props.price}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

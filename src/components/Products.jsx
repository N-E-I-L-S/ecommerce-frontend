import { NavLink } from "react-router-dom"

export default function Products(props) {
    return (
        <NavLink className="td" to={`/oneproduct/${props.id}`}>
            <div className="grid-item">
                <img className="products-image" src={props.image} alt="" /> <br/>
                <div className="product-details">
                    <div>

                 {props.name} 
                    </div>
                    <div>

                    ₹{props.price}
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

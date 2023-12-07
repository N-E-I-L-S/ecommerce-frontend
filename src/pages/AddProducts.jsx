import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'

export default function AddProducts() {
    const [adminpassword, setAdminPassword] = useState("")
    const [adminname, setAdminName] = useState("")
    const [isadmin, setIsAdmin] = useState(false)
    const name = useRef()
    const id = useRef()
    const company = useRef()
    const price = useRef()
    const color = useRef()
    const image = useRef()
    const description = useRef()
    const category = useRef()
    function handlesubmit() {
        const colorarray = color.current.value.split(",")
        const colorsplit = colorarray.map((i) => {
            return i.trim()
        })
        console.log(JSON.stringify(colorsplit))
        fetch(process.env.REACT_APP_BACKEND_URL + '/products/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                id: id.current.value,
                name: name.current.value,
                company: company.current.value,
                price: price.current.value,
                colors: colorsplit,
                image: image.current.value,
                description: description.current.value,
                category: category.current.value,
                featured: false,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(async (res) => {
            const res1 = await res.json()
            console.log(res1)
        })
            .catch(err => console.log(err))
    }
    function checkAdmin() {
        if (adminname === "neil" && adminpassword === "neil")
            setIsAdmin(true)
    }
    if (!isadmin) {
        return <>
            <Navbar/>
            <div className="addproducts-page">
                <div className="addproducts-outerdiv">
                    <div className="addproduct-div">
                        <label htmlFor="id">Admin Username:</label>
                        <input type="text" id="id" onChange={e => setAdminName(e.target.value)} />
                    </div>
                    <div className="addproduct-div">
                        <label htmlFor="id">Admin Password:</label>
                        <input type="password" id="id" onChange={e => setAdminPassword(e.target.value)} />
                    </div>
                    <div className="addproducts-div">
                        <button className='addproducts-btn' onClick={checkAdmin}>Access</button>
                    </div>
                </div>
            </div>
        </>
    }
    return (
        <>
        <Navbar/>
            <div className="addproducts-page">
                <form >
                    <div className="addproducts-outerdiv">

                        <div className="addproduct-div">
                            <label htmlFor="id">ID:</label>
                            <input type="text" required={true} id="id" ref={id} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="name">Name:</label>
                            <input type="text" required={true} id="name" ref={name} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="comp">Company:</label>
                            <input type="text" required={true} id="comp" ref={company} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="price">Price:</label>
                            <input type="text" required={true} id="price" ref={price} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="color">Colors: (for multiple colors, separate using comma) </label>
                            <input type="text" required={true} id="color" ref={color} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="img">Image: (Add Link)</label>
                            <input type="text" id="img" ref={image} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="desc">Description:</label>
                            <input type="text" required={true} id="desc" ref={description} />
                        </div>
                        <div className="addproduct-div">
                            <label htmlFor="category">Category:</label>
                            <input type="text" required={true} id="category" ref={category} />
                        </div>
                        <div className="addproducts-div">
                            <button className='addproducts-btn' type="submit" onClick={handlesubmit}>Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

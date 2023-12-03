import { useState } from "react"

export default function ProductImage({image=[{url :"", id :0}] }) {
    const [userimage, setUserImage] = useState(image[0]);
  return (
    <div className="oneproduct-image-layout">
        <div className="oneproduct-col-1">

        {image.map((i)=>{
            return <img key={i.id} className='oneproduct-image-n' src={i.url} alt="Picture" onClick={()=>setUserImage(i)}/>
        })}
        </div>
        <div className="oneproduct-col-2">
        <img className="oneproduct-image-1" src={userimage.url} alt="" />
        </div>
    </div>
  )
}

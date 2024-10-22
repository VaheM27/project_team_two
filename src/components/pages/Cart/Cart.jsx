
import { useSelector } from "react-redux"

import './Cart.scss'

const Cart = () =>{
   
    const { data } = useSelector((state)=>state.products)
    
    console.log(data)
    
    return(
        <div className="cart_main">
            {
                data?.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div className="cart_items">
                                <p className="cart_delete">X</p>
                                <img src={item.image} alt="" className="cart_image"/>
                                <p className="cart_name">{item.name}</p>
                                <p className="cart_price">{item.price}$</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
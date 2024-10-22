
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


import './Product.scss'


const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios(`http://localhost:3000/images/${id}`).then(res => setProduct(res.data))
    }, [])

    return (
        <div className='product_main'>
            <div className='product_image_div'>
                <img src={product.image} alt="" className='product_image' />
            </div>
            <div className='product_desc_div'>
                <div className='product_info'>
                    <p className='product_name'>{product.name}</p>
                    <p className='product_price'>{product.price}$</p>
                </div>
                <div className='product_button_div'>
                    <button className='product_button_dark'>ADD TO CART</button>
                    <button className='product_button'>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}


export default Product
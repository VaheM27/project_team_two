import { nanoid } from 'nanoid'

import './Shop.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Shop = () => {
    const [image, setImage] = useState([])
    const [sort, setSort] = useState([])

    useEffect(() => {
        axios('http://localhost:3000/images').then(res => setImage(res.data))
        axios('http://localhost:3000/sorting').then(res => setSort(res.data))
    }, [])

    return (
        <div className='shop_main'>
            <div className='shop_categories_main'>
                <hr />
                <p className='shop_categories'>Categories</p>
                {
                    sort.map((item) => {
                        return (
                            <div className='shop_categories_item'>
                                <input type="checkbox" />
                                <p className='shop_categories_name'>{item.name}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <div className='shop_categories_buttons'>
                    <button className='shop_button'>Sort by price Up</button>
                    <button className='shop_button'>Sort by price Down</button>
                </div>
            </div>
            <div className="shop_main_items">
                {
                    image.map((item, index) => {
                        return (
                            <div key={index} className='shop_item'>
                                <div className='shop_item_div'>
                                    <div className='shop_image_div'><img src={item.image} alt="" className='shop_image' /></div>
                                    <h2 className='shop_item_name'>{item.name}</h2>
                                    <h2 className='shop_item_price'>{item.price}</h2>
                                    <p className='shop_item_desc'>{item.desc}</p>
                                </div>
                                <div>
                                    <button className='shop_button'>ADD TO CART</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Shop
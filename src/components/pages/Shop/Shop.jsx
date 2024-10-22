import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductData } from '../../../store/slice/addCart/API'
import ROUTES from '../../../Routes'
import axios from 'axios'



import './Shop.scss'


const Shop = () => {
    const [image, setImage] = useState([])
    const [sort, setSort] = useState([])

    useEffect(() => {
        axios('http://localhost:3000/images').then(res => setImage(res.data))
        axios('http://localhost:3000/sorting').then(res => setSort(res.data))
    }, [])

    const sortByUp = ()=>{
        setImage(image.toSorted((a,b)=>a.price - b.price))   
    }
    const sortByDown = ()=>{
        setImage(image.toSorted((a,b)=>b.price - a.price))   
    }

    const dispatch = useDispatch()
    
    return (
        <div className='shop_main'>
            <div className='shop_categories_main'>
                <hr />
                <p className='shop_categories'>Categories</p>
                {
                    sort.map((item,index) => {
                        return (
                            <div className='shop_categories_item' key={index}>
                                <input type="checkbox" />
                                <p className='shop_categories_name'>{item.name}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <div className='shop_categories_buttons'>
                    <button className='shop_button' onClick={sortByUp}>Sort by price Up</button>
                    <button className='shop_button' onClick={sortByDown}>Sort by price Down</button>
                </div>
            </div>
            <div className="shop_main_items">
                {
                    image.map((item, index) => {
                        return (
                            <div key={index} className='shop_item'>
                                <div className='shop_item_div'>
                                    <Link to={ROUTES.Product + item.id}>
                                    <div className='shop_image_div'><img src={item.image} alt="" className='shop_image' /></div>
                                    </Link>
                                    <h2 className='shop_item_name'>{item.name}</h2>
                                    <h2 className='shop_item_price'>{item.price}$</h2>
                                    <p className='shop_item_desc'>{item.desc}</p>
                                </div>
                                <div>
                                    <button className='shop_button' onClick={()=>dispatch(fetchProductData(item.id))}>ADD TO CART</button>
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
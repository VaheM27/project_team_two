import { nanoid } from 'nanoid'
import image1 from '../../../assets/images/Sec2_images/Image (1).png'
import image2 from '../../../assets/images/Sec2_images/Image (2).png'
import image3 from '../../../assets/images/Sec2_images/Image (3).png'
import image4 from '../../../assets/images/Sec2_images/Image (4).png'
import image5 from '../../../assets/images/Sec2_images/Image (5).png'
import image6 from '../../../assets/images/Sec2_images/Image (6).png'
import image7 from '../../../assets/images/Sec2_images/Image (7).png'
import image8 from '../../../assets/images/Sec2_images/Image.png'

import './Section2.scss'


const Section2 = () =>{
    const images = [
        {
            id: nanoid(4),
            image : image1,
            name : 'Small Ecru Ceramic Compote',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
        },
        {
            id: nanoid(4),
            image : image2,
            name : 'Warrick White Vase 14"',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.'
        },
        {
            id: nanoid(4),
            image : image3,
            name : 'Porcelain Dinner Plate',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur .'
        },
        {
            id: nanoid(4),
            image : image4,
            name : 'Warrick White Vase 20',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.'
        },
        {
            id: nanoid(4),
            image : image5,
            name : 'Rounded Dual Handled Vase',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.'
        },
        {
            id: nanoid(4),
            image : image6,
            name : 'Marin White Dinner Plate',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse'
        },
        {
            id: nanoid(4),
            image : image7,
            name : 'Tall Cream Ceramic Vase',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.'
        },
        {
            id: nanoid(4),
            image : image8,
            name : 'Luana Bowl',
            price : '$49.00',
            desc : 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.'
        },
    ]

    return(
        <section className='section2'>
                <h2 className='best_sell'>Best sellers</h2>
            <div className="container">
                {
                    images.map((item)=>{
                        return(
                            <div key={item.id} className='section2_main'>
                                <div className='section2_items'>
                                    <img src={item.image} alt="" />
                                    <h2>{item.name}</h2>
                                    <h2>{item.price}</h2>
                                    <p>{item.desc}</p>
                                </div>
                                <button>ADD TO CART</button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}


export default Section2
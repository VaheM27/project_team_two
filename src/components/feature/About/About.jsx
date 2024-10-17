import { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

import './About.scss'


const About = () =>{
    const [state,setState] = useState([])
    const [team,setTeam] = useState([])
    useEffect(()=>{
        axios('http://localhost:3000/team').then(res=>setTeam(res.data))
        axios('http://localhost:3000/aboutImages').then(res=>setState(res.data))
    },[])

    return(
        <div className='about_main'>
            <div className='about_title'>
                <h2 className='about_moon'>About Moon</h2>
                <p className='about_moon_desc'>Moon's handmade ceramic products have been around since 1650, let's explore our journey</p>
            </div>
            <div className='about_history_main'>
                {
                    state.map((item,index)=>{
                        return(
                            <div key={index} className='about_history_item'>
                                <div className='about_history_title'>
                                    <p className='about_history_year'>{item.year}</p>
                                    <p className='about_history_desc'>{item.desc}</p>
                                </div>
                                <div className='about_image_div'>
                                    <img src={item.image} alt="" className='about_image' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='about_team'>
                <h2 className='about_meet'>MEET OUR TEAM</h2>
                <div className='about_team_main'>
                    {
                        team.map((item,index)=>{
                            return(
                                <div key={index} className='about_team_item'>
                                    <img src={item.image} alt="" className='about_team_image'/>
                                    <h2 className='about_team_name'>{item.name}</h2>
                                    <p className='about_team_prof'>{item.profession}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default About
import React, { useState } from 'react'
import Samoil from '../Home/samoil.jpg'
import Samoil1 from '../Home/samoil1.jpg'
import Carousel from 'react-material-ui-carousel'
import { Navigate } from 'react-router-dom'
import CloseButton from '../../../Assets/closebutton.jpg'


const PorfolioItem = ({ img, title, details }) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className='portfolioItem' onClick={toggleModal}>
            <img src={img[0]} alt="image" className='portfolioImg' />
            <div className='portfolioHover' >
                <h3 className='portfolioTitle'>{title}</h3>

            </div>
            {
                modal && <div className='portfolioModal'>
                    <div className='portfolioModalContent'>
                    <img src={CloseButton}   className='modalClose'  />
                        <h3 className='modalTitle'>{title}</h3>
                        <ul className='modalList grid'>
                            {details.map(({ icon, title, desc ,link }, index) => {
                                return (
                                    <li className='modalItem' key={index}  > 
                                        <span className='itemIcon'>{icon}</span>
                                       <a href={link && desc} target='blank'>  <div style={{cursor : link && "pointer"}}  onclick={`location.href=${"pornhub.com"};`} >
                                            <span className='itemTitle'>{title}</span>
                                            <span className='itemDescription'>{desc}</span>
                                        </div></a>
                                    </li>
                                )
                            })}
                        </ul>
                        <Carousel autoPlay={false} navButtonsAlwaysVisible={img.length>1 && true } navButtonsAlwaysInvisible={img.length===1 && true}>
                            {img.map((item, i) => (
                              <img className='modalImg' src={item} alt=' ' />
                            ))}
                          
                            
                        </Carousel>


                    </div>

                </div>
            }

        </div>
    )
}

export default PorfolioItem

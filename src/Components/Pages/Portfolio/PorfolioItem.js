import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { AiFillCloseCircle } from 'react-icons/ai'


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
                    <AiFillCloseCircle className='modalClose' />
                        <h3 className='modalTitle'>{title}</h3>
                        <ul className='modalList grid'>
                            {details.map(({ icon, title, desc ,link }, index) => {
                                return (
                                    <li className='modalItem' key={index}  > 
                                        <span className='itemIcon'>{icon}</span>
                                       <a href={link && desc} target='_blank'>  <div style={{cursor : link && "pointer"}}   >
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

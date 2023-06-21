import React, { useState } from 'react'
import parse from 'html-react-parser';
import close from '../assets/close.png';

function PortfolioItem({img, title, details}){

    const[modal, setModal] = useState(false);

    function toggleModal() {
        setModal(!modal)
    }

    return(
        <div className="portfolio-item">
            <img src={img} alt="" className='portfolio-img' />

            <div className="portfolio-hover" onClick={toggleModal}>
                <h3 className="portfolio-title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio-modal">
                <div className="portfolio-modal-content">
                    <img src={close} alt="" className="modal-close" onClick={toggleModal} />

                    <h3 className="modal-title">{title}</h3>

                    <ul className="modal-list grid">
                        {details.map(({icon, title, description}, index) => {
                            return (
                                <li className="modal-item" key={index}>
                                    <span className="item-icon">{icon}</span>

                                    <div>
                                        <span className="item-title">{parse(title)}</span>
                                        <span className="item-details">{parse(description)}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <img src={img} alt="" className="modal-img" />
                </div>
            </div>
            )}
        </div>
    )
}

export default PortfolioItem;
import React from 'react'
import '../styles/DetailsButton.css'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'


export default function CartButtons() {
    return (
        <div>
            <div className="detailsButtons">

                <button className="detailsCartBtn">
                    <span className="IconContainer">
                        <AiOutlineArrowLeft size={16} className="cart" />
                    </span>
                    <p>
                        <Link className="detailsButton" to={'/'}>
                            Home
                        </Link>
                    </p>
                </button>
                <button className="detailsCartBtn">
                    <span className="IconContainer">
                        <MdPayment size={16} className="cart" />
                    </span>
                    <p>
                        <Link className="detailsButton" to={'/'}>
                            Payment
                        </Link>
                    </p>
                </button>
            </div>
        </div>
    )
}

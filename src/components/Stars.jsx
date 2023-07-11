import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import '../styles/Stars.css'

export default function Stars({ rating,count  }) {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {rating >= index + 1 ? (
                    <FaStar className='starIcon'/>
                ) : rating >= number ? (
                    <FaStarHalfAlt className='starIcon' />
                ) : (
                    <AiOutlineStar className='starIcon' />
                )}
            </span>
        );
    });

    return <div className='starContainer'>
        {ratingStar}
        <span>({count} customer reviews)</span>
        </div>;
}

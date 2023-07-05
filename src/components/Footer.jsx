import React from 'react'
import '../styles/Footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Footer() {
    const socialMediaElements = [
        { name: "Facebook", href: "https://facebook.com", icon: <AiFillFacebook /> },
        { name: "Instagram", href: "https://instagram.com", icon: <AiFillInstagram /> },
        { name: "Twitter", href: "https://twitter.com", icon: <AiFillTwitterCircle /> },
    ];
    return (
        <div className='footerContainer'>
            <div className='socialMedia'>
                {socialMediaElements.map(element => (
                    <span className='socialIcon' key={element.name} style={{ cursor: 'pointer' }}
                        onClick={() => window.location.href = element.href}>
                        {element.icon}
                    </span>
                ))}
            </div>       
        </div>
    )
}

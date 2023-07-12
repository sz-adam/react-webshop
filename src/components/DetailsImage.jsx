import React, { useEffect, useState } from 'react'
import '../styles/DetailsImage.css'

export default function DetailsImage({ details }) {
    const [images, setImages] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);


    useEffect(() => {
        if (details && details.image) {
            const newImages = Array(5).fill({ url: details.image });
            setImages(newImages);
            setSelectedItem(newImages[0]);
        }
    }, [details])

    console.log(images);


    const handleItemClick = (item, index) => {
        setSelectedItem(item);
        setSelectedItemIndex(index);     
    };


    return (
        <div>
            <div className="detailsImage">
                <div className="largeDiv">
                    {selectedItem && <img src={selectedItem.url} alt="" />}
                </div>
                <div className="smallDiv">
                    {images.map((img, index) => {
                        return (
                            <div
                                key={index}
                            >
                                <img
                                    src={img.url}
                                    alt=""
                                    onClick={() => handleItemClick(img, index)}
                                    className={selectedItemIndex === index ? 'smallActive' : ''}
                                />

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

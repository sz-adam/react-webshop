import React, { useState } from 'react'
import '../styles/DetailsImage.css'

export default function DetailsImage({ details }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item);
    };
    return (
        <div>
            <div className="detailsImage">
                <div className="largeDiv">
                    {selectedItem && (
                        <img
                            className="card-img"
                            src={selectedItem.image}
                            alt={selectedItem.name}
                        />
                    )}
                </div>
                <div className="smallDiv">
                    <div
                        className={selectedItem && selectedItem.name === 'Item 1' ? 'smallActive' : 'smallItem'}
                        onClick={() => handleClick({ image: details.image, name: 'Item 1' })}
                    >
                        1 <img
                            className="card-img"
                            src={details.image}

                        />
                    </div>
                    <div
                        className={selectedItem && selectedItem.name === 'Item 2' ? 'smallActive' : ''}
                        onClick={() => handleClick({ image: 'image2.jpg', name: 'Item 2' })}
                    >
                        2
                    </div>
                    <div
                        className={selectedItem && selectedItem.name === 'Item 3' ? 'smallActive' : 'smallItem'}
                        onClick={() => handleClick({ image: 'image3.jpg', name: 'Item 3' })}
                    >
                        3
                    </div>
                    <div
                        className={selectedItem && selectedItem.name === 'Item 4' ? 'smallActive' : 'smallItem'}
                        onClick={() => handleClick({ image: 'image4.jpg', name: 'Item 4' })}
                    >
                        4
                    </div>
                    <div
                        className={selectedItem && selectedItem.name === 'Item 5' ? 'smallActive' : 'smallItem'}
                        onClick={() => handleClick({ image: 'image5.jpg', name: 'Item 5' })}
                    >
                        5
                    </div>
                </div>
            </div>
        </div>
    )
}

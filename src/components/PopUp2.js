import React, { useState, useEffect } from 'react';
import { ColorMapping } from '../constants/Constants';

const PopUp2 = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // const images = [
    //     { name: 'CQ-001C', src: '/colors/CQ-001C.jpg' },
    //     { name: 'CQ-005-C', src: '/colors/CQ-005-C.jpg' },
    //     { name: 'CQ-05k-K', src: '/colors/CQ-05k-K.jpg' },
    //     { name: 'CQ-5P3-G', src: '/colors/CQ-5P3-G.jpg' },
    //     { name: 'CQ-5P6-G', src: '/colors/CQ-5P6-G.jpg' },
    //     { name: 'CQ-08K', src: '/colors/CQ-08K.jpg' },
    //     { name: 'CQ-37K-K', src: '/colors/CQ-37K-K.jpg' },
    //     { name: 'CQ-095-C', src: '/colors/CQ-095-C.jpg' },
    //     { name: 'CQ-103-C', src: '/colors/CQ-103-C.jpg' },
    //     { name: 'CQ-111-C', src: '/colors/CQ-111-C.jpg' },
    //     { name: 'CQ-112-C', src: '/colors/CQ-112-C.jpg' },
    //     { name: 'CQ-113-C', src: '/colors/CQ-113-C.jpg' },
    //     { name: 'CQ-265-G', src: '/colors/CQ-265-G.jpg' },
    //     { name: 'CQ-506-G', src: '/colors/CQ-506-G.jpg' },
    //     { name: 'CQ-509-G', src: '/colors/CQ-509-G.jpg' },
    //     { name: 'CQ-510-G', src: '/colors/CQ-510-G.jpg' },
    //     { name: 'CQ-523-G', src: '/colors/CQ-523-G.jpg' },
    //     { name: 'CQ-536-G', src: '/colors/CQ-536-G.jpg' },
    //     { name: 'CQ-240-G', src: '/colors/CQ-240-G.jpg' },
    //     { name: 'CQ-242-G', src: '/colors/CQ-242-G.jpg' },
    //     { name: 'CQ-559-G', src: '/colors/CQ-559-G.jpg' },
    //     { name: 'CQ-562-G', src: '/colors/CQ-562-G.jpg' },
    //     { name: 'CQ-268-G', src: '/colors/CQ-268-G.jpg' },
    // ];

    const images = ColorMapping

    const handleImageClick = (image) => {
        setSelectedImage(image.id);
        props.onColorClick({
            color: image.id
        });
        // setShowSelectedImage(true);
    };

    const handleChildElementClick = (e) => {
        e.stopPropagation();
    };

    const handleImageMouseEnter = (imageName) => {
        setSelectedImage(imageName);
    };

    const handleImageMouseLeave = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className="fixed flex flex-col">
                <div className="bg-[#CC313D] w-[415px] h-[71px]  text-[25px] flex items-center justify-center text-white font-bold text-center">
                    COLOR
                </div>
                <div className="bg-[#D9D9D9] p-5" style={{ height: '854px', overflowY: 'auto', marginBottom: '10px' }} onClick={handleChildElementClick}>
                    <div className="grid grid-cols-3 gap-5">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center cursor-pointer"
                                onMouseEnter={() => handleImageMouseEnter(image.name)}
                                onMouseLeave={handleImageMouseLeave}
                            >
                                <img
                                    src={image.previewSrc}
                                    alt={image.id}
                                    className="w-[93px] h-[90px] object-cover shadow-md"
                                    onClick={() => handleImageClick(image)}
                                />
                                {selectedImage === image.id && (
                                    <p className="text-sm text-center mt-2">{image.id}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div onClick={() => props.closePopUp()}></div>
        </>
    );
};
export default PopUp2;



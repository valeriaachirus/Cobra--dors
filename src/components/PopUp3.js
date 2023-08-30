import React, { useEffect, useState } from 'react';
import { GlassMapping } from '../constants/Constants';

const PopUp3 = (props) => {

    const [selectedImage, setSelectedImage] = useState(null);
    // const [showSelectedImage, setShowSelectedImage] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image.id);
        props.onGlassClick({
            windowShape: image.id
        });
        // setShowSelectedImage(true);
    };

    const renderImages = () => {
        const images = GlassMapping;

        return (
            <div className="flex flex-wrap ml-[22px] mt-8 gap-x-16 gap-y-10 grid-start-2 grid-end-3 grid-span-2">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Image ${index + 1}`}
                        className="w-[130px] h-[300px] object-cover cursor-pointer"
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="fixed flex flex-col h-full">
                <div className="bg-[#CC313D] w-[415px] h-[360px]  text-[25px] flex items-center justify-center text-white font-bold text-center">
                    GLASS
                </div>
                <div className="bg-[#D9D9D9] flex-grow w-[415px] max-h-[854px] overflow-y-auto p-4">
                    <div className="flex flex-col image-container">{renderImages()}</div>
                </div>
            </div>
            <div onClick={() => props.closePopUp()}></div>
            {/* Commented out as per your initial code
            {selectedImage && showSelectedImage && (
                <div className="fixed top-[25%] left-[63%] transform[-translate(-50%, -50%)] max-w-[calc(100% - 60px)] max-h-[calc(100% - 60px)] flex items-center justify-center bg-black bg-opacity-80">
                    <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
                </div>
            )} 
            */}
        </>
    );
};

export default PopUp3;

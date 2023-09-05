import { DoorMapping } from '../constants/Constants';
import React, { useState, useEffect } from 'react';


const PopUp1 = (props) => {
  const [selectedButton, setSelectedButton] = useState('fiberglass');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleChildElementClick = (button) => {
    setSelectedButton(button);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.id);
    props.onDoorModelClick({
      doorShape: image.id
    });
  };

  const renderImages = () => {
    const images = DoorMapping.filter(door => door.category === selectedButton);
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

  const handleDoorModelClick = (doorModel) => {
    setSelectedButton(doorModel);
  };

  return (
    <>
      <div className="fixed flex flex-col">
        <div className="bg-[#CC313D] w-[415px] h-[70px] text-[25px] flex items-center justify-center text-white font-bold text-center">
          MODEL
        </div>
        <div className="bg-[#D9D9D9] flex-grow w-[415px] h-full overflow-y-auto p-4">
          <div className="flex justify-center mb-4">
            <button
              className={`py-2 px-4 text-[20px]  rounded-full text-white font-bold ${
                selectedButton === 'fiberglass' ? 'bg-[#CC313D]' : 'bg-[#606060]'
              } mx-2 w-[150px]`}
              onClick={() => handleDoorModelClick('fiberglass')} 
            >
              Fiberglass
            </button>
            <button
              className={`py-2 px-4 text-[20px] ml-[50px]  rounded-full text-white font-bold ${
                selectedButton === 'steel' ? 'bg-[#CC313D]' : 'bg-[#606060]'
              } mx-2 w-[150px]`}
              onClick={() => handleDoorModelClick('steel')} 
            >
              Steel
            </button>
          </div>
          <div className="flex flex-col image-container">{renderImages()}</div>
        </div>
      </div>
      <div onClick={() => props.closePopUp()}></div>
    </>
  );
};

export default PopUp1;

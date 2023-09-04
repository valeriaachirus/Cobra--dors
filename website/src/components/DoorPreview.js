import React, { useState } from 'react';
import './../App.css';
import { DoorMapping, ColorMapping, GlassMapping } from '../constants/Constants';

const DoorPreview = ({ selectedOptions }) => {
    const [doorConfig, setDoorConfig] = useState({
        doorShape: null,
        color: null,
        windowShape: null,
    });

    const updateDoorConfig = () => {
        const updatedConfig = { ...doorConfig, ...selectedOptions };
        setDoorConfig(updatedConfig);
    }

    function findDoorSrc() {
        return DoorMapping.find(door => {
            return door.id === doorConfig.doorShape;
        });
    }

    function findColorSrc() {
        return ColorMapping.find(color => {
            return color.id === doorConfig.color;
        });
    }

    function findGlassSrc() {
        return GlassMapping.find(glass => {
            return glass.id === doorConfig.windowShape;
        });
    }

    React.useEffect(() => {
        updateDoorConfig();
    }, [selectedOptions]);

    return (
        <div className='flex h-full'>
            <div className="DoorConfig">
                <div className="DoorPreview">
                    {/* Render door preview based on doorConfig */}
                    {/* You can display an image or a visual representation of the door */}
                </div>
                <div className="DoorDetails">
                    {/* <h2>Door Details</h2>
                    <p>Shape: {doorConfig.doorShape || 'N/A'}</p>
                    <p>Color: {doorConfig.color || 'N/A'}</p>
                    <p>Window Shape: {doorConfig.windowShape || 'N/A'}</p> */}

                    <div className='sticky right-20'>
                        <img src={ findGlassSrc() ? findGlassSrc().src : "" }
                             className="max-w-[200px] max-h-[350px] fixed bottom-[59px] ml-[220px]"
                        />
                    </div>

                    <div className='sticky right-20'>
                        <img src={ findDoorSrc() ? findDoorSrc().src : "" }
                             className="fixed bottom-[59px] ml-[220px] max-w-[200] max-h-[450]"
                             id="doorImage"
                             style={{ maxWidth: '200px', maxHeight: '400px' }}
                             onLoad={() => {
                                 const doorImg = document.getElementById("doorImage");
                                 const colorImg = document.getElementById("colorImage");
                                 if (doorImg && colorImg) {
                                     colorImg.style.width = `${doorImg.width}px`;
                                     colorImg.style.height = `${doorImg.height}px`;
                                 }
                             }}
                        />
                    </div>

                    <div className='sticky right-20'>
                        <img src={ findColorSrc() ? findColorSrc().src : "" }
                             className="fixed bottom-[59px] ml-[220px] opacity-60 blend-multiply"
                             id="colorImage"
                             style={{
                                 backgroundImage: `url(${findColorSrc() ? findColorSrc().src : ""})`,
                                 backgroundBlendMode: 'multiply',
                                 maskImage: `url(${findDoorSrc() ? findDoorSrc().src : ""})`,
                                 maskSize: 'cover',
                                 maskRepeat: 'no-repeat',
                             }}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoorPreview;

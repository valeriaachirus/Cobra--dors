import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DoorPreview from './components/DoorPreview';

function App() {
  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  const [doorConfig, setDoorConfig] = useState({
    doorShape: null,
    color: null,
    windowShape: null,
  });

  const updateDoorConfig = (selectedOptions) => {
    const updatedConfig = { ...doorConfig, ...selectedOptions };
    setDoorConfig(updatedConfig);
  }

  return (
    <div className="App">
      <Header />
      <div className='flex'>
        <div className='Content'>
          <div className="h-full grid grid-cols-9">
            <div className='col-span-4'>
              <Sidebar onSelect={updateDoorConfig} />
            </div>

            <div className='flex-none col-span-5 sticky left-0'>
              <DoorPreview selectedOptions={doorConfig} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
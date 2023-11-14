import { useState } from 'react';
import { useMyContext } from "../MyContext";

const Result = () => {
  const {result, setResult} = useMyContext()
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % result.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + result.images.length) % result.images.length);
  };

  return (
    <>
      <h1 style={{textAlign: "center"}}>Your plants' Health Report:</h1>
      {result.images && result.images.length > 0 && (
        <div style={{textAlign: "center"}}>
          <img src={'data:image/jpeg;base64,' + result.images[currentIndex]} style={{width: 'auto', height: '300px'}} />
          <div>
            <button onClick={handlePrev} style={{marginRight: '10px'}}>←</button>
            <button onClick={handleNext}>→</button>
          </div>
        </div>
      )}
      <p className='home-text'>Your plant has been diagnosed with: {result.message}</p>
    </>
  );
};

export default Result;
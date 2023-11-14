import { useState } from 'react';
import { useMyContext } from "../MyContext";

const Result = () => {
  const {result, setResult} = useMyContext()
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % result.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + result.length) % result.length);
  };

  return (
    <>
      <h1 style={{textAlign: "center"}}>Your plants' Health Report:</h1>
      {result && result.length > 0 && (
        <div style={{textAlign: "center"}}>
          <img src={'data:image/jpeg;base64,' + result[currentIndex]} style={{width: 'auto', height: '300px'}} />
          <div>
            <button onClick={handlePrev} style={{marginRight: '10px'}}>←</button>
            <button onClick={handleNext}>→</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
import './App.css';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <>
    <header className='App-header'>
      <nav>
        <img className="brand"  src={require("./CropShield_logo.png")} alt="CropShield.AI Logo"></img>
      </nav>
    </header>
    <div className="home-text" >
      <h1>Upload images to get started!</h1>
      <p>Our Machine Learning Platform will analyze your images and provide you with a detailed report of your crop's health.</p>
    </div>
    <div className="App">
      <ImageUpload />
    </div>
    </>
  );
}

export default App;

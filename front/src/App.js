import './App.css';
import ImageUpload from './ImageUpload';

function App() {
  return (
    <>
    <header className='App-header'>
      <nav>
        <img class="brand"  src={require("./CropShield_logo.png")} alt="CropShield.AI Logo"></img>
        <div>
          
        </div>
      </nav>
    </header>

    <div className="App">
      <ImageUpload />
    </div>
    </>
  );
}

export default App;

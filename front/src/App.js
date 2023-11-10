import './App.css';
import ImageUpload from './ImageUpload';
import Result from './pages/Result';
import NavBar from './pages/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyProvider } from './MyContext';


function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route index element={<ImageUpload />} />
            <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
      
  );
}

export default App;

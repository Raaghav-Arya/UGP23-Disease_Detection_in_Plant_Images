import React, { useState, useRef, useCa } from 'react';
import axios from 'axios';
import JSZip from 'jszip'
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from './MyContext';

axios.defaults.baseURL = 'http://127.0.0.1:5000';

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { result, setResult } = useMyContext();
  const [images, setImages] = useState(null);
  
  const fileInputRef = useRef(null);
  const navigate = useNavigate()

  const onDrop = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const uploadImages = async () => {
    console.log(selectedFiles)
    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append('images', file);
    });

    try {
      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'blob'
      });

      const jszip = new JSZip();
      const zip = await jszip.loadAsync(response.data)
      const files = await Promise.all(Object.keys(zip.files).map(async filename =>
        await zip.files[filename].async('base64')
      ))
      setImages(files)
      navigate('/result')
      setResult(files)
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  const handleImageRemove = index => {
    let imagesArray = [...selectedFiles];
    imagesArray.splice(index, 1);
    setSelectedFiles(imagesArray);
  };

  return (    
    <div className="App">
      <div className="home-text" >
      <h1>Upload images to get started!</h1>
      <p>Our Machine Learning Platform will analyze your images and provide you with a detailed report of your crop's health.</p>
      </div>
      <Button onClick={() => fileInputRef.current.click()} icon={<UploadOutlined />}>Click to Upload</Button>
      <input ref={fileInputRef} style={{ display: 'none' }} type='file' multiple onChange={onDrop} accept='image/*' />
      {selectedFiles.length > 0 && <Button onClick={uploadImages}>Upload Images</Button>}
      {console.log(selectedFiles)}

    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '20px'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
        gap: '10px', 
        width: '100%', 
        maxWidth: '600px'  // Adjust this value to your needs
      }}>
        {selectedFiles.map((file, index) => (
          <div key={index} style={{ position: 'relative' }}
            onMouseOver={(e) => e.currentTarget.children[1].style.display = 'block'}
            onMouseOut={(e) => e.currentTarget.children[1].style.display = 'none'}
          >
            <img src={URL.createObjectURL(file)} alt="" style={{ width: '100%', height: 'auto'}} />
            <button onClick={() => handleImageRemove(index)} style={{
              position: 'absolute',
              top: 0,
              right: 0,
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'none'
            }}>X</button>
          </div>
        ))}
      </div>
    </div>

      
      {/* <UploadButton setFileList={setSelectedFiles} fileList={selectedFiles} /> */}
    </div>

  );
};

export default ImageUpload;

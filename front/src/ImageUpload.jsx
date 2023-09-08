import React, { useState } from 'react';
import axios from 'axios';
import JSZip from 'jszip'

axios.defaults.baseURL = 'http://127.0.0.1:5000';

const ImageUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [images, setImages] = useState(null);

  const onDrop = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const uploadImages = async () => {
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
      console.log(files)
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div>
      <input type='file' multiple onChange={onDrop} accept='image/*' />
      <button onClick={uploadImages}>Upload Images</button>
      {images && images.map(image => <img key={image} src={'data:image/jpeg;base64,'+image} />)}
    </div>
  );
};

export default ImageUpload;

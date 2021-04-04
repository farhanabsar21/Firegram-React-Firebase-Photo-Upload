import React, { useState } from 'react';
import ImageGrid from './Components/ImageGrid.js/ImageGrid';
import Modal from './Components/Modal/Modal';
import Title from './Components/Title/Title';
import UploadForm from './Components/UploadForm/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title></Title>
      <UploadForm></UploadForm>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
    </div>
  );
}

export default App;

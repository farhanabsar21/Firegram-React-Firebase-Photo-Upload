import React, { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    // allowing type of files
    const types = ["image/png", "image/jpeg", "image/jpg"];

    const handleChange = e =>{
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("");
        }else{
            setFile(null); // I'm resetting the value 
            setError("Please upload a Valid file! (PNG or JPEG)")
        }
    } 
    return (
        <div>
            <form>
                <label>
                    <input type="file" name="" id="" onChange={handleChange} />
                    <span>+</span>
                </label>
                <div className="output">
                    { error && <div className="error"><p>{ error }</p></div>}
                    {file && <div>{file.name}</div>}
                    { file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
                </div>
            </form>
        </div>
    );
};

export default UploadForm;
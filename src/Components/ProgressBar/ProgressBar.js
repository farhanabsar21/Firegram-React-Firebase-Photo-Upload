import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import { motion } from "framer-motion"; 

const ProgressBar = ({file, setFile}) => {
    const { progress, url } = useStorage(file);
    // progressbar null korbo kivabe?
    // photo url peye gelei upload complete
    // tai otar set ke null kore dilei hobe
    useEffect(()=> {
        if(url){
            setFile(null);
        }
    },[url, setFile])
    return (
        // <div className="progress-bar" style={{width: progress + "%"}}></div>
        <motion.div className="progress-bar" 
            initial={{width:0}}
            animate={{width: progress + "%"}}
        ></motion.div>
    );
};

export default ProgressBar;
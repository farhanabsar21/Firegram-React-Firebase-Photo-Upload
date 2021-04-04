import React, { useEffect, useState } from 'react';
import { projectFirestore, projectStorage, timestamp } from '../Firebase/firebase.config';

// custom hook eta..tai amra props er moto ekta parameter nilam
// ei file holo upload file er file ke represent korbe

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        //reference
        // ref() gets a suggestion from root or database
        // here we will suggest the name of the file from database  
        const storageRef = projectStorage.ref(file.name);

        // eta database er storage ref
        const collectionRef = projectFirestore.collection("images");

        // ekhane ektu critical karon amra event use krbo
        // kintu eventer er name "" er moddhe rakhbo
        // amader state change hole event handler ta active hobe shejonne
        // tarpor amra ekta snapshot use korbo

        // eta onektai addEventListener er moto
        storageRef.put(file).on("state_changed", (snap) => {
            // ei snap er onek byte calculation ase
            // change hobe ektu por por tai let diye shuru korbo
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url: url, createdAt: createdAt})
            setUrl(url);
        })
    },[file])

    // amra ekhane kono JSX nibo na karon eta custom hook 
    // tai return hishebe state gulake nilam {}  
    return { progress, error, url };
};

export default useStorage;
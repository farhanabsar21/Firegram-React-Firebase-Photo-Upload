import React, { useEffect, useState } from 'react';
import { projectFirestore } from '../Firebase/firebase.config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    
    useEffect(()=> {

        // collection ekhane image ke represent kortese
        const unsub = projectFirestore.collection(collection) 
            .orderBy("createdAt", "desc")
            .onSnapshot((snap)=> {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id:doc.id});
                })
                setDocs(documents);
            })
        return () => unsub();
    }, [collection])

    return { docs };
};

export default useFirestore;
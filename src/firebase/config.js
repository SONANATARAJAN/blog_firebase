
import {initializeApp } from 'firebase/app'

import { getAuth} from 'firebase/auth'
import {
    getFirestore
} from 'firebase/firestore'

const firebaseConfig = {
    
        apiKey: "AIzaSyAELD-hDuAabzpPvZiiQydG5XQEKh1FORg",
        authDomain: "blog-63be9.firebaseapp.com",
        projectId: "blog-63be9",
        storageBucket: "blog-63be9.appspot.com",
        messagingSenderId: "445643909785",
        appId: "1:445643909785:web:4fee0c38a8ede8193a6608"
    
    
};


  initializeApp(firebaseConfig)

  const db = getFirestore()

  const auth = getAuth()


  export {db,auth}

  
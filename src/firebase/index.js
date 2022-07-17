import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-Tx2bYh68HKWCMRM1ytXqsZJIx-VgVek",
    authDomain: "food-manager-1.firebaseapp.com",
    projectId: "food-manager-1",
    storageBucket: "food-manager-1.appspot.com",
    messagingSenderId: "570052445226",
    appId: "1:570052445226:web:6d51170309890d33d52f53"
}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }
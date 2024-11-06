// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA6JIEBjACvm_e6gN991KqKcXUX3DcCCKw",
  authDomain: "netflix-clone-6ea54.firebaseapp.com",
  projectId: "netflix-clone-6ea54",
  storageBucket: "netflix-clone-6ea54.firebasestorage.app",
  messagingSenderId: "185875636662",
  appId: "1:185875636662:web:f736fade6158e35f6ba117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore() ;

const signup= async(name, email, password)=>{
    try {
      const res =  await createUserWithEmailAndPassword(auth,email,password);
      const user= res.user;
      await addDoc(collection(db, "user"),{
        uid:user.uid,
        name,
        authProvider: "local",
        email,
      })
    } catch (error) {
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login=  async(email,password)=>{
try {
    await signInWithEmailAndPassword(auth,email,password)
    
} catch (error) {
    console.log(error);
    
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const logout=()=>{
    signOut(auth); 
}

export{auth, db, login, signup,logout}
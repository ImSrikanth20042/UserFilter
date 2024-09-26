import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBlbmZpx1XA1XChjmKjIbFPRKS62uhoSmE",
  authDomain: "search-filter-users.firebaseapp.com",
  projectId: "search-filter-users",
  storageBucket: "search-filter-users.appspot.com",
  messagingSenderId: "38291140787",
  appId: "1:38291140787:web:ab159022280ea4536400c6",
  measurementId: "G-DFVDELGY3R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

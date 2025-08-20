import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwG1v6UfZV3MaPlDLNCF-MYONLpCPxlBQ",
  authDomain: "vue-satsuki-project.firebaseapp.com",
  projectId: "vue-satsuki-project",
  storageBucket: "vue-satsuki-project.firebasestorage.app",
  messagingSenderId: "953724879068",
  appId: "1:953724879068:web:1f4ae931c2b8a643313419",
  measurementId: "G-VHMSR08TNG"
};

// Firebase 初期化
const app = initializeApp(firebaseConfig);

// 各サービスを初期化して export
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
import fs from "fs";
import path from "path";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsFKhlBza5jO_auMQ-5NGDcrve9uH700M",
  authDomain: "portafolio-saris.firebaseapp.com",
  projectId: "portafolio-saris",
  storageBucket: "portafolio-saris.firebasestorage.app",
  messagingSenderId: "264257424267",
  appId: "1:264257424267:web:790848e965081d8c8efd8e",
  measurementId: "G-P3QGP51YTV"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const folderPath = "./public/media";
const files = fs.readdirSync(folderPath);

async function uploadAll() {
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const fileBuffer = fs.readFileSync(filePath);
    const fileRef = ref(storage, `media/${file}`);

    console.log(`⏫ Subiendo: ${file}...`);
    try {
      await uploadBytes(fileRef, fileBuffer);
      const url = await getDownloadURL(fileRef);
      console.log(`✅ Subido: ${file}`);
      console.log(`🔗 URL: ${url}\n`);
    } catch (error) {
      console.error(`❌ Error al subir ${file}:`, error.message);
    }
  }
}

uploadAll().catch(console.error);

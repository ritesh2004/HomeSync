import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "homesync-65959.firebaseapp.com",
  projectId: "homesync-65959",
  storageBucket: "homesync-65959.appspot.com",
  messagingSenderId: "984814227680",
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: "https://homesync-65959-default-rtdb.firebaseio.com",
};

const initializeFirebae = initializeApp(firebaseConfig);
export const db = getDatabase(initializeFirebae);

export const writeData = ({ speed, led1, led2 }) => {
  set(ref(db, "/"), {
    fan: speed,
    led1: led1,
    led2: led2,
  });
};

export const readData = () => {
  const starcountRef = ref(db, "/");
  onValue(starcountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    return data;
  });
};

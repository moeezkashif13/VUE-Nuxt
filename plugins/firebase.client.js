import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBSmpbX8AmFvLbDHOA-Qwofx1EkGtyE4jA",
    authDomain: "nuxt-b9453.firebaseapp.com",
    projectId: "nuxt-b9453",
    storageBucket: "nuxt-b9453.appspot.com",
    messagingSenderId: "384769382382",
    appId: "1:384769382382:web:b5341bd2a86125052c60ff",
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

  nuxtApp.vueApp.provide("firestore", firestore);
  nuxtApp.provide("firestore", firestore);
});

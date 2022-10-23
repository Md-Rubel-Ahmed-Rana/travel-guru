import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyCbxf1nCTEJxAH19EPDPlnF7hGLIfqPrUQ",
//     authDomain: "travel-guru-faa4a.firebaseapp.com",
//     projectId: "travel-guru-faa4a",
//     storageBucket: "travel-guru-faa4a.appspot.com",
//     messagingSenderId: "594110339398",
//     appId: "1:594110339398:web:b415295ee1b379a4656d47"
// };
// const app = initializeApp(firebaseConfig);
// export default app;


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};
const app = initializeApp(firebaseConfig);
export default app;
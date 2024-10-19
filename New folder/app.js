

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyCXZpOlw6g720pmPlVO8st5KKdeuacYRqk",
    authDomain: "smit-25482.firebaseapp.com",
    projectId: "smit-25482",
    storageBucket: "smit-25482.appspot.com",
    messagingSenderId: "662393351090",
    appId: "1:662393351090:web:854616dc3cd47552cfd2ab",
    measurementId: "G-D2HWHQ0H8N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
console.log(db);

function a(){
    // db.collection("users").add({
    //     firstName: "Ada",
    //     lastName: "Lovelace",
    //     email: "iii@gmail.com"
    // })
    // .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch((error) => {
    //     console.error("Error adding document: ", error);
    // });
}
a()

function read(){
    // db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${doc.data()}`);
    //     });
    // });
}
read()
document.getElementById("sign-up").addEventListener('click', () => {
    db.collection("users").add({
        firstName: "Ada",
        lastName: "Lovelace",
        email: "iii@gmail.com"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
})
import {firebase} from './firebase-config'

export const getDatabase =() =>{
    const db = firebase.firestore();
    console.log(db)
}

export const getBikeInsurance = (payload) =>{
    const bikeInsurance = firebase.firestore().collection('bike-insurance').add(payload)
      .then((ref) => {
        console.log("Added doc with ID: ", ref.id);
        // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
      });
}

export const setHealthInsurance = (payload) =>{
    const bikeInsurance = firebase.firestore().collection('health-insurance').add(payload)
      .then((ref) => {
        console.log("Added doc with ID: ", ref.id);
        // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
      });
}
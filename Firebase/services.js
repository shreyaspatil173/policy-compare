import {firebase} from './firebase-config'

export const getDatabase =() =>{
    const db = firebase.firestore();
    console.log(db)
}

export const setBikeInsurance = (payload) =>{
    const bikeInsurance = firebase.firestore().collection('bike-insurance').add(payload)
      .then((ref) => {
        console.log("Added doc with ID: ", ref.id);
        // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
      });
}


export const setCarInsurance = (payload) =>{
  const carInsurance = firebase.firestore().collection('car-insurance').add(payload)
    .then((ref) => {
      console.log("Added doc with ID: ", ref.id);
      // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
    });
}

export const setHealthInsurance = (payload) =>{
    const healthInsurance = firebase.firestore().collection('health-insurance').add(payload)
      .then((ref) => {
        console.log("Added doc with ID: ", ref.id);
        // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
      });
}

export const setFamilyInsurance = (payload) =>{
  const familyInsurance = firebase.firestore().collection('family-insurance').add(payload)
    .then((ref) => {
      console.log("Added doc with ID: ", ref.id);
      // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
    });
}

export const SetTermInsurance = (payload) =>{
  const termInsurance = firebase.firestore().collection('term-insurance').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}

export const SetInvestementPlans = (payload) =>{
  const investmentPlns = firebase.firestore().collection('investement-plan').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}


export const setHomeInsurance = (payload) =>{
  const homeInsurance = firebase.firestore().collection('home-insurance').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}


export const setChildSavingPlans = (payload) =>{
  const childPlans = firebase.firestore().collection('child-saving-plan').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}


export const setTravelInsurance = (payload) =>{
  const travelInsurance = firebase.firestore().collection('travel-insurance').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}

export const setRetirementPlans = (payload) =>{
  const retirementplan = firebase.firestore().collection('retirement-plan').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}


export const setGuaranteedReturns = (payload) =>{
  const retirementplan = firebase.firestore().collection('guarantted-return').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}

export const setTaxSavingPlans = (payload) =>{
  const retirementplan = firebase.firestore().collection('tax-saving-plan').add(payload)
  .then((ref) => {
    console.log("Added doc with ID: ", ref.id);
    // Added doc with ID:  ZzhIgLqELaoE3eSsOazu
  });
}
export const  getTaxSavingPlans =() =>{
   const taxSavingPlans = firebase.firestore().collection('tax-saving-plan').get()
  taxSavingPlans.then((item)=>{
    item.docs.map(doc => {
      console.log('LOG 1', doc.data());
      return doc.data();
    });
  })
}

export const getById= (tableName,id)=>{
 
   return firebase.firestore().collection(tableName).doc(id).get()
  
}





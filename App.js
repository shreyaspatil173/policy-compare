
import React from "react";
import {  StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Categories from "./components/Categories";
import Home from "./components/Home";
import TermInsuranceForm from "./components/TermInsuranceForm";
import HomeInsuranceForm1 from "./components/HomeInsranceForm1";
import CarInsuranceForm from "./components/CarInsuranceForm";
import BikeInsuranceForm from "./components/BikeInsuranceForm";
import HomeInsuranceForm from "./components/HomeInsuranceForm";
import InvestmentPlan from "./components/InvestmentPlan";
import GuaranteedReturn from "./components/GuaranteedReturn";
import RetirementPlan from "./components/ReirementPlan";
import ChildPlan from "./components/ChildPlan";
import TaxSaving from "./components/TaxSaving";
import TravelInsurance from "./components/TravelInsurance";
import DatePick from "./components/DatePick";
import HealthInsurance from "./components/HealthInsurance";
import CheckBoxes from "./components/CheckBoxes";
import FamilyInsurances from "./components/FamilyInsurances";
import Profile from "./components/profile";
import Forgot from "./components/Forgot";
// import { authentication } from "./Firebase/firebase-config";








const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Register" component={SignUp} options={{ title: 'Register' }}/>
        <Stack.Screen name="Signin" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="Categories" component={Categories}options={{ title: 'Categories' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="TermInsurance" component={TermInsuranceForm} options={{ title: 'Term Insurance' }}/>
        <Stack.Screen name="Homeinsurance" component={HomeInsuranceForm1}options={{ title: 'Home Insurance' }} />
        <Stack.Screen name="CarInsurance" component={CarInsuranceForm}options={{ title: 'Car Inusrance' }} />
        <Stack.Screen name="BikeInsurance" component={BikeInsuranceForm} options={{ title: 'Bike Insurance' }}/>
        <Stack.Screen name="HomeInsurance" component={HomeInsuranceForm} options={{ title: 'Home Insurance' }}/>
        <Stack.Screen name="InvestmentPlans" component={InvestmentPlan}options={{ title: 'Investement Plan' }} />
        <Stack.Screen name="GuaranteedReturns" component={GuaranteedReturn}options={{ title: 'Guranteed Returns' }} />
        <Stack.Screen name="RetirementPlans" component={RetirementPlan}options={{ title: 'Retirement Plan' }} />
        <Stack.Screen name="ChildSavingPlans" component={ChildPlan}options={{ title: 'Child Saving Plan' }} />
        <Stack.Screen name="TaxSavingInvestement" component={TaxSaving}options={{ title: 'Tax Saving Investement' }} />
        <Stack.Screen name="TravelInsurance" component={TravelInsurance}options={{ title: 'Travel Insurance' }} />
        <Stack.Screen name="Date Picker" component={DatePick} />
        <Stack.Screen name="Healthinsurance" component={HealthInsurance} options={{ title: 'Health Inusrance' }}/>
        <Stack.Screen name="CheckBox" component={CheckBoxes} />
        <Stack.Screen name="Familyinsurance" component={FamilyInsurances} options={{ title: 'Family Insurance' }}/>
        <Stack.Screen name="View Profile" component={Profile} options={{ title: 'Profile' }}/>
        <Stack.Screen name="Forgotpassword" component={Forgot} options={{ title: 'Forgot Password' }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },

});

export default App;
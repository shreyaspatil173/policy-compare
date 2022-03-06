import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView ,SafeAreaView} from "react-native";
import { firebase } from "../Firebase/firebase-config";
const Home = ({navigation}) => {
    const [name, setName] = useState('');

    const getData=() =>{
        const uid = localStorage.getItem("user_id");
        const usersRef = firebase.firestore().collection('users')
        usersRef
            .doc(uid)
            .get()
            .then(firestoreDocument => {
                if (!firestoreDocument.exists) {
                    alert("User does not exist anymore.")
                    return;
                }
                const user = firestoreDocument.data()
                console.log("user",user)
                setName(user.fullName)
                
            })
            .catch(error => {
                alert(error)
            });
    }

    React.useEffect(() => {
        getData()
    },[])


    return (
        <SafeAreaView>
        <ScrollView>
            <View style={styles.viewtop}>
                <Image source={require('../assets/images/pc-logo.jpg')} style={{  borderRadius: 50, borderColor: "#00f0d4", borderWidth: 2,  width: 35,  height: 35,margin: 10, }} />
                <TouchableOpacity>
                    <Image source={require('../assets/images/bell-icon.png')}style={{ width:30,height:30, position: 'absolute',top: 10, bottom: 0, left: 300, right: 0,}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>navigation.navigate("Profile")}>
                    <Image source={require('../assets/images/profile.png')}style={{width:30,height:30,position: 'absolute',top: 10, bottom: 0, left: 260, right: 0, }}/>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 30, marginLeft: 10, marginTop: 5 }}>Hello, {name} </Text>
            <Text style={{ color: "#969696", marginLeft: 10 }}>Welcome back </Text>
            <View style={styles.viewRow}>
                <TouchableOpacity style={{ backgroundColor: "#ffd6d6", borderRadius: 10, padding: 8, margin: 4 }}>
                    <Text style={{ fontSize: 20, color: "#ff0008", marginLeft: 10 }}>How to get {'\n'} Claim Assistance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#ceccff", borderRadius: 10, padding: 8, margin: 4 }}>
                    <Text style={{ fontSize: 20, color: "#0600b5", marginLeft: 10 }}>Complete your {'\n'} proposal form</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ margin: 10 }}>Select a Product ---</Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={styles.homeView1}>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 12, }}onPress={() =>navigation.navigate("TermInsurance")}>
                            <Image source={require('../assets/images/term-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Term Life {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 12, }}onPress={() =>navigation.navigate("Healthinsurance")}>
                            <Image source={require('../assets/images/health-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Health {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 12, }}onPress={() =>navigation.navigate("CarInsurance")}>
                            <Image source={require('../assets/images/car-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Car {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 12, }}onPress={() =>navigation.navigate("BikeInsurance")}>
                            <Image source={require('../assets/images/bike-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Bike {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.homeView2}>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 8, }}onPress={() =>navigation.navigate("InvestmentPlans")}>
                            <Image source={require('../assets/images/investement-plans.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Investement {'\n'} Plans</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 12, }}onPress={() =>navigation.navigate("Homeinsurance")}>
                            <Image source={require('../assets/images/home-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Home {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 6, }}onPress={() =>navigation.navigate("ChildSavingPlans")}>
                            <Image source={require('../assets/images/child-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Child Saving{'\n'} Plans</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 12, }}onPress={() =>navigation.navigate("TravelInsurance")}>
                            <Image source={require('../assets/images/travel-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Travel {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.homeView2}>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 6, }}onPress={() =>navigation.navigate("Familyinsurance")}>
                            <Image source={require('../assets/images/family-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Family Health {'\n'} Insurance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 8, }}onPress={() =>navigation.navigate("RetirementPlans")}>
                            <Image source={require('../assets/images/retirement-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Retirement {'\n'} Plans</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 8, }}onPress={() =>navigation.navigate("GuaranteedReturns")}>
                            <Image source={require('../assets/images/claim-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Guaranteed {'\n'} returns</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewitem}>
                        <TouchableOpacity style={{ padding: 6, paddingBottom: 20 }}onPress={() =>navigation.navigate("TaxSavingInvestement")}>
                            <Image source={require('../assets/images/claim-insurance.png')} style={{ width: 20, height: 20, borderRadius: 1, borderColor: "#e8e8e8", backgroundColor: "#f5f5f5" }} />
                            <Text style={{ fontSize: 10 }}>Tax Saving {'\n'} Investement</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
            </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    viewRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
    },

    viewitem: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderColor: "blue",
        margin: 10,
        backgroundColor: "#c0d6eb",
        justifyContent: "center",


    },
    homeView1: {
        paddingTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    homeView2: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    viewtop:{
       
        flexDirection: "row",
        flexWrap: "wrap",
    }
});

export default Home;
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView ,Alert} from "react-native";


const Categories = ({ navigation }) => {
    return (
        <SafeAreaView>
        <ScrollView>
            <Text style={styles.mainheader}>Finding the best insurance was never easier</Text>

            <View style={styles.insuranceView1}>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10,}} onPress={() =>navigation.navigate("TermInsurance")}>
                        <Image source={require('../assets/images/term-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Term Life {'\n'} Insurance</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10, }}onPress={() =>navigation.navigate("GuaranteedReturns")}>
                        <Image source={require('../assets/images/claim-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Guaranteed {'\n'} Returns</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.insuranceView2}>
                
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10,}} onPress={() =>navigation.navigate("HealthInsurance")} >
                        <Image source={require('../assets/images/health-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Health  {'\n'} Insurance</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }} onPress={() =>navigation.navigate("InvestmentPlans")}>
                        <Image source={require('../assets/images/investement-plans.png')} style={{ width: 35, height: 35 }} />
                        <Text>Investement {'\n'} Plans</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }} onPress={() =>navigation.navigate("TravelInsurance")}>
                        <Image source={require('../assets/images/travel-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Travel{'\n'} Insurance</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.insuranceView3}>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }}onPress={() => navigation.navigate('CarInsurance')} >
                        <Image source={require('../assets/images/car-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Car{'\n'} Insurance</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }}onPress={() =>navigation.navigate("TaxSavingInvestement")}>
                        <Image source={require('../assets/images/tax-saving.png')} style={{ width: 35, height: 35 }} />
                        <Text>Tax Saving{'\n'} Insurance</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }}onPress={() =>navigation.navigate("BikeInsurance")}>
                        <Image source={require('../assets/images/bike-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>2 Wheeler{'\n'} Insurance</Text>
                    </TouchableOpacity></View>

            </View>


            <View style={styles.insuranceView4}>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }}onPress={() =>navigation.navigate("ChildSavingPlans")}>
                        <Image source={require('../assets/images/child-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Child{'\n'} Insurance</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewitem}>
                    <TouchableOpacity style={{ padding:10 }} onPress={()=>navigation.navigate("HomeInsurance")}>
                        <Image source={require('../assets/images/home-insurance.png')} style={{ width: 35, height: 35 }} />
                        <Text>Home{'\n'} Insura nce</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainheader: {
        paddingTop: 40,
        paddingLeft: 10,
        fontSize: 35,
        color: "#000000",

    },
    viewitem: {
        backgroundColor: "#c0d6eb",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        margin:15,
    },
    insuranceView1: {
        paddingTop: 20,

        flexDirection: "row",
        flexWrap: "wrap",
    },

    insuranceView2: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    insuranceView3: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

    insuranceView4: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

export default Categories;
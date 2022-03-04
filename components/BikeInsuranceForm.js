import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, SafeAreaView } from "react-native";
import { Alert } from "react-native-web";
import { getBikeInsurance } from "../Firebase/services";

const BikeInsuranceForm = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const Submit = () => {
        if(number){

            getBikeInsurance({bikeNumber:number});
        }else{
            console.log('enter bike number')
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{ margin: 15, fontSize: 30 }}>
                    <Text style={{ color: "#0a00f7" }}>Save upto {'\n'}</Text>85% on Bike insurance <Text style={{ color: "#0a00f7" }}> </Text>
                </Text>
                <View style={styles.viewRow}>
                    <View style={{ backgroundColor: "#daffd4", borderRadius: 10, padding: 8, margin: 4, flexDirection: "row", flexWrap: "wrap" }}>
                        <Image source={require('../assets/images/instant-policy.png')} style={{ width: 25, height: 25, }} />
                        <Text style={{ fontSize: 20, color: "#25fa00", marginLeft: 10 }}> Instant Policy</Text>
                    </View>
                    <View style={{ backgroundColor: "#fcebfb", borderRadius: 10, padding: 8, margin: 4, flexDirection: "row", flexWrap: "wrap" }}>
                        <Image source={require('../assets/images/percentage-claim.png')} style={{ width: 25, height: 25, }} />
                        <Text style={{ fontSize: 20, color: "#f7abf0", marginLeft: 10 }}> Best Prices</Text>
                    </View>
                </View>
                <Text style={{ margin: 15 }}>Stay home & renew in 2 minutes ---</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter Bike Number(eg DL-1S-AB-1234)"
                    value={number}
                    onChangeText={(actualData) => setNumber(actualData)}
                    autoCapitalize="none"
                    keyboardType="default"
                />

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Submit()}
                >
                    <Text style={styles.buttonText}>View free quotes</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 14,
        margin: 14,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: "#000000",
    },
    buttonStyle: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: 15,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 17,
    },
    viewRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
    }
})
export default BikeInsuranceForm;
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, SafeAreaView } from "react-native";
import { Alert } from "react-native-web";
import { setBikeInsurance } from "../Firebase/services";

const BikeInsuranceForm = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {

        let isError = false;
        let error = {};
        if(number === '') {
            error.number = "Enter Number";
            isError = true;    
        }
        
        setErrorMsgr(error);
        console.log("isError",isError)
        return isError
    }

    const Submit = () => {
        if(!checkValidation()) {
            if(number){
    
                setBikeInsurance({bikeNumber:number});
                navigation.navigate('Activity', {
                    insuranceid: 'hT8udth7IMt92KS8uTMt',
                  
                  });
            }else{
                console.log('enter bike number')
            }
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{ margin: 15, fontSize: 30 }}>
                    <Text style={{ color: "#0a00f7" }}>Save upto {'\n'}</Text>85% On Bike Insurance <Text style={{ color: "#0a00f7" }}> </Text>
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
                <Text style={{ margin: 15 }}>Stay Home & Renew In 2 Minutes ---</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter Bike Number(eg DL-1S-AB-1234)"
                    value={number}
                    onChangeText={(actualData) => setNumber(actualData)}
                    autoCapitalize="none"
                    keyboardType="default"
                />
                  <Text style={styles.errorMsg}>{errorMsg && errorMsg.number   && errorMsg.number      }</Text>

                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Submit()}
                >
                    <Text style={styles.buttonText}>View Free Quotes</Text>
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
    },
    errorMsg : {
        color:"red",
        marginLeft:15,
    }
})
export default BikeInsuranceForm;
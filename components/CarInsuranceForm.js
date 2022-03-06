import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from "react-native";
import { setCarInsurance } from "../Firebase/services"
const CarInsuranceForm = ({ navigation }) => {
    const [number, setNumber] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});


    const checkValidation = () => {
        let isError = false;
        let error = {};
        if (number === '') {
            error.number = "Enter Number";
            isError = true;
        }


        setErrorMsgr(error);
        console.log("isError", isError)
        return isError
    }
    const Submit = () => {



        if (!checkValidation()) {
            if (number) {
                setCarInsurance({
                    carNumber: number
                })
                navigation.navigate('Activity', {
                    insuranceid: 'car-insurance',

                });
            } else {

                console.log("not show")
            }
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={{ margin: 15, fontSize: 30 }}>
                    <Text style={{ color: "#0a00f7" }}>Save upto {'\n'}</Text>85% on car insurance <Text style={{ color: "#0a00f7" }}> </Text>
                </Text>
                <Text style={{ margin: 15 }}>Stay home & renew in 2 minutes ---</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter Car Number(eg DL10AB1234)"
                    value={number}
                    onChangeText={(actualData) => setNumber(actualData)}
                    autoCapitalize="none"

                    keyboardType="default"
                />
                <Text style={styles.errorMsg}>{errorMsg && errorMsg.number && errorMsg.number}</Text>
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
    errorMsg: {
        color: "red",
        marginLeft: 15,
    }
})
export default CarInsuranceForm;
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Picker, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setRetirementPlans } from "../Firebase/services";
import SwitchCode from "./SwitchCode";

const RetirementPlan = ({navigation}) => {
    const [name, setName] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {

        let isError = false;
        let error = {};
        if (name === '') {
            error.name = "Enter Name";
            isError = true;
        }

        if (selectedValue === '') {
            error.selectedValue = "Select Gender";
            isError = true;
        }

       
        setErrorMsgr(error);
        console.log("isError", isError)
        return isError
    }


    const Submit = () => {
        if (!checkValidation()) {
        if (name && selectedValue) {
            setRetirementPlans({
                name: name,
                gender: selectedValue
            })
            navigation.navigate('Activity', {
                insuranceid: 'retirement-plan',
              });
        }else{
            console.log("nothing to show");
        }
    }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{ margin: 10, fontSize: 20 }}>Secure your retirement</Text>
                    <Text style={{ margin: 10, }}>Get the returns & make the most of you golden years</Text>

                    <View style={styles.viewRow}>
                        <Image source={require('../assets/images/retirementplan.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ fontSize: 20, color: "#029e12", marginLeft: 10 }}> Invest ₹ 6,000/month & get tax free monthly pension of ₹60,000</Text>
                    </View>

                    <Text style={{ margin: 10, textAlign: "center" }}>Tell us about yourself----</Text>
                    <Text style={{ fontSize: 15, color: "#0a00f7", marginLeft: 15 }}>Select Your Gender :-</Text>

                    <Picker
                        style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Select Value" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                    <Text style={styles.errorMsg}>{errorMsg && errorMsg.selectedValue && errorMsg.selectedValue}</Text>
                    <View style={styles.viewField}>
                        <Text style={styles.lables}>
                            Enter Your Name
                        </Text>
                        <TextInput style={styles.inputStyle}
                            value={name}
                            onChangeText={(actualData) => setName(actualData)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.name && errorMsg.name}</Text>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => Submit()}
                        >
                            <Text style={styles.buttonText}>View free quotes</Text>
                        </TouchableOpacity>
                    </View>
                    <SwitchCode />
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    viewRow: {
        backgroundColor: "#daffd4", borderRadius: 10, padding: 10, margin: 10, flexDirection: "row", flexWrap: "wrap"
    },
    viewField: {
        margin: 15,
    },
    lables: {
        height: 40,
        paddingTop: 15,
        color: "#000000",
    },
    inputStyle: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#0010a1",
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

export default RetirementPlan;
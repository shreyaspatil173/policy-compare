import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Picker, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwitchCode from "./SwitchCode";
import { SetTermInsurance } from "../Firebase/services";
import {validDate} from "../Helper/Validation"


const TermInsuranceForm = ({navigation}) => {
    const [name, setName] = useState('');    
    const [dob, setDob] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {

        let isError = false;
        let error = {};
        if(name === '') {
            error.name = "Enter Name";
            isError = true;    
        }

        if(selectedValue === '') {
            error.selectedValue = "Select Gender";
            isError = true;    
        }

        if(dob === '') {
            error.dob = "Enter Date Of Birth";
            isError = true;    
        }
        if(dob && !validDate(dob)) {
            error.dob = "Enter valid Date Of Birth";
            isError = true;    
        }

        setErrorMsgr(error);
        console.log("isError",isError)
        return isError
    }


    const Submit = () => {
        if(!checkValidation()) {
       if(name && dob && selectedValue){
            SetTermInsurance({
                name:name,
                dob:dob,
                gender:selectedValue
            })
            navigation.navigate('Activity', {
                insuranceid: 'term-insurance',
              
              });
       }else{
        console.log('unsucess')
       }
    }
    }
    

    return (
        <SafeAreaView>
        <ScrollView>
        <View>
            <Text style={{ margin: 15, fontSize: 30 }}>
                <Text style={{ color: "#0a00f7" }}>₹ 1 Crore </Text> life cover {'\n'} at just  <Text style={{ color: "#0a00f7" }}>₹490/month</Text>
            </Text>
            <View style={styles.viewRow}>
                <View style={{ backgroundColor: "#daffd4", borderRadius: 10, padding: 6, margin: 4, }}>
                    <Image source={require('../assets/images/percentage-claim.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                    <Text style={{ fontSize: 20, color: "#25fa00", marginLeft: 10 }}>Get upto <Text style={{ color: "#00ad11" }}>10% Online {'\n'} Discount**</Text></Text>
                </View>
                <View style={{ backgroundColor: "#f4dbff", borderRadius: 10, padding: 6, margin: 4, }}>
                    <Image source={require('../assets/images/health-insurance.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                    <Text style={{ fontSize: 20, color: "#40005c", marginLeft: 10 }}> No Medical <Text style={{ color: "#8800c4" }}> {'\n'}required </Text></Text>
                </View>
            </View>
            <Text style={{ margin: 10, textAlign: "center" }}>Tell us about yourself----</Text>
            <Text style={{ fontSize: 15, color: "#0a00f7", marginLeft: 15 }}>Select Your Gender :-</Text>

            <Picker
                selectedValue={selectedValue}
                style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Select Value" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
            <Text style={styles.errorMsg}>{errorMsg && errorMsg.selectedValue   && errorMsg.selectedValue      }</Text>
            <View style={styles.viewField}>
                <Text style={styles.lables}>
                    Enter Your Name
                </Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={(actualData) => setName(actualData)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                />
                <Text style={styles.errorMsg}>{errorMsg && errorMsg.name   && errorMsg.name      }</Text>
                <Text style={styles.lables}>
                    Date of Birth (DD-MM-YYYY)
                </Text>
                <TextInput style={styles.inputStyle}
                    placeholder="(DD-MM-YYYY)"
                    value={dob}
                    onChangeText={(actualData) => setDob(actualData)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                />
                <Text style={styles.errorMsg}>{errorMsg && errorMsg.dob   && errorMsg.dob      }</Text>
                
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
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
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
    errorMsg : {
        color:"red",
        marginLeft:15,
    }

});

export default TermInsuranceForm;

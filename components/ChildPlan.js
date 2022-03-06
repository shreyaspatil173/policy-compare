import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Picker, Image, SafeAreaView, ScrollView } from "react-native";
import { setChildSavingPlans } from "../Firebase/services";
import SwitchCode from "./SwitchCode";

const ChildPlan = ({navigation}) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {

        let isError = false;
        let error = {};
        if(name === '') {
            error.name = "Enter Name";
            isError = true;    
        }

        if(gender === '') {
            error.gender = "Select Gender";
            isError = true;    
        }

        setErrorMsgr(error);
        console.log("isError",isError)
        return isError
    }

    const Submit = () => {

        if(!checkValidation()) {
        if(name && gender){
            setChildSavingPlans({
                name:name,
                gender:gender
            })
            navigation.navigate('Activity', {
                insuranceid: 'child-saving-plan',
              
              });
        }else{
            console.log("nothing rot ");
        }
    }
    }
    return (
       <SafeAreaView>
       <ScrollView>
            <Text style={{ margin: 10, fontSize: 20 }}>Secure your child's future</Text>
            <Text style={{ margin: 10, }}>Insurer will pay future premiums in case of loss of life of parent </Text>

            <View style={styles.viewRow }>
                <Image source={require('../assets/images/moneysack.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                <Text style={{ fontSize: 20, color: "#029e12", marginLeft: 10 }}> Your Child will get ₹ 50 Lakhs if {'\n'}you invest ₹5k/month**</Text>
            </View>

            <Text style={{ margin: 10, textAlign: "center" }}>Tell us about yourself----</Text>
            <Text style={{ fontSize: 15, color: "#0a00f7", marginLeft: 15 }}>Select Your Gender :-</Text>

            <Picker
                selectedValue={gender}
                style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
                <Picker.Item label="Select Value"/>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
            <Text style={styles.errorMsg}>{errorMsg && errorMsg.gender   && errorMsg.gender}</Text>
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
                 <Text style={styles.errorMsg}>{errorMsg && errorMsg.name   && errorMsg.name}</Text>
                 <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Submit()}
                >
                    <Text style={styles.buttonText}>View free quotes</Text>
                </TouchableOpacity>
            </View>
            <SwitchCode/>
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
        paddingTop: 5,
        paddingBottom: 5,
        margin:10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#0010a1",
    },
    buttonStyle: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
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
})

export default ChildPlan;
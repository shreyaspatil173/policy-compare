import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Picker, Image, SafeAreaView, ScrollView, } from "react-native";
import { setGuaranteedReturns } from "../Firebase/services";
import SwitchCode from "./SwitchCode";


const GuaranteedReturn = ({navigation}) => {
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
            setGuaranteedReturns({
                name: name,
                gender: selectedValue
            })
            navigation.navigate('Activity', {
                insuranceid: 'guaranteed-return',
              });
        }else{
            console.log("nothinh to show");
        }
    }
    }
    
    return (
        <SafeAreaView >
            <ScrollView >
                <Text style={{ margin: 15,marginTop:10, fontSize: 30 }}>
                    <Text style={{}}>Get guaranteed returns{'\n'}along with life cover</Text>
                </Text>
                <View style={styles.viewRow}>
                    <View style={{ backgroundColor: "#daffd4", borderRadius: 10, padding: 6, margin: 4, }}>
                        <Image source={require('../assets/images/percentage-claim.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ fontSize: 18, color: "#25fa00", marginLeft: 10 }}>Buy online & get upto  <Text style={{ color: "#00ad11" }}>{'\n'}4% extra**</Text></Text>
                    </View>
                    <View style={{ backgroundColor: "#f4dbff", borderRadius: 10, padding: 6, margin: 4, }}>
                        <Image source={require('../assets/images/shield.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ fontSize: 18, color: "#40005c", marginLeft: 10 }}> No Medical <Text style={{ color: "#8800c4" }}> {'\n'}required </Text></Text>
                    </View>
                </View>
                <Text style={{ margin: 10, textAlign: "center" }}>Tell us about yourself----</Text>
                <Text style={{ fontSize: 15, color: "#0a00f7", marginLeft: 15 }}>Select Your Gender :-</Text>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 30, width: 140, marginLeft: 10, marginTop: 10 }}
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
                        <Text style={styles.buttonText}>View Free Quotes</Text>
                    </TouchableOpacity>
                </View>
                <SwitchCode />
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
   
    lables: {
        height: 40,
        paddingTop: 15,
        color: "#000000",
        marginLeft:10
    },
    
    inputStyle: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#0010a1",
        margin:10
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
});

export default GuaranteedReturn;

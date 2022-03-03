import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput,ScrollView, SafeAreaView  } from "react-native";

const CarInsuranceForm = () => {
    const [number, setNumber] = useState('');
    const Submit = () => {
        Alert.alert(" helll");
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
        padding:15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,


    },
    buttonText: {
        color: "#ffffff",
        fontSize: 17,
    },
})
export default CarInsuranceForm;
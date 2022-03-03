import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import DropDown from "./DropDown";

const HomeInsuranceForm = () => {
    const Submit = () => {
        Alert.alert(" helll");
    }
    return (
        <View>
            <Text style={{ fontSize: 20, marginTop:10, marginLeft:20,}}>Home Insurance</Text>
            <Text style={{ marginTop:10, marginLeft:20, color: "#858383" }}>
                With our comprehensive & affordable Home {'\n'}Insurance plans, add a silver lining to every potential  {'\n'}mishap, natural or man-made
            </Text>
            <Text style={{ fontSize: 30,marginTop:10, marginLeft:20 }}>Pick Your City</Text>
            <Text style={{ marginTop:10, marginLeft:20 }}>City Living In</Text>
            <DropDown/>
            <TouchableOpacity style={styles.buttonStyle}
                onPress={() => Submit()}
            >
                <Text style={styles.buttonText}>View free quotes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default HomeInsuranceForm;
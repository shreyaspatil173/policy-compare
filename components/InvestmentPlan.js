import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Picker, Image } from "react-native";
import SwitchCode from "./SwitchCode";

const InvestmentPlan = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const Submit = () => {
        Alert.alert(" helll");
    }
    return (
        <View>
            <Text style={{ margin: 10, fontSize: 20 }}>Grow your wealth</Text>
            <Text style={{ margin: 10, }}>Best plans with high returns avaliable on one platform</Text>

            <View style={styles.viewRow }>
                <Image source={require('../assets/images/ruppes.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                <Text style={{ fontSize: 20, color: "#25fa00", marginLeft: 10 }}> Invest ₹ 10k/month & Gets {'\n'}₹ 1 Crore Tax Free on Maturity</Text>
            </View>

            <Text style={{ margin: 10, textAlign: "center" }}>Tell us about yourself----</Text>
            <Text style={{ fontSize: 15, color: "#0a00f7", marginLeft: 15 }}>Select Your Gender :-</Text>

            <Picker
                selectedValue={selectedValue}
                style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >

                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker>
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
                 <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Submit()}
                >
                    <Text style={styles.buttonText}>View free quotes</Text>
                </TouchableOpacity>
            </View>
            <SwitchCode/>
        </View>
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
})

export default InvestmentPlan;
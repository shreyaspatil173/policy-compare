import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Picker, Image, SafeAreaView, ScrollView, } from "react-native";
import SwitchCode from "./SwitchCode";


const GuaranteedReturn = () => {

    const Submit = () => {
        Alert.alert(" helll");
    }
    const [name, setName] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
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

});

export default GuaranteedReturn;

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, Picker, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePick from "./DatePick";

const TravelInsurance = () => {
    const Submit = () => {
        Alert.alert(" helll");
    }
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 20, margin: 15, fontWeight: "bold", }}>Let's secure your travel </Text>
                    <Text style={{ fontSize: 15, margin: 15 }}>Which country are you travelling to? </Text>
                    <Text style={{ margin: 15, color: "#0f029e" }}>Select Your Destination :- </Text>

                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 140, margin: 15 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >

                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                </View>

                <View>
                    <Text style={{ fontSize: 20, margin: 15, fontWeight: "bold", }}>When are you travelling to {"\n"} United Arab</Text>
                    <Text style={{ fontSize: 15, margin: 15 }}>Don't worry you can change your trip dates {"\n"} a later state</Text>
                    <DatePick />
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => Submit()}
                    >
                        <Text style={styles.buttonText}>View free quotes</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10, marginTop: 20 }}> Why Policycompare?</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 15 }}>
                        <Image source={require('../assets/images/instant-policy.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10 }}>Instant Policy{'\n'}in 2 Minutes </Text>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 15 }}>
                        <Image source={require('../assets/images/flight.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10 }}>Flight Cancellation{'\n'} Delays & Chane Covered </Text>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 15 }}>
                        <Image source={require('../assets/images/patient.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10 }}>Pre-Existing Disease{'\n'} Are  Covered</Text>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 15 }}>
                        <Image source={require('../assets/images/claim-insurance.png')} style={{ width: 25, height: 25, marginLeft: 10 }} />
                        <Text style={{ marginLeft: 10 }}>Quick Claim Settlement{'\n'} With Cashless Faclity</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
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

export default TravelInsurance;
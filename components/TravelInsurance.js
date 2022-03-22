import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert, Picker, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { setTravelInsurance } from "../Firebase/services";
// import DatePick from "./DatePick";

const TravelInsurance = ({navigation}) => {
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [people, setPeople] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {

        let isError = false;
        let error = {};
        if (city === '') {
            error.city = "Enter City";
            isError = true;
        }

        if (startDate === '') {
            error.startDate = "Enter Start Date";
            isError = true;
        }

        if (endDate === '') {
            error.endDate = "Enter End Date";
            isError = true;
        }

        if (people === '') {
            error.people = "Select People ";
            isError = true;
        }

        setErrorMsgr(error);
        console.log("isError", isError)
        return isError
    }

    const Submit = () => {
        if (!checkValidation()) {
            if (city && startDate && endDate && people) {
                setTravelInsurance({
                    city: city,
                    startDate: startDate,
                    endDate: endDate,
                    people: people
                })
                navigation.navigate('Activity', {
                    insuranceid: 'travel-insurance',
                  
                  });

            } else {
                console.log("nothing to show");
            }
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 20, margin: 15, fontWeight: "bold", }}>Let's Secure Your Travel </Text>
                    <Text style={{ fontSize: 15, margin: 15 }}>Which City Are You Travelling To? </Text>
                    <Text style={{ margin: 15, color: "#0f029e" }}>Select Your Destination :- </Text>

                    <Picker
                        selectedValue={city}
                        style={{ height: 30, width: 140, margin: 15 }}
                        onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                    >
                        <Picker.Item label="Select Value" />
                        <Picker.Item label="New Mumbai" value="Mumbai" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="New Delhi" value="New Delhi " />
                        <Picker.Item label="Pune" value="Pune" />
                        <Picker.Item label="Nashik" value="Nashik" />
                        <Picker.Item label="Thane" value="Thane" />
                        <Picker.Item label="Kolkata" value="Kollata" />
                        <Picker.Item label="Surat" value="Surat" />
                        <Picker.Item label="Indore" value="Indore" />
                    </Picker>
                    <Text style={styles.errorMsg}>{errorMsg && errorMsg.city && errorMsg.city}</Text>
                </View>

                <View>
                    
                    <Text style={{ fontSize: 15, margin: 15 }}>Don't worry you can change your trip dates {"\n"} a later state</Text>
                    {/* <DatePick /> */}
                </View>

                <View style={{ margin: 15 }}>
                    <Text style={styles.lables}>
                        Start Date
                    </Text>
                    <TextInput style={styles.inputStyle}
                        value={startDate}
                        onChangeText={(actualData) => setStartDate(actualData)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        placeholder="(DD-MM-YYYY)"
                    />
                    <Text style={styles.errorMsg}>{errorMsg && errorMsg.startDate && errorMsg.startDate}</Text>

                    <Text style={styles.lables}>
                        End Date
                    </Text>
                    <TextInput style={styles.inputStyle}
                        value={endDate}
                        onChangeText={(actualData) => setEndDate(actualData)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        placeholder="(DD-MM-YYYY)"
                    />
                    <Text style={styles.errorMsg}>{errorMsg && errorMsg.endDate && errorMsg.endDate}</Text>
                </View>

                <View>
                    <Text style={{ margin: 15, fontWeight: "bold", fontSize: 15 }}>How many people are travelling? </Text>

                    <Picker
                        selectedValue={people}
                        style={{ height: 30, width: 140, margin: 15 }}
                        onValueChange={(itemValue, itemIndex) => setPeople(itemValue)}
                    >
                        <Picker.Item label="Select Value" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="10 +" value="10 +" />
                    </Picker>
                    <Text style={styles.errorMsg}>{errorMsg && errorMsg.people && errorMsg.people}</Text>
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
    errorMsg: {
        color: "red",
        marginLeft: 15,
    }
});

export default TravelInsurance;
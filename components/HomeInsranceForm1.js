import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity, ScrollView, Picker } from "react-native"
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { setHomeInsurance } from "../Firebase/services";

const HomeInsuranceForm1 = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [city, setCity] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {

        let isError = false;
        let error = {};
        if (city === '') {
            error.city = "Select City";
            isError = true;
        }

        if (name === '') {
            error.name = "Enter  Full Name";
            isError = true;
        }

        if (mobilenumber === '') {
            error.mobilenumber = "Enter Mobile Number";
            isError = true;
        }

        if (email === '') {
            error.email = "Enter Email ";
            isError = true;
        }
      

        setErrorMsgr(error);
        console.log("isError", isError)
        return isError
    }


    const Submit = () => {
        if (!checkValidation()) {
        if (name && email && mobilenumber && city) {
            setHomeInsurance({
                name:name,
                email:email,
                mobilenumber:mobilenumber,
                city:city
            })
            navigation.navigate('Activity', {
                insuranceid: 'home-insurance',
              
              });
        }else{
            console.log("nothing show");
        }
    }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ backgroundColor: "#ffffff" }}>
                    <Text style={{ margin: 20, color: "#858383" }}>
                        With our comprehensive & affordable Home {'\n'}Insurance plans, add a silver lining to every potential  {'\n'}mishap, natural or man-made
                    </Text>
                    <View>
                        <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 10 }}>
                            Personal Details
                        </Text>
                        <View style={{ margin: 13, }}>
                            <View style={styles.inputStyle}>
                                <Text style={{ color: "#858383", marginLeft: 10 }}>
                                    Full Name
                                </Text>
                                <TextInput style={{ backgroundColor: "#ffffff" }}
                                    value={name}
                                    onChangeText={(actualData) => setName(actualData)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                />
                                <Text style={styles.errorMsg}>{errorMsg && errorMsg.name && errorMsg.name}</Text>
                            </View>

                            <View style={styles.inputStyle}>
                                <Text style={{ color: "#858383", marginLeft: 10 }}>
                                    Mobile Number
                                </Text>
                                <TextInput style={{ backgroundColor: "#ffffff" }}
                                    value={mobilenumber}
                                    onChangeText={(actualData) => setMobilenumber(actualData)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                />
                                <Text style={styles.errorMsg}>{errorMsg && errorMsg.mobilenumber && errorMsg.mobilenumber}</Text>
                            </View>

                            <View style={styles.inputStyle}>
                                <Text style={{ color: "#858383", marginLeft: 10 }}>
                                    Email
                                </Text>
                                <TextInput style={{ backgroundColor: "#ffffff", }}
                                    value={email}
                                    onChangeText={(actualData) => setEmail(actualData)}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="default"
                                />
                                <Text style={styles.errorMsg}>{errorMsg && errorMsg.email && errorMsg.email}</Text>
                            </View>

                            <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}>Pick Your City</Text>
                            <Text style={{ marginTop: 10, marginLeft: 20 }}>City Living In</Text>
                            <Picker
                                selectedValue={city}
                                style={{ height: 30, width: 140, margin: 20 }}
                                onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                            >
                                <Picker.Item label="Select Value" />
                                <Picker.Item label="Mumbai" value="Mumbai" />
                                <Picker.Item label="New Mumbai" value="New Mumbai" />
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
                            <TouchableOpacity style={styles.buttonStyle}
                                onPress={() => Submit()}
                            >
                                <Text style={{ color: "#ffffff", fontSize: 20 }}>View free quotes</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        marginLeft: 10,
        backgroundColor: "#ffffff",

    },
    buttonStyle: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: "auto",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
    errorMsg: {
        color: "red",
        marginLeft: 15,
    }
});

export default HomeInsuranceForm1;
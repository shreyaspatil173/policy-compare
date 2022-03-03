import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileno, setMobileno] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.maincontainer}>
            <Text style={styles.mainheader}> Forgot Password </Text>

                <View>
                    <Text style={styles.lables}>
                        Email
                    </Text>
                    <TextInput style={styles.inputStyle}
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={(actualData) => setEmail(actualData)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                    />
                </View>

                <View>
                    <Text style={styles.lables}>
                        Mobile Number
                    </Text>
                    <TextInput style={styles.inputStyle}
                        placeholder="Enter Your Mobile Number"
                        value={mobileno}
                        onChangeText={(actualData) => setMobileno(actualData)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                    />
                </View>
                <View>
                    <Text style={styles.lables}>
                        Password
                    </Text>
                    <TextInput style={styles.inputStyle}
                        placeholder="Enter Your Password"
                        value={password}
                        onChangeText={(actualData) => setPassword(actualData)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        keyboardType="default"
                    />
                </View>

                <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.push("Signin")}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    mainheader: {
        paddingTop: 40,
        fontSize: 30,
        color: "#000000",
        fontFamily: "bold"
    },
    maincontainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        fontWeight: "bold"
    },
    buttonStyle: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: "auto",
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
})
export default Forgot;
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from "react-native";
import { authentication } from "../Firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
    const [isSignedIn, setIsSignedIn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Submit = () => {
        if (email === "shreyas@123" && password === "123456") {
            Alert.alert("login sucessful");
            navigation.push("Home")
        } else {
            Alert.alert("login unsucessful");
            navigation.push("Signin")
        }
        navigation.push("Home")
        // signInWithEmailAndPassword(authentication, email, password)
        //     .then((re) => {
        //         setIsSignedIn(true);
        //     })
        //     .catch((re) => {
        //         console.log(re);
        //     })
    }

       
    // };
    // const Signup = () => {
    //     Alert.alert("login sucessful");
    //      navigation.naviagate("Register")


    // };

    return (

        <View style={styles.maincontainer}>
            <Text style={styles.mainheader}> Login Form </Text>

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

            <View>
                <TouchableOpacity style={styles.buttonStyle}

                    onPress={() => Submit()}
                >

                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.push("Register")}
                >
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle1}
                    onPress={() => navigation.push("Forgotpassword")}
                >
                    <Text style={{ color: "blue" }}>Forgot Password?</Text>
                </TouchableOpacity>


            </View>
        </View>



    );
};

const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        paddingHorizontal: 30,
        paddingTop: 30,
        fontWeight: "bold"
    },
    mainheader: {
        paddingTop: 40,
        fontSize: 30,
        color: "#000000",
       
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
        margin: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,


    },
    buttonStyle1: {
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
    forgotText: {
        alignItems: "center",
        paddingTop: 10,
        marginLeft: "65%",
        color: "#0010a1",
    },

});
export default Login;

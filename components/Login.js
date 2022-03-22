import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from "react-native";
import { Alert } from "react-native-web";
import { firebase } from "../Firebase/firebase-config";
import { getTaxSavingPlans, getById } from "../Firebase/services";
import { validEmail } from "../Helper/Validation"

const Login = ({ navigation }) => {
    const [isSignedIn, setIsSignedIn] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});
    const checkValidation = () => {
        let isError = false;
        let error = {};
        if (email === '') {
            error.email = "Enter email";
            isError = true;
        }
        if (email && !validEmail(email)) {
            error.email = "Enter valid email";
            isError = true;
        }

        if (password === '') {
            error.password = "Enter Password";
            isError = true;
        }

        setErrorMsgr(error);
        console.log("isError", isError)
        return isError
    }

    const Submit = () => {

        getById("tax-saving-plan", "WdaCku41hRAEbupMtI0I").then((item) => {
            console.log(item.data());

        })
        if (!checkValidation()) {

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((response) => {
                    const uid = response.user.uid

                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .get()
                        .then(firestoreDocument => {
                            console.log("firestoreDocument", firestoreDocument)
                            if (!firestoreDocument.exists) {
                                alert("User does not exist anymore.")
                                return;
                            }
                            const user = firestoreDocument.data()
                            Alert.alert("Login Successfully");
                            navigation.navigate('Home', { user })
                        })
                        .catch(error => {
                            alert(error)
                        });
                })
                .catch(error => {
                    alert(error)
                })     
        }
    }

    return (
        <View style={styles.maincontainer}>
            <View >
            <Image source={require('../assets/images/login.png')} style={{ width: 45, height: 45, margin: "auto", justifyContent: "center", alignItems: "center", alignContent: "center",marginLeft:"42%" }} />
                <Text style={styles.mainheader}> Login </Text>  
            </View>
            <View >
                <Text style={{marginTop:10}}>
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
                <Text style={styles.errorMsg}>{errorMsg && errorMsg.email && errorMsg.email}</Text>
            </View>

            <View >
                <Text style={{marginTop:10,}}>
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
                <Text style={styles.errorMsg}>{errorMsg && errorMsg.password && errorMsg.password}</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.buttonStyle}

                    onPress={() => Submit()}
                >

                    <Text style={styles.buttonText}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => navigation.push("Register")}
                >
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.buttonStyle1}
                    onPress={() => navigation.push("Forgotpassword")}
                >
                    <Text style={{ color: "blue" }}>Forgot Password?</Text>
                </TouchableOpacity> */}

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
        paddingTop: 10,
        fontSize: 30,
        fontWeight: "bold",
        color: "#000000",
        marginLeft: "36%",
    },
    inputStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#0010a1",
        padding:5,
        marginTop:10
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
    errorMsg: {
        color: "red"
    }
});
export default Login;

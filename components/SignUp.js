import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView,Picker } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { firebase } from "../Firebase/firebase-config";
import {validEmail, validPhone, validDate} from "../Helper/Validation"

const SignUp = ({ navigation }) => {
    // const [name, setName] = useState('');
    // const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [city, setCity] = useState('');
    const [income, setIncome] = useState('');
    const [gender, setGender] = useState('');
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {
        let isError = false;
        let error = {};
        if(email === '') {
            error.email = "Enter email";
            isError = true;    
        }
        if(email && !validEmail(email)) { 
            error.email = "Enter valid email";
            isError = true;  
         }

        if(fullName === '') {
            error.fullName = "Enter FullName";
            isError = true;    
        }

        if(dob === '') {
            error.dob = "Enter Date Of Birth";
            isError = true;    
        }
        if(dob && !validDate(dob)) {
            error.dob = "Enter valid Date Of Birth";
            isError = true;    
        }
        
        if(password === '') {
            error.password = "Enter Password";
            isError = true;    
        }
        
        if( confirmPassword=== '') {
            error.confirmPassword= "Enter Confirm Password";
            isError = true;    
        }
        if (password && confirmPassword && (password !== confirmPassword)) {
            error.confirmPassword= "Password and Confirm Password does not match";
            isError = true; 
            
        }
        if( gender=== '') {
            error.gender= "Select Gender";
            isError = true;    
        }

        if( mobilenumber=== '') {
            error.mobilenumber= "Enter Mobile Number";
            isError = true;    
        }
        if( mobilenumber && !validPhone(mobilenumber)) {
            error.mobilenumber= "Enter valid Mobile Number";
            isError = true;    
        }

        if( city=== '') {
            error.city= "Enter City";
            isError = true;    
        }
        
        if( income=== '') {
            error.income= "Select Income";
            isError = true;    
        }
        setErrorMsgr(error);
        console.log("isError",isError)
        return isError
    }

const Register = () =>{

    if(!checkValidation()) {

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    city,
                    income,
                    gender,
                    dob,
                    mobilenumber,
                    password
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Signin', {user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }
}

const handleChangeGender = () => {
    alert()
}

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <Text style={styles.mainheader}> SignUp </Text>

                    <View>
                    <Text style={{ fontSize: 15,  marginTop: 10, marginLeft: 15 }}>Select Your Gender :-</Text>
                        <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                            style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                        >
                             <Picker.Item label="Select Gender" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.gender && errorMsg.gender  }</Text>
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            Full Name
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your First Name"
                            value={fullName}
                            onChangeText={text=>setFullName(text)}
                            autoCorrect={false}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.fullName && errorMsg.fullName  }</Text>
                    </View>
                    
                    <View>
                        <Text style={styles.lables}>
                            Email
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Email"
                            value={email}
                            onChangeText={text=>setEmail(text)}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.email && errorMsg.email  }</Text>
                    </View>

                    <View>
                        <Text style={styles.lables}>
                            Password
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Password"
                            value={password}
                            onChangeText={text=>setPassword(text)}
                            autoCorrect={false}
                            secureTextEntry={true}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.password && errorMsg.password  }</Text>
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            Confirm Password
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Password"
                            value={confirmPassword}
                            onChangeText={text=>setConfirmPassword(text)}
                            autoCorrect={false}
                            secureTextEntry={true}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.confirmPassword && errorMsg.confirmPassword  }</Text>
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            Date Of Birth(DD-MM-YY)
                        </Text>
                        <TextInput style={styles.inputStyle}
                        value={dob}
                            placeholder="Enter Your Date Of Birth"
                            onChangeText={text=>setDob(text)}
                            autoCorrect={false}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.dob && errorMsg.dob  }</Text>
                    </View>

                    <View>
                        <Text style={styles.lables}>
                            Mobile Number
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Mobile Number"
                            value={mobilenumber}
                            onChangeText={text=>setMobileNumber(text)}
                            autoCorrect={false}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.mobilenumber && errorMsg.mobilenumber  }</Text>
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            City
                        </Text>
                        <TextInput style={styles.inputStyle}
                        value={city}
                        onChangeText={text=>setCity(text)}
                            placeholder="Enter Your City"
                            autoCorrect={false}
                            keyboardType="default"
                        />
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.city && errorMsg.city  }</Text>
                    </View>

                    <View>
                    <Text style={{ fontSize: 15, marginLeft: 15 }}>Annual Income :-</Text>
                        <Picker
                        selectedValue={income}
                        onValueChange={(itemValue, itemIndex) => setIncome(itemValue)}
                            style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                        >
                            <Picker.Item label="Select Income"  />
                            <Picker.Item label="upto 3 lakhs" value="upto 3 lakhs" />
                            <Picker.Item label="3 - 5 lakhs" value="3 - 5 lakhs" />
                            <Picker.Item label="5 - 7 lakhs" value="5 - 7 lakhs"/>
                            <Picker.Item label="7 - 10 lakhs" value="7 - 10 lakhs" />
                            <Picker.Item label="10 - 15 lakhs" value="10 - 15 lakhs" />
                        </Picker>
                        <Text style={styles.errorMsg}>{errorMsg && errorMsg.income && errorMsg.income  }</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => Register()}
                        >
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

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
        fontFamily: "bold"
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
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom:15,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 20,
    },
    forgotText: {
        alignItems: "center",
        paddingTop: 10,
        marginLeft: "65%",
        color: "#0010a1",
    },
    errorMsg : {
        color:"red"
    }
});
export default SignUp;

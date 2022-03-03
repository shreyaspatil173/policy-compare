import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView,Picker } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../Firebase/firebase-config";

const SignUp = ({ navigation }) => {
    // const [name, setName] = useState('');
    // const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const [city, setCity] = useState('');
    // const [mobilenumber, setMobileNumber] = useState('');
    // const [selectedValue, setSelectedValue] = useState('');
    // const [incomeValue, setIncomeValue] = useState('');

const Register = () =>{
    // createUserWithEmailAndPassword(authentication,email,password)
    // .then((re) => {
    //     console.log(re);
    // })
    // .catch((re) => {
    //     console.log(re);
    // })
    navigation.push("Signin")
}
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.maincontainer}>
                    <Text style={styles.mainheader}> SignUp Form </Text>

                    <View>
                    <Text style={{ fontSize: 15,  marginTop: 10, marginLeft: 15 }}>Select Your Gender :-</Text>
                        <Picker
                            style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                        >
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            First Name
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your First Name"
                
                            autoCorrect={false}
                            keyboardType="default"
                        />
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            Last Name
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Last Name"
                
                            autoCorrect={false}
                            keyboardType="default"
                        />
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
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            Date of birth(DD-MM-YY)
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Date Of Birth"
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
                            autoCorrect={false}
                            keyboardType="default"
                        />
                    </View>
                    <View>
                        <Text style={styles.lables}>
                            City
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your City"
                            autoCorrect={false}
                            keyboardType="default"
                        />
                    </View>

                    <View>
                    <Text style={{ fontSize: 15, marginLeft: 15 }}>Annual income :-</Text>
                        <Picker
                            style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                        >
                            <Picker.Item label="upto 3 lakhs" value="upto 3 lakhs" />
                            <Picker.Item label="3 - 5 lakhs" value="3 - 5 lakhs" />
                            <Picker.Item label="5 - 7 lakhs" value="5 - 7 lakhs"/>
                            <Picker.Item label="7 - 10 lakhs" value="7 - 10 lakhs" />
                            <Picker.Item label="10 - 15 lakhs" value="10 - 15 lakhs" />
                        </Picker>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => Register()}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
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
        margin: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,


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

});
export default SignUp;

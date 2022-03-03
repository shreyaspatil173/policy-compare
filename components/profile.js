import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Image, Picker } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [incomeValue, setIncomeValue] = useState('');

    const Edit = () => {
       
    };
    const Update = () => {
       
    };

    
    const Delete = () => {
       
    };
    
    
    const Acitivity = () => {
       
    };

    
   
    
    

    return (
        <SafeAreaView>
            <ScrollView style={styles.maincontainer}>
                <View>
                    <Image source={require('../assets/images/profile.png')} style={{ width: 45, height: 45, margin: "auto",justifyContent:"center",alignItems:"center",alignContent:"center", marginTop: 20 }} />
                </View>

                <View style={{ margin: "auto" }}>
                    <Text style={{ fontSize: 15, marginLeft: 15, marginTop: 20 }}>Select Your Gender :-</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                </View>

                <View>
                    <Text style={styles.lables}>
                        Name
                    </Text>
                    <TextInput style={styles.inputStyle}
                        placeholder="Enter Your Name"
                        value={name}
                        onChangeText={(actualData) => setName(actualData)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                    />
                </View>

                <View>
                        <Text style={styles.lables}>
                            Date of birth(DD-MM-YY)
                        </Text>
                        <TextInput style={styles.inputStyle}
                            placeholder="Enter Your Date Of Birth"
                            value={dob}
                            onChangeText={(actualData) => setDob(actualData)}
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
                            value={mobilenumber}
                            onChangeText={(actualData) => setMobileNumber(actualData)}
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
                        value={city}
                        onChangeText={(actualData) => setCity(actualData)}
                        autoCorrect={false}
                        keyboardType="default"
                    />
                </View>

                    <View>
                    <Text style={{ fontSize: 15, marginLeft: 15,paddingTop:15}}>Annual income :-</Text>
                        <Picker
                            selectedValue={incomeValue}
                            style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
                            onValueChange={(itemValue, itemIndex) => setIncomeValue(itemValue)}
                        >
                            <Picker.Item label="upto 3 lakhs" value="upto 3 lakhs" />
                            <Picker.Item label="3 - 5 lakhs" value="3 - 5 lakhs" />
                            <Picker.Item label="5 - 7 lakhs" value="5 - 7 lakhs"/>
                            <Picker.Item label="7 - 10 lakhs" value="7 - 10 lakhs" />
                            <Picker.Item label="10 - 15 lakhs" value="10 - 15 lakhs" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.buttonStyle1}
                            onPress={() => Edit()}
                        >
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle2}
                            onPress={() => Update()}
                        >
                            <Text style={styles.buttonText}>Update</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.buttonStyle3}
                            onPress={() => Acitivity()}
                        >
                            <Text style={styles.buttonText}>My Acitivity</Text>
                        </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        paddingHorizontal: 20,
        paddingTop: 20,
        fontWeight: "bold"
    },
    lables: {
        height: 40,
        paddingTop: 15,
        color: "#000000",
        marginLeft:5

    },
    inputStyle: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#0010a1",
    },

    buttonStyle1: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyle2: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonStyle3: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 17,
    },
});

export default Profile;

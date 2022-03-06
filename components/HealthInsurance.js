import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, ScrollView ,TextInput,TouchableOpacity,Picker} from "react-native";
import { setHealthInsurance } from "../Firebase/services";
import CheckBoxes from "./CheckBoxes";

const HealthInsurance = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [age, setAge] = useState('');
    const [shouldShow, setShouldShow] = useState(true);
    const [errorMsg, setErrorMsgr] = useState({});

    const checkValidation = () => {
        let isError = false;
        let error = {};
        if (selectedValue === '') {
            error.selectedValue = "Select City";
            isError = true;
        }

        if (age === '') {
            error.age = "Enter Age";
            isError = true;
        }

    
        setErrorMsgr(error);
        console.log("isError", isError)
        return isError
    }

    const Submit = () => {
        if (!checkValidation()) {
        if(selectedValue && age && shouldShow){
            
            setHealthInsurance({
                city:selectedValue,
                age:age,
                insure:shouldShow
            });
            navigation.navigate('Activity', {
                insuranceid: 'health-insurance',
              });
        }else{
            console.log('slecte all')
        }
    }

    }
    return (
        <ScrollView>
            <View>
                
                <Text style={{ fontSize: 20, margin: 15, fontWeight: "bold", }}>Hey, Shreyas Pramod Patil {"\n"} Let's find the right {"\n"}Health isurance for Your </Text>
                <Text style={{ fontSize: 15, margin: 15 }}>Who would you like to insure? </Text>
            <CheckBoxes/>
            </View>

            <View>
            <Text style={{ fontSize: 15, margin: 10 ,fontWeight: "bold",}}>How old is each member? </Text>
            <Text style={styles.lables}>
                    Your Age
                </Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter Your Age"
                    value={age}
                    onChangeText={(actualData) => setAge(actualData)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                />
                  <Text style={styles.errorMsg}>{errorMsg && errorMsg.age && errorMsg.age}</Text>
            </View>

            <View>
            <Text style={{ fontSize: 15, margin: 10, fontWeight: "bold", }}>Where do you live?</Text>
            <Text style={{ fontSize: 15, margin: 10, fontWeight: "bold", }}>Slect Yor City</Text>

            <Picker
                    selectedValue={selectedValue}
                    style={{ height: 30, width: 140, marginLeft:15  }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Select Value" />
                    <Picker.Item label="Mumbai" value="Mumbai" />
                    <Picker.Item label="New Mumbai" value="New Mumbai"/>
                    <Picker.Item label="Delhi" value="Delhi" />
                    <Picker.Item label="New Delhi" value="New Delhi "/>
                    <Picker.Item label="Pune" value="Pune" />
                    <Picker.Item label="Nashik" value="Nashik"/>
                    <Picker.Item label="Thane" value="Thane" />
                    <Picker.Item label="Kolkata" value="Kollata"/>
                    <Picker.Item label="Surat" value="Surat"/>
                    <Picker.Item label="Indore" value="Indore"/>
                </Picker>
                <Text style={styles.errorMsg}>{errorMsg && errorMsg.selectedValue && errorMsg.selectedValue}</Text>
            </View>

            <TouchableOpacity style={styles.buttonStyle}
                    onPress={() => Submit()}

                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#000000",
        borderRadius: 5,
        margin: "auto",
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom:10
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 17,
    },
    lables: {
        height: 40,
        paddingTop: 15,
        color: "#000000",
        margin:10

    },
    inputStyle: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#0010a1",
        margin:10,
        
    },
    errorMsg: {
        color: "red",
        marginLeft: 15,
    }
})

export default HealthInsurance;
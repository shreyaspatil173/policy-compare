import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,SafeAreaView ,ScrollView,TextInput,Picker} from "react-native";
import CheckBoxes from "./CheckBoxes";
const FamilyInsurances = ()=>{
    const [selectedValue, setSelectedValue] = useState("");
    const [age, setAge] = useState('');
    const [shouldShow, setShouldShow] = useState(true);
return(
    <SafeAreaView>
        <ScrollView>
        <View>
                <Text style={{ fontSize: 20, margin: 15, fontWeight: "bold", }}>Hey, Shreyas Pramod Patil {"\n"} Let's find the right {"\n"}Family isurance for Your </Text>
                <Text style={{ fontSize: 15, margin: 15 }}>Who would you like to insure? </Text>
            <CheckBoxes/>
        </View>
       
        <View>
            <Text style={{ fontSize: 15, margin: 15 ,fontWeight: "bold",}}>How old is each member? </Text>
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
            </View>

            <View>
            <Text style={{ fontSize: 15, margin: 15, fontWeight: "bold", }}>Where do you live?</Text>
            <Text style={{ fontSize: 15, margin: 15, fontWeight: "bold", }}>Slect Yor City</Text>

            <Picker
                    selectedValue={selectedValue}
                    style={{ height: 30, width: 140,  }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Mumbai" value="Mumbai" />
                    <Picker.Item label="New" value="Mumbai"/>
                    <Picker.Item label="Delhi" value="Delhi" />
                    <Picker.Item label="New Delhi" value="New Delhi "/>
                    <Picker.Item label="Pune" value="Pune" />
                    <Picker.Item label="Nashik" value="Nashik"/>
                    <Picker.Item label="Thane" value="Thane" />
                    <Picker.Item label="Kolkata" value="Kollata"/>
                    <Picker.Item label="Surat" value="Surat"/>
                    <Picker.Item label="Indore" value="Indore"/>
                </Picker>
            </View>

            <TouchableOpacity style={styles.buttonStyle}
                     onPress={() => setShouldShow(!shouldShow)}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
)
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
})
export default FamilyInsurances
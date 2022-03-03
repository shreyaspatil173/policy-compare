import React, { useState } from "react";
import { View, StyleSheet, Text, Alert,TouchableOpacity, ScrollView } from "react-native"
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeInsuranceForm1 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');

    const Submit = () => {
       Alert.alert("Heloo");
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
                    </View>

                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => Submit()}
                    >
                        <Text style={{color:"#ffffff",fontSize:20}}>Continue</Text>
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
        padding:10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
    },
});

export default HomeInsuranceForm1;
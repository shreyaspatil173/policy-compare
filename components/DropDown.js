import React, { useState } from "react";
import { View, Picker, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DropDown = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style = {styles.scrollView}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 30, width: 140,  }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js"/>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft:10,
        marginTop: 2,
        borderColor:"black",
        borderRadius:3,
    },
    scrollView: {
        marginHorizontal: 20,
      }
});

export default DropDown;
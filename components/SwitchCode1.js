import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const SwitchCode1 = () => {
    const [switch1, setswitch1] = useState(false);
    const toggleSwitch1 = () => setswitch1(previousState => !previousState);

    const [switch2, setswitch2] = useState(false);
    const toggleSwitch2 = () => setswitch2(previousState => !previousState);

    const [switch3, setswitch3] = useState(false);
    const toggleSwitch3 = () => setswitch3(previousState => !previousState);

    const [switch4, setswitch4] = useState(false);
    const toggleSwitch4 = () => setswitch4(previousState => !previousState);

    const [switch5, setswitch5] = useState(false);
    const toggleSwitch5 = () => setswitch5(previousState => !previousState);

    const [switch6, setswitch6] = useState(false);
    const toggleSwitch6 = () => setswitch6(previousState => !previousState);

    const [switch7, setswitch7] = useState(false);
    const toggleSwitch7 = () => setswitch7(previousState => !previousState);

    const [switch8, setswitch8] = useState(false);
    const toggleSwitch8 = () => setswitch8(previousState => !previousState);



    return (
        
        <View style={styles.container}>
            <Text style={{margin:10,fontSize:20,fontWeight:"bold"}}>Who Would You Like To Insure?</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
                <View style={{}}>
                    <Text style={{ margin: 10, color: "#0003a6" }}>Self</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch1 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        value={switch1}
                    />
                </View>

                <View style={{ marginLeft: 40 }}>
                    <Text style={{ margin: 10, color: "#0003a6" }}>Spouse</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch2 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch2}
                        value={switch2}
                    />
                </View>

                <View style={{marginLeft: 40}}>
                    <Text style={{ margin: 10, color: "#0003a6" }}>Son</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch3 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch3}
                        value={switch3}
                    />
                </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>

                <View style={{}}>
                    <Text style={{ margin: 10, color: "#0003a6" }}>Daughter</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch4 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch4}
                        value={switch4}
                    />
                </View>


                <View style={{marginLeft: 40}}>
                    <Text style={{ margin: 10, color: "#0003a6" }}>Father</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch5 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch5}
                        value={switch5}
                    />
                </View>

                <View style={{ marginLeft: 40 }}>
                    <Text style={{ margin: 10, color: "#0003a6" }}>Mother</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch6 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch6}
                        value={switch6}
                    />
                </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}>
                <View style={{}}>
                    <Text style={{ marginLeft: 10, color: "#0003a6" }}>Grand Father</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch7 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch7}
                        value={switch7}
                    />
                </View>

                <View style={{ marginLeft: 40 }}>
                    <Text style={{ marginLeft: 40, color: "#0003a6" }}>Grand Mother</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={switch8 ? "#0019fc" : "#f4f3f4"}
                        marginLeft={10}
                        marginTop={10}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch8}
                        value={switch8}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
});

export default SwitchCode1;
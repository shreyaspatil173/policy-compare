import React, { useState } from "react";
import { View, Switch, StyleSheet,Image,Text } from "react-native";

const SwitchCode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/whatsapp.png')} style={{ width: 25, height: 25, margin: 10 }} />
        <Text style={{margin:10}}> Get updates on Whatsapp</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#0019fc" : "#f4f3f4"}
        marginLeft={10}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop:20

  }
});

export default SwitchCode;
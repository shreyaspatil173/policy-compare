import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const CheckBoxes = () => {
  const [checkbox1, setCheckBox1] = useState(false);
  const [checkbox2, setCheckBox2] = useState(false);
  const [checkbox3, setCheckBox3] = useState(false);
  const [checkbox4, setCheckBox4] = useState(false);
  const [checkbox5, setCheckBox5] = useState(false);
  const [checkbox6, setCheckBox6] = useState(false);
  const [checkbox7, setCheckBox7] = useState(false);
  const [checkbox8, setCheckBox8] = useState(false);



  return (
    <View>
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox1}
          onValueChange={setCheckBox1}
          style={styles.checkbox}
        />
        <Text style={styles.label}> Self</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox2}
          onValueChange={setCheckBox2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Spouse</Text>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox3}
          onValueChange={setCheckBox3}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Son</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox4}
          onValueChange={setCheckBox4}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Daughter</Text>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox5}
          onValueChange={setCheckBox5}
          style={styles.checkbox}
        />
        <Text style={styles.label}> Father</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox6}
          onValueChange={setCheckBox6}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Mother</Text>
      </View>
    </View>

    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox7}
          onValueChange={setCheckBox7}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Grand Father</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkbox8}
          onValueChange={setCheckBox8}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Grand Mother</Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#f7f3f2",
    borderWidth: 1,
    borderRadius: 5,
    padding: 6, margin: 4
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    color:"#0a00f7"
  },
});

export default CheckBoxes;
import React, { useState,useEffect } from "react";
import { getTaxSavingPlans,getById } from "../Firebase/services";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, ScrollView, Image, TouchableOpacity ,Picker} from "react-native";

const MyActivity = ({route,navigation}) => {
  const {insuranceid} = route.params ?? "";
  const [payment, setPayment] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    
    getById("json-display",insuranceid).then((item)=>{
      console.log(item.data()) ;
     setData(item.data())
       })

    
    
  },[]);
  const Submit = ()=>{

    
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop:20,marginLeft:"30%"}}>
          {/* <Text >
            Payment Type
          </Text>
          <Picker
            selectedValue={payment}
            style={{ height: 30, width: 140, marginLeft: 15, marginTop: 10 }}
            onValueChange={(itemValue, itemIndex) => setPayment(itemValue)}
          >
            <Picker.Item label="Monthly" value="monthly" />
            <Picker.Item label="Semi-Annually" value="Semi-Annually" />
            <Picker.Item label="Annually" value="Annually" />
          </Picker> */}
        </View>
        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/kotak.png')} style={{ width: 70, height: 40, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.kotak_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.kotak_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/tata.png')} style={{ width: 100, height: 30, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.tata_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.tata_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/punjab.png')} style={{ width: 100, height: 20, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.pnb_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.pnb_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/icc.png')} style={{ width: 100, height: 20, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.icci_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.icci_price}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/reliance.png')} style={{ width: 100, height: 20, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.reliance_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.reliance_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/yesbank.png')} style={{ width: 100, height: 20, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.yes_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.yes_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/hdfc.png')} style={{ width: 100, height: 30, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.hdfc_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.hdfc_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/bajaja.png')} style={{ width: 100, height: 30, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.bajaja_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.bajaja_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", flexWrap: "wrap", margin: 20, backgroundColor: "#fcfcfc", borderRadius: 10, }}>
            <Image source={require('../assets/images/idbi.png')} style={{ width: 100, height: 30, marginTop: 20, marginLeft: 10 }} />
            <Text style={{ textAlign: "center", alignContent: "center", marginLeft: "10%", marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data?.claim?.idbi_claim}</Text>  {'\n'} <Text style={{}}>Claim Settled</Text>
            </Text>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={() => Edit()}
            >
              <Text style={styles.buttonText}>{data?.plans?.idbi_price}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle1}
              onPress={() => CallBack()}
            >
              <Text style={styles.buttonText1}>CallRequest</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontWeight: "bold", marginLeft: 20, backgroundColor: "#b5b5b5", borderRadius: 5, marginRight: 20, textAlign: "center" }}>24hr Claim Statement</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#e64027",
    borderRadius: 5,
    margin: "auto",
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  buttonStyle1: {
    backgroundColor: "#0313fc",
    borderRadius: 5,
    margin: "auto",
   
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
  },
  buttonText1: {
    color: "#ffffff",
    fontSize: 14,

  },
});

export default MyActivity;
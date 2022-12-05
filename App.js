import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Linking } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{position:'absolute',zIndex:1,flex:1,alignItems:'center'}}>

        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://8xbet22.com/")}
          >
            <Text style={styles.text}>Đăng Ký </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://dk8x.com/")}
          >
            <Text style={styles.text}> Đăng Nhập </Text>
          </TouchableOpacity>
        </View>

           <TouchableOpacity style={{height:50,width:60,marginLeft:190,backgroundColor:'black',borderRadius:50}}>
            <FontAwesome5
            style={{marginLeft:6,marginTop:7,marginLeft:13}}
            name="rocketchat"
            size={32}
            color="white"
          />
           </TouchableOpacity>
         
      
      </View>

      <Image
        style={{ height:850,width:420,marginTop:30 }}
        source={{
          uri: "https://cdnimg.vietnamplus.vn/t1200/Uploaded/mzdic/2021_05_12/manchester-city-vo-dich-1205.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#50a7d2",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    width: 300,
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    fontSize: 24,
    paddingLeft: 80,
    borderRadius: 10,
    borderColor: "black",
    paddingTop: 4,
    backgroundColor: "white",
    fontWeight: "bold",
  },
});

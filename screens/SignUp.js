import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import FullScreen from "../layouts/FullScreen";
import BannerImage from "../components/BannerImage";
import placeholder from "../assets/images/placeholder.png";
import Button from "../components/Button";
import TextField from "../components/TextField";
import CheckBox from "../components/CheckBox";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  scrollView: {
    flex: 3,
  },
  actionContainer: {
    alignItems: "center",
    flexDirection: "column-reverse",
    marginTop: 50,
  },
  actionText: {
    color: "#fff",
    marginBottom: 0,
    marginTop: 0,
    fontSize: 16,
  },
  actionTextBottom: {
    color: "#fff",
    marginBottom: 40,
    marginTop: 20,
    fontSize: 18,
  },
  actionLink: {
    color: "#FE6E00",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPane: {
    flexDirection: "row",
  },
});

export default function SignUp() {
  const [checked, setChecked] = useState(false);

  return (
    <FullScreen>
      <View style={styles.imageContainer}>
        <BannerImage source={placeholder} />
      </View>
      <View style={styles.scrollView}>
        <ScrollView>
          <View style={styles.actionContainer}>
            <Text style={styles.actionTextBottom}>
              Already a user? <Text style={styles.actionLink}>LOGIN</Text>
            </Text>
            <View style={styles.buttonPane}>
              <Button
                onPress={() => alert("Button Pressed")}
                type="white"
                icon="google"
              ></Button>
              <Button
                onPress={() => alert("Button Pressed")}
                type="white"
                icon="email"
              ></Button>
            </View>
            <Text style={styles.actionText}>Sign up with</Text>
            <Text style={styles.actionText}>Or</Text>
            <Button>SIGN UP</Button>
            <View>
              <CheckBox state={checked} onPress={() => setChecked(!checked)} />
            </View>
            <TextField label="Password" />
            <TextField label="Email" />
            <TextField label="Name" />
          </View>
        </ScrollView>
      </View>
    </FullScreen>
  );
}

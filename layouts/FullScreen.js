import React, { Children } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#191E23",
  },
});

export default function FullScreen({ children }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.main}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.main.backgroundColor}
      />
      <View style={styles.main}>{children}</View>
    </KeyboardAvoidingView>
  );
}

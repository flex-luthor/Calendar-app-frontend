import React from "react";
import PropTypes from "prop-types";
import {
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import style from "../CenterView/style";

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#FE6E00",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    shadowColor: "#FE6E00",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 18,
  },
});

export default function Button({ onPress, children }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={
          Platform.Version >= 21
            ? TouchableNativeFeedback.Ripple("rgb(0, 0, 0, 0.2)", true)
            : TouchableNativeFeedback.SelectableBackground()
        }
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};

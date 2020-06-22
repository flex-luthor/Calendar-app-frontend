import React from "react";
import PropTypes from "prop-types";
import {
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";

const stylesPrimary = StyleSheet.create({
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

const stylesSecondary = StyleSheet.create({
  buttonContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FE6E00",
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
    color: "#FE6E00",
    fontSize: 18,
  },
});

const stylesDisabled = StyleSheet.create({
  buttonContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#8EA0B6",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    shadowColor: "#8EA0B6",
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
    color: "#C8D2E3",
    fontSize: 18,
  },
});

const styleSelector = type => {
  switch (type) {
    case 'primary':
      return stylesPrimary;
    case 'secondary': 
      return stylesSecondary;
    case 'disabled':
      return stylesDisabled;
    default:
      return stylesPrimary;
  }
};

export default function Button({ onPress, type, children }) {

  const styles = styleSelector(type);

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

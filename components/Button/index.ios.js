import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";

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
    <TouchableHighlight onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
    </TouchableHighlight>
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

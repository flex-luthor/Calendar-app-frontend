import React from "react";
import PropTypes from "prop-types";
import {
  TouchableNativeFeedback,
  View,
  StyleSheet,
  Text,
  Platform,
  Image,
} from "react-native";
import google from "../../assets/images/google.png";
import mail from "../../assets/images/mail.png";

const stylesButton = StyleSheet.create({
  buttonContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    minWidth: 100,
    borderRadius: 10,
    margin: 10,
    marginHorizontal: 25,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 20,
  },
  smallIcon: {
    width: 20,
    height: 20,
    marginRight: 0,
  },
});

const stylesPrimary = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FE6E00",
    shadowColor: "#FE6E00",
  },
  button: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

const stylesSecondary = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FE6E00",
    shadowColor: "#FE6E00",
  },
  buttonText: {
    color: "#FE6E00",
  },
});

const stylesDisabled = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#8EA0B6",
    shadowColor: "#8EA0B6",
  },
  buttonText: {
    color: "#C8D2E3",
  },
});

const stylesWhite = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#eee",
    shadowColor: "#eee",
  },
  buttonText: {
    marginLeft: 10,
    color: "#222",
  },
});

const icons = (icon) => {
  switch (icon) {
    case "google":
      return google;
    case "email":
      return mail;
    default:
      return null;
  }
};

const styleSelector = (type) => {
  switch (type) {
    case "primary":
      return stylesPrimary;
    case "secondary":
      return stylesSecondary;
    case "disabled":
      return stylesDisabled;
    case "white":
      return stylesWhite;
    default:
      return stylesPrimary;
  }
};

export default function Button({ onPress, type, icon, children }) {
  const styles = styleSelector(type);

  return (
    <View
      style={{ ...styles.buttonContainer, ...stylesButton.buttonContainer }}
    >
      <TouchableNativeFeedback
        onPress={onPress}
        background={
          Platform.Version >= 21
            ? TouchableNativeFeedback.Ripple("rgb(0, 0, 0, 0.2)", true)
            : TouchableNativeFeedback.SelectableBackground()
        }
      >
        <View style={{ ...styles.button, ...stylesButton.button }}>
          {icon ? (
            <Image style={stylesButton.smallIcon} source={icons(icon)} />
          ) : null}
          {children ? (
            <Text style={{ ...styles.buttonText, ...stylesButton.buttonText }}>
              {children}
            </Text>
          ) : null}
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

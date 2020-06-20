import React from "react";
import PropTypes from "prop-types";
import { View, StatusBar } from "react-native";
import style from "./style";

export default function CenterView({ children }) {
  return (
    <View style={style.main}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={style.main.backgroundColor}
      />
      {children}
    </View>
  );
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};

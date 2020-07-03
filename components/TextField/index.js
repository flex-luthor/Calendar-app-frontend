import React from 'react';
import PropTypes from 'prop-types';
import {OutlinedTextField} from 'react-native-material-textfield';
import {Text, View, StyleSheet} from 'react-native';

const formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
};

const styles = StyleSheet.create({
    textFieldContainer: {
      alignSelf: "stretch",
      alignItems: "stretch",
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
    textField: {
      alignSelf: "stretch",
      alignItems: "center",
    },
    buttonText: {
      textTransform: "uppercase",
      color: "#C8D2E3",
      fontSize: 18,
    },
  });

export default function TextField({label, keyboardType, onSubmitEditing, ref, disabled}){
    

    return (
        <View style={styles.textFieldContainer}>
        <OutlinedTextField label={label} disabled={disabled?true:false} textColor={"#FFF"} tintColor="#FE6E00" baseColor={disabled?"#8EA0B6":"#C8D2E3"} keyboardType={keyboardType} formatText={formatText} onSubmitEditing={onSubmitEditing} ref={ref} />
        </View>
           )
}

TextField.defaultProps = {
    label: "Enter Text",

    keyboardType: null,
    onSubmitEditing: null,
    ref:null
}

TextField.PropTypes = {
    label: PropTypes.string,
    keyboardType: PropTypes.string,
    onSubmitEditing: PropTypes.func
}
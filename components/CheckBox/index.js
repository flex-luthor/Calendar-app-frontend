import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        width: "90%"
      },
    checkbox: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    checkboxText: {
      color: '#fff',
    }
  });

export default function CheckBoxComponent({state, onPress, children}){
  return (
    <View style={styles.item} >
    <CheckBox checked={state} checkedColor="#FE6E00" onPress={onPress} title="Agree to all T&C" containerStyle={styles.checkbox} textStyle={styles.checkboxText}/>
    </View>
  )

}
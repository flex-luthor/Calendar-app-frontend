import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements'
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    item:{
        padding:10,
        marginBottom:10,
        flexDirection:"row",
      },
      checkBoxTxt:{
        marginLeft:20
      },
    checkbox: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    checkboxText: {
      color: '#fff'
    }
  });

export default function CheckBoxComponent({state, onPress, children}){
  return (
    <View style={styles.item} >
    <CheckBox checked={true} checkedColor="#FE6E00" onPress={onPress} title="I agree to everything." containerStyle={styles.checkbox} textStyle={styles.checkboxText}/>
    </View>
  )

}
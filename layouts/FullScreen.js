import React, { Children } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#191E23",
      },
})

export default function FullScreen({children}) {
    return (
        <View style={styles.main}>
        <StatusBar
        barStyle="light-content"
        backgroundColor={styles.main.backgroundColor}
      />
            {children}
        </View>
    )
}

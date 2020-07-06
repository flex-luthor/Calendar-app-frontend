import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FullScreen from '../layouts/FullScreen'
import BannerImage from '../components/BannerImage'
import placeholder from "../assets/images/placeholder.png";

import Button from "../components/Button";

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    actionContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column-reverse',
    },
    actionText: {
        color: '#fff',
        marginBottom: 50,
        marginTop: 20,
        fontSize: 18
    },
    actionLink: {
        color: '#FE6E00',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default function SignIn() {
    return (
        <FullScreen>
            <View style={styles.imageContainer}>
                <BannerImage source={placeholder}/>
            </View>
            <View style={styles.actionContainer}>
                <Text style={styles.actionText}>
                    Already a user? <Text style={styles.actionLink}>LOGIN</Text>
                </Text>
                <Button onPress={() => alert("Button Pressed")} type="white" icon="email">Join with Email</Button>
                <Button onPress={() => alert("Button Pressed")} type="white" icon="google">Join with Google</Button>
            </View>
        </FullScreen>
    )
}

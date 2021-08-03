import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, View, Text } from 'react-native'
import { Overlay } from 'react-native-elements/dist/overlay/Overlay'

export default function Loading({ isVisible, text }) {
    return (
        <Overlay
            isVisible={isVisible}
            windowBackgroundColor="rgba(0,0,0,0.5)"
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlay}    
        >
            <View style={styles.view}>
                <ActivityIndicator 
                    size= 'large'
                    color= "#609cfc"
                />
                {
                    text && <Text style={styles.text}>{text}</Text>
                }
            </View>   
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay : {
        height: 85,
        width: 260,
        backgroundColor: "#fafafa",
        borderColor: "#609cfc",
        borderWidth: 1,
        borderRadius: 10
    },
    view : {
        flex: 1,
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    text : {
        color: "#609cfc",
        marginTop: 10
    }
})
import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()

    return (
        // <View>
        //     <Text>UserGuest</Text>
        // </View>
        <ScrollView
            centerContent={true}
            style={styles.viewBody}
        >
            <Image
                source={require("../../assets/adaptive-icon.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Restos profile...</Text>
            <Text style={styles.description}>
                Describe yours best Restos, Search and look at the best Restos in easy way, 
                vote and share your experencie with the comminity
            </Text>
            <Button 
                buttonStyle={styles.button} 
                title="Go Profile"
                onPress={() => navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginHorizontal: 30
    },
    image: {
        height: 300,
        width: "100",
        marginBottom: 10,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginVertical: 10,
        textAlign: 'center'
    }, 
    description: {
        textAlign: 'justify',
        marginBottom: 20,
        color: "#2153a3"
    },
    button: {
        backgroundColor: "#2153a3"
    }
})

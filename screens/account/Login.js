import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    return (
        <ScrollView>
            <Image
                source={require("../../assets/favicon.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <Text>Login Form...</Text>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider} />
        </ScrollView>
    )
}

function CreateAccount(prop) {
    const navigation = useNavigation()

    return (
        <Text 
            style={styles.register}
            onPress={() => navigation.navigate("register")}
        >
            Have an Account? {" "}
            <Text style={styles.btnRegister}>Register.</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
        marginVertical: 10
    },
    container: {
        marginHorizontal: 40, 
    },
    divider: {
        backgroundColor: "#2153a3",
        margin: 40
    },
    register: {
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister: {
        color: "#2153a3",
        fontWeight: "bold"
    }
})

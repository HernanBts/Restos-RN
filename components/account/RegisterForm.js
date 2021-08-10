import { size } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'

import { validateEmail } from '../../utils/helpers'

export default function RegisterForm() {
    const [showPass, setShowPass] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())

    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const registerUser = () => {
        if(!validateData()) {
            return;
        }
        console.log("GOOO")
    }

    const validateData = () => {
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirm("")

        let isValid = true
        if (!validateEmail(formData.email)) {
            setErrorEmail("You must enter valid Email...")
            isValid = false
        }
        if (size(formData.password) < 6) {
            setErrorPassword("Password need to have at least 6 characters...")
            isValid = false
        }
        if (size(formData.confirm) < 6) {
            setErrorConfirm("Confirm need to have at least 6 characters...")
            isValid = false
        }
        if (formData.password != formData.confirm) {
            setErrorPassword("Password and Confirm must be equals...")
            setErrorConfirm("Password and Confirm must be equals...")
            isValid = false
        }
        return isValid
    }

    return (
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Enter your Email..."
                keyboardType="email-address"
                onChange={(e) => onChange(e, "email")}
                errorMessage={errorEmail}
                defaultValue={formData.email}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Enter your Password..."
                password={true}
                secureTextEntry={!showPass}
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                defaultValue={formData.password}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name={ showPass ? "eye-off-outline":"eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            <Input
                containerStyle={styles.input}
                placeholder="Confirm your Password..."
                password={true}
                secureTextEntry={!showPass}
                onChange={(e) => onChange(e, "confirm")}
                errorMessage={errorConfirm}
                defaultValue={formData.confirm}
                rightIcon={
                    <Icon 
                    type="material-community"
                    name={ showPass ? "eye-off-outline":"eye-outline"}
                    iconStyle={styles.icon}
                    onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            <Button
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                title="Register User"
                onPress={() => registerUser()}
            />
        </View>
    )
}

const defaultFormValues = () => {
    return { email: "", password: "", confirm: "" }
}

const styles = StyleSheet.create({
    form: {
        marginTop: 30
    },
    input: {
        width: "100%"
    },
    btnContainer: {
        marginTop: 20,
        width: "94%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#609cfc"
    }, 
    icon: {
        color: "#c1c1c1"
    }
})

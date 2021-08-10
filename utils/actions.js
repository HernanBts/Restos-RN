import { firebaseApp } from './firebase'
import firebase from 'firebase'
require('firebase/auth');

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}

export const registerUser = async(email, password) => {
    const result = {statusResponse: true, error: null}
    try {
        console.log(email, password)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        result.error = "This Email have an Account."
    }
    console.log(result)
    return result
}

export const closeSession = () => {
    return firebase.auth().signOut()
}
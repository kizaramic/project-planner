

// authentication of user with email and password as credentials with getFirebase

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}

// signing out the user 

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
    }
}

// creating a new user in firestore collection, getFirebase for authentication

export const register = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            // making a user document in firestore with autogenereted uid from resp and setting some properties in that doc 
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'REGISTER_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'REGISTER_ERROR', err })
        })
    }
}
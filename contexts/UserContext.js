import React, { useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    reauthenticateWithCredential,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    confirmPasswordReset,
    EmailAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    deleteUser,
    signOut,
} from 'firebase/auth'


const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);

function UserContext({ children }) {
    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function sendEmailForVerification(user) {
        return sendEmailVerification(user);
    }

    function logout() {
        return signOut(auth)
    }

    function forgotPassword(email) {
        return sendPasswordResetEmail(auth, email, {
            url: `${process.env.NEXT_PUBLIC_HOST}/login`,
        })
    }

    function resetPassword(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    function reAuthenticateUser(user, password) {
        const credential = EmailAuthProvider.credential(
            currentUser.email,
            password
        );

        return reauthenticateWithCredential(user, credential)
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user ? user : null)
        });

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        forgotPassword,
        resetPassword,
        updateEmail,
        updatePassword,
        signInWithGoogle,
        reAuthenticateUser,
        sendEmailForVerification,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default UserContext;
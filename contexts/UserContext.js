import useMounted from "../hooks/useMounted";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    reauthenticateWithCredential,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    confirmPasswordReset,
    onAuthStateChanged,
    GoogleAuthProvider,
    EmailAuthProvider,
    signInWithPopup,
    updateProfile,
    deleteUser,
    signOut,
} from 'firebase/auth'


export const AuthContext = React.createContext();

function UserContext({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const { mounted } = useMounted();

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
            setCurrentUser(user ? user : null);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const value = {
        login,
        signup,
        logout,
        loading,
        updateEmail,
        currentUser,
        resetPassword,
        forgotPassword,
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
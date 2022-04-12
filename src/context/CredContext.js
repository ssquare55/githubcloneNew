import { createContext, useEffect, useState } from 'react'

const CredContext = createContext()

export const CredentialsProvider = ({ children }) => {

    const [Cred, setCred] = useState([]);

    useEffect(() => {
        fetchCred()
    }, [])

    const fetchCred = async () => {
        const response = await fetch("http://localhost:5000/Cred")
        const data = await response.json()
        setCred(data)
    }

    const signIn = (details) => {
        let val = Cred.find((cred) => cred.username === details.username)
        if (val.username === details.username && val.password === details.password) {
            window.alert("Logged in")
        }
        else {
            window.alert("Cred are incorrect")
        }
        // console.log('val', val)
    }

    const signUp = async (details) => {
        const response = await fetch("http://localhost:5000/Cred", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(details)
        })
        const data = await response.json()
        setCred([data, ...Cred])
        window.alert('Sign up Success')
    }


    return (
        <CredContext.Provider value={{ Cred, signUp, signIn }}>
            {children}
        </CredContext.Provider>
    )
}

export default CredContext
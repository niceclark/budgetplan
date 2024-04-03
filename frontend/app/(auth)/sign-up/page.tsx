"use client"
import React from "react";
import RegisterForm from "@/components/RegisterForm";

const Page: React.FC = () => {
    const handleRegisterSuccess = () => {
        alert('Registration successful!');
    };

    const handleRegisterFail = (error: string) => {
        alert(`Registration failed: ${error}`);
    };

    return (
        <>
            <h1>Register</h1>
            <RegisterForm onRegisterSuccess={handleRegisterSuccess} onRegisterFail={handleRegisterFail}/>
        </>
    );
};


export default Page;


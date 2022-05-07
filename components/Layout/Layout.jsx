import React from "react"
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Layout({children}){
    return (
        <>
            <Header />
            <TopBar />
            {children}
            <Footer />
        </>
    )
}

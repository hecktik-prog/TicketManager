import React from "react"
import { Navbar } from "./Navbar"
import './layout.css'

export const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div class='main-container'>
                <Navbar />
                {children}
            </div>
        </React.Fragment>
    )
}
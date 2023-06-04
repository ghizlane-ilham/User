import React from "react";
import './Profile.css'
import { FcAutomatic } from "react-icons/fc";

export default function Profile(){

    return(
        <>
        <body >
            <div className="body">
                <h4>Your profile</h4>
                <div className="img">
                </div> <br/>
                <div className="user">UserName <FcAutomatic/></div>
                <br/><br/>
                <ul className="partie1">
                    <li> Good continus </li>
                    <li> You passed 30 min  </li>
                    <li> click here for contact us </li>
                </ul>
            </div>
        </body>
        </>
    )
}
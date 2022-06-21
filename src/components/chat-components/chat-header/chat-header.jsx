// made by Nora 20.06.2022
import React from "react";
import "./chat-header.css";

export default function ChatHeader({name, childToParent}){
    return(
        <div className={"name-header-header"}>
            <div className="header-top">
                <img className="header-img" src="pictures/Avatar.jpg" alt=""/>
                <p className="name-header">
                { name? name : "user name" }
                </p>

            </div>
        </div>
    )
}
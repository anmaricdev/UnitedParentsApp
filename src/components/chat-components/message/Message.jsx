//author Nora Kolasinac 1257519
import React from "react";
import "./Message.css"

//Author: Ante Maric 1273904
//Added current timestamp for sent chat messages
//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
const date = new Date();
const specificDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}
const localTime = date.toLocaleDateString('de-DE', specificDate);

export default function Message({own}){
    return(
        <div className={own? "message own": "message"}>
            <div className="messageTop">
                <img className="messageImg" src="pictures/Avatar.jpg" alt=""/>
                <p className="messageText">
                    Hello!
                </p>
            </div>
            <div className="messageBottom">
                {localTime}
            </div>
        </div>
    )
}
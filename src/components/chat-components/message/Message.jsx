//author Nora Kolasinac 1257519
import React from "react";
import "./Message.css"

export default function Message({own}){
    return(
        <div className={own? "message own": "message"}>
            <div className="messageTop">
                <img className="messageImg" src="pictures/Avatar.jpg" alt=""/>
                <p className="messageText">
                    Hello!
                </p>

            </div>
            <div className="messageBottom"
            >
                1 hour ago

            </div>
        </div>
    )
}
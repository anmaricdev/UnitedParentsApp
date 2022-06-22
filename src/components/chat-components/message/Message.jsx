//author Nora Kolasinac 1257519
import React, { useEffect } from "react";
import "./Message.css"
import { useState } from "react";
import { dbFS } from "../../../Firebase";

//Author: Ante Maric 1273904
//Added current timestamp for sent chat messages
//https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
const date = new Date();
const specificDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}
const localTime = date.toLocaleDateString('de-DE', specificDate);

export default function Message({own}){
    /*const [messages, setMessages] = useState([])
    useEffect(() => {
        dbFS.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])*/

    //{messages.map(({id, text}) => ())} key = {id}

    return(
        <div className={own? "message own": "message"}>
            <div className="messageTop" >
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
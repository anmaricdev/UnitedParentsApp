import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import Conversation from "../components/chat-components/conversations/Conversations";
import Message from "../components/chat-components/message/Message";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../Firebase";
import "../pages/pages-css/Chats.css"

import {Form, Button, Card, Alert} from 'react-bootstrap'
//import {PostMessage} from "../components/SendMessage.js"
import {getFirestore, setDoc, doc, Timestamp, documentId, addDoc, collection} from 'firebase/firestore';

const dbFS = getFirestore();


function Chats() {

    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser
    // const [user, setUser] = useState(null)
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([])
    const [sendMessage, setMess] = useState()
    const [conversations, setConversations] = useState([
        {
         'id': "2f898b4f-b684-4821-b46f-f0f7831c020a",
         'createdAt':"2022-05-15T10:22:22.262Z",
         'members': [
             "id1","id2"
         ],
         'updatedAt':"2022-05-15T10:22:22.262Z",
        },
        {
            'id': "2f898b4f-b684-4821-b46f-f0f7831c020a",
         'createdAt':"2022-05-15T10:22:22.262Z",
         'members': [
             "id1","id3"
         ],
         'updatedAt':"2022-05-15T10:22:22.262Z",
        },
        {
            'id': "2f898b4f-b684-4821-b46f-f0f7831c020a",
        'createdAt':"2022-05-15T10:22:22.262Z",
        'members': [
            "id1","id4"
        ],
        'updatedAt':"2022-05-15T10:22:22.262Z",
       },
       {
        'id': "2f898b4f-b684-4821-b46f-f0f7831c020a",
        'createdAt':"2022-05-15T10:22:22.262Z",
       'members': [
           "id1","id5"
       ],
       'updatedAt':"2022-05-15T10:22:22.262Z",
      }]); // Array conversations test - ersetzen durch getConversationsForuser() - Api Request

      const user = {name: "nora", id: "id1"}; // ersetzen durch getmyProfile() api request

    const handleMessage = async (e) =>{
        e.preventDefault()
        //setError("")
        try{
            const newMessageRef = await addDoc(collection(dbFS, "messages"), {
                 text: sendMessage,
                 createdAt: Timestamp.fromDate(new Date()),
                 username: student.displayName,
                 userID: student.uid
               });
            console.log(sendMessage)
            console.log("Current message written with ID: ", newMessageRef.id);
            //navigate("/home")
    
        }catch(err){
           // setError(err.message);
        }
    }
     
    return (
        <>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search friends" className="chatMenuInput" />
                    {conversations.map(c => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user}></Conversation>
                        </div>    
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ?
                        <>
                    <div className="chatBoxTop">
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message><Message></Message>
                        <Message own={true}></Message><Message></Message>
                        <Message own={true}></Message><Message></Message>
                        <Message own={true}></Message><Message></Message>
                        <Message own={true}></Message><Message></Message>
                        <Message own={true}></Message><Message></Message>
                        <Message own={true}></Message>
                    </div>
                    <div className="chatBoxBottom">
                        <Form onSubmit = {handleMessage}>
                            <div className="chatBoxBottom">
                            <textarea 
                            className="chatMessageInput"
                            placeholder="Ey write something.. !" onClick={(e)=> setMess(e.target.value)}
                            ></textarea>
                            <button className="chatSubmitButton"> Send</button>
                            </div>
                        </Form>
                        
                    </div> </> : <span className="noConversationText"> Open a conversation to start a chat.</span>}
                </div>
            </div>

        </div>
        </>
    );

    
}

export default Chats;


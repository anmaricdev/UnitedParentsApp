import React, {useEffect, useState} from "react";
import Conversation from "../components/chat-components/conversations/Conversations";
import Message from "../components/chat-components/message/Message";
import "../pages/pages-css/Chats.css"

import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, get, child, onValue} from "firebase/database";
import {getFirestore, setDoc, doc, Timestamp} from 'firebase/firestore';

const dbFS = getFirestore();

const date = new Date();

function Settings() {
    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser



    //return <div> Test Page, see logs</div>

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useUserAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [sendMessage, setMess] = useState()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError("")
        try{
            await setDoc(doc(dbFS, "messages", "chat"), {
                text: sendMessage,
                 createdAt: Timestamp.fromDate(new Date()),
                 username: student.displayName,
                 userID: student.uid
               });
            console.log(sendMessage)
            //navigate("/home")
    
        }catch(err){
            setError(err.message);
        }
    } 
    
    return (
        <Form onSubmit = {handleSubmit}>
            <div className="chatBoxBottom">
            <textarea 
            className="chatMessageInput"
            placeholder="Ey write something.. !" onChange={(e)=> setMess(e.target.value)}
            ></textarea>
            <button className="chatSubmitButton"> Send</button>
        </div>
        </Form>
        
    );
};

export default Settings;
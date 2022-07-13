import React, {useEffect, useState} from "react";
import Conversation from "../components/chat-components/conversations/Conversations";
import Message from "../components/chat-components/message/Message";
import "../pages/pages-css/Chats.css"

import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, get, child, onValue} from "firebase/database";
import {getFirestore, setDoc, doc, Timestamp, documentId, getDoc, addDoc, collection} from 'firebase/firestore';
import { dbFS } from "../Firebase";

const date = new Date();

function Settings() {
    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser

    const randomId = (Date.now()).toString

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useUserAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [sendMessage, setMess] = useState()

    /*
    //Ante Maric(38-43,45) & Eneas Harispe(34-37,44,46-51)
    const handleMessage = async (e) =>{
        e.preventDefault()
        setError("")
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
            setError(err.message);
        }
    }
    */

    
    //Ante Maric
    const getMessage = async (e) =>{
        e.preventDefault()
        setError("")
    const docRef = doc(dbFS, "messages", "EnFwkjB4l32vdNoLrCtY");
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().text);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }catch(err){
            alert(err)
        }

    }
    
    //Eneas Harispe & Ante Maric
    return (
        <div>
        <div>
        <div className="card" id="cardAdmin">
            <div class="card-body">
                <h1 class="card-title" id="cardHeader">Chat test from firebase:</h1>
                <p class="card-text" id="cardBody">{getMessage}</p>
                <button className="chatSubmitButton" onClick={getMessage}> show message</button>
            </div>
        </div>
        <Form /*onSubmit = {handleMessage}*/>
            <div className="chatBoxBottom">
            <textarea 
            className="chatMessageInput"
            placeholder="Ey write something.. !" onChange={(e)=> setMess(e.target.value)}
            ></textarea>
            <button className="chatSubmitButton"> Send</button>
            </div>
        </Form>
        </div>
        </div>
    );
};

export default Settings;
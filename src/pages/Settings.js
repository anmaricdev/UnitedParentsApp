import React, {useState} from "react";
import "../pages/pages-css/Chats.css"

import {Form} from 'react-bootstrap'
import {useUserAuth} from "../context/UserAuthContext"
import {getFirestore, Timestamp, addDoc, collection} from 'firebase/firestore';
//Ante Maric(8, 22-34) & Eneas Harispe(11-21, 35-46 )
const dbFS = getFirestore();

function Settings() {
    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser

    //return <div> Test Page, see logs</div>
    const [error, setError] = useState("")
    const [sendMessage, setMess] = useState()

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
        }catch(err){
            setError(err.message);
        }
    }
    
    return (
        <Form onSubmit = {handleMessage}>
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
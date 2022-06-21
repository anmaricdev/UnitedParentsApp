import React, { useEffect, useState } from "react";
import "./conversations.css"
import { getDatabase, ref, child, get, endBefore, endAt, query } from "firebase/database";
import { useUserAuth } from "../../../context/UserAuthContext";

const db = getDatabase()//.ref('TestConversation/conv1');
var myConver = null;

function GetTestConver(user){
    const aux = query(ref(db, 'TestConversation/conv1'), endAt('20220621164714'))
    console.log('MY aux IS DISPLAYED AS:')
    console.log(aux)
}


export default function Conversation({conversation, currentUser}) {
    const student = useUserAuth().user.auth.currentUser
    if(myConver == null){
        GetTestConver(student)
        //console.log('MY CONVER IS DISPLAYED AS:')
       // console.log(myConver)
    }
    const [user, setUser] = useState("");
    const friendsForTest = [
        {
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id2@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id2",
            id: "id2"
        },{
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id3@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id3",
            id: "id3"
        },{
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id4@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id4",
            id: "id4"
        },{
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id5@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id5",
            id: "id5"
        },] // Array of users Tests // ersetzen durch getAllUsers() api Request;

    useEffect(()=>{
        if(currentUser){
            // const friendId = conversation.members.find( m => m !== currentUser.id )
            const friendId = conversation.members.find( m => m !== currentUser.id );
            const friend = friendsForTest.find(f => f.id === friendId);
            setUser(friend)
            //console.log("🚀 ~ file: Conversations.jsx ~ line 40 ~ useEffect ~ friend", friend)
        }
    })

    return(
        <div className="conversation">
            <img className="conversationImg" src="./images/fra-uas-logo.svg" alt=""/>
            <span className="conversationName">{user.username}</span>
        </div>
    )
}
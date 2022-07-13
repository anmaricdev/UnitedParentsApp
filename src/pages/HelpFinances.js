import React, {useEffect, useState} from "react";
import { dbFS, dbRT } from "../Firebase";
import { useUserAuth } from "../context/UserAuthContext";
//import {collection, query, where, onSnapshot} from 'firebase/firestore';
import { getFirestore, collection, query, where, onSnapshot, querySnapshot } from "firebase/firestore";

import Message from "../components/chat-components/message/Message";
import Conversation from "../components/chat-components/conversations/Conversations";
import ChatHeader from "../components/chat-components/chat-header/chat-header";
import "../pages/pages-css/Chats.css"

import {Form, Button, Card, Alert} from 'react-bootstrap'


const fs = getFirestore();


const Help = () => {
    const [users, SetUsers] = useState([])
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

    const friendsForTest = [
        {
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id2@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id2 Jane Doe",
            id: "id2"
        },{
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id3@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id3 John D.",
            id: "id3"
        },{
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id4@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id4 Username",
            id: "id4"
        },{
            createdAt: "2020-02-22T10:10:10.122Z",
            email: "id5@gmail.com",
            isAdmin: false,
            profilePicture: "",
            username: "id5 Username",
            id: "id5"
        },
    ]
    const [infoForHeader, setInfoForHeader] = useState(null);

    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser
    useEffect(() => {

      const usersCol = collection(fs, 'users')
      //all users but you
      const q = query(usersCol, where('uid', 'not-in', [student.uid]))
      const unsub = onSnapshot(q, querySnapshot => {
        let users = []
        querySnapshot.forEach(doc => {
            users.push(doc.data())
        })
        SetUsers(users);
      });
      return () => unsub();
    }, []);
    console.log(users);
    return (
    <div>
        <h1>Hilfe & Finanzen</h1>
        <div className="box-container">
            <div className="users-container">
                {users.map((user) => (
                    <ChatHeader name={user.username} ></ChatHeader>
                ))}

            </div>

        </div>
    </div>
    );
}

export default Help;
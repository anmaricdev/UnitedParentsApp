import React, {useEffect, useState} from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import "../pages/pages-css/Chats.css"
import ChatHeader from "../components/chat-components/chat-header/chat-header";
// Author: Eneas Harispe 1384848  [Lines 9-41]
const fs = getFirestore();

const Help = () => {
    const [users, SetUsers] = useState([])

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
        <h1>List of Users</h1>
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
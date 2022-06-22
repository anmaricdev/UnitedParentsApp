//author Nora Kolasinac 1257519
import React, { useEffect, useState } from "react";
import "./conversations.css"

export default function Conversation({conversation, currentUser}) {
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
            <img className="conversationImg" src="pictures/Avatar.jpg" alt=""/>
            <span className="conversationName">{user.username}</span>
        </div>
    )
}
//author Nora Kolasinac 1257519
import React, { useEffect, useState } from "react";
import "./conversations.css"

export default function Conversation({conversation, currentUser}) {
    const [user, setUser] = useState({username: "robert", createdAt: "id1"})
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
        },] // Array of users Tests // ersetzen durch getAllUsers() api Request;

    useEffect(()=>{
        if(currentUser){
            // const friendId = conversation.members.find( m => m !== currentUser.id )
            const friendId = conversation.members.find( m => m !== currentUser.id );
            const friend  = friendsForTest.find(f => f.id === friendId);
            if(friend){
                user.username = friend.username;
                user.createdAt = friend.createdAt;
            }
        }
    });


    return(
        <div className="conversation">
            <img className="conversationImg" src="./images/fra-uas-logo.svg" alt=""/>
            <div className="conversationGroup">
            <span className="conversationName">{user.username} Chat 1</span>
            {/* <span className="conversationDetails">{user.createdAt}</span> */}
            </div>
        </div>
    )
}

//author Nora Kolasinac 1257519
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import Conversation from "../components/chat-components/conversations/Conversations";
import Message from "../components/chat-components/message/Message";
import {getDatabase, ref, get, onValue} from "firebase/database";
import { useUserAuth } from "../context/UserAuthContext";
import "../pages/pages-css/Chats.css"

const db = getDatabase();
const auth = getAuth()


const student = auth.currentUser;
var studentName;
//PLEASE DONT CHANGE THIS CODE UNTIL I UNDERSTAND WHY IT WORKS
function MyName(){
  if (student !== null){
    return onValue(ref(db, '/users/' + student.uid + '/Username'), (snapshot) => {
        studentName = (snapshot.val()) || 'Anonymous'; //.Username
        console.log("snapshot is: ")
        console.log(studentName)
      }, {
        onlyOnce: true
      });
    }
    
}

/*function getMyProfile (){
    const auth = getAuth();
    const student = auth.currentUser;
    if (student !== null){
    const sid = student.uid
    const refUsername = db.ref('users/' + sid + '/username');

    refUsername.on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
    });
    }
}*/

function Chats() {
    MyName();
    // const [user, setUser] = useState(null)
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([])
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

      const user = {name: studentName, id: "id1"}; // ersetzen durch getmyProfile() api request

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
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                        <Message></Message>
                        <Message own={true}></Message>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea 
                        className="chatMessageInput"
                        placeholder="Write something.. !"
                        ></textarea>
                        <button className="chatSubmitButton"> Send</button>
                    </div> </> : <span className="noConversationText"> Open a conversation to start a chat.</span>}
                </div>
            </div>

        </div>
        </>
    );
}

export default Chats;


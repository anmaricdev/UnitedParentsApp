import React, {useRef, useState} from "react";
import {getAuth} from "firebase/auth";
import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, get, child, onValue} from "firebase/database";
import { dbRT } from "../Firebase";
import { dbFS } from "../Firebase";
import { collection, doc, setDoc, getDocs, Timestamp, updateDoc, query, orderBy, limit } from "firebase/firestore"; 
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { async } from "@firebase/util";

const auth = getAuth()


const student = auth.currentUser;
//PLEASE DONT CHANGE THIS CODE UNTIL I UNDERSTAND WHY IT WORKS
function MyName(){
  if (student !== null){
    return onValue(ref(dbRT, '/users/' + student.uid + '/Username'), (snapshot) => {
        student.displayName = (snapshot.val()) || 'Anonymous'; //.Username
        console.log("snapshot is: ")
        console.log(student.displayName)
      }, {
        onlyOnce: true
      });
    }
}

/*setDoc(doc(dbFS, "messages", "chat"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});*/

const messagesRef = doc(dbFS, "messages"/*, "lK0UiiUCtppMYBRKzkLR"*/);
const q = query(messagesRef, orderBy("createdAt"), limit(50));


/*updateDoc(messagesRef, {
  text: "It works!",
  createdAt: Timestamp.fromDate(new Date()),
  username: student.displayName,
  userID: student.uid
});*/


function MyProfile() {
    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser;
    const dummy = useRef();
    MyName();

    const [messages] = useCollectionData(q, {idField: 'id'})

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault();

      const { uid } = auth.currentUser;

      messagesRef.add({
        text: formValue,
        createdAt: Timestamp.fromDate(new Date()),
        username: student.displayName
      })

      setFormValue('');
      dummy.current.scrollIntoView({behavior: 'smooth'});
    }

    console.log('userAuth is:');
    console.log(userAuth);
    console.log('email is: ' + userAuth.user.email);
    console.log('uid is: '+ userAuth.user.uid);
    console.log('STUDENT username is: ' + student.displayName); //this is null in the object dont know why
    console.log('STUDENT email is: ' + student.email);
    console.log('STUDENT uid is: '+ student.uid);
    

    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)/*(
    <div>
        <h1>Mein Profil</h1>
        <Card>
             <h2 className="text-center mb-4">Username: {student.displayName}</h2>
             <h2 className="text-center mb-4">Email: {student.email}</h2>
             <h2 className="text-center mb-4">UID: {student.uid}</h2>
        </Card>
    </div>*/
    //);
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <p>{text}</p>
    </div>
  </>)
}

export default MyProfile;
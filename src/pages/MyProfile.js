import React from "react";
//import React, {useState} from "react";
import {getAuth} from "firebase/auth";
import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, get, child, onValue} from "firebase/database";

const db = getDatabase();
const auth = getAuth()


const student = auth.currentUser;
var studentName;
//PLEASE DONT CHANGE THIS CODE UNTIL I UNDERSTAND WHY IT WORKS
function MyName(){
    return onValue(ref(db, '/users/' + student.uid), (snapshot) => {
        studentName = (snapshot.val().Username) || 'Anonymous';
        console.log("snapshot is: ")
        console.log(studentName)
      }, {
        onlyOnce: true
      });
    
}


function MyProfile() {
    const userAuth = useUserAuth()
    
    MyName();

    console.log('userAuth is:');
    console.log(userAuth);
    console.log('userame is: ' + studentName); //after some time this is also null omg
    console.log('email is: ' + userAuth.user.email);
    console.log('uid is: '+ userAuth.user.uid);
    //console.log('STUDENT userame is: ' + student.displayName); //this is null in the object dont know why
    console.log('STUDENT email is: ' + student.email);
    console.log('STUDENT uid is: '+ student.uid);
    

    return (
    <div>
        <h1>Mein Profil</h1>
        <Card>
             <h2 className="text-center mb-4">Username: {studentName}</h2>
             <h2 className="text-center mb-4">Email: {student.email}</h2>
             <h2 className="text-center mb-4">UID: {student.uid}</h2>
        </Card>
    </div>
    );
}

export default MyProfile;
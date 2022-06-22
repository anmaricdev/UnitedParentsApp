import React from "react";
//import React, {useState} from "react";
import {getAuth} from "firebase/auth";
import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, get, child, onValue} from "firebase/database";
import {getFirestore} from 'firebase/firestore';

const db = getDatabase();
const dbFS = getFirestore();
const auth = getAuth()

var studentName;
var mySnapshot = {};

function MyName(student){
  
  if (student.displayName == null){ //if displayname is not already saved or was erased in the session
    // then ask again for it in db
    return onValue(ref(db, '/users/' + student.uid + '/Username'), (snapshot) => {
        studentName = (snapshot.val()) 
        //console.log("snapshot is: ")
        //console.log(studentName)
        student.displayName = (snapshot.val());
      }, {
        onlyOnce: true
      });
    }else console.log("already saved")
    
}


function FsMessage() {
  
    
      console.log("snap is:");
      console.log(dbFS.collection());
  
}


function MyProfile() {
    console.log('start of reload')
    const userAuth = useUserAuth()
    const student = userAuth.user.auth.currentUser

    
    MyName(student);
    console.log("studentname is pls:");
    console.log(studentName);

    FsMessage();

    //console.log('userAuth is:');
    //console.log(userAuth);
    //console.log('username is: ' + studentName); //after some time this is also null omg
    //console.log('email is: ' + userAuth.user.email);
    //console.log('uid is: '+ userAuth.user.uid);
    console.log('STUDENT username is: ' + student.displayName); //this is null in the object dont know why
    //console.log('STUDENT email is: ' + student.email);
    //console.log('STUDENT uid is: '+ student.uid);
    

    return (
    <div>
        <h1>Mein Profil</h1>
        <Card>
             <h2 className="text-center mb-4">Username: {student.displayName}</h2>
             <h2 className="text-center mb-4">Email: {student.email}</h2>
             <h2 className="text-center mb-4">UID: {student.uid}</h2>
        </Card>
    </div>
    );
}

export default MyProfile;
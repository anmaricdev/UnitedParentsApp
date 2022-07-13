
import React, {useState} from "react";

import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, set} from "firebase/database";
import {getAuth} from "firebase/auth";
import {setDoc, doc, getFirestore} from "firebase/firestore";
import {dbFS} from "../Firebase";


const Registration=()=> {
const [email, setEmail] = useState("") //TUT:this hook keeps a state of a var you can dynamically update w/ setState
const [password, setPassword] = useState("") //TUT:better null argument??
const [repeatPassword, setRepeatPassword] = useState("")
const [username, setUsername] = useState("") 
const {register} = useUserAuth()
const [error, setError] = useState("")
const navigate = useNavigate()
const db = getDatabase();
const fs = getFirestore();


// Authors: Ante Maric (1273904) [Lines 23 - 28] & Eneas [Lines 29 - 31]
// after a successful registration, the username entered is saved in the database under the user which is 
// identified via the student(user)id
function writeUserData(username, email){
    const auth = getAuth()
    const student = auth.currentUser;
    if (student !== null){
        const sid = student.uid;
        set(ref(db,'users/' + sid),{Username: username, Email: email, isAdmin: false});
        //console.log('Username saved as ' + username);
        student.displayName = username;
        //console.log('The displayname is: ' + student.displayName);
    }
}

// Author: Eneas Harispe[Lines 41-52]
function writeUserFirestore(username, email){
    const auth = getAuth()
    const student = auth.currentUser;
    if (student !== null){
        setDoc(doc(fs, 'users', student.uid),{
            uid: student.uid,
            username: username,
            email: email,
            isAdmin: false
        });
    }
}
        
const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")
    try{
        /*Agustin Harispe Lucarelli. password matching clause and alert added*/
        if(password === repeatPassword){
            //console.log("password is: " + password);
            await register(email,password)
            //console.log("the confirmation pass is: " + repeatPassword);
            writeUserData(username, email)
            writeUserFirestore(username,email)
            navigate("/")
        }else alert("Your passwords do not match!");
        

    } catch(err) {
        setError(err.message);

    }
}
    // Author: Ante Maric (1273904) => [Lines 65 - 69]
    // added a card on top of the registration panel to enter a username 
    // which is then saved in the database for further usage (see code starting Line 23)
    return (
       <div className="login-container">
       <Card>
           <Card.Body>
            <h1 className="text-center mb-4">Registrieren</h1>
            {error && <Alert variant= "danger">{error}</Alert>}
            
            <Form onSubmit = {handleSubmit}>
                <Form.Group id ="username" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder= "Username" onChange={(e)=> setUsername(e.target.value)}/>
                </Form.Group> 

                <Form.Group id ="email" >
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="email" placeholder="E-Mail Adresse" onChange={(e)=> setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group id ="password" >
                    <Form.Label>Passwort</Form.Label>
                    <Form.Control type="password" placeholder="Passwort" onChange={(e)=> setPassword(e.target.value)}/>
                </Form.Group>
                {/*Agustin Harispe Lucarelli. repeatPassword handler added*/}
                <Form.Group id ="rePassword" >
                    <Form.Label>Passwort Wiederholen</Form.Label>
                    <Form.Control type="Password" placeholder= "Passwort wiederholen" onChange={(e)=> setRepeatPassword(e.target.value)}/>
                </Form.Group> 

                <div className="d-grid gap-2">
                <Button className = "w-100" varient="primary" type="register">Registrieren</Button>
                </div>
            </Form>

           </Card.Body>
           <div className="w-100 text-center mt-2">
               Du hast bereits einen Account?<br></br><Link to ="/">Log dich hier ein</Link>
           </div>
       </Card>
           
       </div> 
    );
}

export default Registration;
/* 
                
<Form.Group id ="firstName" >
<Form.Label>Vorname</Form.Label>
<Form.Control type="firstName" ref = {firstNameref} required/>
</Form.Group>
<Form.Group id ="lastName" >
<Form.Label>Nachname</Form.Label>
<Form.Control type="lastName" ref = {lastNameRef} required/>
</Form.Group>
<Form.Group id ="birthday" >
<Form.Label>GeburtsDatum</Form.Label>
<Form.Control type="birthday" ref = {birthdayRef} required/>
</Form.Group>
<Form.Group id ="uniPlace" >
<Form.Label>Hochschule und Standort</Form.Label>
<Form.Control type="uniPlace" ref = {uniPlaceRef} required/>
</Form.Group>
*/
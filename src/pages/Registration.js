
import React, {useState} from "react";

import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link,useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"
import {getDatabase, ref, set} from "firebase/database";

const Registration=()=> {
const [email, setEmail] = useState("") //TUT:this hook keeps a state of a var you can dynamically update w/ setState
const [password, setPassword] = useState("") //TUT:better null argument??
const [repeatPassword, setRepeatPassword] = useState("")
const [username, setUsername] = useState("") 
const {register} = useUserAuth()
const [error, setError] = useState("")
const navigate = useNavigate()
const db = getDatabase();

function writeUserData(username, mail){
    var userRef = db +'users/' + email;
    console.log(userRef);
    set(ref(db,'users/'),{nickname: username, mail: mail});
}

const validatePassword = () => {
    let isValid = true
    if (password !== ''){
      if (password !== repeatPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }
        
const handleSubmit = async (e) =>{
    e.preventDefault()
    setError("")
    try{
        if(validatePassword){
            await register(email,password)
            //const newUser = firebase.auth().currentUser; not working
            var userPath = email.toString();
            writeUserData(username, email)
            navigate("/")
        }

    } catch(err) {
        setError(err.message);

    }
}

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
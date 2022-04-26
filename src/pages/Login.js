import React, {useRef, useState} from "react";
import {Form, Button, Card, Alert} from 'react-bootstrap'
import{Link, useNavigate} from 'react-router-dom'
import {useUserAuth} from "../context/UserAuthContext"

/** 
 * TODO:
 * implementation of FORGOT PASSWORD function
*/ 

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login} = useUserAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError("")
        try{
            await login(email,password)
            navigate("/home")
    
        }catch(err){
            setError(err.message);
        }
    }
        
    return ( 
        <div className="login-container">
        <Card>
            <Card.Body>
             <h1 className="text-center mb-4">Login</h1>
             {error && <Alert variant = "danger">{error}</Alert>}
             
             <Form onSubmit = {handleSubmit}>
                 <Form.Group id ="email" >
                     <Form.Label>E-Mail</Form.Label>
                     <Form.Control type="email" placeholder="E-Mail Adresse" onChange={(e)=> setEmail(e.target.value)}/>
                 </Form.Group>

                 <Form.Group id ="password" >
                     <Form.Label>Passwort</Form.Label>
                     <Form.Control type="password" placeholder="Passwort"onChange={(e)=> setPassword(e.target.value)}/>
                 </Form.Group>

                 <a className="forgot-password" href="#">Passwort vergessen</a>
                 
                 <Button className ="w-100" type="register">Login</Button>
             </Form>
 
            </Card.Body>
            <div className="w-100 text-center mt-2">
                Du hast noch keinen Account?<br></br><Link to ="/registration">Registriere dich hier</Link>
            </div> 
        </Card>
                
    </div>
    );
}

export default Login;
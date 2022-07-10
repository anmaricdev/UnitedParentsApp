import React from "react";
import { Button } from "react-bootstrap"
import { useState } from "react";
import { dbFS } from "../Firebase";
import { Timestamp, collection, addDoc } from "firebase/firestore";

//TODO: display the saved header and body from the database to the card properly everytime it reloads reload until deleted
//It's working, just need to find out how to Load it after the DOM loaded

//Author: Ante Maric 1273904
function Home() {
    /*
    const headerID = document.getElementById("newHeader");
    const bodyID = document.getElementById("newBody");

    const header = headerID.textContent.trim();
    const body = bodyID.textContent.trim();
    


   function editContentBox(){
        document.getElementById("cardHeader").setAttribute('contenteditable', 'true')
        document.getElementById("cardBody").setAttribute('contenteditable', 'true')
        document.getElementById("quoteOfTheDay").setAttribute('contenteditable', 'true')
        document.getElementById("authorQuote").setAttribute('contenteditable', 'true')
        document.getElementById("newHeader").setAttribute('contenteditable', 'true')
        document.getElementById("newBody").setAttribute('contenteditable', 'true')
    }
    
    function saveContentBox(){
        document.getElementById("cardHeader").setAttribute('contenteditable', 'false')
        document.getElementById("cardBody").setAttribute('contenteditable', 'false')
        document.getElementById("quoteOfTheDay").setAttribute('contenteditable', 'false')
        document.getElementById("authorQuote").setAttribute('contenteditable', 'false')
        document.getElementById("newHeader").setAttribute('contenteditable', 'false')
        document.getElementById("newBody").setAttribute('contenteditable', 'false')
    }

    function deleteContentBox(){
        var deleteBtn = document.getElementsByClassName("dButton");
        for (var i = 0; i < deleteBtn.length; i++) {
            deleteBtn[i].addEventListener('click', function (e) {
                e.preventDefault();
                e.target.closest('div').remove();
            });
        }
    }

    const [sendData, setData] = useState({
        sendBody: body,
        sendHeader: header
    });
    
    const handleData = async (e) =>{
        e.preventDefault()
        //if(document.getElementById("createBtn").clicked == true){
        try{
            setData( prevValues => {
                return { ...prevValues,[e.target.name]: e.target.value}
                }
             )
            const cardDataRef = await addDoc(collection(dbFS, "admin"), {
                 body: sendData.sendBody,
                 header: sendData.sendHeader,
                 updatedAt: Timestamp.fromDate(new Date())
               });
            console.log("Header: ", sendData.sendHeader)
            console.log("Body: " , sendData.sendBody)
            console.log("ID of current card update: ", cardDataRef.id);
        }catch(err){
            alert(err)
        }
    //}
}

    const [{cards}, setCards] = useState({cards: []});
    const addCard = () => {
        cards.push(<div key={cards.length}><div className="card" id="cardAdmin">
        <img class="mx-auto" src="./pictures/fra-uas-logo.png" alt="" width="200" length="100" position="text-center"></img>
        <div class="card-body">
            <h1 class="card-title" id="newHeader" onClick={(e)=> setData(e.target.value)}>Geben Sie hier eine Überschrift ein</h1>
            <p class="card-text" id="newBody" onClick={(e)=> setData(e.target.value)}>Geben Sie hier Ihren Text ein</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        <Button className="eButton" id="editButton" onClick={() => editContentBox()}>Edit</Button>
        <Button type="submit" className="sButton" id="saveButton" onClick={() => saveContentBox()} >Save</Button>
        <Button className="dButton" id="deleteButton" onClick={() => deleteContentBox()}>Delete</Button>
        <Button className="submitButton" id="testButton" onClick={handleData}>Publish</Button>
    </div><br></br></div>);
    
        setCards({cards: [...cards]});
    };

    return (
        <div className="adminBoxes">
        <div class="card p-3 text-center">
            <blockquote class="blockquote mb-0 card-body">
                <h1>Zitat des Tages:</h1>
                    <br></br>
                <h2 id="quoteOfTheDay"><em>"Ein Kind zu haben bedeutet immer, ein Stück seines Herzens außerhalb seines Körpers zu tragen."</em>"</h2>
                <footer class="blockquote-footer">
                    <h4 class="text-muted" id="authorQuote">
                        - Unbekannter Autor <cite title="Source Title"></cite>
                    </h4>
                </footer>
            </blockquote>
            <Button className="eButton" id="editButton" onClick={() => editContentBox()}>Edit</Button>
            <Button type="submit" className="sButton" id="saveButton" onClick={() => saveContentBox()}>Save</Button>
            <Button className="dButton" id="deleteButton" onClick={() => deleteContentBox()}>Delete</Button>
        </div>
        
        <br></br>

                <div className="card" id="cardAdmin">
                    <img class="mx-auto" src="./pictures/fra-uas-logo.png" alt="" width="200" length="100" position="text-center"></img>
                    <div class="card-body">
                        <h1 class="card-title" id="cardHeader">Osterferienbetreuung 2022</h1>
                        <p class="card-text" id="cardBody">vom 11.4.-22.4. an der Frankfurt University of Applied Science für Kinder im
                            Alter von 6 bis 12. Unter dem Motto: „Frankfurt durch die Kamera“ werden wir
                            spannende Ausflüge machen, Frankfurt durch die Kamera in den Blick nehmen, einen
                            Animationsfilm drehen und gemeinsam viel Spaß haben. Betreuungs-Zeitraum ist
                            täglich von 08:30 Uhr bis 17:00 Uhr. Anmeldeschluss ist der 18.03.2022! Infos zu
                            Programm und Anmeldung <u>hier</u>.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    <Button className="eButton" id="editButton" onClick={() => editContentBox()}>Edit</Button>
                    <Button type="submit" className="sButton" id="saveButton" onClick={() => saveContentBox()}>Save</Button>
                    <Button className="dButton" id="deleteButton" onClick={() => deleteContentBox()}>Delete</Button>
                </div>

                <br></br>
                    <div id="createCardsBtn" display="flex">
                        <Button className="cButton" id="createBtn" onClick={() => addCard()}>create new card</Button>
                        {cards}
                    </div>
                <br></br>

            </div>
    );
    */
   return null
}
export default Home;
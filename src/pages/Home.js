import React from "react";
import {card} from "react-bootstrap"

function Home() {
   /* function editContentBox(){
        document.getElementById("motivationHeader").contentEditable = true;
    }
    
    function saveContentBox(){
        document.getElementById("motivationHeader").contentEditable = false;
    }
    <button onclick={editContentBox()}>Edit header</button>
    <button onclick={saveContentBox()}>Save changes</button>

    <input type="text" name="motivationHeader" id="motivationHeader" placeholder="Enter a new quote..."></input>
    */

    return (
        <><div class="card p-3 text-left">
            <blockquote class="blockquote mb-0 card-body">
                <h2>"Ein Kind zu haben bedeutet immer, ein Stück seines Herzens außerhalb seines Körpers zu tragen."</h2>
                <footer class="blockquote-footer">
                    <h4 class="text-muted">
                        - Unbekannter Autor <cite title="Source Title"></cite>
                    </h4>
                </footer>
            </blockquote>
            <button className="eButton" id="editButton">Edit</button>
            <button className="sButton" id="saveButton">Save</button>
        </div>
        
        <br></br>
        
            <div>
                <div class="card">
                    <img class="mx-auto" src="./pictures/fra-uas-logo.png" alt="" width="300" length="100" position="text-center"></img>
                    <div class="card-body">
                        <h1 class="card-title">Osterferienbetreuung 2022</h1>
                        <p class="card-text">vom 11.4.-22.4. an der Frankfurt University of Applied Science für Kinder im
                            Alter von 6 bis 12. Unter dem Motto: „Frankfurt durch die Kamera“ werden wir
                            spannende Ausflüge machen, Frankfurt durch die Kamera in den Blick nehmen, einen
                            Animationsfilm drehen und gemeinsam viel Spaß haben. Betreuungs-Zeitraum ist
                            täglich von 08:30 Uhr bis 17:00 Uhr. Anmeldeschluss ist der 18.03.2022! Infos zu
                            Programm und Anmeldung <u>hier</u>.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

                <br></br>

                <div class="card">
                    <img class="mx-auto" src="./pictures/fra-uas-logo.png" alt="" width="300" length="100" position="text-center"></img>
                    <div class="card-body">
                        <h1 class="card-title">Osterferienbetreuung 2022</h1>
                        <p class="card-text">vom 11.4.-22.4. an der Frankfurt University of Applied Science für Kinder im
                            Alter von 6 bis 12. Unter dem Motto: „Frankfurt durch die Kamera“ werden wir
                            spannende Ausflüge machen, Frankfurt durch die Kamera in den Blick nehmen, einen
                            Animationsfilm drehen und gemeinsam viel Spaß haben. Betreuungs-Zeitraum ist
                            täglich von 08:30 Uhr bis 17:00 Uhr. Anmeldeschluss ist der 18.03.2022! Infos zu
                            Programm und Anmeldung <u>hier</u>.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                
                <br></br>

            </div></>
    );
}

export default Home;
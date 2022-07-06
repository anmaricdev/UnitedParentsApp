import React from "react";

function Home() {
   /* function editContentBox(){
        document.getElementById("motivationHeader").contentEditable = true;
    }
    
    function saveContentBox(){
        document.getElementById("motivationHeader").contentEditable = false;
    }
    <button onclick={editContentBox()}>Edit header</button>
    <button onclick={saveContentBox()}>Save changes</button>*/

    return (
        <div>
            <form>
            <div className="motivation">
                <h2 id="motivationHeader">"Ein Kind zu haben bedeutet immer, ein Stück seines Herzens außerhalb seines
                    Körpers zu tragen."</h2>
                    <input type="text" name="motivationHeader" id="motivationHeader" placeholder="Enter a new quote..."></input>
            </div>
            <button className="eButton" id="editButton">Edit</button>
            <button type="submit" className="sButton" id="saveButton">Save</button>
            </form>

            <div className="buttonsHeader" id="buttons">
                
            </div>

            <div className="content-box home">
                <div className="uni-logo">
                    <img src="./pictures/fra-uas-logo.png" alt="" className="logo-img"></img>
                </div>
                <h1>Osterferienbetreuung 2022</h1>
                <p>vom 11.4.-22.4. an der Frankfurt University of Applied Science für Kinder im
                    Alter von 6 bis 12. Unter dem Motto: „Frankfurt durch die Kamera“ werden wir
                    spannende Ausflüge machen, Frankfurt durch die Kamera in den Blick nehmen, einen
                    Animationsfilm drehen und gemeinsam viel Spaß haben. Betreuungs-Zeitraum ist
                    täglich von 08:30 Uhr bis 17:00 Uhr. Anmeldeschluss ist der 18.03.2022! Infos zu
                    Programm und Anmeldung <u>hier</u>.
                </p>
            </div>
            <button className="eButton" id="editButton">Edit</button>
            <button type="submit" className="sButton" id="saveButton">Save</button>

            <div className="content-box home">
            <div className="uni-logo">
                    <img src="./pictures/fra-uas-logo.png" alt="" className="logo-img"></img>
                </div>
                <h1>Content 3</h1>
                <p>Dui id ornare arcu odio. Pulvinar elementum integer enim neque volutpat. Sit
                    amet mattis vulputate enim nulla aliquet porttitor lacus. Dictum fusce ut
                    placerat orci. Quis lectus nulla at volutpat diam ut venenatis. Id faucibus nisl
                    tincidunt eget. Id aliquet risus feugiat in ante. Pellentesque adipiscing
                    commodo elit at imperdiet dui.
                </p>
            </div>
            <button className="eButton" id="editButton">Edit</button>
            <button type="submit" className="sButton" id="saveButton">Save</button>
        </div>
    );
}

export default Home;
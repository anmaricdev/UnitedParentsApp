import React from "react";
import { Card } from "react-bootstrap";

// Author: Ante Maric - 1273904
// Implemented a basic hello world feature that will be displayed on the chat tab
function Chats() {
    return (
        <div className="chatWindow">
            <Card>
                <Card.Header>
                    <h1>Chat</h1>
                </Card.Header>
                <Card.Body>
                    <p>Hello World! The implementation of the chat will be displayed here!</p>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Chats;
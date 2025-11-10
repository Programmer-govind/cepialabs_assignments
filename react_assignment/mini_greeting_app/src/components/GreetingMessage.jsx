import React from 'react';
import './GreetingMessage.css';

function GreetingMessage({ userData, onReset }) {
    return (
        <div className="greeting-message">
            <h2>Form Submitted Successfully!</h2>
            <p>Hello, {userData.name}! Welcome to our app.</p>
            <h3>Your Entered Details:</h3>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <button onClick={onReset} className="reset-btn">Reset Form</button>
        </div>
    );
}

export default GreetingMessage;
import React from 'react';
import './ErrorDisplay.css';

function ErrorDisplay({ errors }) {
    if (!errors || Object.keys(errors).length === 0) return null;

    return (
        <div className="error-display">
            {Object.entries(errors).map(([field, message]) => (
                <p key={field} className="error-message">{message}</p>
            ))}
        </div>
    );
}

export default ErrorDisplay;
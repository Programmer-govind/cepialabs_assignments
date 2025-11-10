import { useState } from "react";
import GreetingMessage from "./GreetingMessage";
import ErrorDisplay from "./ErrorDisplay";
import './GreetingForm.css';

function GreetingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Real-time validation for individual fields
    const validateField = (fieldName, value) => {
        let error = '';
        
        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    error = "Name is required.";
                } else if (value.trim().length < 2) {
                    error = `Name needs ${2 - value.trim().length} more character${2 - value.trim().length > 1 ? 's' : ''}.`;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    error = "Email is required.";
                } else if (!emailRegex.test(value)) {
                    if (!value.includes('@')) {
                        error = "Email must contain '@' symbol.";
                    } else if (!value.includes('.')) {
                        error = "Email must contain a domain (e.g., .com).";
                    } else {
                        error = "Please enter a valid email format.";
                    }
                }
                break;
                
            case 'password':
                if (!value.trim()) {
                    error = "Password is required.";
                } else if (value.length < 8) {
                    error = `Password needs ${8 - value.length} more character${8 - value.length > 1 ? 's' : ''}.`;
                }
                break;
                
            case 'confirmPassword':
                if (!value.trim()) {
                    error = "Please confirm your password.";
                } else if (password !== value) {
                    error = "Passwords do not match.";
                }
                break;
                
            default:
                break;
        }
        
        return error;
    };

    const validateForm = () => {
        const newErrors = {};
        
        newErrors.name = validateField('name', name);
        newErrors.email = validateField('email', email);
        newErrors.password = validateField('password', password);
        newErrors.confirmPassword = validateField('confirmPassword', confirmPassword);
        
        // removes empty errors
        Object.keys(newErrors).forEach(key => {
            if (!newErrors[key]) delete newErrors[key];
        });
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 500);  // 0.5 seconds delay
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAcceptTerms(false);
        setErrors({});
        setIsSubmitted(false);
        setIsLoading(false);
    };

    // Password strength indicator
    const getPasswordStrength = () => {
        if (!password) return '';
        if (password.length < 4) return 'weak';
        if (password.length < 8) return 'medium';
        return 'strong';
    };

    // checks if form is valid for submit button state
    const isFormValid = () => {
        return name.trim().length >= 2 && 
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && 
               password.length >= 8 && 
               password === confirmPassword &&
               acceptTerms;
    };

    return (
        <div className="greeting-form-container">
            {!isSubmitted && (
                <form onSubmit={handleSubmit} className="greeting-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => {
                                const newValue = event.target.value;
                                setName(newValue);
                                const error = validateField('name', newValue);
                                setErrors(prev => ({...prev, name: error}));
                            }}
                            className={errors.name ? 'error' : ''}
                            placeholder="Enter your full name"
                        />
                        <div className="field-hint">Minimum 2 characters required</div>
                        {errors.name && <ErrorDisplay errors={{ name: errors.name }} />}
                        {name && !errors.name && <div className="field-success">✓ Name is valid!</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => {
                                const newValue = event.target.value;
                                setEmail(newValue)
                                const error = validateField('email', newValue);
                                setErrors(prev => ({...prev, email: error}));
                            }}
                            className={errors.email ? 'error' : ''}
                            placeholder="example@email.com"
                        />
                        <div className="field-hint">Enter a valid email address</div>
                        {errors.email && <ErrorDisplay errors={{ email: errors.email }} />}
                        {email && !errors.email && <div className="field-success">✓ Email format is valid!</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => {
                                const newValue = event.target.value;
                                setPassword(newValue);
                                // Real-time validation for password
                                const error = validateField('password', newValue);
                                setErrors(prev => ({...prev, password: error}));
                                // Also revalidate confirm password if it exists
                                if (confirmPassword) {
                                    const confirmError = validateField('confirmPassword', confirmPassword);
                                    setErrors(prev => ({...prev, confirmPassword: confirmError}));
                                }
                            }}
                            className={errors.password ? 'error' : ''}
                            placeholder="Enter secure password"
                        />
                        <div className="field-hint">Must be at least 8 characters long</div>
                        {password && (
                            <div className={`password-strength ${getPasswordStrength()}`}>
                                Password strength: {getPasswordStrength()}
                            </div>
                        )}
                        {errors.password && <ErrorDisplay errors={{ password: errors.password }} />}
                        {password && !errors.password && <div className="field-success">✓ Password meets requirements!</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(event) => {
                                const newValue = event.target.value;
                                setConfirmPassword(newValue);
                                const error = validateField('confirmPassword', newValue);
                                setErrors(prev => ({...prev, confirmPassword: error}));
                            }}
                            className={errors.confirmPassword ? 'error' : ''}
                            placeholder="Re-enter your password"
                        />
                        <div className="field-hint">Must match the password above</div>
                        {errors.confirmPassword && <ErrorDisplay errors={{ confirmPassword: errors.confirmPassword }} />}
                        {confirmPassword && !errors.confirmPassword && <div className="field-success">✓ Passwords match!</div>}
                    </div>
                    <div className="form-group checkbox-group">
                        <label htmlFor="acceptTerms" className="checkbox-label">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                checked={acceptTerms}
                                onChange={(event) => setAcceptTerms(event.target.checked)}
                            />
                            I accept the terms and conditions
                        </label>
                    </div>
                    <button type="submit" disabled={isLoading || !isFormValid()}>
                        {isLoading ? "Submitting..." : "Submit"}
                    </button>
                    <button type="button" onClick={handleReset} className="reset-btn">Reset</button>
                </form>
            )}

            {isSubmitted && <GreetingMessage userData={userData} onReset={handleReset} />}
        </div>
    );
}

export default GreetingForm;
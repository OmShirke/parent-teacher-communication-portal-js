import './style.css'
import { useState } from 'react';

export function SignUpTeacher() {
    return (
        <div className="container" id="container">
            <div className={`form-container sign-in`}>
                <form>
                    <h1>Create Account</h1>
                    <input type="email" placeholder="Email or Enrollment ID" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-right">
                        <h1>Hello Teacher!</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}


export function SignUpParent() {
    return (
        <div className="container" id="container">
            <div className={`form-container sign-in`}>
                <form>
                    <h1>Create Account</h1>
                    <input type="email" placeholder="Email or Enrollment ID" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-right">
                        <h1>Hello Parent!</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

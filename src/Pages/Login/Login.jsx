import './style.css'
import { useState } from 'react';

export function LoginTeacher() {
    return (
        <div className="container" id="container">
            <div className={`form-container sign-in`}>
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Enrollment ID" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
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
export function LoginParent() {
    return (

        <div className="container " id="container">
            <div className={`form-container sign-in`}>
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Enrollment ID" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
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

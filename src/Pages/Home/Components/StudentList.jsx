import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import "../styles.css"

export const StudentList = () => {
    const [message, setmessage] = useState('')
    const sendMessage = () => {

    }
    return (
        <div className="container" style={{ transform: 'translateX(20%) translateY(3%) scaleY(0.9)', backgroundColor: 'lightblue' }}>
            <div className="row justify-content-center mt-4">
                <div className="col-md-4" style={{ marginRight: '10%' }}>
                    <div className="card bg-light shadow rounded">
                        <img src="./profile.jpg" className="card-img-top" alt="Profile" />
                        <div className="card-body" style={{ backgroundColor: '#5D707F' }}>
                            <h5 className="card-title" style={{ color: 'white' }}>Mr. Om Shrike</h5>
                            <p className="card-text" style={{ color: 'white' }}>Year: 3rd</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card bg-light shadow rounded">
                        <img src="./profile.jpg" className="card-img-top" alt="Profile" />
                        <div className="card-body" style={{ backgroundColor: '#5D707F' }}>
                            <h5 className="card-title" style={{ color: 'white' }}>Mr. Om Shrike</h5>
                            <p className="card-text" style={{ color: 'white' }}>Year: 3rd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );




}
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"


export const ChatSection = () => {
    const [message, setm] = useState('')
    const sendMessage = () => {

    }
    const divStyle = {
        height: "calc(100% - 100px)"
    }

    return (
        <div className="row col m-4 p-3 bg-secondary-subtle shadow-lg rounded ">
            <div className="m-0 p-1  w-100 overflow-y-scroll container" style={divStyle}>
                {/* {selectedChatId ? listChats : }*/}
                
            </div>
            <div className="input-group mb-3 p-4">
                <input value={message} 
                    className="form-control rounded-start-5 bg-white bg-gradient border-0"
                    type="text" placeholder="Say hey..." aria-label="Recipient's username" aria-describedby="button-addon2" />

                <button onClick={sendMessage} className="btn btn-outline-secondary rounded-end-5" type="button"
                    id="button-addon2">
                    Button
                </button>
            </div>
        </div>
    )
}
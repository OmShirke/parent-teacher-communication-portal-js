import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { FriendsList } from "./Components/ChatList"

export const ChatPage = (/*{UserId, UserName}*/) => {
    const divstyleCalcHeight = {
        height: "calc(100vh - 50px)"
    }

    return (
            <div>
                <div className="container text-center bg-white bg-gradient min-vw-100 min-vh-100">
                    <div className="row row-col-4  min-vw-100" style={divstyleCalcHeight}>
                        <FriendsList selectChatId={2} UserId={2} /*receivedData={ApiData}*/ />
                        <ChatSection selectedChatId={2} UserId={3} /* receivedData={ApiData} */ />
                    </div>
                </div>

            </div>
    )
}
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { StudentList } from "./Components/StudentList"
import { NotificationList } from "./Components/Notification"

export const Home = () => {
    const divstyleCalcHeight = {
        height: "calc(100vh - 50px)"
    }

    return (
        <div className="row row-col-4  min-vw-100" style={divstyleCalcHeight}>
            <NotificationList selectChatId={2} UserId={2} /*receivedData={ApiData}*/ />
            <StudentList selectedChatId={2} UserId={3} /* receivedData={ApiData} */ />
        </div>

    )
}
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { StudentList } from "./Components/StudentList"

export const Dashboard = () => {
    const divstyleCalcHeight = {
        height: "calc(100vh - 50px)"
    }

    return (
        // <div className="row row-col-4  min-vw-100" style={divstyleCalcHeight}>
        //     <StudentList selectedChatId={2} UserId={3} /* receivedData={ApiData} */ />
        // </div>
        <div>

        <div className="container d-flex" style={{ height: "50vh" }}>
            <div className="w-50 bg-primary h-100"></div>
            <div className="w-50 bg-dark h-100"></div>
        </div>

        <div className="container d-flex" style={{ height: "50vh" }}>
            <div className="w-50 bg-danger h-100"></div>
            <div className="w-50 bg-primary h-100"></div>
        </div>
        </div>

    )
}
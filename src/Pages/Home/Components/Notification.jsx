import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"

export const NotificationList = ({ }) => {

    return (
        <div className="list-group-item col-1 m-4 p-4 bg-secondary-subtle w-25 shadow-lg rounded align-items-center">
            <div key={1} className="m-1 p-3 bg-dark shadow-lg rounded-5 text-white ">
                <div className="row ">
                    <img src="blank_profile_picture.webp" className="img-fluid col-3 rounded-circle" />
                    <div className="col">
                        {"Yash"}
                    </div>
                </div>
            </div>
        </div>
    )
}
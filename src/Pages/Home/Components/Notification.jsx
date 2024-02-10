import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import "../styles.css"

export const NotificationList = ({ }) => {
    const [listOfNotifications, SetlistOfNotifications] = useState([{
        id: 1,
        data: "mesos"
    },
    {
        id: 2,
        data: "eskjf;dla"
    },
    {
        id: 4,
        data: "asjdf;kasdfj"
    }])


    const listOfNotificationsDiv = listOfNotifications.map(notification =>
        <div key={notification.id} className="m-1 p-3 bg-dark shadow-lg rounded-5 text-white ">
            <div className="row ">
                <img src="blank_profile_picture.webp" className="img-fluid col-3 rounded-circle" />
                <div className="col">
                    {notification.data}
                </div>
            </div>
        </div>
    )
    return (
        <div className="list-group-item col-1 m-4 p-4 bg-secondary-subtle w-25 shadow-lg rounded align-items-center">
            <div>
                Notifications
            </div>
            <div className="container">
                {listOfNotificationsDiv}
                {/* <div key={2} className="m-1 p-3 bg-primary shadow-lg rounded-5 text-white ">
                    <div className="row ">
                        <img src="blank_profile_picture.webp" className="img-fluid col-3 rounded-circle" />
                        <div className="col">
                            {"jkbjbhbhn"}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
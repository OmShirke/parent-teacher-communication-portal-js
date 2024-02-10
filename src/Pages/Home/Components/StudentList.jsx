import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import "../styles.css"

export const StudentList = () => {
    const [message, setmessage] = useState('')
    const sendMessage = () => {

    }
    const divStyle = {
        height: "calc(100% - 100px)"
    }
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
        </div>)

    return (
        // <div className="container">
        // <div className="row col m-4 p-3 bg-secondary-subtle shadow-lg rounded ">
        //     <div id={1} >
        //         <div className="media-body">
        //             <h5 class="mt-0">Center-aligned media</h5>
        //             <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        //             <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        //         </div>
        //     </div>

        // </div>
        <div className="container">
            <div className="cards">
                student
            </div>
        </div>

    )
}
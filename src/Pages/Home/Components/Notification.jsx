import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import "../styles.css"

export const NotificationList = ({ listOfNotifications }) => {
    return (
        <div className="fixed-left">
            <div className="card mt-4">
                <div className="card-header bg-secondary text-white">
                    <h4 className="mb-0">Notifications</h4>
                </div>
                <div className="card-body">
                    {listOfNotifications && listOfNotifications.length > 0 ? (
                        listOfNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="notification-item bg-dark text-white mb-3 p-3 rounded"
                            >
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <img
                                            src="blank_profile_picture.webp"
                                            className="profile-image rounded-circle"
                                            alt="Profile"
                                        />
                                    </div>
                                    <div className="col">
                                        <p className="mb-0">{notification.data}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">No notifications</div>
                    )}
                </div>
            </div>
        </div>
    );
};








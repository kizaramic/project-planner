import React from 'react';



const Notifications = (props) => {
    const { notifications } = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications" >
                        {notifications && notifications.map(notification => {
                            return (
                                <li key={notifications.id}>
                                    <span className="red-text">{notification.user}</span>
                                    <span> {notification.content}</span>
                                    <div className="grey-text note-date">
                                        {Date.now()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Notifications
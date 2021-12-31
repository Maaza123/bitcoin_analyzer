import React from 'react'
import {useSelector } from 'react-redux'
import '../stylesheets/notification.css'
const Notification = () => {

    const notification = useSelector(state => state.notification)
    if(notification.content ===''){
        return null
    }
    return(
        <div className={notification.type}>
          {notification.content}
        </div>
      );
}

export default Notification;
import React, { useState, useEffect } from "react";
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  //1、此函数相当于ComponentDidMount/CompomentDidUpdate
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //2、此函数相当于ComponentWillUnmount(useEffect的返回值)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

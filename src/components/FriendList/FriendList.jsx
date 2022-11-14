import React from "react";
import PropTypes from "prop-types";
import FriendListItem from  "../FriendListItem/FriendListItem"
import styles from "../FriendList/FriendList.module.css"

const friendList = [styles.friendList]
const FriendList = ({friends}) => {
   return (
    <ul className = {friendList}>
 {friends.map((friend) => (
 
   <FriendListItem
   key = {friend.id}
avatar = {friend.avatar}
name = {friend.name}
isOnline = {friend.isOnline}
   />
 
      ))}
</ul>
    );
  };

FriendList.propTypes = {
   friends: PropTypes.array.isRequired,
     friends: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.string.isRequired,
           
        })
     ),
    
 };
  
  export default FriendList;

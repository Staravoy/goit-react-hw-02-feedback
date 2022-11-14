import React from 'react';
import PropTypes from 'prop-types';
import styles from "../FriendListItem/FriendListItem.module.css"

const item = [styles.item]
const online = [styles.online]
const offline = [styles.offline]
const avatarStyle = [styles.avatar]
const nameStyle = [styles.name]


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={item}>
      <span className={isOnline ? online : offline}></span>
      <img className={avatarStyle} src={avatar} alt="User avatar" width="48" />
      <p className={nameStyle}>{name}</p>
    </li>
  );
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  }


export default FriendListItem;

// ={isOnline ? style.success : styles.error}

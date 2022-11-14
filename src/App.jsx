import React from "react";
import user from "./Data/user.json"
import Profile from "../src/components/Profile/Profile"
import Statistics from "./components/Statistics/Statistics";
import data from "./Data/data.json"
import friends from "./Data/friends.json"
import FriendList from "./components/FriendList/FriendList"
import FriendListItem from "./components/FriendListItem/FriendListItem"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Transactions from "./Data/Transactions.json"

function App() {
  return (
    <div>
     <Profile 
     username = {user.username}
     tag = {user.tag}
     location = {user.location}
     avatar = {user.avatar}
     stats = {user.stats}
     />

     <Statistics title="Upload stats" stats={data} />;
     <FriendList friends={friends} />
     <TransactionHistory items={Transactions} />


    </div>
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom";

import Profile from "./profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json'; 
import transactions from '../json/transactions.json';

function typeUp(arr) {
  for (let item of arr) {
    let type = item.type;
    let typeUpper = type.charAt(0).toUpperCase() + type.slice(1);
    item.type = typeUpper;
  }
  return arr;
}

typeUp(transactions);

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

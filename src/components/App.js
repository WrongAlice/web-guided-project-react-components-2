// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)

// renaming a named import
import friendsDummyData, { hello as myHello } from '../dummy-data/friends';

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friendsData, setFriendsData] = useState(friendsDummyData) 

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchValue, setSearchValue] = useState('')  

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  // setFriendsData will set the state all at once
  // we must give it a new state
  // new state is the same as the old, except for one person whose civil status has changed

  const changeStatus = (id) => {
    // for each friend
    const newFriends = friendsData.map(friend => {
      // if the friend has the given id
      if (friend.id === id) {
        // return a copy of the friend with all the same data except the civil status
        return {...friend, married: !friend.married}
      } else {
      // otherwise, return friend unchanged
        return friend
        }
      })
    
      setFriendsData(newFriends)
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
        <Search />
        <FriendsList friends={friendsData} />
      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}

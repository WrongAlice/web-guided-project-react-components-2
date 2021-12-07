import React from 'react'
// 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

export default function FriendsList(props) {
  // 2- What data does FriendsList need to do its job? Use destructuring
  const { friends, changeStatusFunc } = props
  return (
    <div className='list-friends container'>
      {/* 3- We need to loop over the data rendering a Friend as we go */}
      {friends.map((friendObj) => {
        return (
          <Friend
            key={friendObj.id}
            friendDetails={friendObj}
            changeCivilStatus={changeStatusFunc}
            // name={friendObj.name}
            // age={friendObj.age}
            // married={friendObj.married}
          />
        )
      })}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
    </div>
  )
}
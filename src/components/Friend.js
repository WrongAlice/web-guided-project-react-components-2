import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need?
  const {
    changeCivilStatus,
     details: { age, hobbies, id, married, name, pets }
    } = props


  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className='friend-info'>
        <div >
          <h3>Name: {name}</h3>
          <p>Age: {age}</p>

          <p>Married: {married ? 'yes' : 'no'} <button onClick={() => changeCivilStatus(id)}>change</button></p>
          <div>Likes:
            <ul>
              {/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
              {hobbies.map(hobby => (<li key={hobby}>{hobby}</li>))}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList pets={pets} />
        </div>
      </div>
    </div>
  )
}

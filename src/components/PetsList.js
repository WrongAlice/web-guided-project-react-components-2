import React from 'react'
import Pet from './Pet'
// 👉 1- We need the Pet component

export default function PetsList(props) {
  const { pets } = props
  const [petList , setPetList] = React.useState([])

  return (
    <div className='list-pets-friends container'>
      <h3>Pets: {pets.map(pet => pet.name).join(', ')}</h3>
      {/* <button onClick={evt => setPetList(pet.id)}>change</button> */}
          
      {/* 2- Loop over the data generating a Pet element as you go */}
      {/* What props does the Pet component expect? */}
    </div>
  )
}

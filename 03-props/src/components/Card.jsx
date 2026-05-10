import React from 'react'

const Card = ({user = 'Anonymous', age = NaN, pfp = 'https://plus.unsplash.com/premium_photo-1739054760977-f9e246e4c1be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGZwfGVufDB8fDB8fHww'}) => {
  return (
    <div>
      <div className='card'>
        <img src={pfp}></img>
        <h1>{user}, {Number.isNaN(age)? "XX":age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card

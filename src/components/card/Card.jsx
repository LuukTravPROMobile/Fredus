import React from 'react';


const Card = ({ bedrijfsnaam, city,state, phone, addr1, web_url, number }) => {
  return (
    <div className="card">
      <p>{bedrijfsnaam}</p>
      <p>{city}</p>
      <p>{state}</p>
      <p>{addr1}</p>
      <button>{web_url}</button>
      <button>{phone}</button>
      <button>{number}</button>
    </div>
  );
};

export default Card;
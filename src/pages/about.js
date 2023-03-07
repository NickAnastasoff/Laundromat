import React from 'react';

function App() {
  const location = {
    name: 'Eco laundry',
    address: '123 cottage road',
    city: 'South Portland',
    state: 'ME',
    zip: '04106'
  };

  const machines = [
    { name: 'Washer', price: '$2.50 per load' },
    { name: 'Dryer', price: '$1.50 per load' },
    { name: 'Soap', price: '$.50 per box'},
    { name: 'vacuum', price: '$.25 per minute'}
  ];

  return (
    <div>
      <h1>Who We Are</h1>
      <p>We are a Laundromat, our goal is to provide a clean, safe, and convenient place for our customers to do their laundry.</p>
      
      <h2>Location</h2>
      <p>{location.name}</p>
      <p>{location.address}</p>
      <p>{location.city}, {location.state} {location.zip}</p>
      
      <h2>Machines</h2>
      <ul>
        {machines.map((machine) => (
          <li key={machine.name}>
            {machine.name}: {machine.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

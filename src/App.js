import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Bulbul', 'Alamgir', 'Salman', 'Shuvo', 'Ananta']
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ];
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {nayoks.map(dushto => <li>{dushto}</li>)}
        </ul>
        <Counter></Counter>
        <Users></Users>
        {
          products.map(product => <Products item = {product}></Products>)
        }
        {/* <Products name = {products[0].name} price = {products[0].price}></Products> */}
        {/* <Products product = {products[0]} ></Products>
        <Products product = {products[1]} ></Products>
        <Products product = {products[2]} ></Products> */}
      </header>
    </div>
  );
}

function Products(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    background: 'lightgray',
    width: '200px',
    height: '200px',
    float : 'left'
  }
  console.log(props);
  return (
    <div style = {productStyle}>
      <h2>{props.item.name}</h2>
      <h1>{props.item.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;

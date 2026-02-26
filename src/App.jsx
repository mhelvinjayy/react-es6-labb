import { useState } from 'react'
import './App.css'
import UserList from './UserList'
import Counter from './Counter'
import UserAPI from './UserAPI'

function App() {
  // ES6+ Example 1: Array methods with arrow functions
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  // ES6+ Example 2: Destructuring
  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // Step 6: Conditional rendering
  const isLoggedIn = true;

  // Step 4: UserList props
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <>
      <div className="app-container">
        <h1>React ES6+ Lab</h1>
        
        <section>
          <h2>Conditional Rendering</h2>
          {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
        </section>

        <section>
          <h2>UserList Component</h2>
          <UserList users={users} />
        </section>

        <section>
          <h2>Counter Component with State</h2>
          <Counter />
        </section>

        <section>
          <h2>API Data Fetching</h2>
          <UserAPI />
        </section>
      </div>
    </>
  )
}

export default App

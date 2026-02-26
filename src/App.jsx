import { useState } from 'react'
import './App.css'
import UserList from './UserList'

function App() {
  // ES6+ Examples
  const names = ['Alice','Bob','Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  // State for counter example
  const [count, setCount] = useState(0);

  // login state for conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // simple user list for component
  const users = ['Alice','Bob','Charlie'];

  return (
    <>
      <div className="app-container">
        <h1>React ES6+ Lab</h1>
        <section>
          <h2>Users</h2>
          <UserList users={users} />
        </section>
        <section>
          <h2>Counter</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <p>Count: {count}</p>
        </section>
        <section>
          <h2>Conditional Rendering</h2>
          {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
          <button onClick={() => setIsLoggedIn(prev => !prev)}>
            {isLoggedIn ? 'Log out' : 'Log in'}
          </button>
        </section>
      </div>
    </>
  )
}

export default App

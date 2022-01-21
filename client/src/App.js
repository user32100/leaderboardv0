import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

// Let's see how to fetch data from the /api endpoint that we made earlier.
// To do so, we can head to the App.js component in our src folder
// and make an HTTP request using useEffect.


// We will make a simple GET request
// using the Fetch API to our backend
// and then have our data returned as JSON.

// Once we have the data returned to us,
// we will get the message property (to grab our greeting that we sent from the server)
// and then put it in a state variable called data

// This will allow us to display that message in our page if we have it.
// We are using a conditional in our JSX
// to say that if our data is not there yet, show the text "Loading...".

// When we deploy, both our Node backend and React frontend are going to be served on the same domain
// (i.e. mycoolapp.herokuapp.com).

function App() {

  const [data, setData] = useState(null);

  React.useEffect( () => {
    fetch('/api')
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? 'Loading...' : data}
        </p>
      </header>
    </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './Assets/styles/root.css';
import Container from './components/Container';

function App() {
  // Use the useEffect hook to set the document title
  useEffect(() => {
    document.title = "tamar-blanks"; // Replace with your desired title
  }, []);

  return (
    <div className="App">
     <Container/> 
    </div>
  );
}

export default App;

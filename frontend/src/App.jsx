import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchSceen from './container/SearchScreen/SearchScreen';
import TreeListScreen from './container/TreeListScreen/TreeListScreen';

function App() {
  const [message, setMessage] = useState("");
    useEffect(() => {
      fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
    setMessage(message);
    });
  },[])
  
  return (
    <TreeListScreen />
  );
}

export default App;

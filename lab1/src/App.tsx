import React from 'react';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from './components/Ad';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header user="Josh"/>
    <Ad flavor="Chocolate"
        fontSize = {24}
        darkTheme = {true}/>
    <Ad flavor="Vanilla"
        fontSize={24}
        darkTheme={false}/>
    <Ad flavor="Strawberry"
        fontSize={24}
        darkTheme={true}/>
    <AdDesigner />
    <Votes />
    </div>
  );
}

export default App;

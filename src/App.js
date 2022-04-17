import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed';

function App() {
    return ( <div className = "app">
        <h1> Ye </h1> 
        {/*Sidebar*/}
        <Sidebar />
        {/* Feed */}
        <Feed />


        </div>
    );
}

export default App;
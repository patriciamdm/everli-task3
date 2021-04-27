import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navigation from './Components/Navigation'
import PostsList from './Components/Posts-list'


function App() {
  return (
    <>
      <Navigation />
      <main>
        <PostsList/>
      </main>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      {/*
      <PostForm />
      <PostList />
      */}
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;

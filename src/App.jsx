import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Project from './components/Project/Project'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import './index.css'

function App() {
  return (
    <>

        <Header />
        <Nav />
        <Intro />
        <div class="scroll1"><About /></div>
        <div class="scroll2"><Experience /></div>
        <div class="scroll3"><Project /></div>
        <div class="scroll4"><Contact /></div>
    
    </>
  )
}

export default App
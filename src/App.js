import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation'
import Main from './components/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { createContext, useState } from 'react';
import "./components/dark.css"
import DetailPage from './components/DetailPage'
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';
import Protected from './components/Protected';
import Login from './components/Login';
export const ThemeContext = createContext(null)
function App() {

  return (
      <BrowserRouter>
        <div className='App'>
        <Navigation/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/news'element={<Blog/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>        
      </Routes>
      <Footer/>
        </div>
      </BrowserRouter>
      


  );
}

export default App;

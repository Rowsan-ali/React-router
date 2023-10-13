import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'react-dom'
import Aboutscreen from './Blog'
import Contactscreen from './Contact'

function Home() {
    return (
        <>
            <BrowserRouter>
                <div className='Header__container'>
                    <ul> <Link to="/">Home</Link></ul>
                    <ul><Link to="/about">About us</Link></ul>
                    <ul><Link to="/contact">Contact us</Link></ul>
                </div>
                <Routes>
                    <Route path='/about' element={<Aboutscreen />}></Route>
                    <Route path='/contact' element={<Contactscreen />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default Home;
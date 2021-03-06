import React from 'react';
import './css/_header.css';
import { Link } from 'react-router-dom';
const Header2 = () => {
    return (
        <header>
            <div className="hero-text-box">
                <h1>Survey the world <br/>for better insights</h1>
                <p className="intro">Measure and improve customer experience with beautiful surveys</p>
                <Link to="/features" className="btn btn-full" >How it works</Link>
                <Link to="/surveys/new" className="btn btn-ghost" >Create a survey</Link>
            </div>
        </header>
    )
};

export default Header2;
import React from 'react';
import nelson from '../images/nelson.jpg';
import juan from '../images/juan.jpg';
import yudhis from '../images/yudhis.jpg';
import yayay from '../images/raihan.jpg';

import '../App.css';
const About = () => {
    return (
    <div class="container">
        <div class="app-about">
            <div class="card">  
                <img src={yudhis} width='100%' height='300px' alt="" />
                <div class="container">
                    <h2>Yudhistira A. Wardhana</h2>
                    <p class="title">Informatika 2019</p>
                    <p>NIM: 00000036572</p>
                </div>
            </div>
            <div class="card">
                <img src={nelson} width='100%' height='300px' alt="" />
                <div class="container">
                    <h2>Nelson</h2>
                    <p class="title">Informatika 2019</p>
                    <p>NIM: 00000033960</p>
                </div>
            </div>
            <div class="card">
                <img src={juan} width='100%' height='300px' alt="" />
                <div class="container">
                    <h2>Juan Tanandi</h2>
                    <p class="title">Informatika 2019</p>
                    <p>NIM: 00000033728</p>
                </div>
            </div>
            <div class="card">
                <img src={yayay} width='100%' height='300px' alt="" />  
                <div class="container">
                    <h2>Raihan Widodo</h2>
                    <p class="title">Informatika 2019</p>
                    <p>NIM:00000036467</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;
import React from 'react'
import './Home.css'
function Home() {
    return (
        <>
        <div class="bg-image">
        <div class="center-text">
            <h1>Prabhusha Restaurant</h1>
            <h2>Dine with best forget the Rest</h2>
        </div>
    </div>
    <div class="speciality text-center">
        <h2>Our Specialities</h2>
        <div class="cards">
            <div class="card-box">
                <div class="img1"></div>
                <p>Indian</p>
            </div>
            <div class="card-box">
                <div class="img2"></div>
                <p>Italian</p>
            </div>
            <div class="card-box">
                <div class="img3"></div>
                <p>Chinese</p>
            </div>
            <div class="card-box">
                <div class="img4"></div>
                <p>Mexican</p>
            </div>
        </div>
    </div>
    <div class="location">
        <h2>Location</h2>
        <div class="map">
            <div class="address">
                <p>New Link Rd, Phase D, Oshiwara, Andheri West, Mumbai, Maharashtra 400053</p>
            </div>
            <div class="google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2343194674972!2d72.82871771437782!3d19.141217754894573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0x324fb542f69a0e2e!2sInfiniti%20Mall!5e0!3m2!1sen!2sin!4v1630418155829!5m2!1sen!2sin"
                    width={"100%"} height={"200"} style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
    </>
    ) 
}

export default Home

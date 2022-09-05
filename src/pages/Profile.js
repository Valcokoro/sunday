import React from 'react';
import '../styles/Profile.css';
import Typewriter from 'typewriter-effect';
import Navbar from '../components/Navbar/Navbar';




const Profile = () => {
    return (
        <section className='profile-page'>
            <Navbar/>
            <h1 className='name'>Sunday Oworah Godwin</h1>
            <h2 className='role'>Data Analyst</h2>
            <p className='data-sense'>
            <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Making Sense of Data.......")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Aiding Right Decision Making!")
                        .start();
                    }}
                />
            </p>
            <div className='skills'>
                <p className='tech-skills'>TECHNICAL SKILLS</p>
                <table className='power-bi'
                data-aos="fade-left"
                data-aos-duration="2500"
                >
                    <tr>
                        <td id='power-bi1'> Microsoft Power BI </td> 
                    </tr>
                </table>
                <table className='r-studio'
                data-aos="fade-right"
                data-aos-duration="2500"
                >
                   <tr>
                      <td id='r-studio1'>R-Studio</td> 
                    </tr>
                </table>
               <table className='python'
               data-aos="fade-left"
               data-aos-duration="2500"
               >
                   <tr>
                      <td id='python1'> Python </td> 
                    </tr>
               </table>
               <table className='tableau'
               data-aos="fade-right"
               data-aos-duration="2500"
               >
                   <tr>
                      <td id='tableau1'> Tableau </td> 
                    </tr>
               </table>
               <table className='sql'
               data-aos="fade-left"
               data-aos-duration="2500"
               >
                   <tr>
                      <td id='sql1'> SQL </td> 
                    </tr>
               </table>
            </div>
            <div className='s-skills'>
                <p className='soft-skills'>SOFT SKILLS</p>
                <table className='team-player'
                    data-aos="fade-right"
                    data-aos-duration="2500"
                >
                    <tr>
                        <td id='team-player1'> Team Player </td> 
                        </tr>
                </table>
                <table className='comm'
                    data-aos="fade-left"
                    data-aos-duration="2500"
                >
                    <tr>
                        <td id='comm1'>Good Communication Skills</td> 
                        </tr>
                </table>
                <table className='lead'
                    data-aos="fade-right"
                    data-aos-duration="2500"
                >
                    <tr>
                        <td id='lead1'> Leadership </td> 
                        </tr>
                </table>
                <table className='manage'
                    data-aos="fade-left"
                    data-aos-duration="2500"
                >
                    <tr>
                        <td id='manage1'> Time Management </td> 
                        </tr>
                </table>
                <table className='details'
                    data-aos="fade-right"
                    data-aos-duration="2500"
                >
                    <tr>
                        <td id='details1'> Attention to Details </td> 
                        </tr>
                </table>
            </div>
        </section>
    )
}


export default Profile;
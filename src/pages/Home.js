import React from 'react';
import "../styles/Home.css";
const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hey, This is Poojitha Pullambhatla</h2>
                <div className='prompt'>
                    <p>
                        A Passionate and Hard-working individual looking for a responsible career opportunity to fully utilize skills, while making a significant contribution to the company.
                    </p>
                </div>
            </div> 
            {/* <h1>home</h1> */}
            <center>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2> Front-End </h2>
                        <span>
                            HTML, CSS, BootStrap, JavaScript, ReactJS
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Back-End </h2>
                        <span>
                            NodeJs
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Database </h2>
                        <span>
                            Oracle
                        </span>
                    </li>
                    <li className='item'>
                        <h2> Languages </h2>
                        <span>
                            C, Java, Python
                        </span>
                    </li>
                </ol>
            </div>
            </center>
        </div>
    );
};

export default Home;
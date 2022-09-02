import { Fragment } from 'react'

import Title from './Components/Title.js'
import AboutMe from './Components/AboutMe.js'
import Skills from './Components/Skills.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'

import photo from './img/foto.png'

function App() {
    const codeAbout = `function about(my, I) {
        I.am = ['creative', 'detailist'];
        I.offer = [
            'creating solutions',
            'teamwork',
            'quality'
        ];
        my.education = ['electronics', 'fullstack'];
        my.extras = {
            hobbies: ['arduino', 'robotics','informatics'],
            likes: ['music','pets','friends']
        };

        print(me, offers, education, extras);
    }`

    function nbsp(amount) {
        let str = ''
        for (let index = 0; index < amount; index++) {
            str += '&nbsp;'
            
        }
    }

    return (
        <Fragment>

            <header>
                <nav className='menu'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Work</a>
                    <a href="">Contact</a>
                    <img src={photo} alt="profile-pic"/>
                </nav>
            </header>

            <div className='page front-page'>
                <nav className='lang-mode'>
                    <a href="">EN</a>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </a>
                </nav>
                <div className='wrapper'>
                    <h1>Hi, I'm Ignacio Rodriguez</h1>
                    <p>Web developer based in Buenos Aires, Argentina.</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className='chevron' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {/* 
            <div className='title-grad'>
                <div className='div-title'>
                    <h2>About Me</h2>
                </div>
                <div className='div-grad'></div>
            </div>
             */}
            <div className='page'>
                <Title title='About Me'/>
                <AboutMe />
            </div>
            <div className='page'>
                <Title title='Skills'/>
                <Skills />
            </div>
            <div className='page'>
                <Title title='Projects'/>
                <Projects />
            </div>
            
            <Contact />
            
        </Fragment>
    );
}

export default App;

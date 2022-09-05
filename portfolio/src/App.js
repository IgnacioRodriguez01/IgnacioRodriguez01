import { Fragment, useRef, useEffect, useState } from 'react'

import Title from './Components/Title.js'
import AboutMeCL from './Components/AboutMeCL.js'
import AboutMe from './Components/AboutMe.js'
import SkillsCL from './Components/SkillsCL.js'
import Skills from './Components/Skills.js'
import ProjectsCL from './Components/ProjectsCL.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'

import photo from './img/foto.png'

function App() {
    const aboutPage = useRef(null);
    const skillsPage = useRef(null);
    const projectsPage = useRef(null);
    const pages = [aboutPage, skillsPage, projectsPage, 'free'];
    const [pageLock, setPageLock] = useState(null);

    useEffect(() => {
        window.scroll(0,0)
        setPageLock(aboutPage)
        /*
        setTimeout(() => {
            const elemRect = projectsPage.current.getBoundingClientRect()
            window.scroll({
                top: elemRect.top + window.scrollY,
                left: 0,
                behavior: 'smooth'
            })
            setTimeout(() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
                setTimeout(() => {
                    setPageLock(aboutPage)
                }, 1000);
            }, 2000);
        }, 2000);
        */
    }, [])

    useEffect(() => {
        if(pageLock){
            window.onscroll = () => scrollLock(pageLock);
            return;
        }
        window.onscroll = undefined;

    }, [pageLock])

    function scrollLock(elemRef) {
        const elemRect = elemRef.current.getBoundingClientRect()

        if(elemRect.top <= 0) {
            window.scrollTo(0, elemRect.top + window.scrollY)
        }
    }

    return (
        <Fragment>
            
            <header>
                <nav className='menu'>
                    <a href="#0">Home</a>
                    <a href="#1">About</a>
                    <a href="#3">Work</a>
                    <a href="#4">Contact</a>
                    <img src={photo} alt="profile-pic"/>
                </nav>
            </header>

            <div className='page front-page' id='0'>
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
            <div className='page' id='1' ref={aboutPage}>
                {pageLock == aboutPage ? //mejorar
                <AboutMeCL setPageLock={setPageLock} next={skillsPage}/> :
                <AboutMe />}
            </div>
            <div className='page' id='2' ref={skillsPage}>
                {pageLock == skillsPage ? //mejorar
                <SkillsCL setPageLock={setPageLock} next={projectsPage}/> :
                <Skills />}
                
            </div>
            <div className='page' id='3' ref={projectsPage}>
                {pageLock == projectsPage ? //mejorar
                <ProjectsCL setPageLock={setPageLock} /> :
                <Projects />}
            </div>
            
            <Contact />
            
        </Fragment>
    );
}

export default App;

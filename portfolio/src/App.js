import { Fragment, useRef, useEffect, useState } from 'react'
import { useSpring, useSpringRef, useChain, animated } from "react-spring";

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

    /* Scroll lock */
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

    /* Dark/Light */
    function toggleDark() {
        const body = document.querySelector('body');
        body.classList.toggle('light');
    }

    /* Springs */
    const titleRef = useSpringRef();
    const titleSpring = useSpring({
        ref: titleRef,
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 500,
        config: {
            friction: 40,
            clamp: true
        },
    });

    const revealRef = useSpringRef();
    const revealSpring = useSpring({ 
        ref: revealRef,
        from: {opacity: 0},
        to: {opacity: 1},
    })

    const revealSlowRef = useSpringRef();
    const revealSlowSpring = useSpring({ 
        ref: revealSlowRef,
        from: {opacity: 0},
        to: {opacity: 1},
        config: {
            friction: 150,
        }
    })

    const arrowRef = useSpringRef();
    const arrowSpring = useSpring({
        ref: arrowRef,
        loop: {
             reverse: true
        },
        from: { transform: "translateY(-20px)"},
        to: { transform: "translateY(0px)"},
        delay: 200,
        config: {
            clamp: true,
            frequency: 0.8,
            damping: 1
        },
    });

    useChain([titleRef, revealRef, revealSlowRef, arrowRef])


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

            <div className='front-page-gradient'></div>
            <div className='front-page-mask-blob'>
                <animated.svg style={revealSlowSpring} id='blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.8,-51.3C56,-42,64.5,-27.4,69.3,-10.7C74,6,75,25,66.8,38C58.6,51.1,41.2,58.3,23.9,63.9C6.5,69.4,-10.8,73.4,-24,67.8C-37.2,62.2,-46.2,47,-57.3,31.3C-68.5,15.7,-81.8,-0.6,-79.3,-13.9C-76.9,-27.3,-58.8,-37.9,-42.9,-46.5C-27.1,-55.1,-13.5,-61.9,1.1,-63.2C15.8,-64.6,31.6,-60.5,43.8,-51.3Z" transform="translate(100 100)" />
                </animated.svg>
            </div>
            <div className='front-page-color'></div>
            
            <div className='page front-page' id='0'>
                <nav className='lang-mode'>
                    <a >EN</a>
                    <a onClick={toggleDark}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </a>
                </nav>
                <div className='wrapper'>
                    <animated.h1 style={titleSpring}>Hi, I'm Ignacio Rodriguez</animated.h1>
                    <animated.p style={revealSpring}>Web developer based in Buenos Aires, Argentina.</animated.p>
                </div>
                <animated.div className="chevron-cont" style={revealSlowSpring}>
                    <animated.svg style={arrowSpring} className='chevron' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </animated.svg>
                </animated.div>
                

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

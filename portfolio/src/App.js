import { Fragment, useRef, useEffect, useState, useReducer } from 'react'
import { useSpring, useSpringRef, useChain, animated } from "react-spring";

import AboutMeCL from './Components/AboutMeCL.js'
import AboutMe from './Components/AboutMe.js'
import SkillsCL from './Components/SkillsCL.js'
import Skills from './Components/Skills.js'
import ProjectsCL from './Components/ProjectsCL.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'

import logo from './img/logo.png'

function App() {
    const aboutPage = useRef(null);
    const skillsPage = useRef(null);
    const projectsPage = useRef(null);

    const initialPages = { 
        pages: [aboutPage, skillsPage, projectsPage] 
    };
    function pagesReducer(state, action) {
        if(action.type === 'next') {
            console.log("call")
            return  { pages: state.pages.slice(1) }
        }
    }
    const [state, dispatch] = useReducer(pagesReducer, initialPages);
    const pages = state.pages

    /* Scroll lock at start*/
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    useEffect(() => {
        const pageLock = pages.length >= 1 ? pages[0] : null;
        
        if(pageLock){
            window.onscroll = () => scrollLock(pageLock);
            return;
        }
        window.onscroll = undefined;
    }, [pages])

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
    const titleSpringRef = useSpringRef();
    const titleSpring = useSpring({
        ref: titleSpringRef,
        from: { transform: "translateY(-80px)", opacity: 0 },
        to: { transform: "translateY(0px)", opacity: 1 },
        delay: 500,
        config: {
            friction: 40,
            clamp: true
        },
    });

    const revealSpringRef = useSpringRef();
    const revealSpring = useSpring({ 
        ref: revealSpringRef,
        from: {opacity: 0},
        to: {opacity: 1},
    })

    const revealSlowSpringRef = useSpringRef();
    const revealSlowSpring = useSpring({ 
        ref: revealSlowSpringRef,
        from: {visibility: 'hidden', opacity: 0},
        to: {visibility: 'visible', opacity: 1},
        config: {
            friction: 150,
        }
    })

    const arrowSpringRef = useSpringRef();
    const arrowSpring = useSpring({
        ref: arrowSpringRef,
        loop: {
             reverse: true
        },
        reset: true,
        from: { transform: "translateY(-20px)"},
        to: { transform: "translateY(0px)"},
        config: {
            clamp: true,
            frequency: 0.8,
            damping: 1
        },
    });
    
    /* Front page chain */
    useChain([titleSpringRef, revealSpringRef, revealSlowSpringRef, arrowSpringRef])

    return (
        <Fragment>
            
            <header>
                <nav className='menu'>
                    <a className="menu-logo" href="#0">
                        <img src={logo} alt="profile-pic"/>
                    </a>
                    <a href="#1">About</a>
                    <a href="#2">Skills</a>
                    <a href="#3">Work</a>
                    <a href="#4">Contact</a>
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
                    <span>EN</span>
                    <span onClick={toggleDark}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </span>
                </nav>
                <div className='wrapper'>
                    <animated.h1 style={titleSpring}>Hi, I'm Ignacio Rodriguez</animated.h1>
                    <animated.p style={revealSpring}>Web developer based in Buenos Aires, Argentina.</animated.p>
                </div>
                <animated.a href='#1' className="chevron-cont" style={revealSlowSpring}>
                    <animated.svg style={arrowSpring} className='chevron' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </animated.svg>
                </animated.a>
                

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
                {pages.some((page) => page === aboutPage) ? //mejorar
                <AboutMeCL pages={pages} dispatch={dispatch}/> :
                <AboutMe />}
            </div>
            <div className='page' id='2' ref={skillsPage}>
                {pages.some((page) => page === skillsPage) ? //mejorar
                <SkillsCL pages={pages} dispatch={dispatch}/> :
                <Skills />}
                
            </div>
            <div className='page' id='3' ref={projectsPage}>
                {pages.some((page) => page === projectsPage) ? //mejorar
                <ProjectsCL pages={pages} dispatch={dispatch}/> :
                <Projects />}
            </div>
            
            <Contact />
            
        </Fragment>
    );
}

export default App;
